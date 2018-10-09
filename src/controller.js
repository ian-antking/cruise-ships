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
