/* let db = [{
    name:'hockey stick',
    price: 100
  },
  {
      name:'bat',
      price:200
  },
  {
      name: 'ball',
      price: 100
  }];

module.exports = db; */

const mysql = require('mysql');
const dbName = 'shopping'
var config  = {
    host: 'localhost',
    user: 'euler',
    password: 'euler16',
    database: dbName
};

var connection = mysql.createConnection(config);

function connect() {
    connection.connect();
}

function display(callback) {
    let sql = 'SELECT id,name from shplist';
    connection.query(sql,function(err,result) {
                            if (err) {
                                console.log(err);
                                console.log('in display');
                            }
                            else {
                                console.log(result);
                                console.log('in display');
                                if (callback !== undefined)
                                    callback(result);
                            }
                    });
}

function showid(id,callback) {
    let sql = `SELECT * from shplist WHERE id=${id}`;
    connection.query(sql,function(err,result) {
        if(err) {
            console.log(err);
            console.log('in showid');
        }
        else {
            console.log(result);
            callback(result);
        }
    });
}

function add(name,price,callback) {
    let new_id;
    connection.query('SELECT MAX(id) from shplist',function(err,result) {
        if(err)
            console.log(err);
        else {
            new_id = JSON.parse(JSON.stringify(result[0]))['MAX(id)'] + 1; // because result gives RowData
            let sql = `INSERT into shplist (id,name,price) VALUES (${new_id},'${name}',${price})`;
            connection.query(sql, function(err,result) {
                                        if (err) {
                                            console.log(err);
                                            console.log('in add');
                                        }
                                        else {
                                            console.log('added');
                                            callback(new_id);             
                                        }
                            });
        }
    }) 
}

function del(id,callback) {
    let sql = `DELETE from shplist WHERE id=${id}`
    connection.query(sql,function(err,numDel) {
                            if (err) {
                                console.log(err);
                                console.log('in del');
                            }
                            else {
                                console.log('deleted')
                                console.log(numDel.affectedRows);
                                if (callback !== undefined)
                                    callback(numDel.affectedRows);
                            }
                    });
}



module.exports = {
    connect: connect,
    show: display,
    showid: showid,
    add: add,
    del: del
};