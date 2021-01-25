class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return "Employee";
    }
}
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }
    getGithub() {
        return this.github;

    }
    getRole() {
        return "Engineer";
    }
}
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;

    }
    getRole() {
        return "Intern";
    }
}
exports.Employee = Employee;
exports.Manager = Manager;
exports.Engineer = Engineer;
exports.Intern = Intern;