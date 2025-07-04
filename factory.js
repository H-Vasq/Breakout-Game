function createPerson(name) {
    return {
        name: name,
        talk() {
            return `I am ${this.name}`
        }
    }
}

const me = createPerson('Bob')
const you = createPerson('Harry')

console.log(me)