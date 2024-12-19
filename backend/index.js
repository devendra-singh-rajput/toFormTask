const express =require('express')
const cors= require('cors');
const { userRoute } = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app= express();

const PORT= process.env.PORT||3000
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
  


app.use('/users',userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})