const redis = require('redis');
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
    // password: ''
});

client.on('error', err => {
    console.log('Error ' + err);
});

client.set('foo', 'bar', (err, reply) => {
  if (err) throw err;
  console.log(reply);

  client.get('foo', (err, reply) => {
      if (err) throw err;
      console.log(reply);
  });
});

client.keys('*', function (err, keys) {
  console.log("keys");

  if (err) return console.log(err);

  for(var i = 0, len = keys.length; i < len; i++) {
    console.log(keys[i]);
  }
}); 

client.hgetall('*', function(err, keys){
  console.log("hgetall");
  if (err) return console.log(err);

  if(!keys) {
    console.log("hgetall returns nothing");

    return;
  };

  for(var i = 0, len = keys.length; i < len; i++) {
    console.log(keys[i]);
  }
})