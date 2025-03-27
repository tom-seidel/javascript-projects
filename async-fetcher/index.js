const text = document.getElementById("text");

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {

        // Backticks and ${} syntax are part of String interpolation:
        // Template literals (back-ticks: `) for multiline strings.
        // ${} syntax to embed expressions.
        text.innerHTML = ` 
            <h3>Todo Details</h3>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Completed:</strong> ${data.completed ? "Yes" : "No"}</p>
        `; 
    })
    .catch(error => console.error('Error:', error));