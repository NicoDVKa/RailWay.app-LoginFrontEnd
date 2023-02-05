import {getUserByUserName,getUserByEmail} from './fetchUser.js';

export const validateUser = async (username) =>{
    username = username || '';
    let user  = await getUserByUserName(username);
    if( user !== null){
        return {valid:false,msg:"This username is already in use"};
    };
    let regex = /^[a-zA-Z0-9-.]+$/;
    if(!regex.test(username)){
        return {valid:false,msg:"Incorrect Format"};
    }
    return {valid:true};
}

export const validateEmail = async (email) =>{
    email = email || '';
    let user = await getUserByEmail(email);
    if(user !== null){
        return {valid:false,msg:"This email is already in use"};
    }
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(!regex.test(email)){
        return {valid:false,msg:"Incorrect Format"};
    }
    return {valid:true};
}

export const validatePassword = (password) =>{
let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])(?=.{8,})");
    if(!regex.test(password)){
        return {valid:false,msg:"Incorrect Format"};
    }
    return {valid:true};
}

export const validateForm = async (username,email,password) =>{
    
    let userValid =  (await validateUser(username)).valid;
    let emailValid = (await validateEmail(email)).valid;
    let passwordValid = validatePassword(password).valid;

    return userValid && emailValid && passwordValid;
}