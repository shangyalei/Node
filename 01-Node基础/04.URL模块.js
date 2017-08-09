//URL模块是用来解析URL地址的
var url = require('url');
var str="http://192.168.0.32:80/index.html?name=mark&age=7";

//url模块的 parse方法 用于把URL解析成一个对象类型的数据Url{}
//参数是请求地址,true把query中保存的数据，分析称键值对
console.log(url.parse(str,true));

/*Url {
    protocol: 'http:',  传输协议
        slashes: true,
        auth: null,
        host: '192.168.0.32:80',  域名+端口
        port: '80', 端口号
        hostname: '192.168.0.32', 域名-IP
        hash: null, 哈希值
        search: '?name=mark&age=7',  ?+传递进来的数据
        query: 'name=mark&age=7',  传递进来的数据没有问号
        pathname: '/index.html',  请求文件的路径名称
        path: '/index.html?name=mark&age=7',  路径名称+传递数据
        href: 'http://192.168.0.32:80/index.html?name=mark&age=7' 请求地址
}*/

//加第二个参数true

/*Url {
    protocol: 'http:',
        slashes: true,
        auth: null,
        host: '192.168.0.32:80',
        port: '80',
        hostname: '192.168.0.32',
        hash: null,
        search: '?name=mark&age=7',
        query: { name: 'mark', age: '7' },
        pathname: '/index.html',
        path: '/index.html?name=mark&age=7',
        href: 'http://192.168.0.32:80/index.html?name=mark&age=7' }*/


