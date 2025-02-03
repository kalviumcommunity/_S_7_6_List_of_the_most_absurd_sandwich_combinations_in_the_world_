const express =require('express');
const app = express();
const port = 3000;

app.get('/ping',(req,res) =>{
    res.send('Pong!');
});

app.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});

//Add the basic Express app code to server.js along with /ping route

