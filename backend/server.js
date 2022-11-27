import express from 'express'
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Connect to DB
//Create Port
const port =process.env.Port||5000;
app.listen(port,()=>{
    console.log('Serve at: http://localhost:${port}');
})