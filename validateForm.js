import {getUserByUserName,getUserByEmail} from './fetchUser.js';

let validUser = false;
let validPassword = false;
let validEmail = false;

export const validateUser = async (username) =>{
    
    if(username === '' || username === null){
        validUser = false;
        return {valid:false,msg:"Enter a user name"};
    }
    let user  = await getUserByUserName(username);
    if( user !== null){
        validUser = false;
        return {valid:false,msg:"This username is already in use"};
    };
    let regex = /^[a-zA-Z0-9-.]+$/;
    if(!regex.test(username)){
        validUser = false;
        return {valid:false,msg:"Incorrect Format"};
    }
    validUser = true;
    return {valid:true};
}

export const validateEmail = async (email) =>{
    if(email === '' || email === null){
        validEmail = false;
        return {valid:false,msg:"Enter a user name"};
    }
    let user = await getUserByEmail(email);
    if(user !== null){
        validEmail = false;
        return {valid:false,msg:"This email is already in use"};
    }
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(!regex.test(email)){
        validEmail = false;
        return {valid:false,msg:"Incorrect Format"};
    }
    validEmail = true;
    return {valid:true};
}

export const validatePassword = (password) =>{

    let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])(?=.{8,})");
    if(!regex.test(password)){
        validPassword = false;
        return {valid:false,msg:"Incorrect Format"};
    }
    validPassword = true;
    return {valid:true};
}

export const validateForm = () =>{

    return validPassword && validUser && validEmail;
}