    var http= require("http");

    function start(){
    var serverAction =function(request,response){
    console.log("request received");
    response.writeHead(200,{"Content-Type":"text-plain"});
    response.write("hello world");
    response.end();
  }
    http.createServer(serverAction).listen(process.env.PORT,process.env.IP);
    console.log("server started");
  }
  exports.start=start;