// basic types

let id: number = 10;
let company: string = "kingssharp";
let isPublished: boolean = false;
let x: any = "tech";

console.log({ id, company, isPublished, x });

x = null;
console.log({ id, company, isPublished, x });

// Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

ids.push(13);
console.log({ ids });

// tuples
let person: [number, string, boolean] = [2, "ff", false];

// tuples Arrays
let people: [number, string][] = [
  [1, "Ameen"],
  [2, "Qadeer"],
  [3, "Bilal"],
  [4, "Shahrukh"],
];

// union
let pId: string | number;
pId = 27;

// Enum
enum Direcetion1 {
  Up = 33,
  Down,
  Left,
  Right,
}

// Enum
enum Direcetion2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log({ Direcetion1, Direcetion2 });

// Objects

// const user: { id: number; name: string } = {
//   id: 1,
//   name: "Ameen",
// };

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ameen",
};

console.log({ user });

// Type Assertion

let cid: any = 2;

// let customerId = <string>cid;
let customerId = cid as number;

console.log({ customerId, cid });

customerId = 54;
cid = "5";

console.log({ customerId, cid });

// functions

function addNumber(x: number, y: number): number {
  return x + y;
}

console.log(addNumber(3, 6));

// void type
function log(message: number | string): void {
  console.log({ message });
}
log("my Message");

// Interfaces

interface UserInterface {
  readonly id: number; // cannot be changed, read only
  name: string; // required value
  age?: number; // optional value
}

const user1: UserInterface = {
  id: 1,
  name: "Qadeer",
  age: 22,
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x ** y;
console.log(add(3, 4));

// Classes
//  - Access Modifiers
//  - Data Modifiers

// *********************
// public by default

// three class types
//  - public :  Can Access and modify outside of this class.
//  - private : Can Only Access and modify inside of this class.
//  - protected : Can Only Access and modify inside of this class or any extended classes.

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  // constructor is a class method which runs whenever it instantiates an object.
  constructor(id: number, name: string) {
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
