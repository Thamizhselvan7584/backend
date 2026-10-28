let Username = "admin";
let Password = "123";

const login = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Username === "admin" && Password === "123") {
            resolve("Login successful");
        } else {
            reject("Invalid credentials");
        }
    },3000);
})

login.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Login process completed");
})