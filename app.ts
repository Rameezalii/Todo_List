#! usr/bin/env node
import inquirer from "inquirer"

let Todos = [];
// let condition = true;
console.log(`\t"Welcome to Todo List"`);


while(true){

let addTasks = await inquirer.prompt([
    {
        name : "todo" ,
        type : "input",
        message : "What you want to add in your Todos?",
    },
     {
    name : "options",
    type : "list",
    message: "Do you want to more?",
    choices:["Add more","Delete","Exit"]
    },  
    
])
if(addTasks.options === "Add more"){
        Todos.push(addTasks.todo);
        console.log("Task added successfully!")
        console.log(Todos);
        
    }
    else if (addTasks.options === "Delete") {
        if (Todos.length === 0) {
            console.log("No tasks to delete!");
        } else {
            Todos.pop();
            console.log("Last task deleted successfully!");
            console.log(Todos);
        }
    }else if(addTasks.options === "Exit"){
        console.log(`Exiting...`);
        break;
        
    }
}