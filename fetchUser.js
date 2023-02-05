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