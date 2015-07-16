var mysql = require('./mysql');

/**
 * ���[�UDAO
 * @class Users
 * @constructor
 */
var Users = module.exports = function() {};

/**
 * Users���f���̑S���R�[�h���擾����
 * @method list
 * @param {Function} func callback�֐� callback(err,rows)
 */
Users.prototype.list = function( func ) {
    mysql.query('select * from users', func);
}

/**
 * �w��ID��Users���f�����擾����
 * @method read
 * @param {Integer} id �擾����Users���f����ID
 * @param {Function} func callback�֐� callback(err,rows)
 */
Users.prototype.read = function( id, func ) {
    mysql.query('select * from users where id = ?', [id], function (err,rows){
        console.log( 'DEBUG : ' + rows.length );
        if( rows.length != 1 )
            throw new Error( 'User not found : ' + id );
        func(err,rows[0]);
    });
}

/**
 * �w��̓��e��Users���f���𐶐����A�i��������
 * @method create
 * @param {String} name ��������Users���f���̖��O
 * @param {Function} func callback�֐� callback(err,rows)
 * @return {Object} �i�����X�g���[�W��result
 * {
 *     insertId : �i���������ۂ�ID
 * }
 */
Users.prototype.create = function( name, func ) {
    mysql.query('insert into users ( name ) values( ? )', [ name ], func);
}

/**
 * �w��ID��Users���f���̓��e���A�w��̓��e�ōX�V���A�i��������
 * @method update
 * @param {Integer} id �X�V����Users���f����ID
 * @param {String} name �X�V����Users���f���̖��O
 * @param {Function} func callback�֐� callback(err,rows)
 */
Users.prototype.update = function( id, name, func ) {
    mysql.query('update users set name = ? where id = ?', [ name, id ], func);
}

/**
 * �w��ID��Users���f�����폜����
 * @method delete
 * @param {Integer} id �폜����Users���f����ID
 * @param {Function} func callback�֐� callback(err,rows)
 */
Users.prototype.delete = function( id, func ) {
    mysql.query('delete from users where id = ?', [ id ], func);
}
