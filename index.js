const inquirer = require("inquirer")

const db = require("./config/connection")


db.connect(()=>{
    menu()
})

const menuQuestion = [
  {
    type: "List",
    name: "menu",
    message: "Choose one of the following options",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee","Update an employee"]
  }
]

const addEmployeeQuestions = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name"
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name"
  },
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name"
  },

]

function menu{}{
  inquirer.prompt(menuQuesion)
}