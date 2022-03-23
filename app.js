// require('./model/db')
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/card_routes.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/",usersRoutes)

app.listen(PORT, () => console.log('Server running on port: http://localhost:${PORT}'));