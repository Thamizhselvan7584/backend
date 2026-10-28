fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = response.json();
        return data;    
    })
    .then((data) => {
        data.forEach((user) => {
            console.log(user.name);
            console.log(user.username);
            
        });
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });