const express = require("express");
const app = express();
const cors = require('cors')
const port  = 8080 || process.env.PORT;
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
const search = require("./Routes/post")

app.use("/search",search);


app.listen(port,()=>{console.log(`server is up at ${port}`)})
