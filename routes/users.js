var express = require('express');
var mysql = require('../models/mysql');
var users = require('../models/users');

function response(req, res){
    return function (err, rows) {
        if (err) throw err;
        res.send(rows);
    }
}

module.exports = {
    index : function ( req, res ) {
        users.list( response( req, res ) );
    },
    show : function ( req, res ) {
        var id = req.params.id;
        console.log( 'GET : ' + id );
        users.read( id, response( req, res ) );
    },
    create : function (req, res) {
        var user = req.body;
        var name = user.name;
        console.log( 'POST : ' + name + ' | ' + JSON.stringify( user ) );
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
        users.create( name, response( req, res ) );
    },
    update : function (req, res) {
        var id = req.params.id;
        var user = req.body;
        var name = user.name;
        console.log( 'PUT : [' + id + ']' + name + ' | ' + JSON.stringify( user ) );
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
        users.update( id, name, response( req, res ) );
    },
    destroy : function (req, res) {
        var id = req.params.id;
        console.log( 'DELETE : ' + id );
        users.delete( id, response( req, res ) );
    },
};
