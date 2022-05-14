var redis  = require("redis");
var client = redis.createClient();
client.connect();
client.set("my_key","Hello World!");
client.get("my_key",function(err,reply){
    console.log(reply);
});
client.quit();