// Assignment 28
const checkPrime = () => {
    for(let i = 0 ; i <=100; i++){
        let isPrime = true;
        for(let j = 2; j < i ; j++){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }

        if( i > 1 && isPrime){
            console.log(i);
        }
    }
}

checkPrime()

// Assignment 29

let evenSum = 0, oddSum = 0;

for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        evenSum += i;
    }else{
        oddSum += i;
    }
}

console.log(`Even Sum is: ${evenSum} and Odd Sum is: ${oddSum}`);

// Assignment 30
const getHexNumber = () => {
    let hexNumber = '';
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for(let i = 0; i< hex.length; i++){
        hexNumber += hex[Math.floor(Math.random() * hex.length)];
    }    

    return hexNumber;
}


console.log(getHexNumber());
console.log(getHexNumber());
console.log(getHexNumber());