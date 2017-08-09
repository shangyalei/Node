var http = require('http');
var fs = require('fs');
var url= require('url');

//创建一个服务，就是创建一个超市，创建端口号，就是招一个服务员
//1.HTTP模块提供的方法
    //1)createServer();创建一个服务 参数是第一个过程 过程参数1请求，参数2响应
    //2)listen();创建监听端口,参数1要监听的端口号，参数2过程参数

//这个过程参数是，当客户端发送一个请求，当服务端接收到这个请求的后再执行
//过程参数的参数1request是一个对象参数，它保存的是客户端的请求信息
    //request.url保存的是客户端请求的的资源文件以及传递给服务器的参数
//过程参数的参数2response是一个对象参数，它提供了向客户端返回内容的方法
var server = http.createServer(function(request,response){

    console.log(request.url);
    var oUrl=url.parse(request.url,true);
    var pathname=oUrl.pathname;
    var query=oUrl.query;

    //根据请求的地址返回对应的资源
    //fs模块的方法 readFile();读取文件 参数1要读取的文件的地址 参数2读取的编码格式
    if(pathname==='/test.html'){//判断请求的资源文件名
        var con = fs.readFile('./test.html',"utf-8");
        //把读出来的内容，利用write()过程返回给客户端
        response.write(con);
        //利用end()方法 告诉服务器响应结束
        response.end();
    }



});

//2.监听端口
//过程参数，当端口号监听后，再执行
server.listen(80,function(){
    console.log("server is create success,listening on 80 port!")
});

