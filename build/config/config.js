"use strict";

require('dotenv').config();

module.exports = {
  development: {
    username: 'todo',
    password: 'todo',
    database: 'todo_dev',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres'
  },
  test: {
    username: 'todo',
    password: 'todo',
    database: 'todo_test',
    use_env_variables: 'DB_TEST_URL',
    dialect: 'postgres'
  },
  production: {
    database: 'todo_prod',
    use_env_variables: 'DB_PROD_URL',
    dialect: 'postgres'
  }
};