/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('tarifler', tbl=>{
    tbl.increments('tarif_id');
    tbl.string('tarif_adi',32)
        .notNullable()
    tbl.date('kayit_tarih',{precision : 6})
          .notNullable()
  })
  .createTable('adimlar',tbl =>{
    tbl.increments('adim_id')
    tbl.integer('adim_sirasi')
        .notNullable();
    tbl.string('adim_talimati',50)
        .notNullable()
    tbl.integer('tarif_id')
        .unsigned()
        .notNullable()
        .references('tarif_id')
        .inTable('tarifler')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('icindekiler',tbl =>{
    tbl.increments('icindekiler_id')
    tbl.string('icindekiler_adi',50)
        .notNullable()
  })
  .createTable('icindekiler_adim',tbl =>{
    tbl.increments('icindekiler_adim_id')
    tbl.integer('adim_id')
          .references('adim_id')
          .inTable('adimlar')
    tbl.integer('icindekiler_id')
          .references('icindekiler_id')
          .inTable('icindekiler')
    tbl.decimal('miktar')
          .notNullable()
  })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
                    .dropTableIfExists('icindekiler_adim')
                    .dropTableIfExists("icindekiler")
                    .dropTableIfExists('adimlar')
                    .dropTableIfExists('tarifler')  
};
