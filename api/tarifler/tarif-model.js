/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const db= require("../../data/db-config");

async function adimIdyeGoreIcindekiler(adim_id){

  // select ia.icindekiler_id, i.icindekiler_adi,ia.miktar from icindekiler_adim ia
  // left join icindekiler i on i.icindekiler_id = ia.icindekiler_id
  // left join adimlar a on a.adim_id = ia.adim_id
  // where ia.adim_id = 5

  let icindekiler = await db("icindekiler_adim as ia")
                            .leftJoin("icindekiler as i","i.icindekiler_id","ia.icindekiler_id")
                            .leftJoin("adimlar as a","a.adim_id","ia.adim_id")
                            .select("ia.icindekiler_id","i.icindekiler_adi","ia.miktar")
                            .where("ia.adim_id",adim_id)
      return icindekiler;

}

async function idyeGoreTarifGetir(tarif_id){

  // Sqlite Editor'den cekilen datalar
  // select * from tarifler t
  // left join adimlar a on t.tarif_id = a.tarif_id
  // left join icindekiler_adim ia on ia.adim_id = a.adim_id
  // left join icindekiler i on i.icindekiler_id=ia.icindekiler_id

  const tariflerListesi = await db("tarifler as t")
                                .leftJoin('adimlar as a','a.tarif_id','t.tarif_id')
                                .leftJoin('icindekiler_adim as ia',"ia.adim_id","a.adim_id")
                                .leftJoin('icindekiler as i','i.icindekiler_id','ia.icindekiler_id')
                                .select('t.*',"a.adim_id",'a.adim_sirasi','a.adim_talimati','i.icindekiler_id','i.icindekiler_adi','ia.miktar')
                                .where('t.tarif_id',tarif_id)
           
    if(tariflerListesi.length == 0){
      return null;
  }
  /*
  {
    "tarif_id" : 1,
    "tarif_adi": "Spagetti Bolonez",
    "kayit_tarihi": "2021-01-01 08:23:19.120",
    "adimlar": [
        {
        "adim_id": 11,
        "adim_sirasi": 1,
        "adim_talimati": "Büyük bir tencereyi orta ateşe koyun",
        "icindekiler": []
        },
        {
        "adim_id": 12,
        "adim_sirasi": 2,
        "adim_talimati": "1 yemek kaşığı zeytinyağı ekleyin",
        "icindekiler": [
            { "icindekiler_id": 27, "icindekiler_adi": "zeytinyağı", "miktar": 0.014 }
        ]
        },
    ]
}
*/

    let responseTarif ={
        tarif_id : tariflerListesi[0].tarif_id,
        tarif_adi: tariflerListesi[0].tarif_adi,
        kayit_tarihi:tariflerListesi[0].kayit_tarihi,
        adimlar:[]
    }

    for (let i=0; i<tariflerListesi.length;i++){
      const tarif = tariflerListesi[i];
      let responseAdim = {
        adim_id:tarif.adim_id,
        adim_sirasi:tarif.adim_sirasi,
        adim_talimati:tarif.adim_talimati,
        icindekiler:[]
      }
      if(!!tarif.icindekiler_id){
        //yukaridaki fonksiyonda data sql uzerinden ekildi ve bu sekilde kullanmak cardda cpuyu daha verimli safliyor
        let responseIcindekiler = await adimIdyeGoreIcindekiler(tarif.adim_id)
          responseAdim.icindekiler = responseIcindekiler
        /* for (let j = 0; j < tarif.length; j++) {
            const item = tarif[j];
            if(!!item.icindekiler_id && tarif.adim_id == item.adim_id){
                let icindekiler_model={
                    icindekiler_id:item.icindekiler_id,
                    icindekiler_adi:item.icindekiler_adi,
                    miktar:item.miktar
                }
                adimModel.icindekiler.push(icindekiler_model);
            }
        }*/
    }
    responseTarif.adimlar.push(responseAdim)

  }
  return responseTarif
}

module.exports = {
  idyeGoreTarifGetir
}