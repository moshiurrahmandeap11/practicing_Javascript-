// multi level if else statement with a discount statregy


const price = 4000;

if ( price >= 10000) {
    const discount = price * 20 / 100;
    const total = price - discount;
    console.log("congratulations!! you got 20% discount . your payment amount is ", total);
}

else if (price >= 5000) {
    const discount = price * 10 / 100;
    const total = price - discount;
    console.log("congratulations!! you got 10% discount . your payment amount is ", total)
}

else if ( price >= 2500 && price < 5000 ) {
    const discount = price * 5 / 100;
    const total = price - discount;
    console.log("congratulations!! you got a 5% discount . your payment amount is ", total)
}

else {
    console.log("sorry sir, make the full payment kindly.your total bill is ", total);
}