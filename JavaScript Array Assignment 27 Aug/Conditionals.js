// Assignment 18
let age = prompt("Enter your age: ",1);

if(age >= 18){
    console.log("You are old enough to drive");
}else{
    console.log("You are below age limit. Please apply again after "+(18-age)+"years");
}

// Assignment 19
const isEven = num => {
    if(num % 2 === 0){
        console.log(num+" is a even number");
    }else{
        console.log(num+" is an odd number");
    }
}

isEven(6);

//  Assignment 20
const getGrade = grade => {
    if(grade >= 90 && grade <=100){
        console.log("Your grade is A");
    }else if(grade >= 70 && grade <= 89){
        console.log("Your grade is B");
    }else if(grade >= 60 && grade <= 69){
        console.log("Your grade is C");
    }else if(grade >= 50 && grade <= 59){
        console.log("Your grade is D");
    }else if(grade >= 0 && grade <= 49){
        console.log("Your grade is F");
    }else{
        console.log("Please enter a valid grade between 0-100");
    }
}

getGrade(55)

// Assignment 21
const checkSeason = month => {
    if(month === "September" || month === "October" || month === "November"){
        console.log("This is Autumn");
    }else if(month === "December" || month === "January" || month === "February"){
        console.log("This is Winter");
    }else if(month === "March" || month === "April" || month === "May"){
        console.log("This is Spring");
    }else if(month === "June" || month === "July" || month === "August"){
        console.log("This is Summer");
    }else{
        console.log("This is a mistake.Please dont try to create your own month.");
    }
}

checkSeason("May");

// Assignment 22
const getDaysNumber = num => {
    // Approach 1
    let daysArray = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(num === 2){
        return "28 or 29";
    }

    if(num > 12 || num < 0){
        return 0;
    }

    return daysArray[num-1];

    // Approach 2
    if(num > 12 || num < 0){
        return 0;
    }else if(num === 2){
        return "28 or 29";
    }else if(num === 1 || num === 3 || num === 5 || num === 7 || num === 8 || num === 10 || num === 12){
        return 31
    }else{
        return 30
    }

    // Approach 3
        if(num > 12 || num < 0){
            return 0;
        }else if(num === 2){
            return "28 or 29";
        }else if(num === 8){
            return 31;
        }else if(num % 2 === 0 || num === 9){
            return 30;
        }else{
            return 31;
        }
}

console.log("This month has "+getDaysNumber(9)+" days");

// Assignment 23

const getDaysInMonthLY = (month,year) => {
    let daysArray = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month > 12 || month < 0){
        return 0;
    }    

    if(month === 2){
        if(year % 100 === 0 && year % 400 === 0){
            return 29;
        }else{
            return 28;
        }
    }

    return daysArray[month-1];
}
console.log("This month has "+getDaysInMonthLY(2,1600)+" days");