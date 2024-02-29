const todoItem = document.getElementById('todoItem')


const todoList = document.getElementByclass('checkboxes')



function addElement(){
    let li = document.createElement("li");
    let itemValue = todoItem.value;

    if(itemValue === ""){
        alert("Enter An Item!");
    }
    else{
       li.textContent = itemValue;
       todoList.appendChild(li);
       todoItem.value = ""; 
    }


}