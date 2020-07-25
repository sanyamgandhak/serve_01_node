// note all below are the routers basically 
//the work of the router is to respond to the request send by the url to the server 
//now here it is important to note that routers* url"
var express=require('express');
var app=express();

// "/" => "HI there"
app.get("/",function(req,resp){
    resp.send("HI There");
});

app.get("/r/:subreddit",function(req,res){//here we are adding : to the subredit that means we can anything after /r/ will have same respomse and we dont have to make request as `/r/subredit ` as we made abpve
       var subreddit = req.params.subreddit;
        res.send("Welcome to the " + subreddit.toLocaleUpperCase() + " subredit!!");
     

});
app.get("/r/:title/comment/:post",function(req,res){//here we have add : to the more than 2 elements & it means we can have anythonh on the place of them!!
    res.send("Welcome to the comment section")
});
/* Below router is named as the * router by me*/
app.get("*",function(req,res){//this is the router for any url we get other than defined / (until now )
    res.send("You hit * url")
});
app.listen(3000,function(){//here it is the router for listening !! here we are assigning the server the port on which it will operate . 
    console.log("hi i am on!!")
});

