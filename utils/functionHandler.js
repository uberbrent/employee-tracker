const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

console.table

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '*****',
    database: 'rosterDB'
});

const deptView = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.table(['Department ID', 'Department'], res);
    });
};

const roleView = () => {
    connection.query('SELECT * FROM roles LEFT JOIN departments ON roles.department_id = departments.deptName', (err, res) => {
        if (err) throw err;
        console.table(['Role ID', 'Job Title', 'Department', 'Salary']);
    });
};

module.exports = {
    deptView,
    roleView
}