/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

//* text input box for the task name
input_DOM = document.querySelector('#task-input')

//* submit btn near the input
submitBtn_DOM = document.querySelector('#submit-button')

//* reset btn near the submit button
resetBtn_DOM = document.querySelector('#reset-button')

//* unorder list for tasks to be added to
todoList_DOM = document.querySelector('#todo-list')


/*----------------------------- Event Listeners -----------------------------*/

//* click add task button to add a task with the value in the input
submitBtn_DOM.addEventListener('click', newTask)

//* click reset list button to clear the list
resetBtn_DOM.addEventListener('click', reset)

//* clicking on a li in the ul to delete tasks
todoList_DOM.addEventListener('click', deleteTask)

/*-------------------------------- Functions --------------------------------*/

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