
//* DOM selectors
input_DOM = document.querySelector('#task-input')
submitBtn_DOM = document.querySelector('#submit-button')
resetBtn_DOM = document.querySelector('#reset-button')
todoListContainer_DOM = document.querySelector('#todo-list--container')
todoList_DOM = document.querySelector('#todo-list')


////san checks
console.dir(input_DOM)
console.dir(submitBtn_DOM)
console.dir(todoList_DOM)
console.dir(todoListContainer_DOM)
console.dir(resetBtn_DOM)

//* event listeners
submitBtn_DOM.addEventListener('click', newTask)
resetBtn_DOM.addEventListener('click', reset)
todoList_DOM.addEventListener('click', deleteTask)

//* Main functions
function newTask(){
  //// create new li 
  //// set newTask text to value of input
  //// add newTask to the todoList
  //// clear the value in the input
  if (input_DOM.value) {
    let newTask_DOM = document.createElement('li')
    newTask_DOM.innerText = input_DOM.value
    newTask_DOM.classList.add('listItem')
    console.log(newTask_DOM) //san check
    todoList_DOM.append(newTask_DOM)
    resetInput()
  }
}

function reset(){
  ////clears any value in the input and reinit the list
  resetInput()
  resetList()
}

function deleteTask(event){
  ////remove the target task li that was clicked when called upon
  event.target.remove()
}

//* helper functions
function resetInput(){
  input_DOM.value = ''
}

function resetList(){
  
  oldtasks_DOM = document.querySelectorAll('.listItem')
  console.log(oldtasks_DOM)
  
}