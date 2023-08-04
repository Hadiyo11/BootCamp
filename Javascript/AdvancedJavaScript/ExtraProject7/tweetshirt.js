/* tweetshirt.js */

window.onload = function() {
	let button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	// Easter Egg
	makeImage();
}

function previewHandler() {
	let canvas = document.getElementById("tshirtCanvas");
	let context = canvas.getContext("2d");

	fillBackgroundColor(canvas, context);//to get a clean background each time

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 40);    
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	context.fillStyle = "lightblue";
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	selectObj = document.getElementById("tweets");
	index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic 1.2em serif";
	context.fillText(tweet, 30, 100);

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
/*
	if (tweet.length > 60) {
		var tweetLines = splitIntoLines(tweet);
		for (var i = 0; i < tweetLines.length; i++) {
			context.fillText(tweetLines[i], 30, 70+(i*25));
		}
	}
	else {
		context.fillText(tweet, 30, 100);
	}
*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space+1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[2] = strs[1].substring(space+1);
		strs[1] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.location = canvas.toDataURL('image/png');
	};
}



// window.onload = function () {
//   let button = document.getElementById("previewButton");
//   button.onclick = previewHandler;
//   makeImage() ;//add click handler to this button so that when it is clicked, the function previewHandler is called
// };

// function previewHandler() {
//   let canvas = document.getElementById("tshirtCanvas");
//   let context = canvas.getContext("2d");
//   //   fillBackgroundColor(canvas, context);//add this to cover the previous drawing and gives us a clean background for drawing
//   //   fillBackgroundColor(canvas, context);getting an error

//   let selectObj = document.getElementById("shape");
//   let index = selectObj.selectedIndex; //want to check which item is slected by getting the index
//   let shape = selectObj[index].value; //and assigning its value to the variable shape
//   if (shape == "squares") {
//     for (let squares = 0; squares < 20; squares++) {
//       drawSquare(canvas, context);
//     }
//   } else if (shape == "circles") {
//     for (let circles = 0; circles < 20; circles++) {
//       drawCircle(canvas, context); //pass drawCircle function canvas and context
//     }
//   }
// }

// function drawSquare(canvas, context) {
//   let w = Math.floor(Math.random() * 40); //create randomNum for width, x, y and we choose 40 as the largest square size
//   let x = Math.floor(Math.random() * canvas.width);
//   let y = Math.floor(Math.random() * canvas.height);

//   context.fillStyle = "lightblue";
//   context.fillRect(x, y, w, w);
// }

// // Draws a circle at a random location
// function drawCircle(canvas, context) {
//   let radius = Math.floor(Math.random() * 40);
//   let x = Math.floor(Math.random() * canvas.width);
//   let y = Math.floor(Math.random() * canvas.height);
//   context.beginPath();
//   context.arc(x, y, radius, 0, degreesToRadians(360), true);
//   context.fillStyle = "lightblue";
//   context.fill();
// }

// function updateTweets(tweets) {
//   let tweetsSelection = document.getElementById("tweets");
//   for (let i = 0; i < tweets.length; i++) {
//     //for each tweet in the array of tweets
//     tweet = tweets[i]; //we get a tweet from the array
//     let option = document.createElement("option"); //create option element
//     option.text = tweets.text; //set its text to the tweet
//     option.value = tweets.text.replace('"', "'"); //set its value to the same text and replace double quotes with single
//     tweetsSelection.options.add(option); //take new option and add it to the tweet selection in the form
//   }
//   tweetsSelection.selectedIndex = 0; //make sure top tweet is selected
// }

// function drawText(canvas, context) {
//   let selectObj = document.getElementById("foregroundColor");
//   let index = selectObj.selectedIndex;
//   let fgColor = selectObj[index].value;

//   context.fillStyle = fgColor;
//   context.font = "bold 1em sans-serif";
//   context.textalign = "left";
//   context.fillText("I saw this tweet", 20, 40);

//   selectObj = document.getElementById("tweets"); //grab the seleected option from the tweet menu
//   index = selectObj.selectedIndex;
//   let tweet = selectObj[index].value;
//   context.font = "italic 1.23m serief";
//   context.fillText(tweet, 30, 100);

//   context.font = "bold 1em sans-serif";
//   context.textalign = "right";
//   context.fillText("and all I got was this lousy t-shirt!",
//     canvas.width - 20,canvas.height - 40 );
//   }

//   // draws the twitter bird image
// function drawBird(canvas, context) {
// 	let twitterBird = new Image();
// 	twitterBird.src = "twitterBird.png";
// 	twitterBird.onload = function() {
// 		context.drawImage(twitterBird, 20, 120, 70, 70);
// 	};

// }
// function makeImage() {
// 	var canvas = document.getElementById("tshirtCanvas");
// 	canvas.onclick = function () {
// 		window.location = canvas.toDataURL('image/png');
// 	};
// }
