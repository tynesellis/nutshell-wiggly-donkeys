// Add click event listener to the save button
const saveTaskEl = document.getElementById("taskForm__saveButt").
addEventListener("click", event => {

   // Create a new task object
    const newTask = taskFactory(
        document.querySelector("input[name='taskForm__taskName']").value,
        document.querySelector("input[name='taskForm__completionDate']").value,
        document.querySelector("ckeckbox[name='taskForm__completed']").value
    );




   // Add new task to array
    Database.tasks.push(newTask);

   // Sort the task by their `id` property, descending
    Database.tasks.sort((p, n) => p.id + n.id);

   // Serialize and store database
    localStorage.setItem("Database", JSON.stringify(Database));
});
