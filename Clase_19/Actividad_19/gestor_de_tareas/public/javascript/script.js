document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskEditForm = document.getElementById('taskEditForm');
    const taskList = document.getElementById('taskList');
    const taskEditContainer = document.querySelector('.task-edit');
    const toggleTasksBtn = document.getElementById('toggleTasksBtn');
    let tasks = [];
    let editIndex = -1;
    let editTaskId = null;

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/tasks');
            tasks = await response.json();
            renderTasks();
        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await fetch('http://localhost:4000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            const newTask = await response.json();
            tasks.push(newTask.tarea);
            renderTasks();
        } catch (error) {
            console.error('Error al añadir la tarea:', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });
            const newTask = await response.json();
            tasks[editIndex] = newTask;
            renderTasks();
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
        }
    };

    const updateTaskState = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
                method: 'PATCH',
            });
            const newTask = await response.json();
            const index = tasks.findIndex((task) => task._id === id);
            tasks[index] = { ...tasks[index], estado: newTask.estado };
            renderTasks();
        } catch (error) {
            console.error('Error al actualizar el estado de la tarea:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:4000/api/tasks/${id}`, {
                method: 'DELETE',
            });
            tasks = tasks.filter((task) => task._id !== id);
            renderTasks();
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        addTask({ titulo, descripcion, estado: 'Pendiente' });
        taskForm.reset();
    });

    taskEditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('editTitulo').value;
        const descripcion = document.getElementById('editDescripcion').value;
        updateTask(editTaskId, { titulo, descripcion });
        taskEditForm.reset();
        taskEditContainer.classList.add('hidden');
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task';
            li.innerHTML = `
                <p><strong>${task.titulo}</strong></p>
                <textarea readonly>${task.descripcion}</textarea>
                <div>
                    <button onclick="editTask(${index})" class="yellow">Editar</button>
                    <button onclick="updateTaskState('${task._id}')" class="green">Actualizar Estado</button>
                    <button onclick="deleteTask('${task._id}')" class="red">Eliminar</button>
                </div>
            `;
            li.style.border = task.estado === 'Pendiente' ? '2px solid yellow' : '2px solid green';
            taskList.appendChild(li);
        });
    }

    window.editTask = (index) => {
        const task = tasks[index];
        document.getElementById('editTitulo').value = task.titulo;
        document.getElementById('editDescripcion').value = task.descripcion;
        editTaskId = task._id;
        editIndex = index;
        taskEditContainer.classList.remove('hidden');
    };

    toggleTasksBtn.addEventListener('click', () => {
        taskList.classList.toggle('hidden');
        toggleTasksBtn.textContent = taskList.classList.contains('hidden') ? 'Mostrar Tareas' : 'Ocultar Tareas';
    });

    window.updateTaskState = updateTaskState;
    window.deleteTask = deleteTask;

    fetchTasks();
});
