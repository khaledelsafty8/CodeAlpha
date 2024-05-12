function addTask() {
    var input = document.getElementById('taskInput').value;
    if (input === '') {
        alert('Please enter a task!');
        return;
    }

    var ul = document.getElementById('taskList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);

    document.getElementById('taskInput').value = '';

    // Add event listener to mark task as completed
    li.addEventListener('click', function () {
        this.classList.toggle('completed');
    });
}
