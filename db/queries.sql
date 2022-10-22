USE employee_db;

/*Need to select and join columns into a table 
that mimics appearance in video*/
SELECT * from department;

SELECT * from role;


/*query for view all employees*/
SELECT employee.id,
employee.first_name,
employee.last_name,
role.title,
department.name as department,
role.salary,
/*concatenate to combine first and last name to show 
in manager column*/
CONCAT(mngr.first_name, " ", mngr.last_name) as manager

FROM employee
LEFT JOIN role ON role.id=employee.role_id
LEFT JOIN department ON role.department_id=department.id
LEFT JOIN employee as mngr ON employee.manager_id=mngr.id
;


/*query for view all roles*/

SELECT role.id,
role.title,
department.name as department,
role.salary

FROM role
LEFT JOIN department ON role.department_id=department.id
;





