function personFactory(name) {
    return {
        talk() {
            return `Hello i am ${name}`
        }
    }
}
const me = personFactory('Irka');
console.log(me.talk());

const tony = personFactory('Tony');
console.log(tony.talk());

const karik = personFactory('Karik');
console.log(karik.talk());