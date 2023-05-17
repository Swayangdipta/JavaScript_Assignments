const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let meat = false;
let sugar = false;
let isAllergicToHoney = true;
shoppingCart.forEach(item => {
    if(item === "Meat"){
        meat = true;
    }
    if(item === "Sugar"){
        sugar = true;
    }
})

if(!meat){
    shoppingCart.unshift("Meat");
}

if(!sugar){
    shoppingCart.push("Sugar");
}

if(isAllergicToHoney){
    shoppingCart.map((item,index)=> {
        if(item === 'Honey'){
            shoppingCart.splice(index,1);
        }
    })
}

console.log(shoppingCart);