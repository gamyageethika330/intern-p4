// Task list array
let tasks = [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
        <button onclick="toggleCompleted(${index})">${task.completed ? 'Unmark' : 'Mark'}</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();

  if (text !== '') {
    tasks.push({ text, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Function to edit a task
function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);

  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Function to toggle task completion
function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Initial rendering of tasks
renderTasks();
