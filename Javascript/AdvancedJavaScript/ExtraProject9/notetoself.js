window.onload = init;
function init() {
  let button = document.getElementById("add_button");
  button.onclick = createSticky;
  let stickiesArray = localStorage["stickiesArray"]; //grab stickies array frol LC

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); //for each item in the LC, key method gives us the key
    let value = JSON.parse(localStorage[key]); //retrieve its value from LC
   
    addStickyToDOM(key,value);
  }
}

//addStickyToDOM function, which is going to insert
//the notes into the <ul> element
function addStickyToDOM(key, stickyObj) {
  let stickies = document.getElementById("stickies");
  let sticky = document.createElement("li");

  sticky.setAttribute("id", key);
  sticky.style.backgroundColor = stickyObj.color;
  let span = document.createElement("span");
  span.setAttribute("class", "sticky"); //create list ele and give it class of sticky
  span.innerHTML = stickyObj.value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
  sticky.onclick = deleteSticky;
}

function createSticky() {
  let stickiesArray = getStickiesArray(); //grab stickies array
  let currentDate = new Date();
  var colorSelectObj = document.getElementById("note_color");
  let index = colorSelectObj.selectedIndex;
  let color = colorSelectObj[index].value;

  var key = "sticky_" + currentDate.getTime();
  let value = document.getElementById("note_text").value; //retrives the text in the form text box
  var stickyObj = {
    "value": value,
    "color": color
    };
    localStorage.setItem(key, JSON.stringify(stickyObj));
  localStorage.setItem(key, value); //add a new sticky to LC using our key
  stickiesArray.push(key); //add a new key to the stickies array
  localStorage.setItem("stickiesArray", JSON.stringify("stickiesArray")); //stringyfy the array

  addStickyToDOM(key, stickyObj); //add new text to DOM
}

function getStickiesArray() {
  let stickiesArray = localStorage.getItem("stickiesArray");
  if (!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
  } else {
    stickiesArray = JSON.parse(stickiesArray);
    //if found it, parse it to convert it to a JS array
  }
  return stickiesArray;
}

function deleteSticky(e) {
  let key = e.target.id;
  if (e.target.tagName.toLowerCase() == "span") {
    key = e.target.parentNode.id;
  }
  localStorage.removeItem(key);
  let stickiesArray = getStickiesArray();
  if (stickiesArray) {
    for (let i = 0; i < stickiesArray.length; i++) {
      if (key == stickiesArray[i]) {
        stickiesArray.splice(i, 1);
      }
    }
    localStorage.setItem("stickiesArray", JSON.stringify("stickiesArray"));
    removeStickyFromDOM(key);
  }
}

function removeStickyFromDOM(key) {
	var sticky = document.getElementById(key);
	sticky.parentNode.removeChild(sticky);
}
