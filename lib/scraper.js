const cheerio = require('cheerio'); 
const fetch = require('node-fetch'); 
const axios = require('axios');
function komiku(QUERY) { return new Promise((resolve, reject) => { 
    fetch('https://komiku.id/cari/?post_type=manga&s='+ 
    encodeURIComponent(QUERY) , 
    { method: 'get' 
 }) .then(res => res.text())
    .then(res => { 
        const soup = cheerio.load(res) 
        const IndTitle = []; 
        const thumb = []; 
        const hasil = []; 
        soup('div.daftar').each(function(a, b) { soup(b).find('span.judul2').each(function(c, d) { IndTitle.push(soup(d).text()) }) 
        soup('div.bgei').each(function(c, d) { soup(d).find('a').each(function(e, f) { soup(f).find('img').each(function(g, h) { thumb.push(soup(h).attr('data-src'))
     }) 
    }) 
  }) 
}) 
for (let i = 0; i < IndTitle.length; i++) { 
    hasil.push({ 
        Judul: IndTitle[i], 
        Gambar: thumb[i] 
    }) 
  } 
  resolve(hasil) 
 }) 
 .catch(reject) 
}) 
} 

module.exports.komiku = komiku