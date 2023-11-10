const user = {
    name: "Denys",
    age: 21,
    sayHi() {
        return `My name ${this.name}`
    }
}


console.log(user.sayHi());
console.log(user.name);



