/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('icindekiler_adim').del()
  await knex('icindekiler_adim').insert([
    { adim_id: 1,icindekiler_id:1,miktar:0.5 },
    { adim_id: 2,icindekiler_id:7,miktar:1 },
    { adim_id:3,icindekiler_id:4,miktar:3 },
    { adim_id:4,icindekiler_id:1,miktar:1 },
    { adim_id:5,icindekiler_id:6,miktar:2 },
    { adim_id:6,icindekiler_id:6,miktar:2 },
    { adim_id:8,icindekiler_id:1,miktar:2 },
    { adim_id:9,icindekiler_id:2,miktar:1 },    
  ]);
};
