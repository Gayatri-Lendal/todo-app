get_todos_response = {
    "message": "Get all todos successfully.",
    "todos": [
        {
            "_id": "64158ed29bcdef38ebad4f3c",
            "title": "HTTP methods",
            "description": "there are 4 methods mainly GET ,PUT ,POST,DELETE",
            "completed": false,
            "createdAt": "2023-03-18T10:13:38.993Z",
            "__v": 0
        },
        {
            "_id": "6414976b0854c49071bb90cb",
            "title": "C++ practice",
            "description": "watch 5 videos and practice and make notes",
            "completed": false,
            "createdAt": "2023-03-17T16:38:03.404Z",
            "__v": 0
        },
        {
            "_id": "64044929a0a07f192f142c00",
            "title": "flute session",
            "description": "practice flute for 1 hour.",
            "completed": false,
            "createdAt": "2023-03-05T07:47:53.485Z",
            "__v": 0
        },
        {
            "_id": "63f79dd04999f234c1f19876",
            "title": "HTTP methods",
            "description": "there are 4 methods mainly GET ,PUT ,POST,DELETE",
            "completed": false,
            "createdAt": "2023-02-23T17:09:36.629Z",
            "__v": 0
        },
        {
            "_id": "63f71a5acfa47f3fef2c4122",
            "title": "Wednesday",
            "description": "A phenominal girl whose name is Wednesday Addams",
            "completed": false,
            "createdAt": "2023-02-23T07:48:42.515Z",
            "__v": 0
        },
        {
            "_id": "63f719c8cfa47f3fef2c411e",
            "title": "ikigai-Book",
            "description": "thw story is about old village where villagers age having beyond 100 years this rare village found in JAPAN",
            "completed": false,
            "createdAt": "2023-02-23T07:46:16.493Z",
            "__v": 0
        },
        {
            "_id": "63f718a9cfa47f3fef2c411c",
            "title": "control-statements",
            "description": "switch-case statements and loop statement",
            "completed": false,
            "createdAt": "2023-02-23T07:41:29.551Z",
            "__v": 0
        },
        {
            "_id": "63f716edcfa47f3fef2c4118",
            "title": "Database",
            "description": "contains number of information in form of tables nothing but schema",
            "completed": false,
            "createdAt": "2023-02-23T07:34:05.202Z",
            "__v": 0
        },
        {
            "_id": "63f5ec4377510cb6a0d454e8",
            "title": "movies project",
            "description": "make changes in the UI.",
            "completed": false,
            "createdAt": "2023-02-22T10:19:47.887Z",
            "__v": 0
        },
        {
            "_id": "63f5ec4377510cb6a0d454e9",
            "title": "Walk",
            "description": "go for a evening walk for 30mins.",
            "completed": false,
            "createdAt": "2023-02-22T10:19:47.887Z",
            "__v": 0
        },
        {
            "_id": "63f5e81677510cb6a0d454dc",
            "title": "flute session",
            "description": "practice flute for 1 hour.",
            "completed": false,
            "createdAt": "2023-02-22T10:01:58.643Z",
            "__v": 0
        },
        {
            "_id": "63f5e77977510cb6a0d454d8",
            "title": "guitar session",
            "description": "practice guitar for 30mins.",
            "completed": true,
            "createdAt": "2023-02-22T09:59:21.341Z",
            "__v": 0
        },
        {
            "_id": "63f5e76477510cb6a0d454d6",
            "title": "watch recordings",
            "description": "3 recordings.",
            "completed": false,
            "createdAt": "2023-02-22T09:59:00.064Z",
            "__v": 0
        },
        {
            "_id": "63f5e45f77510cb6a0d454c6",
            "title": "biology",
            "description": "read chapter 2 and write notes.",
            "completed": false,
            "createdAt": "2023-02-22T09:46:07.786Z",
            "__v": 0
        },
        {
            "_id": "63f5e1a077510cb6a0d454bf",
            "title": "workout",
            "description": "20 pushups and 20 squats and skipping.",
            "completed": true,
            "createdAt": "2023-02-22T09:34:24.812Z",
            "__v": 0
        },
        {
            "_id": "63f1d043912b276af760bc36",
            "title": "Read a book 3",
            "description": "some description 3 ..",
            "completed": false,
            "createdAt": "2023-02-19T07:31:15.708Z",
            "__v": 0
        }
    ]
}


function getTodo(){
//accessing the todos from get_todos_response which an array of json.
const get_todos = get_todos_response["todos"];

//this is the main container/div which will be storing/displaying the todo list.
const parentNode = document.getElementById("todos-container");
console.log(parentNode);

    //this loop will display our cards with functionality
    for (var i = 0; i < get_todos.length; i++) {
        todo = get_todos[i];

        const todoId = todo["_id"];
        console.log("yeh",todoId);

        //create childNodes and append it to parentNode to form a structure.this is dom creation

        //card div
        const cardNode = document.createElement("div");
        //giving it classes to apply the css
        cardNode.classList.add("card", "todo-card");
        cardNode.style.width = "18rem";
        //card div END


        //card-body div
        const cardBodyNode = document.createElement("div");
        cardBodyNode.classList.add("flex-container", "card-body");
        //card-body div END


        //todo-info
        const todoInfoNode = document.createElement("div");
        todoInfoNode.classList.add("flex-child", "todo-info");
        //title
        const titleNode = document.createElement("h2");
        titleNode.classList.add("card-title");
        titleNode.innerHTML = todo.title;
        //description
        const descriptionNode = document.createElement("p");
        descriptionNode.classList.add("card-text");
        descriptionNode.innerHTML = todo.description;

        //todo-info END


        //todo-edit
        const editNode = document.createElement("div");
        editNode.classList.add("flex-child", "todo-edit");
        //edit button
        const editBtnNode = document.createElement("button");
        editBtnNode.classList.add("btn","editButton");
        //define data
        editBtnNode.innerHTML = "Edit";
        //todo-edit END


        //todo-done
        const doneNode = document.createElement("div");
        doneNode.classList.add("flex-child", "todo-done");
        //edit button
        const doneBtnNode = document.createElement("button");
        doneBtnNode.classList.add("btn","doneButton");
        //define data
        doneBtnNode.innerHTML = "Done";
        //todo-done END


        //todo-delete 
        const deleteNode = document.createElement("div");
        deleteNode.classList.add("flex-child", "todo-delete");
        //edit button
        const deleteBtnNode = document.createElement("button");
        deleteBtnNode.classList.add("btn","deleteButton");
    
        //define data
        deleteBtnNode.innerHTML = "Delete";
        //todo-delete END

        //structure of DOM
        cardNode.appendChild(cardBodyNode);

        cardBodyNode.appendChild(todoInfoNode);
        cardBodyNode.appendChild(editNode);
        cardBodyNode.appendChild(doneNode);
        cardBodyNode.appendChild(deleteNode);

        todoInfoNode.appendChild(titleNode);
        todoInfoNode.appendChild(descriptionNode);

        editNode.appendChild(editBtnNode);

        doneNode.appendChild(doneBtnNode);

        deleteNode.appendChild(deleteBtnNode);

        parentNode.appendChild(cardNode);


    }
}

getTodo();

function creatTodo(){
    console.log("created...");
}

function editTodo(){
    console.log("edited todo...");
}

function doneTodo(){
    console.log("marked as done...");
}

function deleteTodo(){
    console.log("deleted todo...");
}


// }
