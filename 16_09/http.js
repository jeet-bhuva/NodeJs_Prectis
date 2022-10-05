const http = require('http')

http.createServer((req,res)=>{
    res.write("hello Good morning")
    res.end()

}).listen(5000)

