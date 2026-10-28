let mark = 67;

const student = new Promise((resolve, reject) => {
    if (mark > 35) {
        resolve("pass");
    } else {
        reject("fail");
    }
})

student.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

