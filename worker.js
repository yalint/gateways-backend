const SCWorker = require('socketcluster/scworker');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const mongoose = require('mongoose');
class Worker extends SCWorker {
    async run() {
        console.log('   >> Worker PID:', process.pid);
        let app = require('express')();
        let httpServer = this.httpServer;
        let scServer = this.scServer;
        app.use(cors());
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        app.use(cookieParser());
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        mongoose.connect(config.mongodbUrl, {
            useNewUrlParser: true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
        app.use('/api/v1/', require('./routes'));
        httpServer.on('request', app);
        scServer.on('connection', function(socket) {});
    }
}
new Worker();