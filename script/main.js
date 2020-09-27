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

//Random class
let randomClassList = []; //definitive list of classes (delete project/task: delete in array)
let charactersList = "abcdefghijklmnopqrstuvwxyz0123456789"; 
charactersList = charactersList.split('');
function randomClass () {
    let uniqueClass = "";
    let arrayOfCharacters = [];
    for (let i = 0; i < 10; i++){ //Gerenate class with 10 characters
        let randomIndex = Math.floor(Math.random() * 35);
        arrayOfCharacters.push(charactersList[randomIndex]);
        uniqueClass = arrayOfCharacters.join('');
    }
    if (randomClassList.indexOf(uniqueClass) == -1 && /^\D/.test(uniqueClass) == true){
        randomClassList.push(uniqueClass);
        return uniqueClass;
    } else {
        return randomClass();
    }
}

//ADD new project ***check condition with modal***
const projectsList = document.getElementById("projects-list");
const btnNewProject = document.getElementById("new-project");
const content = document.getElementById("content");
btnNewProject.addEventListener("click", () => {
    let projectClass = randomClass();
    randomClassList.push(projectClass)

    //Card: to do
    let toDoCard = document.createElement("section");
    toDoCard.setAttribute("class", "content-card card-todo");
    toDoCard.className += " " + projectClass; //what if I change it to card-todoprojectClass?
    content.appendChild(toDoCard)

    let titleToDoCard = document.createElement("div");
    titleToDoCard.setAttribute("class", "title-card");
    titleToDoCard.innerHTML = `<h3>PARA FAZER</h3>`
    toDoCard.appendChild(titleToDoCard);

    let btnPlusToDoCard = document.createElement("button");
    btnPlusToDoCard.setAttribute("class", "button-plus icon");
    btnPlusToDoCard.id="new-task-todo"+projectClass;
    titleToDoCard.appendChild(btnPlusToDoCard)

    let btnPlusToDoCardIcon = document.createElement("i");
    btnPlusToDoCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusToDoCard.appendChild(btnPlusToDoCardIcon)

    let addNewTaskToDo = document.createElement("div");
    addNewTaskToDo.setAttribute("class", "newTaskDescription")
    toDoCard.appendChild(addNewTaskToDo);

    let addNewTaskToDoFlag = document.createElement("i");
    addNewTaskToDoFlag.setAttribute("class", "fas fa-flag todo-flag task-flag");
    addNewTaskToDo.appendChild(addNewTaskToDoFlag);

    let toDoDescription = document.createElement("input");
    toDoDescription.id="todo-description"+projectClass;
    toDoDescription.type = "text";
    toDoDescription.placeholder = "Nova atividade";
    addNewTaskToDo.appendChild(toDoDescription);

    let taskToDoCard = document.createElement("div");
    taskToDoCard.className = "task-card";
    toDoCard.appendChild(taskToDoCard)

    //Card: doing
    let doingCard = document.createElement("section");
    doingCard.setAttribute("class", "content-card card-doing");
    doingCard.className += " " + projectClass;
    content.appendChild(doingCard)

    let titleDoingCard = document.createElement("div");
    titleDoingCard.setAttribute("class", "title-card");
    titleDoingCard.innerHTML = `<h3>EM ANDAMENTO</h3>`
    doingCard.appendChild(titleDoingCard);

    let btnPlusDoingCard = document.createElement("button");
    btnPlusDoingCard.setAttribute("class", "button-plus icon");
    btnPlusDoingCard.id = "new-task-doing"+projectClass;
    titleDoingCard.appendChild(btnPlusDoingCard)

    let btnPlusDoingCardIcon = document.createElement("i");
    btnPlusDoingCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusDoingCard.appendChild(btnPlusDoingCardIcon)

    let addNewTaskDoing = document.createElement("div");
    addNewTaskDoing.setAttribute("class", "newTaskDescription")
    doingCard.appendChild(addNewTaskDoing);

    let addNewTaskDoingFlag = document.createElement("i");
    addNewTaskDoingFlag.setAttribute("class", "fas fa-flag doing-flag task-flag");
    addNewTaskDoing.appendChild(addNewTaskDoingFlag);

    let doingDescription = document.createElement("input");
    doingDescription.id="doing-description"+projectClass;
    doingDescription.type = "text";
    doingDescription.placeholder = "Nova atividade";
    addNewTaskDoing.appendChild(doingDescription);

    let taskDoingCard = document.createElement("div");
    taskToDoCard.className = "task-card";
    doingCard.appendChild(taskDoingCard)

    //Card: done
    let doneCard = document.createElement("section");
    doneCard.setAttribute("class", "content-card card-done");
    doneCard.className += " " + projectClass;
    content.appendChild(doneCard)

    let titleDoneCard = document.createElement("div");
    titleDoneCard.setAttribute("class", "title-card");
    titleDoneCard.innerHTML = `<h3>CONQUISTADA</h3>`
    doneCard.appendChild(titleDoneCard);
    
    let btnPlusDoneCard = document.createElement("button");
    btnPlusDoneCard.setAttribute("class", "button-plus icon");
    btnPlusDoneCard.id ="new-task-done"+projectClass;
    titleDoneCard.appendChild(btnPlusDoneCard)

    let btnPlusDoneCardIcon = document.createElement("i");
    btnPlusDoneCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusDoneCard.appendChild(btnPlusDoneCardIcon)

    let addNewTaskDone = document.createElement("div");
    addNewTaskDone.setAttribute("class", "newTaskDescription")
    doneCard.appendChild(addNewTaskDone);

    let addNewTaskDoneFlag = document.createElement("i");
    addNewTaskDoneFlag.setAttribute("class", "fas fa-flag done-flag task-flag");
    addNewTaskDone.appendChild(addNewTaskDoneFlag);
    
    let doneDescription = document.createElement("input");
    doneDescription.id="done-description"+projectClass;
    doneDescription.type = "text";
    doneDescription.placeholder = "Nova atividade";
    addNewTaskDone.appendChild(doneDescription);

    let taskDoneCard = document.createElement("div");
    taskDoneCard.className = "task-card";
    doneCard.appendChild(taskDoneCard)

    //Project in menu
    let projectMenu = document.createElement("li");
    projectMenu.setAttribute("class", "project-menu");
    projectsList.appendChild(projectMenu);

    let menuOptionsBtn = document.createElement("button");
    menuOptionsBtn.setAttribute("class", "menu-options");
    menuOptionsBtn.id = projectClass;
    menuOptionsBtn.innerHTML = "Project name" //TO INSERT(modal-input value) `${projectName}`
    projectMenu.appendChild(menuOptionsBtn)

    let menuOptionsBtnArrow = document.createElement("i");
    menuOptionsBtnArrow.setAttribute("class", "fas fa-sort-down menu-arrow")
    menuOptionsBtn.appendChild(menuOptionsBtnArrow);

    let projectMenuItemOne = document.createElement("li");
    projectMenuItemOne.setAttribute("class", "project-menu-item")
    let projectMenuItemOneBtn = document.createElement("button");
    projectMenuItemOneBtn.innerHTML = "Geral";
    let projectMenuItemOneBtnFlag = document.createElement("li");
    projectMenuItemOneBtnFlag.setAttribute("class", "fas fa-flag general-flag menu-flag");
    projectMenuItemOneBtn.appendChild(projectMenuItemOneBtnFlag);
    projectMenuItemOne.appendChild(projectMenuItemOneBtn);
    projectMenu.appendChild(projectMenuItemOne);

    let projectMenuItemTwo = document.createElement("li");
    projectMenuItemTwo.setAttribute("class", "project-menu-item");
    let projectMenuItemTwoBtn = document.createElement("button");
    projectMenuItemTwoBtn.innerHTML = "Para fazer";
    let projectMenuItemTwoBtnFlag = document.createElement("li");
    projectMenuItemTwoBtnFlag.setAttribute("class", "fas fa-flag todo-flag menu-flag");
    projectMenuItemTwoBtn.appendChild(projectMenuItemTwoBtnFlag);
    projectMenuItemTwo.appendChild(projectMenuItemTwoBtn);
    projectMenu.appendChild(projectMenuItemTwo);

    let projectMenuItemThree = document.createElement("li");
    projectMenuItemThree.setAttribute("class", "project-menu-item");
    let projectMenuItemThreeBtn = document.createElement("button");
    projectMenuItemThreeBtn.innerHTML = "Em andamento";
    let projectMenuItemThreeBtnFlag = document.createElement("li");
    projectMenuItemThreeBtnFlag.setAttribute("class", "fas fa-flag doing-flag menu-flag");
    projectMenuItemThreeBtn.appendChild(projectMenuItemThreeBtnFlag);
    projectMenuItemThree.appendChild(projectMenuItemThreeBtn);
    projectMenu.appendChild(projectMenuItemThree);

    let projectMenuItemFour = document.createElement("li");
    projectMenuItemFour.setAttribute("class", "project-menu-item");
    let projectMenuItemFourBtn = document.createElement("button");
    projectMenuItemFourBtn.innerHTML = "Conquistada";
    let projectMenuItemFourBtnFlag = document.createElement("li");
    projectMenuItemFourBtnFlag.setAttribute("class", "fas fa-flag done-flag menu-flag");
    projectMenuItemFourBtn.appendChild(projectMenuItemFourBtnFlag);
    projectMenuItemFour.appendChild(projectMenuItemFourBtn);
    projectMenu.appendChild(projectMenuItemFour);

    //Example
    console.log(document.querySelectorAll("."+projectClass))
})

//Show/hide project menu
//** To fix... loop event, even if I just want to capture click on the button project...**/
projectsList.addEventListener('click', function(e) {
    let projectBtnId = e.target.id;
    let project = document.getElementById(projectBtnId);
    let projectMenuItems = Array.from(project.parentElement.children).slice(1)
    if (project.childNodes[1].classList.contains("fa-sort-down")){
        project.childNodes[1].setAttribute("class", "fas fa-sort-up menu-arrow");
        for (let i = 0; i < projectMenuItems.length; i++){
            projectMenuItems[i].style.display = "block"
        }
    } else {
        project.childNodes[1].setAttribute("class", "fas fa-sort-down menu-arrow");
        for (let i = 0; i < projectMenuItems.length; i++){
            projectMenuItems[i].style.display = "none"
        }
    }
});

//ADD new task - To refactor, doesn't work anymore
//**ALERT: new reference = const newTaskToDo = document.getElementById("new-task-todo"+projectClass);*/

// const taskCard = document.querySelectorAll(".task-card");
// const newTaskToDo = document.getElementById("new-task-todo");
// const newTaskDoing = document.getElementById("new-task-doing"); 
// const newTaskDone = document.getElementById("new-task-done");
// const newTaskDescription = document.querySelectorAll(".newTaskDescription");

// function addTask (taskType, btnflag, textDescription) {
//     document.addEventListener('keydown', function(k){
//         if(k.key == "Enter"){
//         if(textDescription.value != 0) {
//             let flag = document.createElement("button");
//             let icon = document.createElement("i");
//             icon.setAttribute("class", "fas fa-flag");
//             icon.classList.add(btnflag);
//             newTask.appendChild(flag);
//             flag.appendChild(icon);

//             description = document.createElement("span");
//             description.innerHTML = textDescription.value;
//             newTask.appendChild(description);

//             let newTask = document.createElement("div");
//             newTask.setAttribute("class", "task");
//             taskCard[taskType].appendChild(newTask);

//             showOrHideDisplay(newTaskDescription[taskType])
//             textDescription.value = "";
//         }
//     }
// });
// }

// newTaskToDo.addEventListener("click", () => {
//     const toDoDescription = document.getElementById("todo-description");
//     showOrHideDisplay(newTaskDescription[0]);
//     addTask(0, "todo-flag", toDoDescription);
// });

// newTaskDoing.addEventListener("click", () => {
//     const doingDescription = document.getElementById("doing-description");
//     showOrHideDisplay(newTaskDescription[1]);
//     addTask(1, "doing-flag", doingDescription);
// });

// newTaskDone.addEventListener("click", () => {
//     let doneDescription = document.getElementById("done-description");
//     showOrHideDisplay(newTaskDescription[2]);
//     addTask(2, "done-flag", doneDescription);
// });
