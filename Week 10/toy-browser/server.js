const http = require("http");

const html =
`<html lang="en">
 <head>
  <style>
#container {
  width:500px;
  height:300px;
  display:flex;
  background-color:rgb(255,255,255);
}
#container #myid {
  width:200px;
  height:100px;
  background-color:rgb(255,0,255);
}
#container .c1 {
  flex:1;
  background-color:rgb(0,255,0);
}
  </style>
 </head>
 <body>
  <div id="container">
    <div id="myid"></div>
    <div class="c1"></div>
  </div>
 </body>
</html>`

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(html);
      });
  })
  .listen(8888);

console.log("server started.");
