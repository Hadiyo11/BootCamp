// let dayOfWeek = prompt("Enter your favourite day of the week!").toLowerCase();
// let theResponse;

// switch (dayOfWeek) {
//   case "monday":
//     theResponse = "Ack!";
//     break;
//   case "tuesday":
//     theResponse = "Taco day!";
//     break;
//   case "wednesday":
//     theResponse = "Halfway there!";
//     break;
//   case "thursday":
//     theResponse = "It's the new Friday";
//     break;
//   case "friday":
//     theResponse = "TGIF!Yeah!";
//     break;
//   case "saturday":
//     theResponse = "What a day!";
//     break;
//   case "sunday":
//     theResponse = "Sunday = Funday!";
//     break;
//   default:
//     theResponse = "I haven't heard of that one!";
//     break;
// }
// alert(theResponse);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// myDate.setDate(15);
// console.log(myDate);

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
let thingToDo = document.getElementById("thingToDo")

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();
d.setDate(15);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
switch(d.getDay()){
    case 1:
        toDo = "eat pasta";
        break;
        case 2: 
        toDo = "eat Burger";
        break;
        case 3:
            toDo = "eat out";
            break;
            case 4:
                toDo = "takeaway";
                break;
                case 5:
                    toDo = "braai";
                    break;
                    case 6:
                        toDo = "fast"
                        break;
                            default:
                                toDo = "pick something else";

}
    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    document.getElementById("thingToDo").innerHTML= toDo;
    // todo: output the value of youShould into the thingToDo div
}