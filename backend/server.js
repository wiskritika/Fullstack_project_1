import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Express');
});



app.listen(5000, () =>{
    connectDB();
    console.log('server at http://localhost:5000')
} )

//IBztpNkb50gJ7Vm1