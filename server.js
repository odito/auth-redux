require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoute = require('./routes/userRoute');

const app = express();

app.use(express.json())
app.use(cors());


//connect to mongo
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
},(err)=>{
  if (err) throw err
  console.log(`yes mongdb connected`);
})


app.use('/',UserRoute )


const port = process.env.PORT || 4000;

app.listen(port, console.log(`server listening on port ${port}`))

