class API {
    static call = (route, onSuccess, onError, params={}) => {
        const baseURL = "http://127.0.0.1:8000/api/"
        let headers = {
            "Content-Type": "application/json",
        }

        if (localStorage.getItem("token")){
            headers["Authorization"] = `Token ${localStorage.getItem("token")}`
        } 
        fetch(`${baseURL}${route}`, {
            ...params,
            headers: {
                ...headers
            }
        }).then(function(response){
            if (response.ok){
                return response.json()
            }
            else{
                onError(response)
                return null
            }
        }).then(function(jsonResponse){
            if(jsonResponse){
                console.log("Respuesta recibida...")
                onSuccess(jsonResponse)
            }
        })
    }
}

export default API;