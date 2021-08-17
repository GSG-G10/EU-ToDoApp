const formBlock = document.getElementById('addForm');
const btn = document.getElementById('addTaskButton');

btn.addEventListener = ('click', () => {
  formBlock.style.display = 'block';
});
cancel.onclick = (e) => {
  e.preventDefault();
  formBlock.style.display = 'none';
};

const createTasksBox = (data) => {
  data.forEach((element) => {
    const task = document.createElement('section');
    const left = document.createElement('section');
    const right = document.createElement('section');
    const taskData = document.createElement('taskData');

    task.className = 'task';
    left.className = 'left';
    right.className = 'right';
    taskData.className = 'taskData';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'check checkbox-effect checkbox-effect-4';
    element.completed == false ? checkBox.checked = false : checkBox.checked = true;
    left.append(checkBox);
    const name_sec = document.createElement('section');
    const name = document.createTextNode(element.title);
    name_sec.className = element.completed ? 'task-name-checked' : 'task-name';
    name_sec.append(name);

    const due_sec = document.createElement('section');
    const due = document.createElement('input');
    due.type = 'datetime-local';
    due.value = element.due_time;
    due.readOnly = true;
    due.className = 'due';
    due_sec.className = 'due-date';
    due_sec.append(due);

    taskData.append(name_sec, due_sec);

    left.append(taskData);

    const idLabel = document.createElement('label');
    idLabel.className = 'idLabel';
    idLabel.textContent = element.id;

    const edit = document.createElement('button');
    edit.className = 'btn edit-btn';
    const icon = document.createElement('i');
    icon.className = 'task-icon far fa-edit';
    edit.append(icon);

    const remove = document.createElement('button');
    remove.className = 'btn delete-btn';
    const icon2 = document.createElement('i');
    icon2.className = 'task-icon fas fa-trash';
    remove.append(icon2);
    right.append(idLabel, edit, remove);
    task.append(left, right);
    listDiv.appendChild(task);
  });
};

createTasksBox(data);