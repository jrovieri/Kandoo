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

//ADD new project ***check condition with modal FIX***
const projectsList = document.getElementById("projects-list");
const btnNewProject = document.getElementById("new-project");
const content = document.getElementById("content");
const contentProjects = document.querySelectorAll("content-project");

btnNewProject.addEventListener("click", () => {

    //hiding other projects
    for (let i = 0; i<randomClassList.length; i++){
        document.getElementById(randomClassList[i]).style.display = "none";
    }

    let allMenuItems = document.querySelectorAll(".project-menu-item");
    for (let i = 0; i<allMenuItems.length;i++){
        allMenuItems[i].style.display = "none";
    }

    let allBtnArrow = document.querySelectorAll(".menu-left-arrow");
    for (let i = 0; i<allBtnArrow.length; i++){
        allBtnArrow[i].setAttribute("class", "fas fa-sort-down menu-left-arrow");
    }

    let projectClass = randomClass();
    randomClassList.push(projectClass)

    //Project area
    let contentProject = document.createElement("section");
    contentProject.setAttribute("class", "content-project");
    contentProject.id = projectClass; //reference to view
    content.appendChild(contentProject);

    let projectTitle = document.createElement("div");
    projectTitle.className = "project-title"
    projectTitle.innerHTML =`<h3>*Project name*</h3>` //FIX to insert
    contentProject.appendChild(projectTitle)

    //Card: to do
    let toDoCard = document.createElement("section");
    toDoCard.setAttribute("class", "content-card card-todo");
    toDoCard.className += " content-card"+projectClass;
    toDoCard.id = "card-todo" + projectClass;
    contentProject.appendChild(toDoCard)

    let titleToDoCard = document.createElement("div");
    titleToDoCard.setAttribute("class", "title-card");
    titleToDoCard.innerHTML = `<h3>PARA FAZER</h3>`
    toDoCard.appendChild(titleToDoCard);

    let btnPlusToDoCard = document.createElement("button");
    btnPlusToDoCard.setAttribute("class", "button-plus icon");
    btnPlusToDoCard.id="new-task-todo"+projectClass;
    btnPlusToDoCard.setAttribute("onclick", "btnAddNewTask(this)");
    titleToDoCard.appendChild(btnPlusToDoCard)

    let btnPlusToDoCardIcon = document.createElement("i");
    btnPlusToDoCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusToDoCard.appendChild(btnPlusToDoCardIcon)

    let addNewTaskToDo = document.createElement("div");
    addNewTaskToDo.setAttribute("class", "newTaskDescription");
    addNewTaskToDo.id = "newTaskDescriptionToDo"+projectClass;
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
    doingCard.className += " content-card"+projectClass;
    doingCard.id = "card-doing" + projectClass;
    contentProject.appendChild(doingCard)

    let titleDoingCard = document.createElement("div");
    titleDoingCard.setAttribute("class", "title-card");
    titleDoingCard.innerHTML = `<h3>EM ANDAMENTO</h3>`
    doingCard.appendChild(titleDoingCard);

    let btnPlusDoingCard = document.createElement("button");
    btnPlusDoingCard.setAttribute("class", "button-plus icon");
    btnPlusDoingCard.id = "new-task-doing"+projectClass;
    btnPlusDoingCard.setAttribute("onclick", "btnAddNewTask(this)");
    titleDoingCard.appendChild(btnPlusDoingCard)

    let btnPlusDoingCardIcon = document.createElement("i");
    btnPlusDoingCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusDoingCard.appendChild(btnPlusDoingCardIcon)

    let addNewTaskDoing = document.createElement("div");
    addNewTaskDoing.setAttribute("class", "newTaskDescription")
    addNewTaskDoing.id = "newTaskDescriptionDoing"+projectClass;
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
    doneCard.className += " content-card"+projectClass;
    doneCard.id = "card-done" + projectClass;
    contentProject.appendChild(doneCard)

    let titleDoneCard = document.createElement("div");
    titleDoneCard.setAttribute("class", "title-card");
    titleDoneCard.innerHTML = `<h3>CONQUISTADA</h3>`
    doneCard.appendChild(titleDoneCard);
    
    let btnPlusDoneCard = document.createElement("button");
    btnPlusDoneCard.setAttribute("class", "button-plus icon");
    btnPlusDoneCard.id ="new-task-done"+projectClass;
    btnPlusDoneCard.setAttribute("onclick", "btnAddNewTask(this)");
    titleDoneCard.appendChild(btnPlusDoneCard)

    let btnPlusDoneCardIcon = document.createElement("i");
    btnPlusDoneCardIcon.setAttribute("class", "fas fa-plus-circle");
    btnPlusDoneCard.appendChild(btnPlusDoneCardIcon)

    let addNewTaskDone = document.createElement("div");
    addNewTaskDone.setAttribute("class", "newTaskDescription")
    addNewTaskDone.id = "newTaskDescriptionDone"+projectClass;
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

    //Project menu
    let projectMenu = document.createElement("li");
    projectMenu.setAttribute("class", "project-menu");
    projectMenu.id = "projectMenu"+projectClass;
    projectsList.appendChild(projectMenu);

    let menuOptionsBtn = document.createElement("button");
    menuOptionsBtn.setAttribute("class", "menu-options");
    menuOptionsBtn.id = "menu-options-btn"+projectClass;
    menuOptionsBtn.setAttribute("onclick", "showOrHideMenuProject(this)");
    menuOptionsBtn.innerHTML = "Project name" //FIX TO INSERT(modal-input value) `${projectName}`
    projectMenu.appendChild(menuOptionsBtn)

    let menuOptionsBtnArrow = document.createElement("i");
    menuOptionsBtnArrow.setAttribute("class", "fas fa-sort-up menu-left-arrow")
    menuOptionsBtn.appendChild(menuOptionsBtnArrow);

    //navigation button all cards
    let projectMenuItemOne = document.createElement("li");
    projectMenuItemOne.setAttribute("class", "project-menu-item")
    let projectMenuItemOneBtn = document.createElement("button");
    projectMenuItemOne.setAttribute("onclick", "filterCards(this)");
    projectMenuItemOne.id = "navButtonGeneral"+projectClass;
    projectMenuItemOneBtn.innerHTML = "Geral";
    projectMenuItemOneBtn.className = "navBtn"+projectClass;
    projectMenuItemOneBtn.style.backgroundColor = "rgba(117, 117, 117, 0.3)"
    let projectMenuItemOneBtnFlag = document.createElement("li");
    projectMenuItemOneBtnFlag.setAttribute("class", "fas fa-flag general-flag menu-flag");
    projectMenuItemOneBtn.appendChild(projectMenuItemOneBtnFlag);
    projectMenuItemOne.appendChild(projectMenuItemOneBtn);
    projectMenu.appendChild(projectMenuItemOne);

    //navigation button card to do
    let projectMenuItemTwo = document.createElement("li");
    projectMenuItemTwo.setAttribute("class", "project-menu-item");
    let projectMenuItemTwoBtn = document.createElement("button");
    projectMenuItemTwoBtn.setAttribute("onclick", "filterCards(this)");
    projectMenuItemTwoBtn.id = "navButtonToDo"+projectClass;
    projectMenuItemTwoBtn.innerHTML = "Para fazer";
    projectMenuItemTwoBtn.className = "navBtn"+projectClass;
    let projectMenuItemTwoBtnFlag = document.createElement("li");
    projectMenuItemTwoBtnFlag.setAttribute("class", "fas fa-flag todo-flag menu-flag");
    projectMenuItemTwoBtn.appendChild(projectMenuItemTwoBtnFlag);
    projectMenuItemTwo.appendChild(projectMenuItemTwoBtn);
    projectMenu.appendChild(projectMenuItemTwo);

    //navigation button card doing
    let projectMenuItemThree = document.createElement("li");
    projectMenuItemThree.setAttribute("class", "project-menu-item");
    let projectMenuItemThreeBtn = document.createElement("button");
    projectMenuItemThree.setAttribute("onclick", "filterCards(this)");
    projectMenuItemThreeBtn.className = "navBtn"+projectClass;
    projectMenuItemThree.id = "navButtonDoing"+projectClass;
    projectMenuItemThreeBtn.innerHTML = "Em andamento";
    let projectMenuItemThreeBtnFlag = document.createElement("li");
    projectMenuItemThreeBtnFlag.setAttribute("class", "fas fa-flag doing-flag menu-flag");
    projectMenuItemThreeBtn.appendChild(projectMenuItemThreeBtnFlag);
    projectMenuItemThree.appendChild(projectMenuItemThreeBtn);
    projectMenu.appendChild(projectMenuItemThree);

    //navigation button card done
    let projectMenuItemFour = document.createElement("li");
    projectMenuItemFour.setAttribute("class", "project-menu-item");
    let projectMenuItemFourBtn = document.createElement("button");
    projectMenuItemFour.setAttribute("onclick", "filterCards(this)");
    projectMenuItemFourBtn.className = "navBtn"+projectClass;
    projectMenuItemFour.id = "navButtonDone"+projectClass;
    projectMenuItemFourBtn.innerHTML = "Conquistada";
    let projectMenuItemFourBtnFlag = document.createElement("li");
    projectMenuItemFourBtnFlag.setAttribute("class", "fas fa-flag done-flag menu-flag");
    projectMenuItemFourBtn.appendChild(projectMenuItemFourBtnFlag);
    projectMenuItemFour.appendChild(projectMenuItemFourBtn);
    projectMenu.appendChild(projectMenuItemFour);

    //Show cards on menu
    let subMenu = document.getElementById("projectMenu"+projectClass).childNodes;
    for (let i = 1; i < subMenu.length; i++){
        subMenu[i].style.display = "block";
    }

})

//Filter cards from the button in the menu
function filterCards (navBtnSelectedId) {
    let cardBtn = navBtnSelectedId.id;
    let selectedNavBtn = cardBtn.substr(0, 13) ////navButton: Gene - ToDo - Doin - Done
    let currentProjectClass = cardBtn.substr(-10);
    let listOfCards = document.querySelectorAll(".content-card"+currentProjectClass);
    let listOfBtn = document.querySelectorAll(".navBtn"+currentProjectClass);

    for (let i = 0; i < listOfCards.length; i++){
        console.log(listOfCards[i])
        listOfCards[i].style.display = "none";
        listOfCards[i].style.width = "20vw"
        listOfBtn[i].style.backgroundColor = "rgba(117, 117, 117, 0.08)"
    } listOfBtn[3].style.backgroundColor = "rgba(117, 117, 117, 0.08)"

    switch (selectedNavBtn) {
        case "navButtonGene":
        for (let i = 0; i < listOfCards.length; i++){
            listOfCards[i].style.display = "block";
        }
        listOfBtn[0].style.backgroundColor = "rgba(117, 117, 117, 0.3)"
        break;

        case "navButtonToDo":
        listOfCards[0].style.display = "block";
        listOfCards[0].style.width = "50vw"
        listOfBtn[1].style.backgroundColor = "rgba(117, 117, 117, 0.3)"
        break;

        case "navButtonDoin":
        listOfCards[1].style.display = "block";
        listOfCards[1].style.width = "50vw"
        listOfBtn[2].style.backgroundColor = "rgba(117, 117, 117, 0.3)"
        break;

        case "navButtonDone":
        listOfCards[2].style.display = "block";
        listOfCards[2].style.width = "50vw"
        listOfBtn[3].style.backgroundColor = "rgba(117, 117, 117, 0.3)"
        break;
    }
}

//Show/hide project menu/project view
function showOrHideMenuProject(btnSelectedId) {
    let projectBtnId = btnSelectedId.id;
    let currentProjectClass = projectBtnId.substr(-10);
    let projectCards = document.getElementById(currentProjectClass);
    let project = document.getElementById(projectBtnId);
    let projectMenuItems = Array.from(project.parentElement.children).slice(1)
    let arrowDirection = project.childNodes[1].classList.contains("fa-sort-down");


    //Hide all project cards
    for (let i = 0; i<randomClassList.length; i++){
        document.getElementById(randomClassList[i]).style.display = "none";
    }

    //Hide all submenu
    let allBtnArrow = document.querySelectorAll(".menu-left-arrow")
    for (let i = 0; i<allBtnArrow.length; i++){
        allBtnArrow[i].setAttribute("class", "fas fa-sort-down menu-left-arrow")
    }
    let allMenuItems = document.querySelectorAll(".project-menu-item");
    for (let i = 0; i<allMenuItems.length;i++){
        allMenuItems[i].style.display = "none";
    }

    if (arrowDirection == true){
        project.childNodes[1].setAttribute("class", "fas fa-sort-up menu-left-arrow");
        projectCards.style.display = "flex";
        for (let i = 0; i < projectMenuItems.length; i++){
            projectMenuItems[i].style.display = "block"
        }
    } else{
        project.childNodes[1].setAttribute("class", "fas fa-sort-down menu-left-arrow");
        projectCards.style.display = "none";
        for (let i = 0; i < projectMenuItems.length; i++){
            projectMenuItems[i].style.display = "none"
        }
    }
}

/*FIX To implement: erase input if taskDescript is hide, and hide if click outside it
* Every task should be identified? 
* Function "onclick" in all task (edit a task - change type, delete..) + randomIdList?
*/

//ADD new task
function addTask (card, btnflag, inputDescription, taskDescription) {
    document.addEventListener('keydown', function(k){
        if(k.key == "Enter"){
        if(inputDescription.value != 0) {
            let newTask = document.createElement("div");
            newTask.setAttribute("class", "task");
            card.appendChild(newTask);

            let flag = document.createElement("button");
            let icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-flag");
            icon.classList.add(btnflag);
            newTask.appendChild(flag);
            flag.appendChild(icon);

            description = document.createElement("span");
            description.innerHTML = inputDescription.value;
            newTask.appendChild(description);

            showOrHideDisplay(taskDescription);
            inputDescription.value = "";
        }
    }
});
}

function btnAddNewTask(btnPlusSelected){
    let btnPLusId = btnPlusSelected.id; 
    let typeOfNewTask = btnPLusId.substr(0, 13); //new-task-: todo, doin, done
    let currentProjectClass = btnPLusId.substr(-10);
    let taskDescription;
    let inputDescription;
    let card;
    switch (typeOfNewTask){
        case "new-task-todo":
        taskDescription = document.getElementById("newTaskDescriptionToDo"+currentProjectClass);
        inputDescription = document.getElementById("todo-description"+currentProjectClass);
        card = document.getElementById("card-todo"+currentProjectClass);
        showOrHideDisplay(taskDescription);
        addTask (card, "todo-flag", inputDescription, taskDescription);
        break;

        case "new-task-doin":
        taskDescription = document.getElementById("newTaskDescriptionDoing"+currentProjectClass);
        inputDescription = document.getElementById("doing-description"+currentProjectClass);
        card = document.getElementById("card-doing"+currentProjectClass);
        addTask (card, "doing-flag", inputDescription, taskDescription);
        showOrHideDisplay(taskDescription);
        break;

        case "new-task-done":
        taskDescription = document.getElementById("newTaskDescriptionDone"+currentProjectClass);
        inputDescription = document.getElementById("done-description"+currentProjectClass);
        card = document.getElementById("card-done"+currentProjectClass);
        addTask (card, "done-flag", inputDescription, taskDescription);
        showOrHideDisplay(taskDescription);
        break;
    }
}