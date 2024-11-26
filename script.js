let todoItems = []; // Array to store to-do items

// Function to add a new item to the list
function addItem() {
    let newItem = document.getElementById("todoInput").value;
    if (newItem !== "") {
        todoItems.push(newItem);
        document.getElementById("todoInput").value = ""; // Clear input field
        updateList();
    } else {
        alert("Please enter a to-do item.");
    }
}

// Function to update the displayed list
function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = ""; // Clear current list
    for (let i = 0; i < todoItems.length; i++) { // Corrected loop condition
        let listItem = document.createElement("li");
        listItem.textContent = todoItems[i]; // Now accesses valid items
        listItem.addEventListener("click", removeItem);
        list.appendChild(listItem);
    }
}

// Function to remove an item from the list
function removeItem(event) {
    let itemText = event.target.textContent;
    let index = todoItems.indexOf(itemText); 
    if (index !== -1) { // Ensure item exists in the array
        todoItems.splice(index, 1); // Remove item
        updateList();
    } else {
        alert("Error: Item not found.");
    }
}

// Event listener for adding a new item
document.getElementById("addButton")?.addEventListener("click", addItem); // Added check for button existence
