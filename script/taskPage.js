function showOrHideDisplay (card) {
    if (card.style.display == "block"){
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}

//settings menu button
const btnSettings = document.getElementById("btn-settings");
const lateralMenuRight = document.getElementById("lateral-menu-right");

btnSettings.addEventListener("click", function () {
    showOrHideDisplay(lateralMenuRight);
})

//ADD new project

//ADD new task
const taskCard = document.querySelectorAll(".task-card");
const newTaskToDo = document.getElementById("new-task-todo");
const newTaskDoing = document.getElementById("new-task-doing"); 
const newTaskDone = document.getElementById("new-task-done");
const newTaskDescription = document.querySelectorAll(".newTaskDescription");
const saveNewTask = document.querySelectorAll(".saveNewTask");
const discardNewTask = document.querySelectorAll(".discardNewTask");

function addTask (taskType, btnflag, textDescription) {
    saveNewTask[taskType].addEventListener("click", () => {
        if(textDescription.value != 0) {
            let flag = document.createElement("button");
            let icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-flag");
            icon.classList.add(btnflag);

            description = document.createElement("span");
            description.innerHTML = textDescription.value;

            let newTask = document.createElement("div");
            newTask.setAttribute("class", "task");
            taskCard[taskType].appendChild(newTask);
            newTask.appendChild(flag);
            flag.appendChild(icon);
            newTask.appendChild(description);

            showOrHideDisplay(newTaskDescription[taskType])
            textDescription.value = "";
        }
    })
    discardNewTask[taskType].addEventListener("click", () => {
        newTaskDescription[taskType].style.display = "none";
    });
}

newTaskToDo.addEventListener("click", () => {
    const toDoDescription = document.getElementById("todo-description");
    showOrHideDisplay(newTaskDescription[0]);
    addTask(0, "todo-flag", toDoDescription);
    btnDiscard(0);
});

newTaskDoing.addEventListener("click", () => {
    const doingDescription = document.getElementById("doing-description");
    showOrHideDisplay(newTaskDescription[1]);
    addTask(1, "doing-flag", doingDescription);
    btnDiscard(1);
});

newTaskDone.addEventListener("click", () => {
    let doneDescription = document.getElementById("done-description");
    showOrHideDisplay(newTaskDescription[2]);
    addTask(2, "done-flag", doneDescription);
    btnDiscard(2);
});

