// https://stackoverflow.com/questions/19995927/adding-html-input-to-table 

/* using this lovely stack overflow
   discussion to create a function
   that creates rows.
   
   i will then call this function onclick
   of the "Add Item" button
*/

/*
function makeButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.setAttribute("id","action-button");
    button.innerHTML = "Hiya!";
    console.log("hi");
}
*/


// i feel literally so big brained
// i made a button by clicking a button
// i am god
// prof wergeles, this is MY class now!!!!!!!!!!!!

//creates a row, one td at a time, attached to onclick= in HTML
function addRow() {
    
    if(errorCheck() == false)
        return 0;
    else {
        //var li = document.createElement("li");
        var i;
        var tableBody = document.getElementById("todo-table-body");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("button");
        var row = document.createElement("tr");

        td1.innerHTML = document.getElementById("todo-title").value;
        td2.innerHTML = document.getElementById("todo-type").value;
        //td3.innerHTML = document.getElementById("todo-priority").value;
        td3.appendChild(prioritySet());
        td4.innerHTML = document.getElementById("todo-date").value;
        td5.setAttribute("class","action");
        td5.innerHTML = "Check off!";


        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.setAttribute("class","added-row")
        console.dir(row);

        tableBody.appendChild(row);
        
        document.getElementById("todo-list").style.display = "block";

    
    
    }
    
    if(document.getElementsByClassName("added-row").count == 0){
        document.getElementById("todo-list").style.display = "none";
    }
            
}


// BIG HELP
// https://stackoverflow.com/questions/40014670/deleting-a-table-row-from-button-click?rq=1
// i cried--i mean tried for hours
// i really want to know HOW this works though. i only have a basic understanding
// but im scared the TAs think im dumb luv u guys but </3

//removes an item as if checking it off
$(document).ready(function(){
    $('body').on('click', '.action', function(){
        if($('.action').length > 0){
            $(this).parents('tr').remove();
        }
    });
});


// frick the ternary operator
// all my homies hate the ternary operator

function prioritySet() {
    var priority = document.getElementById("todo-priority").value;
    var image;
    
    if(priority == 0) {
        window.alert("Please give at least priority level 1!");
    }
    
    if(priority == 1) {
        image = document.createElement("img");
        image.src = "priority1-01.png";
        return image;
    };
    
    if(priority == 2) {
        image = document.createElement("img");
        image.src = "priority2-01.png";
        return image;
    };
    
    if(priority == 3) {
        image = document.createElement("img");
        image.src = "priority3-01.png";
        return image;
    };
    
    if(priority == 4) {
        image = document.createElement("img");
        image.src = "priority4-01.png";
        return image;
    };
    
    if(priority == 5) {
        image = document.createElement("img");
        image.src = "priority5-01.png";
        return image;
    };
   
}

function errorCheck() {
    if(document.getElementById("todo-type").value == "first-choice") {
        window.alert("Please select a type!");
        return false;
    };
    
    if(document.getElementById("todo-title").value == "") {
        window.alert("Please give your item a title!");
        return false;
    };
    
    if(document.getElementById("todo-date").value == "") {
        window.alert("Please give your item a due date!");
        return false;
    };
}


// figured out how to restrict past dates here:
// https://stackoverflow.com/questions/43274559/how-do-i-restrict-past-dates-in-html5-input-type-date
// THIS SAVED MY LIFE

/*
    my understanding: 
    this function grabs what the date currently is
    and stores it in in a Date object
    then pieces it apart into var's
    then sets parameters for what day something
    cant be due (ie the past)
    
*/
$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;
    $('#todo-date').attr('min', maxDate);
});

function clearFields() {
    document.getElementById("todo-title").value = null;
    document.getElementById("todo-type").value = "first-choice";
    document.getElementById("todo-priority").value = null;
    document.getElementById("todo-date").value = null;
    document.getElementById("num").value = "0";
    
}

function toggleTheme() {
    var body = document.getElementById("todo-body");
    var form = document.getElementById("todo-form");
    var heading = document.getElementById("heading");
    var button = document.querySelectorAll("input[type=button]");
    
    body.classList.toggle("light-mode-body");
    body.classList.toggle("light-mode-element");
    form.classList.toggle("dark-mode-element");
    heading.classList.toggle("dark-mode-element");
    
    for(var i = 0, length = button.length; i < length; i++) {
        button[i].classList.toggle("dark-mode-button");
    }
}


function changeHeader() {
   window.alert("I tried so hard but i started crying sooo");
    
    
}

/*
var oriVal;
$("#todo-header").on('dblclick', function () {
    oriVal = $(this).innerHTML();
    $(this).innerHTML("");
    $("<input type='text'>").appendTo(this).focus();
});
$("#todo-header").on('focusout', 'h2 > input', function () {
    var $this = $(this);
    $this.parent().innerHTML($this.val() || oriVal); // Use current or original val.
    $this.remove();                      // Don't just hide, remove the element.
});
*/






