const inquirer = require('inquirer');
const mysql = require('mysql2');
const { deptView, roleView } = require('./utils/functionHandler');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '*****',
    database: 'rosterDB'
});

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Make a selection from the following list:',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(data => {
        const choice = data.mainMenu;
        if (choice === 'View all departments') {
            deptView();
        } else if (choice === 'View all roles') {
            roleView();
        } else if (choice === 'View all employees') {
            console.log('View employees');
        } else if (choice === 'Add a department') {
            console.log('Add dept');
        } else if (choice === 'Add a role') {
            console.log('Add role');
        } else if (choice === 'Add an employee') {
            console.log('Add employee');
        } else if (choice === 'Update an employee role') {
            console.log('Update employee');
        }
    });
};

mainMenu()

    