export const backendUrl = () =>{
    return `http://localhost:5000` ; 
}

export const apiConfig = () =>{
    const config = {
        headers : {'Content-Type' : "application/json"} , 
        withCredentials : true 
    }

    return config ; 
}