const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network.js')
const auth = require('./components/auth/network.js')

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json')

// ROUTER 

app.use('/api/login', user);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc) );

 app.listen(config.api.port, () => {
    console.log('Escuchando en el puerto', config.api.port)
 })
