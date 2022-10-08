"use strict";
// basic types
let id = 10;
let company = "kingssharp";
let isPublished = false;
let x = "tech";
console.log({ id, company, isPublished, x });
x = null;
console.log({ id, company, isPublished, x });
// Arrays
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
ids.push(13);
console.log({ ids });
// tuples
let person = [2, "ff", false];
// tuples Arrays
let people = [
    [1, "Ameen"],
    [2, "Qadeer"],
    [3, "Bilal"],
    [4, "Shahrukh"],
];
// union
let pId;
pId = 27;
// Enum
var Direcetion1;
(function (Direcetion1) {
    Direcetion1[Direcetion1["Up"] = 33] = "Up";
    Direcetion1[Direcetion1["Down"] = 34] = "Down";
    Direcetion1[Direcetion1["Left"] = 35] = "Left";
    Direcetion1[Direcetion1["Right"] = 36] = "Right";
})(Direcetion1 || (Direcetion1 = {}));
// Enum
var Direcetion2;
(function (Direcetion2) {
    Direcetion2["Up"] = "Up";
    Direcetion2["Down"] = "Down";
    Direcetion2["Left"] = "Left";
    Direcetion2["Right"] = "Right";
})(Direcetion2 || (Direcetion2 = {}));
console.log({ Direcetion1, Direcetion2 });
const user = {
    id: 1,
    name: "Ameen",
};
console.log({ user });
// Type Assertion
let cid = 2;
// let customerId = <string>cid;
let customerId = cid;
console.log({ customerId, cid });
customerId = 54;
cid = "5";
console.log({ customerId, cid });
// functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(3, 6));
// void type
function log(message) {
    console.log({ message });
}
log("my Message");
const user1 = {
    id: 1,
    name: "Qadeer",
    age: 22,
};
const add = (x, y) => x ** y;
console.log(add(3, 4));
class Person {
    // constructor is a class method which runs whenever it instantiates an object.
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(`King: ${name}`);
    }
    // method
    register() {
        return `${this.name} is now registered`;
    }
}
// instantiates a new instance of Person
const person1 = new Person(1, "Ameen");
const person2 = new Person(2, "Qadeer");
console.log({ person2, person1 });
console.log(person2.register());
