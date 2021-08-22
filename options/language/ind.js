exports.wait = () => {
        return `⌛ Sedang di Prosess ⌛`
}

exports.timeEnd = () => {
        return `Waktu Habis`
}

exports.succsess = () => {
        return `✔️ Berhasil ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *leveling telah aktif*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *disable leveling*`
}

exports.levelnol = () => {
        return `*LEVEL ANDA MASIH* 0 °-°`
}

exports.stick = () => {
        return `[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`
}

exports.Iv = () => {
        return `❌ Link tidak valid ❌`
}

exports.group = () => {
        return `[❗] Perintah ini hanya bisa di gunakan dalam group! ❌`
}

exports.ownerG = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌`
}

exports.ownerB = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌`
}

exports.admin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌`
}

exports.Badmin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌`
}

exports.kickb = () => {
        return `[❗] Perintah ini Dilarang Oleh Owner Bot Karena Berbahaya Untuk Bot ❌`
}
exports.daftarB = (prefix) => {
        return `──「 BELUM REGISTER 」──\nHalo ${pushname}\nKamu belum Register nih, register dulu yuk... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register zaki|15`
}

exports.daftarD = () => {
        return `*「 SUDAH REGISTER 」*\n\n*kamu sudah register di database bot*`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*_Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer Bot_*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nkamu sudah terdaftar dengan data \n\n〘 *DATA* 〙\n  ║ \n  ╠═➥ Name : ${namaUser} \n  ╠═➥ Number : wa.me/${sender.split("@")[0]} \n  ╠═➥ Age : ${umurUser} \n  ╠═➥ Register Time : ${time} \n  ║ \n╚═➥NS : ${serialUser} \n\n 〘 NOTE 〙: \n _JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING!!_`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* Tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*Maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

〘NOTE〙: _untuk mendapatkan limit. bisa lewat naik level atau buylimit_`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`〘 *ATM* 〙\n  ╠➥ *Nama* : ${pushname}\n  ╠➥ *Nomer* : ${sender.split("@")[0]}\n  ╠➥ *Uang* : ${uangkau}`
}
