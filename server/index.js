require("dotenv").config();
const express = require('express');
const port = process.env.PORT || API_PORT;
const path = require('path');
const auth = require('./routes/auth.js');
const insurances = require('./routes/user/insurances.js');

let app = express();
app.use(express.json());

//Auth
app.use('/api/login', auth);
app.use('/api/user/insurances', insurances);

/*
incase i want to skipe the cors issue 

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});
*/

app.listen(port, () => console.log(`runing on ${port}`));