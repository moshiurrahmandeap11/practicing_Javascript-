// mark grading system for class 1-12 students

const prompt = require("prompt-sync")();
const totalMark = prompt("enter your mark & get the grade :");

if (totalMark >= 80 ){
    console.log("congratulations!! you got A+")
}

else if( totalMark >= 70 && totalMark < 80){
    console.log("you got GPA A")
}

else if (totalMark >= 60 && totalMark < 70){
    console.log("you got A-")
}

else if (totalMark >= 50 && totalMark < 60) {
    console.log("you got B")
}

else if (totalMark >= 40 && totalMark < 50){
    console.log("you got C")
}

else if (totalMark >= 33 && totalMark < 40){
    console.log("you got D")
}

else {
    console.log("you got enda")
}