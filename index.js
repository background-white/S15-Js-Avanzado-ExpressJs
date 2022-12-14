const http=require("http");

const hostname="127.0.0.1"
const port=3000
const nombre="Kevin Carrera Sánchez"

const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader("content-Type","text/plain");
    res.end("hola mundo");
});
server.listen(port,hostname,()=>{
    console.log(`Mi nombre es:${nombre}`)
});