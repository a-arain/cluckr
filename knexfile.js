// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'cluckr_db',
        username:'amaan',
        password: 'k3pler',
      },
      migrations: {
        tableName: 'migrations',
        directory: './db/migrations'
      }
    }
  
  };
