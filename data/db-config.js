const knex=require('knex');
const config = require('../knexfile');
const NODE_ENV = process.env.NODE_EVN || 'development';

const db = knex(config[NODE_ENV]);

module.exports = db;
