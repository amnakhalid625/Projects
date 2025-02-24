const express = require("express");
require("dotenv").config();
const dbConnection = require("./models/dbConnection");
const app = express();
const userRoute=require('./routes/userRoute')
app.use(express.json());
const noteRoutes = require('./routes/noteRoutes');

const cors = require('cors');
app.use(cors());

app.use('/user',userRoute)



app.use('/api/note', noteRoutes);


// database connection
dbConnection();

app.listen(process.env.PORT, (req, res) => {
  console.log(`app listen port${process.env.PORT}`);
});
