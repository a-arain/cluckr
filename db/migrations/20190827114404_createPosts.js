exports.up = function(knex, Promise) {
   
    return knex.schema.createTable('posts', table => {
        table.increments('id');
        table.string('username');
        table.text('content');
        table.string('img_url');
        table.timestamp('createdAt').default(knex.fn.now());

    });
  };
  
  exports.down = function(knex, Promise) {

    return knex.schema.dropTable('posts');
    
  };
  