const express = require("express");
require('dotenv').config();
const cors = require('cors')
const port  = 8080 || process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const search = require("./Routes/post")

app.use("/search",search);


app.listen(port,()=>{console.log(`server is up at ${port}`)})
