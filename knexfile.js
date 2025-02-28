// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // foreign key kullanacak isek aşağıdakini de ekliyoruz:
    pool: {
      afterCreate: (conn, done) => {
        // sqlite engine'e bağlandığımızda aşağıdaki kod çalışacak:
        conn.run('PRAGMA foreign_keys = ON', done); // FK kullanımını açmaya zorlayacak
      },
    },
  }
};
