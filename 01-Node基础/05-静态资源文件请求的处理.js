var http = require('http');
var fs = require('fs');
var url= require('url');

var server=http.createServer(function(request,response){

    //解析请求路径
    var oUrl=url.parse(request.url,true);
    var pathname=oUrl.pathname;
    var query = oUrl.query;

    var reg = /\.(HTML|JS|CSS|JSON|TXT|JPG|ICO|GIF|PNG)/i;
    if(reg.test(pathname)){
        //获取请求文件的后缀名,获取当前文件的MIME类型
        //每一种资源文件都有自己的表示类型
        //例如：HTML文件的MIME类型是“text/html”
        //浏览器会按照文件的MIME类型进行渲染
        //txt文件的MIME类型是'text/plain'
        var suffix=reg.exec(pathname)[1].toUpperCase();
        var mime='text/plain';
        switch (suffix){
            case 'HTML':
                mime='text/html';
                break;
            case 'CSS':
                mime='text/css';
                break;
            case 'JS':
                mime='text/javascript';
                break;
            case 'JSON':
                mime='application/json';
                break;
        }
        try{
            var con = fs.readFileSync("."+pathname,'utf-8');

            //重写响应头信息：告诉客户端的浏览器返回内容是什么样的MIME类型
            response.writeHead(200,{'content-type':mime+';charset=utf-8'});

            response.end(con);
        }catch(e){
            response.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
            response.end('请求文件没有找到');
        }
    }


    /*if(pathname==='/index.html'){
        //同步
        var con = fs.readFileSync('./index.html',"utf-8");
        //response.write(con);
        //response.end();
        response.end(con);//上面两种方法的简写
        return;
    }
    if(pathname==='/css/index.css'){
        var cons = fs.readFileSync('./css/index.css','utf-8');
        response.end(cons);
        return;
    }
    if(pathname==='/js/index.js'){
        var conj = fs.readFileSync('./js/index.js','utf-8');
        response.end(conj);
        return;
    }*/

});

server.listen(8080,function(){
    console.log('8080端口已经监听成功')
});


//根据前端请求的路径不一样，服务器返回的数据也就不一样，这种情况称为路由











