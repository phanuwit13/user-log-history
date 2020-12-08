const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

// var corsOptions = {
//     origin: ["http://localhost:1200", "http://localhost:3005"]
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'digio-user/out')));

// simple route
app.get("/test", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/digio-user/out/index.html'));
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/digio-user/out/index.html'));
});


// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });


const user = require('./routes/user');
app.use('/user', user);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})