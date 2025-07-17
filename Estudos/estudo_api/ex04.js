fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'Content-type': 'application/json'},
    body: JSON.stringify(
        [{name:"bryan"},
         {name:"Mario"}  
        ])
})
.then(data => data.json())
.then(res => console.log(res))
.catch(error =>console.log("Desculpe algo deu errado na sua requesição " + error))