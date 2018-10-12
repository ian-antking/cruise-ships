(function exportController() {
  const Controller = function Controller(ship) {
    this.ship = ship;
    this.viewport = document.querySelector('#viewport');
    this.sea = document.querySelector('#sea');
    this.initialiseSea();

    document.querySelector('#sailButton').addEventListener('click', () => {
      this.setSail();
    });
  };

  Controller.prototype = {
    get currentPortIndex() {
      return this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    }
  };

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ['./images/water0.png', './images/water1.png'];
    let backgroundIndex = 0;
    let backgroundPosition = 0;
    setInterval(() => {
      backgroundPosition = backgroundIndex % backgrounds.length;
      this.sea.style.backgroundImage = `url(${backgrounds[backgroundPosition]})`;
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
    this.sea.appendChild(shipSprite);
    this.renderHud(this.ship.itinerary.ports[this.currentPortIndex].name, this.ship.itinerary.ports[this.currentPortIndex + 1].name);
  };

  Controller.prototype.setSail = function setSail() {
    const ship = this.ship;
    let nextPortIndex = this.currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
    if (!nextPortElement) {
      return this.renderMessage('End of the line!');
    }
    let currentPortName = ship.itinerary.ports[this.currentPortIndex].name;
    let nextPortName = ship.itinerary.ports[nextPortIndex].name;
    const shipElement = document.querySelector('#ship');
    this.renderMessage(`Now leaving ${currentPortName}.`);
    ship.sail();
    this.renderHud('', nextPortName);
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (nextPortElement.offsetLeft - 32)) {
        this.renderMessage(`Now arriving at ${nextPortName}.`);
        ship.dock();
        currentPortName = ship.itinerary.ports[this.currentPortIndex].name;
        nextPortIndex += 1;
        if (nextPortIndex >= ship.itinerary.ports.length) {
          nextPortName = 'End of service';
        } else {
          nextPortName = ship.itinerary.ports[nextPortIndex].name;
        };
        this.renderHud(currentPortName, nextPortName);
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

  Controller.prototype.renderHud = function renderHud(currentPortName, nextPortName) {
    const currentPortHud = document.getElementById('current-port');
    const nextPortHud = document.getElementById('next-port');

    currentPortHud.innerHTML = `Current Port: ${currentPortName}`;
    nextPortHud.innerHTML = `Next Port: ${nextPortName}`;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
