const redisMock = require('redis-mock');
const rewire = require('rewire');

const asyncRedis = rewire('async-redis');

// eslint-disable-next-line no-underscore-dangle
asyncRedis.__set__({
  redisMock,
});

module.exports = asyncRedis;
