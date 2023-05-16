const http = require("http");
const express = requiore("express");
const app = express();

var hostname = "127.0.0.1";
var port = 5000;

process.argv.forEach(function(item, index){
    console.log("argv %d, %s", index, item);
    if( item == '--port'){
        port = Number(process.argv[index + 1]);
    }
});

app.use('/public', express.static("public"));

app.listen(port, hostname, () => {
    console.log("서버 시작됨");
});

app.get("/", function(req, res, next){
    res.sendFile("index.html", {root: __dirname});
});

app.get('/lesson.html', function(req, res, next){
    res.sendFile("index.html", {root: __dirname});
});  