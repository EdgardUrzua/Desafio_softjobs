const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'softjobs',
  password: 'Nelly',
  port: 5432,
});

module.exports = pool;