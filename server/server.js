"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var API = require("./routes/API");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost');
var bodyParser = require('body-parser'), express = require('express'), http = require('http'), path = require('path');
start();
function start() {
    var app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    var port = process.env.PORT ? process.env.PORT : 3000;
    http.createServer(app).listen(port);
    app.use('/api', API);
    app.get('/*', function (request, response) {
        response.sendFile(__dirname + '/public/index.html');
    });
}
//# sourceMappingURL=server.js.map