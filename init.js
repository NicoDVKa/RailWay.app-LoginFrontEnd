import { createUser } from './fetchUser.js';
import {validatePassword,validateEmail,validateUser,validateForm} from './validateForm.js'


let form = document.getElementById("form");
let inputUsername = document.getElementById("inputUser");
let inputEmail = document.getElementById("inputEmail");
let inputPassword= document.getElementById("inputPassword");

form.addEventListener("submit", async(e) =>{
    e.preventDefault();
    if(validateForm(inputUsername.value,inputEmail.value,inputPassword.value)){
        let user = {
            userName : inputUsername.value,
            password : inputPassword.value,
            email: inputEmail.value
        }
        await createUser(user);



    }
});

inputUsername.addEventListener("keyup",(e) => {

    if(validateUser(inputUsername.value)){
        inputUsername.classList.remove("form__input--invalid");
        inputUsername.classList.add("form__input--valid");
    }else{
        inputUsername.classList.remove("form__input--valid");
        inputUsername.classList.add("form__input--invalid");
    }
});

inputEmail.addEventListener("keyup",(e) => {
    if(validateEmail(inputEmail.value)){
        inputEmail.classList.remove("form__input--invalid");
        inputEmail.classList.add("form__input--valid");
    }else{
        inputEmail.classList.remove("form__input--valid");
        inputEmail.classList.add("form__input--invalid");
    }
});

inputPassword.addEventListener("keyup",(e) => {
    if(validatePassword(inputPassword.value)){
        inputPassword.classList.remove("form__input--invalid");
        inputPassword.classList.add("form__input--valid");
    }else{
        inputPassword.classList.remove("form__input--valid");
        inputPassword.classList.add("form__input--invalid");
    }
});


