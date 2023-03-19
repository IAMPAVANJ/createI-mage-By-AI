const express = require("express");
const cors = require('cors')
require('dotenv').config();
const port  = 8080 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
const search = require("./Routes/post")

app.use("/search",search);


app.listen(port,()=>{console.log(`server is up at ${port}`)})
