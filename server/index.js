const express = require('express');
const cors = require('cors');
const rootrouter = require('./personalAssistant/pa');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", rootrouter);

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});