/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('adimlar').del()
  await knex('adimlar').insert([
    {adim_id: 1,adim_sirasi:1,adim_talimati:"Tavaya Zetinyağı Ekle",tarif_id:1},
    {adim_id: 2,adim_sirasi:2,adim_talimati:"Sucukları Kes ve tavada az pişir",tarif_id:1},
    {adim_id: 3,adim_sirasi:3,adim_talimati:"Yumurtaları tavaya kır, tuz ekle ve pişir",tarif_id:1},
    {adim_id: 4,adim_sirasi:1,adim_talimati:"Tavaya Terayağ Ekle",tarif_id:2},
    {adim_id: 5,adim_sirasi:2,adim_talimati:"Hamburger etini kızarana kadar pişir",tarif_id:2},
    {adim_id: 6,adim_sirasi:3,adim_talimati:"pişen eti hamburger ekmeğine koy ve sos ekle",tarif_id:2},
    {adim_id: 7,adim_sirasi:1,adim_talimati:"Büyük bir tencereyi orta ateşe koyun",tarif_id:3},
    {adim_id: 8,adim_sirasi:2,adim_talimati:"1 yemek kaşığı zeytinyağı ekleyin",tarif_id:3},
    {adim_id: 9,adim_sirasi:3,adim_talimati:"Tuz ekleyin",tarif_id:3},
  ]);

};
