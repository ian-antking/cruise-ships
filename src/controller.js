(function exportController() {
  const Controller = function Controller(ship) {
    this.ship = ship;
    this.viewport = document.querySelector('#viewport');
    this.initialiseSea();

    document.querySelector('#sailButton').addEventListener('click', () => {
      this.setSail();
    });
  };

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ['./images/water0.png', './images/water1.png'];
    let backgroundIndex = 0;
    let backgroundPosition = 0;
    setInterval(() => {
      backgroundPosition = backgroundIndex % backgrounds.length;
      this.viewport.style.backgroundImage = `url(${backgrounds[backgroundPosition]})`;
      backgroundIndex += 1;
    }, 1000);
  };

  Controller.prototype.renderPorts = function renderPorts(ports) {
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
    ports.forEach((port, index) => {
      const newPort = document.createElement('div');
      newPort.classList.add('port');
      newPort.dataset.name = port.name;
      newPort.dataset.portIndex = index;
      let portsWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsWidth += 256}px`;
      portsElement.appendChild(newPort);
    });
  };

  Controller.prototype.renderShip = function renderShip() {
    const shipSprite = document.createElement('div');
    shipSprite.id = 'ship';
    const portIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    const currentPortElement = document.querySelector(`[data-port-index='${portIndex}']`);
    shipSprite.style.top = `${currentPortElement.offsetTop + 32}px`;
    shipSprite.style.left = `${currentPortElement.offsetLeft - 32}px`;
    this.viewport.appendChild(shipSprite);
  };

  Controller.prototype.setSail = function setSail() {
    const ship = this.ship;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
    if (!nextPortElement) {
      return this.renderMessage('End of the line!');
    }
    const shipElement = document.querySelector('#ship');
    ship.sail();
    this.renderMessage(`Now leaving ${ship.itinerary.ports[currentPortIndex].name}.`);
    const sailInterval = setInterval(()=>{
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (nextPortElement.offsetLeft - 32)) {
        this.renderMessage(`Now arriving at ${ship.itinerary.ports[nextPortIndex].name}.`)
        ship.dock();
        clearInterval(sailInterval);
      } else {
        shipElement.style.left = `${shipLeft + 1}px`;
      }
    }, 20);
  };

  Controller.prototype.renderMessage = function renderMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.id = 'message';
    messageBox.innerHTML += message;
    this.viewport.appendChild(messageBox);

    setTimeout(() => {
      this.viewport.removeChild(messageBox);
    }, 2000);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
