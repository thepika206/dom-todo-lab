//* Initial DOM selectors and event listeners
input_DOM = document.querySelector('#task-input')
submitBtn_DOM = document.querySelector('#submit-button')
resetBtn_DOM = document.querySelector('#reset-button')
todoListContainer_DOM = document.querySelector('#todo-list--container') //wrapper for dynamically created list
todoList_DOM = document.querySelector('#todo-list')

submitBtn_DOM.addEventListener('click', newTask)
resetBtn_DOM.addEventListener('click', reset)
todoList_DOM.addEventListener('click', deleteTask)

//* action functions
function newTask(){
  /* create new li, set newTask text to value of input, add newTask to the todoList, clear the value in the input */
  if (input_DOM.value) {
    let newTask_DOM = document.createElement('li')
    newTask_DOM.innerText = input_DOM.value
    newTask_DOM.classList.add('listItem')
    console.log(newTask_DOM) //!san check when adding a new task
    todoList_DOM.append(newTask_DOM)
    resetInput()
  }
}

function reset(){
  //clears any value in the input and removes all of the li's from the ul
  resetInput()
  todoList_DOM.innerHTML = ''
}

function deleteTask(event){
  //remove the target task li that was clicked when called upon
  event.target.remove()
}

//* helper functions
function resetInput(){
  input_DOM.value = '' //clears any value in the input box
}

//! san checks
// console.dir(input_DOM)
// console.dir(submitBtn_DOM)
// console.dir(resetBtn_DOM)
// console.dir(todoListContainer_DOM)