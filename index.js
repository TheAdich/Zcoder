const express = require('express');
const app = express();
const port =3000;
const connect = require('./config/database');
const signup = require('./signup/signup');
app.use(express.json());
app.use(signup.app);
connect();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
