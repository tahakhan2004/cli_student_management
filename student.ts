
class Student {
    private static idCounter: number = 10000;
    private id: number;
    private name: string;
    private balance: number;
    private courses: string[];

    constructor(nam: string) {
        this.id = Student.generateID();
        this.name = nam;
        this.balance = 0;
        this.courses = [];
    }

    private static generateID(): number {
        return this.idCounter++;
    }

    public enroll(course: string) {
        this.courses.push(course);
        this.balance += 1000;
    }

    public viewBalance(): number {
        return this.balance;
    }

    public payTuitionFee(amount: number) {
        this.balance -= amount;
    }

    public showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}

export default Student;
