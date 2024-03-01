const newItem = document.getElementById('todoItem')
const checklist = document.getElementById('checklist')

function addElement() {
    let newListItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "DELETE"; 
    deleteButton.addEventListener("click", () => deleteButton.parentElement.remove());

    let itemDiv = document.createElement("div");
    itemDiv.className = "checkItem";
    let itemValue = newItem.value;
    
    if (itemValue !== '') {
        itemDiv.textContent = itemValue; 
        newListItem.appendChild(checkbox);
        newListItem.appendChild(itemDiv);
        newListItem.appendChild(deleteButton);

        checklist.appendChild(newListItem);
        
        todoItem.value = "";
    }

   


}