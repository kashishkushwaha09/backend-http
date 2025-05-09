const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('server is created!')
    res.setHeader('Content-Type','text/html')
    if(req.url==='/home'){
        res.statusCode=200;
        res.end('<h1>Welcome home</h1>');
    }else{
        if(req.url==='/about'){
            res.statusCode=200;
            res.end('<h1>Welcome to About Us</h1>')
        }if(req.url==='/node'){
            res.statusCode=200;
            res.end('<h1>Welcome to my Node Us</h1>')
        }
        else{
            res.statusCode=404;
            res.end('<h1>Page not found</h1>')
        }
    }
});
const port=3000;
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
