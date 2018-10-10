(function exportController() {
  const Controller = function Controller() {
    this.initialiseSea();
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

  Controller.prototype.renderShip = function renderShip(ship) {
    const viewport = document.querySelector('#viewport');
    const shipSprite = document.createElement('div');
    shipSprite.id = 'ship';
    const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const currentPortElement = document.querySelector(`[data-port-index='${portIndex}']`);
    shipSprite.style.top = `${currentPortElement.offsetTop + 32}px`;
    shipSprite.style.left = `${currentPortElement.offsetLeft - 32}px`;
    viewport.appendChild(shipSprite);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
