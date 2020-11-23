INSERT INTO departments (deptName)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 130000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Brian', 'Boyd', 1, null),
    ('Jeremy', 'Gracyalny', 2, 1),
    ('Mat', 'Lynaugh', 2, 1),
    ('Brent', 'Johnson', 3, null),
    ('Larry', 'Valiquette', 4, 4),
    ('Levi', 'Olsen', 5, null),
    ('Emmeline', 'Johnson', 6, null),
    ('Beth', 'Krieg', 7, 7),
    ('Brian', 'Krieg', 7, 7);