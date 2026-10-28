const fetchdata = async ()=>{
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
         const maindata = await data.json();

        maindata.forEach((user) => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("Phone:", user.phone);
            console.log("---------------------");
        });
     } catch (error) {
        console.log("Error:", error.message);
    }
};

fetchdata();