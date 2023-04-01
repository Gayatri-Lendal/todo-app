const parentNode = document.getElementById("todos-container");

let editTodoId = "";

//function of apiCall,using this function we can make any api call.we will pass parameter as url,method and body
async function apiCall(url = "", method = "GET", bodyData = {}) {
    const request = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        }
    }

    if (method !== "GET") {
        request["body"] = JSON.stringify(bodyData);
    }
    const response = await fetch(url, request);
    return response.json();
}




async function getTodos() {


    // this also works
    // const getTodoResponse = await apiCall("https://coding4all-todo.onrender.com/api/todos-all", "GET").then((getTodoResponse) => {
    //     get_todos = getTodoResponse["todos"];
    //     console.log("get todo ka response : ",getTodoResponse);
    // });

    const getTodoResponse = await apiCall("https://coding4all-todo.onrender.com/api/todos-all", "GET");
    const get_todos = getTodoResponse["todos"];
    console.log("get todo ka response : ", getTodoResponse);

    //create UI using DOM
    const parentNode = document.getElementById("todos-container");
    console.log(parentNode);

    for (var i = 0; i < get_todos.length; i++) {
        const todo = get_todos[i];

        //defining todoId 
        const todoId = todo["_id"];
        console.log("todo ki id = ", todoId);

        //create ui using dom
        //card ka dom
        const cardNode = document.createElement("div");
        cardNode.classList.add("card", "todoCard");
        cardNode.id = `${todoId}-card`;
        //cardNode.style.width = "18rem";
        //card end 

        //card body ka dom
        const cardBodyNode = document.createElement("div");
        cardBodyNode.classList.add("card-body", "flex-container");
        //card body end

        //card info ka dom
        const cardInfoNode = document.createElement("div");
        cardInfoNode.classList.add("flex-child", "todo-info");

        const titleNode = document.createElement("h3");
        titleNode.classList.add("card-title");
        titleNode.style.marginLeft = "5px";

        const descriptionNode = document.createElement("p");
        descriptionNode.classList.add("card-text");
        descriptionNode.style.marginLeft = "5px";

        //define data for title and description
        titleNode.innerHTML = todo.title;
        descriptionNode.innerHTML = todo.description;

        //if todo is completed then draw a line on the title and description 
        if (todo.completed) {
            titleNode.style.textDecoration = "line-through";
            descriptionNode.style.textDecoration = "line-through";
        }
        //card info end

        //todo-done ka dom
        const todoDoneNode = document.createElement("div");
        todoDoneNode.classList.add("flex-child", "todo-done");

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("btn", "doneButton");
        //event
        doneBtn.addEventListener("click", (e) => doneTodo(e.target.id));
        //define data
        doneBtn.innerHTML = "Done";
        //adding Id
        doneBtn.id = todoId;
        //todo-done end

        //todo-edit ka dom
        const todoEditNode = document.createElement("div");
        todoEditNode.classList.add("flex-child", "todo-edit");

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "editButton");
        editBtn.setAttribute("data-toggle", "modal");
        editBtn.setAttribute("data-target", "#editModal");
        //event
        editBtn.addEventListener("click", (e) => setEditTodoId(e.target.id, todo.title, todo.description));
        //define data
        editBtn.innerHTML = "Edit";
        //adding id
        editBtn.id = todoId;
        //todo-edit end

        //todo-delete ka dom 
        const todoDeleteNode = document.createElement("div");
        todoDeleteNode.classList.add("flex-child", "todo-delete");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "deleteButton");
        //event
        deleteBtn.addEventListener("click", (e) => deleteTodo(e.target.id));
        //define data
        deleteBtn.innerHTML = "Delete";
        //adding Id
        deleteBtn.id = todoId;
        //todo-delete end

        //structure of DOM 
        cardNode.appendChild(cardBodyNode);
        cardBodyNode.appendChild(cardInfoNode);
        cardBodyNode.appendChild(todoDoneNode);
        cardBodyNode.appendChild(todoEditNode);
        cardBodyNode.appendChild(todoDeleteNode);

        cardInfoNode.appendChild(titleNode);
        cardInfoNode.appendChild(descriptionNode);


        //append when todo is not completed
        if (!todo.completed) {
            todoDoneNode.appendChild(doneBtn);
        }

        //append when todo is not completed.
        if (!todo.completed) {
            todoEditNode.appendChild(editBtn);
        }

        todoDeleteNode.appendChild(deleteBtn);

        //append cardNode to parentNode
        parentNode.appendChild(cardNode);

    }
}

getTodos();

async function createTodo() {
    const title = document.getElementById("todo-title-input").value;
    const description = document.getElementById("todo-description-input").value;

    const bodyData = {
        "title": title,
        "description": description
    }

    //post api call 
    const postTodoResponse = await apiCall("https://coding4all-todo.onrender.com/api/todo/new", "POST", bodyData);
    console.log("post todo ka response : ", postTodoResponse);

    parentNode.innerHTML = "";

    getTodos();

    document.getElementById("todo-title-input").value = "";
    document.getElementById("todo-description-input").value = "";

}

function setEditTodoId(todoId, title, description) {
    // $('#editModal').modal('show');
    console.log("edit horaha hai");
    editTodoId = todoId;
    document.getElementById("todo-title-edit-input").value = title;
    document.getElementById("todo-description-edit-input").value = description;
}

async function editTodo(editTodoId) {
    console.log("edited..");
    const title = document.getElementById("todo-title-edit-input").value = "";
    const description = document.getElementById("todo-description-edit-input").value = "";

    const bodyData = {
        "title": title,
        "description": description
    }
    //put request
    const putTodoResponse = await apiCall(`https://coding4all-todo.onrender.com/api/todo/${editTodoId}`, "PUT", bodyData);
    console.log("post todo ka response : ", putTodoResponse);

    parentNode.innerHTML = "";

    getTodos();

    editTodoId = "";

    $('#editModal').modal('hide');
    document.getElementById("todo-title-edit-input").value = "";
    document.getElementById("todo-description-edit-input").value = "";
}


function createEditModalClose() {
    document.getElementById("todo-title-edit-input").value = "";
    document.getElementById("todo-description-edit-input").value = "";
}

async function deleteTodo(deleteTodoId) {
    const putTodoResponse = await apiCall(`https://coding4all-todo.onrender.com/api/todo/${deleteTodoId}`, "DELETE");
    parentNode.innerHTML = "";

    getTodos();
}


async function doneTodo(doneTodoId) {
    const bodyData = {
        "completed": true
    }
    //put request
    const putTodoResponse = await apiCall(`https://coding4all-todo.onrender.com/api/todo/${doneTodoId}`, "PUT", bodyData);
    console.log("post todo ka response : ", putTodoResponse);

    parentNode.innerHTML = "";

    getTodos();
}