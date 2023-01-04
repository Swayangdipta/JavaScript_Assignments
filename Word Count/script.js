let input = document.querySelector('.input');
let output = document.querySelector('.subResult');

const countChars = () => {
    let count = 0;

    if(input.value.length === 0){
        return
    }

    for (let index = 0; index < input.value.length; index++) {
        if(input.value.charAt(index) !== " "){
            count++
        }
    }
    
    output.textContent = count;
    count = 0;
}