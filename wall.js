function Wall(canvas) {
  // Base
  var wall = this;

  // Global Attributes
  wall.canvas = canvas;
  wall.context = wall.canvas.getContext('2d');

  // Specifications
  wall.x = canvas.width;
  wall.y = 0;
  wall.w = 100;
  wall.h = 0;
  wall.gap = 0;
  wall.color = getRandomColor();
}

