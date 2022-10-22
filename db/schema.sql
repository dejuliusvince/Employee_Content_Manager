/*Need to write sql schema tables according to directions on the readMe
-Each table needs primary key id to create relationships 
*/

DROP DATABASE IF EXISTS  employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  /*DECIMAL needs 2 arguments to specify prescision*/
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  /*parent department sharing id with child table role*/
  FOREIGN KEY(department_id) REFERENCES department (id)
  ON DELETE CASCADE 

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role (id)
  ON DELETE CASCADE,
  /*need to self-reference because manager_id uses the same table as id to set the relationship,
  use SET NULL instead of CASCADE to delete a manager without deleting all of their employees
  */
  FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
    
);

