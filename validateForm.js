
export const validateUser = (username) =>{
    return true;
}

export const validateEmail = (email) =>{
    return true;
}

export const validatePassword = (password) =>{
    return true;
}

export const validateForm = (username,email,password) =>{
    return validateUser(username) & validateEmail(email) & validatePassword(password);
}