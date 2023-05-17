// Assignment 24
const {countries} = require('./countries')
const {webTechs} = require('./web_techs')

for(let i = 0; i < countries.length; i++){
    console.log("Country "+(i+1)+" : "+countries[i]);
    console.log("Web Tech "+(i+1)+" : "+webTechs[i]);
}

// Assignment 26

const checkCountry = country => {
    let checker = false;
    countries.map(item => {
        if(item === country){
            checker = true;
        }
    })
    
    if(checker){
        console.log(country.toUpperCase());
    }else{
        countries.push(country);
        console.log("Country Added");
    }
}

checkCountry("Ethiopia");
checkCountry("Ethiopia");