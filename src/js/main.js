let taskArea = document.querySelector(".title")
let inputField = document.querySelector(".task-input")
let createButton = document.querySelector(".add")


let newTask = function(){
    console.log(inputField.value)
    let newDiv = document.createElement('div');
    newDiv.innerText = inputField.value
    newDiv.classList.add('created')
    taskArea.append(newDiv)
    let checkBox = document.createElement('div')
    checkBox.classList.add('box')
    newDiv.append(checkBox)
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    newDiv.append(deleteButton)
    let deleteTask = function(){
        newDiv.remove();
    }
    deleteButton.addEventListener('click' , deleteTask)
}

createButton.addEventListener('click' , newTask)