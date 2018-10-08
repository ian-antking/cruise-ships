const Controller = function Controller() {
  this.initialiseSea();
};

Controller.prototype.initialiseSea = function initialiseSea() {
  const viewport = document.querySelector('#viewport');
  const backgrounds = ["url('./images/water0.png')", "url('./images/water1.png')"];
  let backgroundIndex = 0;
  setInterval(() => {
    viewport.style.backgroundImage = backgrounds[backgroundIndex % backgrounds.length];
    backgroundIndex += 1;
  }, 1000);
};
