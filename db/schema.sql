DROP DATABASE IF EXISTS staff;
CREATE DATABASE staff;
USE staff;

CREATE TABLE departments(
    id INTEGER(3) AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INTEGER(3) AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees(
    id INTEGER(3) AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);