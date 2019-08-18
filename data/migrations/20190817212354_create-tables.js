
exports.up = function(knex) {
  return knex.schema.createTable('zoos' , tbl => {
      tbl.autoincrement('zooID');
      tbl.string('zoo_name');
      tbl.string('address')  
  })
};

exports.down = function(knex) {
  
};
