const inquirer = require("inquirer")

const db = require("./config/connection")

require("console.table")


db.connect( ()=>{
  console.log(db)
    menu()
} )

const menuQuestion = [
  {
    type: "list",
    name: "menu",
    message: "Choose one of the following options",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee","Update an employee"]
  }
]



const addDepartmentQuestions = [
  {
    type: "input",
    name: "department_id",
    message: "What is the name of the department"
  },
]




function menu(){
  inquirer.prompt(menuQuestion)
  .then(response=>{
    if(response.menu==="View all departments"){
      viewAllDepartments()
    }
    else if(response.menu==="View all roles"){
      viewAllRoles()
    }
    else if(response.menu==="View all employees"){
      viewAllEmployees()
    }
    else if(response.menu==="Add an employee"){
      addEmployee()
    }
  })
}

function viewAllDepartments(){
  db.query(`
    SELECT * from department
  `, (err, data)=>{
    
    console.table(data)
    menu()
  })
}

function viewAllRoles(){
  db.query(`
  SELECT * from role
  `, (err, data)=>{
    console.table(data)
    menu()
  })
}

function viewAllEmployees(){
  db.query(`SELECT employee.id,
  employee.first_name,
  employee.last_name,
  role.title,
  department.name as department,
  role.salary,
  CONCAT(mngr.first_name, " ", mngr.last_name) as manager
  
  FROM employee
  LEFT JOIN role ON role.id=employee.role_id
  LEFT JOIN department ON role.department_id=department.id
  LEFT JOIN employee as mngr ON employee.manager_id=mngr.id`, (err,data)=>{


    console.table(data)

    menu()
  })
}




function addEmployee(){
  
  db.query(`select title as name, id as value from role`,
  (err, roleData)=>{
    
    db.query(`select first_name as name, id as value from employee`, (err, managerData)=>{
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
          type: "list",
          name: "role_id",
          message: "Choose the following role",
          choices: roleData
        },
        {
          type: "list",
          name: "manager_id",
          message: "Select the employee's manager",
          choices: managerData
        }
      ]
      inquirer.prompt(addEmployeeQuestions).then(response=>{
        const parameters = [response.first_name, response.last_name, response.role_id, response.manager_id]

        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES(?,?,?,?)`, parameters, (err, data)=>{
          viewAllEmployees()
        })
      })
    })
  })

}
