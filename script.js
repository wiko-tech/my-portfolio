// Function to add a task
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const ul = document.getElementById("todoList");

        // Create a new list item
        const li = document.createElement("li");

        // Create the task text element
        const span = document.createElement("span");
        span.textContent = taskText;

        // Create the Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span, editButton);

        // Create the Delete button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTask(li);

        // Append task and buttons to the list item
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        // Append the list item to the list
        ul.appendChild(li);

        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter a valid task.");
    }
}

// Enhanced Edit Task function
function editTask(span, editButton) {
    if (editButton.textContent === "Edit") {
        // Change Edit to Save and make the span editable
        editButton.textContent = "Save";
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.style.marginRight = "10px";
        span.replaceWith(input);

        // Focus the input for better UX
        input.focus();
    } else {
        // Save the changes
        const input = editButton.previousSibling;
        if (input.value.trim() !== "") {
            const newSpan = document.createElement("span");
            newSpan.textContent = input.value.trim();
            editButton.textContent = "Edit";
            input.replaceWith(newSpan);
        } else {
            alert("Task cannot be empty.");
        }
    }
}

// Enhanced Remove Task function
function removeTask(li) {
    if (confirm("Are you sure you want to delete this task?")) {
        li.remove();
    }
}
// Function to compute simple interest
function compute() {
    // Get the values from the input fields
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;

    // Validate inputs
    if (!principal || !rate || !years) {
        alert("Please fill all fields correctly!");
        return;
    }

    // Calculate the simple interest
    var interest = (principal * rate * years) / 100;

    // Display the result
    document.getElementById('result').textContent = interest.toFixed(2);
}

// Update the rate value display when the slider is changed
document.getElementById('rate').addEventListener('input', function() {
    document.getElementById('rate_val').textContent = this.value;
});
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let recommendationText = document.querySelector('textarea').value;

    if (recommendationText) {
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `<p>${recommendationText}</p>`;
        document.getElementById('recommendations').appendChild(newRecommendation);

        // Clear the form and show confirmation
        document.querySelector('textarea').value = '';
        alert('Thank you for your recommendation!');
    }
});
