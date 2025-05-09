const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('server is created!')
    res.setHeader('Content-Type','text/html')
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Hello World</h1>');
    }else{
        if(req.url==='/pizza'){
            res.statusCode=200;
            res.end('<h1>This is yoyr pizza</h1>')
        }else{
            res.statusCode=400;
            res.end('<h1>Page not found</h1>')
        }
    }
});
const port=3000;
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
