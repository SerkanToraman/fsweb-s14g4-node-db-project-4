/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('icindekiler').del()
  await knex('icindekiler').insert([
    {icindekiler_id: 1, icindekiler_adi: 'ZeytinYağı'},
    {icindekiler_id: 2, icindekiler_adi: 'Tuz'},
    {icindekiler_id: 3, icindekiler_adi: 'Sos'},
    {icindekiler_id: 4, icindekiler_adi: 'Yumurta'},
    {icindekiler_id: 5, icindekiler_adi: 'Hamburger Ekmeği'},
    {icindekiler_id: 6, icindekiler_adi: 'Hamburger Eti'},
    {icindekiler_id: 7, icindekiler_adi: 'Sucuk'},
  ]);
};
