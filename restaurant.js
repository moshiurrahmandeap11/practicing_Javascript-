// condition is - a restaurant where food free for children and 50% discount for 50+ old people and full payment for rest of them

const prompt = require("prompt-sync")();
const age = prompt("enter your age: ");

if (age >= 50 ){
    console.log("get 50% discount")
}

else if(age > 12 && age < 50 ){
    console.log("make the full payment")
}

else {
    console.log("food for free")
}