var mysql = require('./mysql');

/**
 * ユーザDAO
 * @class Users
 * @constructor
 */
var Users = module.exports = function() {};

/**
 * Usersモデルの全レコードを取得する
 * @method list
 * @param {Function} func callback関数 callback(err,rows)
 */
Users.prototype.list = function( func ) {
    mysql.query('select * from users', func);
}

/**
 * 指定IDのUsersモデルを取得する
 * @method read
 * @param {Integer} id 取得するUsersモデルのID
 * @param {Function} func callback関数 callback(err,rows)
 */
Users.prototype.read = function( id, func ) {
    mysql.query('select * from users where id = ?', [id], func);
}

/**
 * 指定の内容でUsersモデルを生成し、永続化する
 * @method create
 * @param {String} name 生成するUsersモデルの名前
 * @param {Function} func callback関数 callback(err,rows)
 * @return {Object} 永続化ストレージのresult
 * {
 *     insertId : 永続化した際のID
 * }
 */
Users.prototype.create = function( name, func ) {
    mysql.query('insert into users ( name ) values( ? )', [ name ], func);
}

/**
 * 指定IDのUsersモデルの内容を、指定の内容で更新し、永続化する
 * @method update
 * @param {String} name 生成するUsersモデルの名前
 * @param {Function} func callback関数 callback(err,rows)
 */
Users.prototype.update = function( id, name, func ) {
    mysql.query('update users set name = ? where id = ?', [ name, id ], func);
}

/**
 * 指定IDのUsersモデルを削除する
 * @method 
 * @param 
 */
Users.prototype.delete = function( id, func ) {
    mysql.query('delete from users where id = ?', [ id ], func);
}
