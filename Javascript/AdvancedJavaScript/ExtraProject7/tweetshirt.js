window.onload = function () {
  let button = document.getElementById("previewButton");
  button.onclick = previewHandler; //add click handler to this button so that when it is clicked, the function previewHandler is called
};

function previewHandler() {
  let canvas = document.getElementById("tshirtCanvas");
  let context = canvas.getContext("2d");
  //   fillBackgroundColor(canvas, context);//add this to cover the previous drawing and gives us a clean background for drawing
  //   fillBackgroundColor(canvas, context);getting an error

  let selectObj = document.getElementById("shape");
  let index = selectObj.selectedIndex; //want to check which item is slected by getting the index
  let shape = selectObj[index].value; //and assigning its value to the variable shape
  if (shape == "squares") {
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circles") {
    for (let circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context); //pass drawCircle function canvas and context
    }
  }
}

function drawSquare(canvas, context) {
  let w = Math.floor(Math.random() * 40); //create randomNum for width, x, y and we choose 40 as the largest square size
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
  let radius = Math.floor(Math.random() * 40);
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);
  context.beginPath();
  context.arc(x, y, radius, 0, degreesToRadians(360), true);
  context.fillStyle = "lightblue";
  context.fill();
}
