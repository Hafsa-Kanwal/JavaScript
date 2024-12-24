const taskInput = document.getElementById('text-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

// Add event listener to Add task btn
addTaskBtn.addEventListener('click', function(){
  const taskText = taskInput.value.trim();  ///get the input value and remoove extra spaces

  if(taskText !== ""){
    tasks.push({text : taskText , completed:false});
    renderTasks();
    saveTasks();
    taskInput.value = ""
  }
  else{ 
    alert("Please!! First Add Your Tasks")
  }
    

})


//create the renderTasks() function
function renderTasks(){
  taskList.innerHTML = "";
  tasks.forEach((task,index)=>{
    const li = document.createElement("li")
    li.classList.toggle("done",task.completed); //add  taskclass if completed


    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    li.appendChild(taskText)

    //Done Button
    const doneBtn = document.createElement("button")
    doneBtn.textContent = "Done";
    doneBtn.addEventListener('click' , function(){
      task.completed = !task.completed;
      renderTasks();
      saveTasks();
    });

    //delete btn
    const deteteBtn = document.createElement('button');
    deteteBtn.textContent= 'X';
    deteteBtn.classList.add("delete-Btn");
    deteteBtn.addEventListener('click', function(){
      tasks.splice(index,1);
      renderTasks();
      saveTasks();

    });

    li.appendChild(doneBtn);
    li.appendChild(deteteBtn);
    taskList.appendChild(li);



  });

  
}


//save task in to local storage
function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//load task from local storage

function loadTasks(){
  const savedTask = JSON.parse(localStorage.getItem(tasks));
  if(saveTasks){
    tasks = saveTasks;
    renderTasks();


  }


}
window.onload(loadTasks);