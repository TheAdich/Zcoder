const express = require('express');
const app = express();
const port =3000;
const connect = require('./config/database');
const signup = require('./pages/signup/signup');
const login = require('./pages/login/login');
const home = require('./pages/home/home');
app.use(express.json());
app.use(home.app);
app.use(login.app);
app.use(signup.app);
connect();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
