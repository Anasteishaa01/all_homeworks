const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const button = document.getElementById('button');

button.addEventListener('click', function () {
    const taskText = taskInput.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.append(newTask);
    taskInput.value = '';
})

taskList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
})