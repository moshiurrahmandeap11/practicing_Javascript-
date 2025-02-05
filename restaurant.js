// condition is - a restaurant where food free for children and 50% discount for 50+ old people and full payment for rest of them

const prompt = require("prompt-sync")();
const age = prompt("enter your age: ");

const food = 500;

if (age >= 50 ){
    const discount = food * 50 / 100;
    const total = food - discount
    console.log("get 50% discount amount of pay ", total)
}

else if(age > 12 && age < 50 ){
    console.log("make the full payment")
}

else {
    console.log("food for free")
}