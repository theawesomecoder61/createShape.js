/*

this is readable, isn't?

*/

function createShape(options) {
  // creates a new canvas if it doesn't exist
  if(!document.querySelector(options.canvasQuery)) {

    var newCanvas = document.createElement("canvas");

    if(options.canvasQuery.indexOf(".") > -1) {
      newCanvas.setAttribute("class", options.canvasQuery.replace(".", ""));
    }
    if(options.canvasQuery.indexOf("#") > -1) {
      newCanvas.id = options.canvasQuery.replace("#", "");
    }

    newCanvas.setAttribute("width", options.canvasWidth);
    newCanvas.setAttribute("height", options.canvasHeight);

    document.querySelector(options.appendTo).appendChild(newCanvas);
  }

  // variables
  var canvas = document.querySelector(options.canvasQuery);
  var context = canvas.getContext("2d");

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

  // oval
  if(options.shape == "oval") {
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
    context.textAlign = options.textAlign;
  }

  // image
  if(options.shape == "image") {
    var newImg = new Image();
    newImg.onload = function() {
      context.drawImage(newImg, options.x, options.y, options.width, options.height);
    };
    newImg.src = options.src;
  }

  // alpha
  if(options.canvasOpacity !== "" || options.canvasOpacity !== null) {
    context.globalAlpha = options.canvasOpacity;
  }

  // translate
  if(options.translate !== "" || options.translate !== null) {
    if(options.shape == "oval" || options.shape == "circle") {
      context.translate(options.translate);
    }
  }

  // scale
  if(options.scale !== "" || options.scale !== null) {
    if(options.shape == "oval" || options.shape == "circle") {
      context.scale(2, 1);
    }
  }

  // flip
  if(options.flip == "h" || options.flip == "horizontal" || options.flip == "horizontally") {
    context.scale(-1, 1);
  }
  if(options.flip == "v" || options.flip == "vertical" || options.flip == "vertically") {
    context.scale(1, -1);
  }

  // fill
  context.fillStyle = options.fillColor;
  context.fill();

  // stroke
  context.lineWidth = options.strokeWidth;
  context.strokeStyle = options.strokeColor;
  context.stroke();
}
