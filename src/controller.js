(function exportController() {
  const Controller = function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();

    document.querySelector('#sailButton').addEventListener('click', () => {
      this.setSail();
    });
  };

  Controller.prototype.initialiseSea = function initialiseSea() {
    const viewport = document.querySelector('#viewport');
    const backgrounds = ['./images/water0.png', './images/water1.png'];
    let backgroundIndex = 0;
    let backgroundPosition = 0;
    setInterval(() => {
      backgroundPosition = backgroundIndex % backgrounds.length;
      viewport.style.backgroundImage = `url(${backgrounds[backgroundPosition]})`;
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
    const viewport = document.querySelector('#viewport');
    const shipSprite = document.createElement('div');
    shipSprite.id = 'ship';
    const portIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    const currentPortElement = document.querySelector(`[data-port-index='${portIndex}']`);
    shipSprite.style.top = `${currentPortElement.offsetTop + 32}px`;
    shipSprite.style.left = `${currentPortElement.offsetLeft - 32}px`;
    viewport.appendChild(shipSprite);
  };

  Controller.prototype.setSail = function setSail() {
    const ship = this.ship;
    console.log(ship);
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
    if (!nextPortElement) {
      return alert('End of the line!');
    }
    const shipElement = document.querySelector('#ship');
    console.log(nextPortElement);
    ship.sail();
    const sailInterval = setInterval(()=>{
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (nextPortElement.offsetLeft - 32)) {
        ship.dock();
        clearInterval(sailInterval);
      } else {
        shipElement.style.left = `${shipLeft + 1}px`;
      }
    }, 20);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
