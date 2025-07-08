
import express from 'express';

import consign from 'consign';

var app = express();

app.set('view engine', 'ejs');

app.set('views', './app/views');

consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .into(app);



export default app;