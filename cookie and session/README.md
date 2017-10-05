# cooike和session

## cooike  
当向HTTP服务器请求某个URL时，浏览器将该URL与客户主机中存储的所有Cookie比较，如果发现域名相匹配Cookie，则匹配 Cookie中包含名字/值的那一行将被包含在HTTP请求头中，以保证依赖于Cookie的功能得以实现。


普通的ajax(json)请求和jsop跨域请求是默认携带cookie的，而cors跨域请求和fetch请求默认是不携带cookie的。

## session过程
浏览器，首次请求xxx网站服务器后，服务端因session_start()而立即创建新的session文件；  
文件名默认格式，示例: sess_0l4jphu0c88lm1ka6242po5763    sess_是前缀，后面的字符串是特殊算法生成的具有“唯一随机性”的串儿;  
后通过http协议的响应头，setcookie去回传PHPSESSID=0l4jphu0c88lm1ka6242po5763;  
浏览器收到响应内容后，将PHPSESSID作为身份信息，保存在cookie,默认是会话周期.  
后来的每次请求都会，携带所有的cookie信息(包括身份信息)提交给服务器脚本  
服务端收到请求后，比对查找是否有对应的session文件;  
如果有的话，则读取到超全局变量$_SESSION中;  
否则会新建session文件，以进行$_SESSION操作.  
备注:session文件也不是一直存在于服务端的，默认存活时间是24min。  
默认以文件形式存储，也可存储在DB中.但读取操作还是要消耗服务器资源的。  
由php.ini中可的相关参数决定存活时间、启动gc的几率、session_name命名及存储位置等。  
