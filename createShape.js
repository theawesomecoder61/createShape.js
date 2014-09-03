/*

this is readable, isn't?

THIS IS STILL BEING WORKED ON AND ALL FEATURES HAVEN'T BEEN ADDED!

*/

function createShape(options) {
    // creates a new canvas if it doesn't exist
    if(!document.querySelector(options.canvasQuery)) {
      
      var newCanvas = document.createElement("canvas");
      
      if(options.canvasQuery.indexOf(".") !== -1) {
        newCanvas.setAttribute("class", options.canvasQuery);
      }
      
      if(options.canvasQuery.indexOf("#") !== -1) {
        newCanvas.id = options.canvasQuery;
      }
      
      newCanvas.setAttribute("width", options.canvasWidth);
      newCanvas.setAttribute("height", options.canvasHeight);
      
      document.querySelector(options.appendTo).appendChild(newCanvas);
    }
    
    // variables
    var canvas = document.querySelector(options.canvasQuery);
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
    
    // image
    if(options.shape == "image") {
      var newImg = new Image();
      newImg.onload = function() {
        context.drawImage(newImg, options.x, options.y, options.width, options.height);
      };
      newImg.src = options.src;
    }
    
    // fill
    context.fillStyle = options.fillColor;
    context.fill();
    
    // stroke
    context.lineWidth = options.strokeWidth;
    context.strokeStyle = options.strokeColor;
    context.stroke();
  }
