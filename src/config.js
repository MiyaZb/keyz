const fs = require("fs")

global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}


userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner:  [ "6281274179050", "6281274179050", "6281274179050", "6281274179050" ],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "Tar bang",
   api: "Maaf terjadi kesalahan", 
   success: "nice",
   SudahAktif: "Lah kan udah aktif bang",
   SudahNonaktif: "Kan udah nonaktif bang",
   KhususGrup: "Cuma bisa di grup bang",
   KhususPribadi: "Cuma bisa di private messege",
   GrupAdmin: "Lu kan bukan admin awoaowakwoak",
   BotAdmin: "Gw mau aja, cuma gw bukan admin",
   KhususOwner: "cuma owner gw aja yg bisa pakai",
   KhususPremium: "lu kan gak prem"
   },
   error: {
   Iv: "Link ny salah gak?",
   tombol: "Silahkam Masukkan prameter on/off",
   forget: "Silahkan Masukkan Teks Anda."
   },
   simple: {
   expiredQr: "[!] Scan Kode QR Diatas, Expired dalam 20 detik",
   credentials: "credentials updated!",
   opendocs: "open docs is complete!", 
   readBaileys: "berhasil masuk ke dalam baileys",
   connecting: "Menghubungkan",
   refresh: "Berhasil Perbarui Jaringan\n"
   },
   prefix: ["/"],
   gexp: 50,
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Tar dulu bang",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU',
   packname: "Keyz-botz",
   author: 'oreki',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "gw bukan admin njir",
    nsfw: "fitur ny blom di aktifkan"
    }
}

module.exports = userbot
