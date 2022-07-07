const taskInput = document.querySelector(".task-input input");

taskInput.addEventListener("keyup", e =>{
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        // getting localstorage todo-list
        let todos = localStorage.getItem("todo-list");
        if(!todos) {
            todos = [];
        }
        let taskInfo = {name: userTask, status: "pending"}
        
    }
});