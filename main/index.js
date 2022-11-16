import express from 'express'
import mongoose from 'mongoose';
import router from '../router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;

const DB_URL = 'mongodb+srv://ChisatoPlay:Mir%40%242003@cluster0.favqmby.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL,{useUnifiedTopology: true , useNewUrlParser: true})
        app.listen(PORT,()=>console.log("Server started on port 5000"))
    }catch (e){
        console.log(e)
    }
}

startApp()