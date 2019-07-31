var redis = require('redis');

var port = 6379;
var host = "127.0.0.1";
var client = redis.createClient(port, host);

client.on('connect', ()=> {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.log('Something went wrong' + err);
});

client.set('my test key', 'my test value', redis.print);
client.get('my test key', (error, result) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});

test();

function test () {
    client.incr('mycounter', (error, result) => {
        console.log('mycounter:' + result);
    });
}
//
// client.get('myid', (error, result) => {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     console.log('GET result ->' + result);
// });