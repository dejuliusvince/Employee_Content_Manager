USE employee_db;
/*Need to insert table column data from sample video for department*/
INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4)
;

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("John", "Doe", 1),
       ("Mike", "Chan", 2), 
       ("Ashley", "Rodriguez", 3),
       ("Kevin", "Tupik", 4),
       ("Kunal", "Singh", 5),
       ("Malia", "Brown", 6),
       ("Sarah", "Lourd", 7),
       ("Tom", "Allen", 8)
;


/*need to make an UPDATE crud operation to set the manager's id once the employee table has been created

UPDATE employee SET manager_id=1 WHERE id=2;

*/
