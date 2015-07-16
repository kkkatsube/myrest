var express = require('express');
var Users = require('../models/users');

function response(req, res){
    return function (err, result) {
        if (err) throw err;
        res.send(result);
    }
}

module.exports = {
    list : function ( req, res ) {
        var users = new Users();
        users.list( response( req, res ) );
    },
    read : function ( req, res ) {
        var id = req.params.id;
        console.log( 'GET : ' + id );
        
        var users = new Users();
        users.read( id, response( req, res ) );
    },
    create : function (req, res) {
        var user = req.body;
        var name = user.name;
        console.log( 'POST : ' + name + ' | ' + JSON.stringify( user ) );
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
            
        var users = new Users();
        users.create( name, response( req, res ) );
    },
    update : function (req, res) {
        var id = req.params.id;
        var user = req.body;
        var name = user.name;
        console.log( 'PUT : [' + id + ']' + name + ' | ' + JSON.stringify( user ) );
        if( !name )
            throw new Error( 'name not found : ' + JSON.stringify( user ) );
            
        var users = new Users();
        users.update( id, name, response( req, res ) );
    },
    delete : function (req, res) {
        var id = req.params.id;
        console.log( 'DELETE : ' + id );
        
        var users = new Users();
        users.delete( id, response( req, res ) );
    },
};
