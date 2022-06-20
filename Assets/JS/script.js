
var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");


var TaskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if(!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the form!");
        return false;
    }

    formEl.reset();
    
   //package up data as an object
   var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
   };

   //send it as an argument to createTaskEl
   createTaskEl(taskDataObj);

}

var createTaskEl = function(taskDataObj) {

    name: "Task's name";
    type: "Task's type"

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTML Content or textContent to div()
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    //add taskInfoEl to listItemEl
    listItemEl.appendChild(taskInfoEl);
    //add listItemEl to tasksToDoEl list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", TaskFormHandler);