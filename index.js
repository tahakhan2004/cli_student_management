#! /usr/bin/env ts-node
import inquirer from 'inquirer';
import Student from './student.js';
const students = [];
const addStudent = async () => {
    const { stuname } = await inquirer.prompt([
        {
            type: 'input',
            name: 'stuname',
            message: 'Enter student name:',
        },
    ]);
    const student = new Student(stuname);
    students.push(student);
    console.log(`${student.getName()} added with ID: ${student.getId()}`);
};
const enrollStudent = async () => {
    const { stuid, course } = await inquirer.prompt([
        {
            type: 'input',
            name: 'stuid',
            message: 'Enter student ID:',
            validate: (input) => {
                return students.some(student => student.getId() === parseInt(input)) ? true : 'Student ID not found';
            },
        },
        {
            type: 'list',
            name: 'course',
            message: 'Select course:',
            choices: ["Web Development", "App Development", "Digital Marketing", "GD", "Ecommerce", "Web3", "AI", "ChatBot"],
        },
    ]);
    const studentvalid = students.find(student => student.getId() === parseInt(stuid));
    studentvalid?.enroll(course);
    console.log(`Student enrolled in ${course} course.`);
};
const viewBalance = async () => {
    const { stuid } = await inquirer.prompt([
        {
            type: 'input',
            name: 'stuid',
            message: 'Enter student ID:',
            validate: (input) => {
                return students.some(student => student.getId() === parseInt(input)) ? true : 'Student ID not found';
            },
        },
    ]);
    const studentvalid = students.find(student => student.getId() === parseInt(stuid));
    console.log(studentvalid?.viewBalance());
};
const payStudentFees = async () => {
    const { stuid, amount } = await inquirer.prompt([
        {
            type: 'input',
            name: 'stuid',
            message: 'Enter student ID:',
            validate: (input) => {
                return students.some(student => student.getId() === parseInt(input)) ? true : 'Student ID not found';
            },
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter amount to pay:',
        },
    ]);
    const studentvalid = students.find(student => student.getId() === parseInt(stuid));
    studentvalid?.payTuitionFee(amount);
    console.log("Payment Successful, Your new balance is " + studentvalid?.viewBalance());
};
const viewStatus = async () => {
    const { stuid } = await inquirer.prompt([
        {
            type: 'input',
            name: 'stuid',
            message: 'Enter student ID:',
            validate: (input) => {
                return students.some(student => student.getId() === parseInt(input)) ? true : 'Student ID not found';
            },
        },
    ]);
    const studentvalid = students.find(student => student.getId() === parseInt(stuid));
    studentvalid?.showStatus();
};
let condition = true;
while (condition) {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Select an action:',
            choices: ['Add Student', 'Enroll Student', 'View Balance', 'Pay Tuition', 'Show Status', 'Exit'],
        },
    ]);
    switch (action) {
        case 'Add Student':
            await addStudent();
            break;
        case 'Enroll Student':
            await enrollStudent();
            break;
        case 'View Balance':
            await viewBalance();
            break;
        case 'Pay Tuition':
            await payStudentFees();
            break;
        case 'Show Status':
            await viewStatus();
            break;
        case 'Exit':
            console.log('Exiting...');
            condition = false;
            break;
    }
}
