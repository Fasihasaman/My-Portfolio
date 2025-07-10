const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskinput");
const taskList = document.querySelector("#tasklist");
const completedCount = document.querySelector("#completedCount");
const incompleteCount = document.querySelector("#incompleteCount");

function updateStatusCount() {
    const checkboxes = document.querySelectorAll('.taskfields input[type="checkbox"]');
    let completed = 0;
    let incomplete = 0;
    checkboxes.forEach(cb => cb.checked ? completed++ : incomplete++);
    completedCount.textContent = completed;
    incompleteCount.textContent = incomplete;
}

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "taskfields";

    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;

    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.className = "edit-input";

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(label);
    taskLeft.appendChild(inputEdit);

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    taskDiv.appendChild(taskLeft);
    taskDiv.appendChild(btnGroup);
    taskList.appendChild(taskDiv);

    taskInput.value = "";

    // Delete button
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskDiv);
        updateStatusCount();
    });

    // Edit button
    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            inputEdit.style.display = "inline";
            inputEdit.value = label.textContent;
            label.style.display = "none";
            editBtn.textContent = "Save";
        } else {
            const newText = inputEdit.value.trim();
            if (newText !== "") label.textContent = newText;
            inputEdit.style.display = "none";
            label.style.display = "inline";
            editBtn.textContent = "Edit";
        }
    });

    // Checkbox for completion
    checkbox.addEventListener("change", () => {
        label.style.textDecoration = checkbox.checked ? "line-through" : "none";
        updateStatusCount();
    });

    updateStatusCount();
});