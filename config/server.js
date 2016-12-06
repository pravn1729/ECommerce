'use strict';

var serverSettings;

serverSettings = {
  development: {
    port: 3000,
    hostname: 'http://localhost',
    listenAddress: 'localhost'
  },
  test: {
    port: 3000,
    hostname: 'http://test.server.io',
    listenAddress: 'localhost'
  },
  production: {
    port: 80,
    hostname: 'http://test.server.io',
    listenAaddress: '0.0.0.0'
  }
};

module.exports = serverSettings;