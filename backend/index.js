import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'



const app = express();


app.use(bodyParser.json({ limit: '30mb', extended:true })) //send images for larger in size
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://ganguli:ganguli@cluster0.ddmd4sw.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) //these two parameteres used to avoid errors or warnings
    .then(()  => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


//mongoose.set('useFindAndModify', false) //makes to avoid warnings to avoid warnings