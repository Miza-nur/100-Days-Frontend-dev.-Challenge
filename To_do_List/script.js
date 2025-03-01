const addclick = () => {
    const task = document.getElementById('task');
    const taskinput = task.value.trim();

    if (taskinput !== '') {
        const tasklist = document.getElementById('tasklist');
        const li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox"> 
            ${taskinput}
            <button onclick="editTask(this)"> <i class="fa-solid fa-pen-to-square"></i></button> 
            <button onclick="deleteTask(this)"> <i class="fa-solid fa-trash"></i></button>
        `;

        tasklist.appendChild(li);
        task.value = '';
    } else {
        alert("Please input TO DO ");
    }
};

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
};

const editTask = (btn) => {
    const li = btn.parentNode;
    const text = li.childNodes[2].textContent.trim();
    const newText = prompt("Edit your task:", text);

    if (newText !== null && newText.trim() !== '') {
        li.childNodes[2].textContent = " " + newText + " ";
    }
};
