const newtodo = document.querySelector(".addtodo");
const overlay = document.querySelector(".overlay");
const addnewtodo = document.querySelector(".add");
const cancel = document.querySelector(".cancel");
const writetodo = document.querySelector("#new-todo");


// ! Show or Remove Overlay 🔥
function showoverlay() {
    overlay.classList.remove("hide");
}
function removeoverlay() {
    overlay.classList.add("hide");
}
cancel.addEventListener("click" , removeoverlay);
document.addEventListener("keyup" , function (event) {
    if (event.code === `Escape`) {
        removeoverlay();
    }
});
newtodo.addEventListener("click" , function () {
    showoverlay();
    writetodo.focus();
    writetodo.value = ``;
});

// ! Add new Todo 🔥
addnewtodo.addEventListener("click" , function (event) {
    const userTodo = writetodo.value;
    
    const startwork = document.querySelector(".carryout");

    const randomId = Math.floor(Math.random() * 100000);

    startwork.insertAdjacentHTML("beforeend" , 

        `
        <article id="todo-${randomId}" draggable="true" ondragstart="ondragstarthandler(event)">
            <p>${userTodo}</p>
        </article>
        `
    );


    removeoverlay();
});

// ! Drag & Drop
function ondragstarthandler(event) {
    event.dataTransfer.setData("elementId" , event.target.id);
    const element = document.querySelector(`#${event.target.id}`);
}

function ondragoverhandler(event) {
    event.preventDefault();
}

function ondrophandler(event) {
    const elementid = event.dataTransfer.getData("elementId");
    event.target.append(document.getElementById(elementid));
}