function Person(name) {
    this.name = name
}

const doggy = new Person('Doggy')

Person.prototype.talk = function() {
    return `Ciao, io sono ${this.name}`
}

const mary = new Person('Mary');

console.log(mary.talk())