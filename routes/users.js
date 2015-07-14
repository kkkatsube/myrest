var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'test'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = {
    index : function (req, res) {
        connection.query('select * from users', function (err, rows) {
            if (err) throw err;
            res.send(rows);
        });
    },
    show : function (req, res) {
        var id = req.params.id;
        console.log( 'GET : ' + id );
        connection.query('select * from users where id = ?', [id], function (err, rows) {
            if (err) throw err;
            res.send(rows);
        });
    },
    create : function (req, res) {
        var user = req.body;
        var name = user.name;
        console.log( 'POST : ' + name + ' | ' + JSON.stringify( user ) );
        
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
        
        connection.query('insert into users ( name ) values( ? )', [ name ], function (err, rows) {
            if (err) throw err;
            res.send(rows);
        });
    },
    update : function (req, res) {
        var id = req.params.id;
        var user = req.body;
        var name = user.name;
        console.log( 'PUT : [' + id + ']' + name + ' | ' + JSON.stringify( user ) );
        
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
        
        connection.query('update users set name = ? where id = ?', [ name, id ], function (err, rows) {
            if (err) throw err;
            res.send(rows);
        });
    },
    destroy : function (req, res) {
        var id = req.params.id;
        console.log( 'DELETE : ' + id );
        connection.query('delete from users where id = ?', [ id ], function (err, rows) {
            if (err) throw err;
            res.send(rows);
        });
    },
};
