const validate = e => {
    e.preventDefault()
    let errorField = document.querySelector('.errorMsg');
    errorField.textContent = null;
    let [username,email,password,confirmPassword] = [...e.target];
    let regEx=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/


    if(!username.value || !email.value || !password.value || !confirmPassword.value){
        errorField.textContent = "*All fields are required.";
        return;
    }

    if(password.value !== confirmPassword.value){
        errorField.textContent = "Passwords did not matched.";
        return;
    }

    if(password.value.length < 6){
        errorField.textContent = "Passwords must have 6 characters.";
        return;
    }

    if(!password.value.match(regEx)){
        errorField.textContent = "Passwords must have a speacial character and a number.";
        return;
    }
    document.querySelector('.successField').classList.add('successAni');
}