// DISPLAY TODAY'S DATE AND CURRENT TIME IN THE HEADER:
const m = moment();
var date = m.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(date);

// CREATE ALL VARIABLES THAT WILL BE NEEDED:
var container = document.querySelectorAll(".container");
var row = document.querySelectorAll(".row");
var time = document.querySelectorAll(".time");
var eventText = document.querySelectorAll(".description");
var saveBtn = document.querySelectorAll(".saveBtn");


// CREATE ALL ROWS FOR EACH HOUR OF THE WORK DAY:
var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
// if data exists in localStorage fill into input box as rendering


console.log('im doin tha thing')
// LOOP TO CREATE ALL THE HOURS OF EVENTS
saveBtn = document.querySelectorAll(".saveBtn");
for (let i = 0; i < 9; i++) {
    console.log("dope loop")
    var newContainer = document.querySelector(".container");
    var newRow = document.createElement("div");
    newRow.className = "row align-items-top";
    newContainer.appendChild(newRow);
    
    var newTime = document.createElement("h2");
    newTime.className = "col-3 time";
    newTime.innerHTML = time[i];
    newRow.appendChild(newTime);

    var newInput = document.createElement("Input");
    newInput.className = "col-7 description";
    newInput.type = "text";
    newInput.dataset.inputTime = time[i];
    newInput.id = "input-" + i;
    newRow.appendChild(newInput);

    var newBtn = document.createElement("Button");
    var node = document.createTextNode("Save");
    newBtn.dataset.eventTime = time[i];
    newBtn.className = "col-2 saveBtn";
    newBtn.id = "btn-" + i;
    newBtn.innerHTML = document.querySelector(".saveBtn").innerText;
    newRow.appendChild(newBtn);
    }

// SAVE BUTTON ACTIONS/REACTIONS:
saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach(element => {
    element.addEventListener("click", function(e) {
        // return id of button by splitting id on the dash
        console.log(e.target.id.split("-")[1]);
        var inputNbr = e.target.id.split("-")[1];
        console.log(document.querySelector(`#input-${inputNbr}`).value);
        var val = document.querySelector(`#input-${inputNbr}`).value;
        localStorage.setItem(e.target.dataset.eventTime, val);
    });
});

// NEED TO RETREIVE LOCAL STORAGE AND APPEND TO THE NEWINPUT ELEMENT FOR CORRESPONDING ITERATION
// var lastName = localStorage.getItem("key");
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");
newInput.id.innerText = localStorage.getItem("9:00 AM");

newInput.id.innerText = localStorage.getItem("10:00 AM");

newInput.innerText = localStorage.getItem("11:00 AM");

newInput.id.innerText = localStorage.getItem("12:00 PM");

newInput.id.innerText = localStorage.getItem("1:00 PM");

newInput.id.innerText = localStorage.getItem("2:00 PM");

newInput.id.innerText = localStorage.getItem("3:00 PM");

newInput.id.innerText = localStorage.getItem("4:00 PM");

newInput.id.innerText = localStorage.getItem("5:00 PM");
// MANIPULATE DESCRIPTION COLOR BY PAST, PRSENT, OR FUTURE:
// If time is past--> set background color of description as grey
// If time is present-->set description background color as Red
// If time is future-->set description background color as green
if (m == 9 ) {
    $('.description-${time[0]}').css('background-color', 'red')
    for (i = 1; i<time.length; i++) {
        $('.description-${time[i]"}').css('background-color', 'green')
    };
}