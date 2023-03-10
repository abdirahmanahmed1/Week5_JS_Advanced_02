// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.



// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results
function Person(items){
    this.name=items.name;
    this.age=items.age;
    this.hobby=items.hobby;
}

Person.prototype.speak=function(){
    return `hello My name is ${this.name} and I'm ${this.age} Years old, I Love to be ${this.hobby}.`
}

const me = new Person({
    name:'Abdirahman Ahmed Mohamed',
    age:18,
    hobby:'Software engineer'
})



function brother(items){
    Person.call(this,items)
}
brother.prototype=Object.create(Person.prototype)

const myBrother = new brother({
    name:'Abdulkerim Ahmed',
    age:22,
    hobby:'Doctor',
})


function sister(items){
    brother.call(this,items)
}

sister.prototype=Object.create(brother.prototype)
const mySister = new sister({
    name:'Mariam Ahmed',
    age:20,
    hobby:'pharmacist'
})
function Mom(items){
    sister.call(this, items)
}
Mom.prototype=Object.create(sister.prototype)
const myMom = new Mom({
    name:'Zahra Muhiyadin',
    age:40,
    hobby:'teacher',
})
function Daddy(items){
    Person.call(this, items)
}
Daddy.prototype=Object.create(Person.prototype)
const myDad = new Daddy({
    name:'Ahmed Mohamed',
    age:44,
    hobby:'businessman'
})
console.log(me.speak())
console.log(myBrother.speak())
console.log(mySister.speak())
console.log(myMom.speak())
console.log(myDad.speak())