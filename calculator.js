var express =require ("express");
var app = express();
var bodyParser = require ("body-parser");

app.use(express.urlencoded());
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res)
{
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send(result);
});
app.listen(5000);