var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
})); //handle body requests

var path = require('path');
app.use(bodyParser.json()); // let's make JSON work too!
app.use(express.static('public')); //permit public folder if needed for front end developer
app.use(express.static(__dirname + '/public')); //permit public folder if needed for front end developer
app.use(express.static(path.join(__dirname, '/public'))); //permit public folder if needed for front end developer
var port = process.env.PORT || 60001; //some port may be closed
app.listen(port, function () { // listen port
    console.log("starting to listen for port ... " + port);
});

var DBType = "localhost";
var DBSettings;
if (DBType == "localhost") {
    DBSettings = {
        multipleStatements: true,
        host: "localhost",
        database: "jobs",
        user: "root",
        password: "",
    }
} else {
    DBSettings = {
        multipleStatements: true,
        host: "online.host.com",
        database: "jobs",
        user: "root",
        password: "",
    }
}
var con = mysql.createPool(DBSettings);
const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}
app.use(errorLogger);

function auth(req, res, next) {
    if (req.query.user) {
        next();
    } else {
        res.status(404).send('Unauthorized');
    }
}

app.get('/tugas', auth, (req, res) => {
    con.query("SELECT id, title, description, finished FROM tass", function (err, rows) {
        if (!err) {
            console.log(rows);
            var response = {
                result: rows,
                message: 'rows fetched successfully',
                success: true
            }
            res.end(JSON.stringify(response));
        } else {
            clientMessage(res, 'get list tugas failed!', false);
        }
    });
});

app.post('/tugas', auth, (req, res) => {
    var queries = " INSERT INTO tasks (title, description) VALUES ( " +
        con.escape(req.query.title) + ", " +
        con.escape(req.query.description) +
        "); ";
    con.query(queries, function (err, rows) {
        if (!err) {
            clientMessage(res, 'input tugas succeed', true);
        } else {
            clientMessage(res, 'input tugas failed!', false);
        }
    });
});

app.get('/tasks/:id', auth, (req, res) => {
    con.query("SELECT title, description, finished FROM tasks WHERE id = " + con.escape(req.params.id), function (err, rows) {
        if (!err) {
            var response = {
                result: rows,
                message: 'rows fetched successfully',
                success: true
            }
            res.end(JSON.stringify(response));
        } else {
            clientMessage(res, 'get task failed!', false);
        }
    });
});

app.patch('/tasks/:id', auth, (req, res) => {
    var queries = " UPDATE tasks SET " +
        " title = " + con.escape(req.query.title) + ", " +
        " description = " + con.escape(req.query.description) +
        " WHERE id = " + con.escape(req.params.id) + "; ";
    con.query(queries, function (err, rows) {
        if (!err) {
            clientMessage(res, 'update tasks succeed!', true);
        } else {
            clientMessage(res, 'update tasks failed!', false);
        }
    });
});

app.delete('/tasks/:id', auth, (req, res) => {
    con.query(" DELETE FROM tasks WHERE id = " + con.escape(req.params.id) + "; ", function (err, rows) {
        if (!err) {
            clientMessage(res, 'delete tasks succeed!', true);
        } else {
            clientMessage(res, 'delete tasks failed!', false);
        }
    });
});

function clientMessage(res, message, success) {
    res.end(JSON.stringify({
        message: message,
        success: success
    }));
}