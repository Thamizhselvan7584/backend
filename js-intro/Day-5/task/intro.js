
let number = 2;

const promise = new Promise((resolve, reject) => {
  
        if(number%2==0){
            resolve (`even ${number}`);
        
        }else{
           reject (`odd ${number}`);
            
        } 
    }
);
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
