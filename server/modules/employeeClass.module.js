//creates instances of employee objects
class Employee {
    constructor(name, startDate, salary, rating) {
        this.name = name;
        this.startDate = startDate;
        this.salary = salary;
        this.rating = rating;
        
    }

    daysAtCompany(startDate) {
        var currentDate = new Date();
        currentDate = currentDate.getTime();
        startDate = startDate.getTime();
        var elapsed = currentDate - startDate;
        var daysElapsed = Math.floor(elapsed/1000/60/(60*24));
        var fullYearsElapsed = Math.floor(daysElapsed/365);
        var daysLeft = daysElapsed%365;
        var lengthWorked = fullYearsElapsed + ' years ' + daysLeft +' days';
        return lengthWorked;
    }
}
var ourEmployee = new Employee('Carl', new Date('6/7/1999'), 250000, 3)
console.log('Carl ->', ourEmployee);
console.log('days function', ourEmployee.daysAtCompany(ourEmployee.startDate));
module.exports = Employee;