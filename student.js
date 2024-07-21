class Student {
    static idCounter = 10000;
    id;
    name;
    balance;
    courses;
    constructor(nam) {
        this.id = Student.generateID();
        this.name = nam;
        this.balance = 0;
        this.courses = [];
    }
    static generateID() {
        return this.idCounter++;
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += 1000;
    }
    viewBalance() {
        return this.balance;
    }
    payTuitionFee(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
export default Student;
