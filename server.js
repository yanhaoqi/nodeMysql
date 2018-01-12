/**
 * Created by yanhaoqi on 2018/1/12.
 */
//文档 https://www.npmjs.com/package/mysql
var http = require('http')
var mysql = require('mysql')

//建立连接  相当于 原生mysql命令 mysql -uroot -pabcd733584
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abcd733584'
})
//连接的异步回调
connection.connect(function(err){
    if(err){
        console.log('连接mysql错误' + err.stack)
        return;
    }
    console.log('成功连接mysql id:' + connection.threadId)
})

http.createServer(function(req, res){

}).listen(12345, function(){
    console.log('server started...')
})