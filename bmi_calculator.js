// a BMI calculator for all type of men

const prompt = require("prompt-sync")();
const weight = Number(prompt("enter your weight (in kg) : "));
const height = Number(prompt("enter your height[ in Feet ] : "));
const cheight = Number(prompt("enter your height[ in inch ] : "));


const cmeter = (height * 30.48) + (cheight * 2.54);

const finalheight = cmeter / 100;


const bmi = weight / (finalheight * finalheight);

const bmiFixed = Number(bmi.toFixed(2));

if (bmi < 18.5) {
    console.log( "your BMI is ", bmiFixed, "you're underweight . you need to take care of your health")
}

else if (bmi > 18.5 && bmi <= 24.9){
    console.log( "your BMI is ", bmiFixed, "you're Normal . Take care of your health")
}

else if (bmi > 24.9 && bmi <=29.9){
    console.log( "your BMI is ", bmiFixed, "you're Overweight . you need to take care of your health")
}

else {
    console.log( "your BMI is ", bmiFixed , "you're in danger & you need to take care of your health")
}


