require("dotenv").config(); 
const express = require('express');
const cors = require('cors');
const { router } = require('./routes')

const app = express();
app.use(cors());
app.use("/v1", router)
const PORT = process.env.PORT || 3000;

// app.get('/videos', (req, res) => {
//     res.send({ data: "Hola mundo" })
// })

app.listen(PORT, () => console.log('Ready in port ', PORT));