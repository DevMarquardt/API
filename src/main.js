const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const router = require('./routes.js')
app.use(router)

require('./users/models/user')

app.listen(4300, () => {
    console.log("Server iniciado");
})