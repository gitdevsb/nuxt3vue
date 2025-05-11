

const  getUserInfo = () => {
    // return  useFetch("/api/user", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },  
    // })
    return {
        name: "admin",
        age: 18
    }
    
}


export {
    getUserInfo
}