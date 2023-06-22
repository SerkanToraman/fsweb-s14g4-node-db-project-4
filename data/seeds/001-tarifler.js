/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tarifler').del()
  await knex('tarifler').insert([
    {tarif_id: 1, tarif_adi: 'Sucuklu Yumurta',kayit_tarih:'01.05.2023'},
    {tarif_id: 2, tarif_adi: 'Hamburger',kayit_tarih:'01.06.2023'},
    {tarif_id: 3, tarif_adi: 'Spagetti Bolonez',kayit_tarih:'01.06.2023'}
  ]);
};
