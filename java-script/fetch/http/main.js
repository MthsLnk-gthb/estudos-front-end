fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{ res.json()})
    .then((data)=>{ console.log(data)});

    const data = {
        title: "This is the title",
        body: "This is the post body",
        userId: 2
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
            "Content-type": 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))

