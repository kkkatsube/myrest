var mysql = require('./mysql');

module.exports = {
    list : function( func ) {
        mysql.query('select * from users', func);
    },
    read : function( id, func ) {
        mysql.query('select * from users where id = ?', [id], func);
    },
    create : function( name, func ) {
        mysql.query('insert into users ( name ) values( ? )', [ name ], func);
    },
    update : function( id, name, func ) {
        mysql.query('update users set name = ? where id = ?', [ name, id ], func);
    },
    delete : function( id, func ) {
        mysql.query('delete from users where id = ?', [ id ], func);
    }
};
