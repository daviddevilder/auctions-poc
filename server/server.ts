import * as API from './routes/API';
import {Request, Response} from 'express';
import * as mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost');
mongoose.connect('mongodb://dbadmin:aN0icePwd@35.178.184.104:27017/admin');

const bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http'),
    path = require('path');

start();

function start() {
    const app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    const port = process.env.PORT ? process.env.PORT : 3000;
    http.createServer(app).listen(port);

    app.use('/api', API);

    app.get('/*', (request: Request, response: Response) => {
        response.sendFile(__dirname + '/public/index.html');
    });
}
