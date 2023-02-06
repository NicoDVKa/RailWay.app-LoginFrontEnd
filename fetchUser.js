let urlBase = 'https://railwayapp-test-production.up.railway.app/user';
let url = 'http://localhost:3000/user';

export const createUser = async (userJson) => {
    
    await fetch (urlBase, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(userJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log("Hola  Mute",body);
    })
}

export const getUserByUserName = async (username) =>{
    let user  = null;
    await fetch (urlBase+'ByUsername/'+username, {
        method : 'GET'

    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( async body =>{
        user = body;
    })
    return user;
}

export const getUserByEmail = async (email) =>{
    let user  = null;
    await fetch (urlBase+'ByEmail/'+email, {
        method : 'GET'

    })
    .then( (httpResponse) => {
        return httpResponse.json();
    }) 
    .then( body =>{
        user = body;
    })
    return user;
}