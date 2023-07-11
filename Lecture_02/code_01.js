const peole = ["Aaron","Mel","Jonh"];
const one = 1;
const str = "Hello World";
const employee = {
    firsName: "Anirach",
    lastName: "Mingkhwan",
};

function sayHello(person){
    console.log("Hello " + person.firsName);
}

console.log(typeof peole);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee)