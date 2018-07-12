const { Client } = require('pg');

const client = new Client ({ connectionString: "postgresql://localhost/skateboard"
});

client.connect();

module.exports = client;