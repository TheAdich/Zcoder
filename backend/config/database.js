const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();
const mongo_uri=process.env.DB_URI;
const connect = async ()=>{
    try {
        console.log('Connecting to database')
        await mongoose.connect(mongo_uri
        ).then(()=>{
            console.log('Database connected');
        }).catch((err)=>{
            console.log('Database connection error');
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = connect;