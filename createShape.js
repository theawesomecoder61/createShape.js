// this is readable, isn't?

function createShape(options) {
  // creates a new canvas and applies attributes to it
  var newCanvas = document.createElement("canvas");
  newCanvas.id = options.canvasID;
  newCanvas.setAttribute("width", options.canvasWidth);
  newCanvas.setAttribute("height", options.canvasHeight);
  document.querySelector(options.appendTo).appendChild(newCanvas);
    
  
  // variables
  var canvas = document.getElementById(options.canvasID);
  var context = canvas.getContext('2d');

  // begins path
  context.beginPath();
  
  // rectangle
  if(options.shape == "rectangle" || options.shape == "rect") {
  	context.rect(options.x, options.y, options.width, options.height);
  }
  
  // circle
  if(options.shape == "circle") {
  	context.arc(options.x, options.y, options.radius, 0, 2 * Math.PI, false);
  }
  
  // semicircle
  if(options.shape == "semicircle") {
  	context.arc(options.x, options.y, options.radius, 0, 1 * Math.PI, false);
  }
  
  // text
  if(options.shape == "text") {
    context.font = options.font;
    context.fillText(options.text, options.x, options.y);
  }
  
  // fill
  context.fillStyle = options.fillColor;
  context.fill();
  
  // stroke
  context.lineWidth = options.strokeWidth;
  context.strokeStyle = options.strokeColor;
  context.stroke();
}
