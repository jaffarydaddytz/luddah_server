const express = require('express');
const app=express();
const port=3003;


app.get('/', (req, res)=>{

    // res.send('luddar server is up running');
    res.send('luddar server is up running');
});

app.listen(port ,()=>{
    console.log(`server listening at port: ${port}`);
})