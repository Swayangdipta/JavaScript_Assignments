let input = document.getElementById("checkerInput");
let outputField = document.querySelector(".result");

const checkPalindrome = () => {
    let originalStr = input.value;
    let reversedStr = "";

    if(originalStr.length === 0){
        outputField.textContent = "Provide a value.";
        return;
    }

    for (let index = originalStr.length - 1; index >= 0 ; index--) {
        reversedStr += originalStr.charAt(index);
    }
    console.log(reversedStr);
    if(originalStr === reversedStr){
        outputField.textContent = "This is a palindrome."
    }else{
        outputField.textContent = "This is NOT a palindrome."
    }
}