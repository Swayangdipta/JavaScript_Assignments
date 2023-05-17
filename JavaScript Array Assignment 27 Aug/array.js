// Assignment 27
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

let minAge = ages[0];
let maxAge = ages[ages.length-1];
let range = maxAge - minAge;
let medianAge = 0;
let averageAge = 0;

const getMedian = () => {
    if(ages.length % 2 === 0){
        medianAge = (ages[(ages.length/2)-1] + ages[ages.length/2]) / 2;
    }else{
        medianAge = ages[Math.ceil(ages.length/2)];
    }
}

const getAverageAge = () => {
    ages.forEach(age => {
        averageAge += age;
    })

    averageAge = averageAge / ages.length;
}

const compareValues = (minAge ,maxAge) => {
    if(Math.abs(minAge-averageAge) > Math.abs(maxAge - averageAge)){
        console.log("Minimun age - Average Age is greater than Maximum age - Average");
    }else{
        console.log("Maximum age - Average Age is greater than Minimum age - Average");
    }
}


getMedian()
getAverageAge()
console.log(ages);
console.log("Minimum age: "+minAge);
console.log("Maximum age: "+maxAge);
console.log("Median age: "+medianAge);
console.log("Average age: "+averageAge.toFixed(2));
console.log("Age range: "+range);
compareValues();