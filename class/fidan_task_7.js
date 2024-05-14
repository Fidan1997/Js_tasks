// 1.

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
  	console.log(`Hello, ${this.name}!`);
  }
}

// 2.

const p = new Person("Max", 34);
p.sayHello();

// 3.

class Student extends Person {
	constructor(name, age, grade) {
	    super(name, age);
	    this.grade = grade;
	}
	sayHello() {
	    console.log(`Hello, my name is ${this.name} and I am in grade ${this.grade}.`);
	}
	
}

// 4.

const s = new Student("John", 22, 5);
s.sayHello();

// 5.

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
  	console.log(`Hello, ${this.name}!`);
  }
  
  static averageAge(people) {
        if (people.length === 0) {
            return 0;
        }
        let totalAge = 0;
        people.forEach(p => {totalAge = p.age + totalAge});
        return totalAge / people.length;
    }
}

const p1 = new Person("Max", 33);
const p2 = new Person("Kai", 13);
const p3 = new Person("Rai", 23);

console.log(Person.averageAge([p1,p2,p3]));

// 6.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }

    static averageAge(people) {
        if (people.length === 0) {
            return 0;
        }
        let totalAge = 0;
        people.forEach(p => {totalAge = p.age + totalAge});
        return totalAge / people.length;
    }

    get fullName() {
        return this.name;
    }

    set fullName(name) {
        this.name = name;
    }
}

// 7.

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
}

// 8.

class Animal {
    makeSound() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

// 9.

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        console.log(amount + " is deposited.");
    }

    withdraw(amount) {
        console.log(amount + " is withdrawed.");
    }

    get owner() {
        return this.owner;
    }

    get balance() {
        return this.balance;
    }
}

// 10.

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        this.books = this.books.splice(index, 1);
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`- "${book.title}" by ${book.author}`);
        });
    }
 }
