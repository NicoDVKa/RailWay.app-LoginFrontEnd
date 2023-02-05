import { createUser } from './fetchUser.js';
import {validatePassword,validateEmail,validateUser,validateForm} from './validateForm.js'

let form = document.getElementById("form");

let containerInputUsername = document.getElementById("containerInputUsername");
let inputUsername = document.getElementById("inputUser");
let iconInputUsername = document.getElementById("inputUsernameIcon");
let msgInputUser = document.getElementById("msgInputUser");

let containerInputEmail = document.getElementById("containerInputEmail");
let inputEmail = document.getElementById("inputEmail");
let iconInputEmail= document.getElementById("inputEmailIcon");
let msgInputEmail = document.getElementById("msgInputEmail");


let containerInputPassword = document.getElementById("containerInputPassword");
let inputPassword= document.getElementById("inputPassword");
let iconInputPassword = document.getElementById("inputPasswordIcon");
let msgInputPassword = document.getElementById("msgInputPassword");
let inputPasswordIcon = document.getElementById("inputPasswordVisibility");

form.addEventListener("submit", async(e) =>{
    e.preventDefault();
    if(await validateForm(inputUsername.value,inputEmail.value,inputPassword.value)){
        let user = {
            userName : inputUsername.value,
            password : inputPassword.value,
            email: inputEmail.value
        }
        await createUser(user);

        reset();
    }
});

inputUsername.addEventListener("keyup",async(e) => {
    if(inputUsername.value !== ''){
        let {valid,msg} = await validateUser(inputUsername.value);
        if(valid){
            msgInputUser.innerText = "";
            iconInputUsername.innerText = "check_circle";
            containerInputUsername.classList.remove("form__containerInput--invalid");
            containerInputUsername.classList.add("form__containerInput--valid");
        }else{
            msgInputUser.innerText = msg;
            iconInputUsername.innerText = "cancel";
            containerInputUsername.classList.remove("form__containerInput--valid");
            containerInputUsername.classList.add("form__containerInput--invalid");
        }
    }else{
        msgInputUser.innerText = "Format incorrect";
        iconInputUsername.innerText = "cancel";
        containerInputUsername.classList.remove("form__containerInput--valid");
        containerInputUsername.classList.add("form__containerInput--invalid");
    }
});

inputEmail.addEventListener("keyup",async(e) => {
    if(inputEmail.value !== ''){
        let {valid,msg} = await validateEmail(inputEmail.value);
        if(valid){
            msgInputEmail.innerText = "";
            iconInputEmail.innerText = "check_circle";
            containerInputEmail.classList.remove("form__containerInput--invalid");
            containerInputEmail.classList.add("form__containerInput--valid");
        }else{
            msgInputEmail.innerText = msg;
            iconInputEmail.innerText = "cancel";
            containerInputEmail.classList.remove("form__containerInput--valid");
            containerInputEmail.classList.add("form__containerInput--invalid");
        }
    }else{
        msgInputEmail.innerText = "Format incorrect";
        iconInputEmail.innerText = "cancel";
        containerInputEmail.classList.remove("form__containerInput--valid");
        containerInputEmail.classList.add("form__containerInput--invalid");
    }
});

inputPassword.addEventListener("keyup",async(e) => {
    if(inputPassword.value !== ''){
        let {valid,msg} = await validatePassword(inputPassword.value);
        if(valid){
            msgInputPassword.innerText = "";
            iconInputPassword.innerText = "check_circle";
            containerInputPassword.classList.remove("form__containerInput--invalid");
            containerInputPassword.classList.add("form__containerInput--valid");
        }else{
            msgInputPassword.innerText = msg;
            iconInputPassword.innerText = "cancel";
            containerInputPassword.classList.remove("form__containerInput--valid");
            containerInputPassword.classList.add("form__containerInput--invalid");
        }
    }else{
        msgInputPassword.innerText = "Format Incorrect";
        iconInputPassword.innerText = "cancel";
        containerInputPassword.classList.remove("form__containerInput--valid");
        containerInputPassword.classList.add("form__containerInput--invalid");
    }
});

inputPassword.addEventListener('focusin', (e) => {
    
    if(inputPassword.type === "password"){
        inputPasswordIcon.innerText = "visibility";
    }else{
        inputPasswordIcon.innerText = "visibility_off";
    }
    inputPasswordIcon.classList.add("form__icon--button");
    

})

inputPassword.addEventListener('focusout', (e) => {
    

    inputPasswordIcon.innerText = "";
    inputPasswordIcon.classList.remove("form__icon--button");
})


inputPasswordIcon.addEventListener("click", (e)=>{
    if(inputPassword.type==="password"){
        inputPassword.type = "text";
        inputPasswordIcon.innerText = "visibility_off";
        inputPassword.classList.remove("form__input--password");
    }else{
        inputPassword.type = "password";
        inputPasswordIcon.innerText = "visibility";
        inputPassword.classList.add("form__input--password");
    }
})

const reset = () =>{
    console.log("reset");
    inputUsername.value = '';
    containerInputUsername.classList.remove("form__containerInput--valid");
    iconInputUsername.innerText = "";
    inputEmail.value = '';
    containerInputEmail.classList.remove("form__containerInput--valid");
    iconInputEmail.innerText = "";
    inputPassword.value = '';
    containerInputPassword.classList.remove("form__containerInput--valid");
    iconInputPassword.innerText = "";
}

