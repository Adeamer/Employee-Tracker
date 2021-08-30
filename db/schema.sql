DROP DATABASE IF EXISTS employee_db;
CREAT DATABASE employee_db;

USE DATABASE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT  NULL,
    manager_id INT NULL
    FOREIGN KEY (role_id)
    REFERENCES roles (id)
    FOREIGN KEY (id)
    REFERENCES employees (id)
);

SELECT * FROM employees;
SELECT * FROM roles;
SELECT * FROM department;