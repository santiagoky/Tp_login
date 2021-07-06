'use strict'

const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');

DB(); // inicio de la base de datos 

const app = express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res)=> {
    res.send('');
});

app.use(router);
app.listen(propierties.PORT, () => console.log(`server running in port ${propierties.PORT}`));