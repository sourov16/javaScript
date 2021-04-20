const normalPerson = {
    firstName: 'Sourov',
    lastName: 'Modak',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount -tips -tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson);







const heroPerson = {
    firstName: 'joy',
    lastName: 'Modak',
    salary: 12000,
}
const friendlyPerson = {
    firstName: 'Roni',
    lastName: 'Modak',
    salary: 10000,
}

/*
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(5000);
console.log(heroPerson);


const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(8000);
console.log(friendlyPerson);
*/


// normalPerson.chargeBill.call(heroPerson, 1000, 400, 30);
// console.log(heroPerson);


normalPerson.chargeBill.apply(friendlyPerson, [1000, 200, 10]);
console.log(friendlyPerson);

