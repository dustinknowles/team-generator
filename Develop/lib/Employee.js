// TODO: Write code to define and export the Employee clas


//setting the employee class for info input
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getting name input
    getName() {
        return this.name;
    };
    // getting id input
    getId() {
        return this.id;
    };

    //getting email input
    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };
};



module.exports = Employee