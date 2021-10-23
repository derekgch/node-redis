
const {generateMockData} = require('./mockData');

const redis = require("redis");
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  // password: ''
});

client.on("error", (err) => {
  console.log("Error " + err);
});

const setValue = (key, value) => {
  client.set(key, value, (err, reply) => {
    if (err) throw err;
    console.log(reply);
  });
};

const getValue = (key) =>{
      client.get(key, (err, reply) => {
      if (err) throw err;
      console.log(reply);
    });
}

const getAllKeys = () => {
  client.keys("*", function (err, keys) {
    console.log("keys");

    if (err) return console.log(err);

    for (var i = 0, len = keys.length; i < len; i++) {
      console.log('key is:'+ keys[i]);
      getValue(keys[i]);
    }
  });
};

const hsetFunction = (key, field, value) => {
  client.hset(key, field, value, (err, reply) => {
    if (err) throw err;
    console.log(reply);
  });
};


hsetFunction("mysimplehash", "first", "wfwfee");
hsetFunction("mysimplehash", "second", "wfwfee second");
hsetFunction("mysimplehash", "whattt", "wfwfee whattt");

const hgetallFn = () => {
  client.hgetall("*", function (err, keys) {
    console.log("hgetall");
    if (err) return console.log("ERROR-:-" + err);

    if (!keys) {
      console.log("hgetall returns nothing");

      return;
    }

    for (var i = 0, len = keys.length; i < len; i++) {
      if (keys[i] && keys[i].toString().includes("bar")) {
        console.log("this key has something:-" + keys[i]);
      }
    }
  });
};

generateMockData(setValue);
getAllKeys();