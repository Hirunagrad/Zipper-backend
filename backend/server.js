const express = require('express');
const notes =require('./data/notes');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');


dotenv.config();

const app = express();
//required for using json
app.use(express.json());
connectDB();

app.get("/", (req,res)=>{
    res.send("API is running");
});


app.get("/api/notes", (req,res)=>{
 
    res.json(notes);
 
});




//  app.get("/api/notes/:id", (req,res) => {
//      const note = notes.find((n) => n._id === req.params.id);

//      res.send(note);
//  });

app.use('/api/users',userRoutes)
//hiruna
//gayashan

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000; 
app.listen(PORT,console.log(`server started on PORT ${PORT}`));



//install dotenv = npm install 