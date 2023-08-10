window.onload = init;
function init() {
  let button = document.getElementById("add_button");
  button.onclick = createSticky;
  let stickiesArray = localStorage["stickiesArray"]; //grab stickies array frol LC
  if (!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem("stickiesArray", stickiesArray);
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); //for each item in the LC, key method gives us the key
    let value = localStorage.getItem(key); //retrieve value
    addStickyToDOM(value);
  }
}

//addStickyToDOM function, which is going to insert
//the notes into the <ul> element
function addStickyToDOM(value) {
  let stickies = document.getElementById("stickies");
  let sticky = document.createElement("li");
  let span = document.createElement("span");
  span.setAttribute("class", "sticky"); //create list ele and give it class of sticky
  span.innerHTML = value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
}

function createSticky() {
  let value = document.getElementById("note_text").value; //retrives the text in the form text box
  let key = "sticky_" + localStorage.length; //create a unique key for the sticky
  localStorage.setItem(key, value); //add a new sticky to LC using our key
  addStickyToDOM(value); //add new text to DOM
}
