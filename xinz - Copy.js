const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const Crypto = require('crypto')
const request = require('request');
const color = require('./lib/color')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64');
const ms = require('parse-ms')
const toMs = require('ms')
const speedTest = require('speedtest-net');
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const tiktod = require('tiktok-scraper')
const { fetchJson, getBuffer } = require('./lib/fetcher')
const fetc = require('node-fetch');
const emojiUnicode = require('emoji-unicode')
const { recognize } = require('./lib/ocr')
const fetchs = require("node-superfetch");

// STICKER WM
const exect = require('await-exec')
const webp = require('webp-converter')
webp.grant_permission()
const sharp = require('sharp')
const Exif = require('./tools/exif')
const exif = new Exif()
const imgbb = require('imgbb-uploader');
const execter = require('await-exec')
const sizeOf = require('image-size')
const wav = require('node-wav')
const mime = require('mime-types') 
const nrc = require('node-run-cmd')

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
const _bot = JSON.parse(fs.readFileSync('./src/bot.json'))

offline = false
publik = false
waktuafk = '-'
alasanafk = '-'
prefix = 'z'
fake = '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭'
numbernye = '0'
setthumb = fs.readFileSync('./media/cecan.jpeg')
setgrup = "6281220439155-1606097314@g.us"
targetprivate = '0'

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam - ${pad(minutes)}Menit -  ${pad(seconds)}Detik\n\n 「 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 」`
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}
const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

        //====================================================================//
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "  Tengah Malam🌚 - *Tidur Kak*:)"; break;
                case 1: waktoo = "  Tengah Malam🌚 - *Tidur Kak*:)"; break;
                case 2: waktoo = "  Dini Hari🌒 - *Tidur Kak*:)"; break;
                case 3: waktoo = "  Dini Hari🌓 - *Tidur Kak*:)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi🌝"; break;
                case 7: waktoo = "Selamat Pagi🌝"; break;
                case 8: waktoo = "Selamat Pagi🌝"; break;
                case 9: waktoo = "Selamat Pagi"; break;
                case 10: waktoo = "Selamat Pagi🌞"; break;
                case 11: waktoo = "Selamat Siang🌞"; break;
                case 12: waktoo = "Selamat Siang🌞"; break;
                case 13: waktoo = "Selamat Siang🌞"; break;
                case 14: waktoo = "Selamat Siang🌞"; break;
                case 15: waktoo = "Selamat Sore🌝"; break;
                case 16: waktoo = "Selamat Sore🌝"; break;
                case 17: waktoo = "Selamat Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚 - *Tidur Kak*:)"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilHari = "" + waktoo;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib"; 


module.exports = xinz = async (xinz, mek) => {
    try {
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(mek.message)[0]
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let infoMSG = JSON.parse(fs.readFileSync('./antidelete/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./antidelete/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
        cekafk(afk)
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./antidelete/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		if(mek.key.fromMe){
			if (budo === `${prefix}public`){
				publik = true
				xinz.sendMessage(mek.key.remoteJid, `Sukses`, MessageType.text, {quoted: mek})
			}
			if (budo === `${prefix}self`){
				publik = false
				xinz.sendMessage(mek.key.remoteJid, `Sukses`, MessageType.text, {quoted: mek})
			}
		}
		/*if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
 		var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			xinz.sendMessage(mek.key.remoteJid, `*Mohon Maaf Nafiz Sedang Offline!*\n\n • Sejak : ${waktuafk}\n • Alasan : ${alasanafk}\n\nSilahkan hubungi lagi setelah 10 menit`, MessageType.text,selepbot72, {quoted: mek})
			}
		}*/
		if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk) 
			xinz.sendMessage(mek.key.remoteJid,`*Mohon Maaf Nafiz Sedang Offline!*\n\n • *Alasan :* ${alasanafk}\n • *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi setelah *10 menit*`, MessageType.text,{contextInfo: {'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙", 'jpegThumbnail': fs.readFileSync('./media/63170120.png')}}}})
			}
		}		
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === "6281220439155@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
						xinz.sendMessage(mek.key.remoteJid,`*Mohon Maaf Nafiz Sedang Offline!*\n\n • *Alasan :* ${alasanafk}\n • *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi setelah *10 menit*`, MessageType.text,{contextInfo: {'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙", 'jpegThumbnail': fs.readFileSync('./media/63170120.png')}}}})
					}
				}
						}
					}
				}
			}
		}				
	/*	if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === "6281220439155@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
                    var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
						}
					}
			xinz.sendMessage(mek.key.remoteJid, `*Mohon Maaf Nafiz Sedang Offline!*\n\n • Sejak : ${waktuafk}\n • Alasan : ${alasanafk}\n\nSilahkan hubungi lagi setelah 10 menit`, MessageType.text,selepbot72, {quoted: mek})
					}
				}
						}
					}
				}
			}
		}*/
		if (!publik) {
			if (!mek.key.fromMe) return
		}
		if (budo.startsWith('.santet')){
		var anu = budo.slice(8).split('|')
		//const itulo = m.message.extendedTextMessage.contextInfo.mentionedJid
		//console.log(mentioned)
		const itunya = anu[0].replace("@","").replace(" ","")
		var optionss ={
			key: {
      remoteJid: '6281220439155-160947628@g.us',
      fromMe: false,
      id: generateMessageID()
    },
    message: { conversation: anu[1] },
    messageTimestamp: '1608717869',
    status: 'ERROR',
    participant: itunya+'@s.whatsapp.net',
	ephemeralOutOfSync: false
  }
  console.log(optionss)
  await xinz.sendMessage(anu[3], anu[2], MessageType.text, {quoted: optionss})
		}	
		global.prefix
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const vhtearkey = 'Cipapremi919'
		const naufalkey = 'Nafizprem0919'
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const q = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const cheat = (teks) => {
			xinz.sendMessage(from, teks, text, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}	
		const bisnis = (teks) => {
		xinz.sendMessage(from, teks, text, { quoted: {
    "key": {
      "remoteJid": setgrup,
      "fromMe": false,
	  "participant": numbernye,
      "id": "0D5EAADD1166F55012EB42395DE58D61"
    },
    "message": {
      "productMessage": {
        "product": {
          "productImage": {
            "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc",
            "mimetype": "image/jpeg",
        "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=",
        "fileLength": "19247",
        "height": 416,
        "width": 416,
        "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=",
        "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=",
        "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8",
        "mediaKeyTimestamp": "1613162019",
        "jpegThumbnail": fs.readFileSync('./media/cecan.jpeg')
		},
          "productId": "3958959877488517",
          "title": fake,
          "description": "Kepoluah",
          "currencyCode": "USD",
          "priceAmount1000": "99999",
          "retailerId": "Kepolu",
          "url": "https://youtube.com/c/meknyhidayat",
          "productImageCount": 2
        },
        "businessOwnerJid": "6281220439155@s.whatsapp.net"
      }
    },
    "messageTimestamp": "1613442626",
    "status": "PENDING"
					}})
	}		
        mess = {
			wait: 'SABAR BANG...',
			success: 'SUKSES!',
			error: {
				stick: 'Itu video gblk!',
				Iv: 'Linknya mokad:v',
                api: 'error'
			},
			only: {
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}
		const menu = ` 	  「 Ｉｎｆｏｒｍａｓｉ Ｂｏｔ 」

◪ Bot Type : Nodejs - javascript

◪ Lib : Baileys

◪ Prefix : ${prefix}

◪ Owner : Nafiz

◪ ${tampilHari}

◪ ${tampilTanggal}

◪ ${tampilWaktu}


  	--- 「 *Commands* 」 ---

1.  • ${prefix}santet <Nomer|Teks1|Teks2|ID>
2.  • ${prefix}cfitnah <teks 1|teks 2|ID>
3.  • ${prefix}cr <@tag|Teks 1|Teks 2>
4.  • ${prefix}return <javascript>
5.  • ${prefix}chidetag <ID|teks >
6.  • ${prefix}hidetag <Teks-Nya>
7.  • ${prefix}simi <Teks-Nya>
8.  • ${prefix}speedtest
9.. • ${prefix}ss <url>
10. • ${prefix}senid
11. • ${prefix}getid
12. • ${prefix}speed
13. • ${prefix}upswimage <ReplyImg>
14. • ${prefix}upswteks <Captio-Nya>
15. • ${prefix}upswvideo <ReplyVideo>
16. • ${prefix}setname <Nama-Nya>
17. • ${prefix}setpp <ReplyImg>


</ *Group Command* >\n
18. • ${prefix}closetime <Durasi>
19. • ${prefix}opentime <Durasi>
20. • ${prefix}promote <Mention Target>
21. • ${prefix}demote <Mention Target>
22. • ${prefix}add <Nomer-Nya>
23. • ${prefix}grup close|open
24. • ${prefix}gcdesk <Text>
25. • ${prefix}linkgc

</ *Sticker Command* >\n 		
26. • ${prefix}exif <nama|author>
27. • ${prefix}sticker <Reply Img>
28. • ${prefix}stickerwm <nama|author>
29. • ${prefix}takestick <nama|author>
30. • ${prefix}sticktag <Id|namaStick>
31. • ${prefix}toimg <Reply Img>
32. • ${prefix}ttp <Teks-Nya>
33. • ${prefix}emojitosticker <Emoji>

</ *Youtube Command* > \n
34. • ${prefix}ytmp4 <Url Youtube>
35. • ${prefix}ytmp3 Url Youtube>
35. • ${prefix}ytstalk <username>
36. • ${prefix}play <Query>
37. • ${prefix}joox <Query>
38. • ${prefix}music <Query>
39. • ${prefix}getmusic <ID Download>
40. • ${prefix}video <Query>
41. • ${prefix}getvideo <ID Download>

</ *Instagram Command* >\n
42. • ${prefix}ig <Url Instagram>
43. • ${prefix}igstalk <Username>
	
</ *Tiktok Command* >\n 
44. • ${prefix}tiktok <Url Tiktok>
45. • ${prefix}tiktokaudio <Url Tiktok>	
46. • ${prefix}tiktokprofile <username>

</ *Media Command* >\n 
47. • ${prefix}bitly <Url>
48. • ${prefix}tinyurl <Url>
49. • ${prefix}pastebin <Text>	
50. • ${prefix}soundclound <Url Scdl>
51. • ${prefix}smule <Url Smule>
52. • ${prefix}jadwalsholat <Daerah>
53. • ${prefix}resepmasakan <Query>
54. • ${prefix}infocuaca <Daerah>
55. • ${prefix}jadwaltv <Channel>
56. • ${prefix}tovideo <ReplySticker>

</ *Filter Command* >\n
57. • ${prefix}triger <Reply Img>
58. •${prefix}wasted <Reply Img>
59. •${prefix}tourl <Reply Img>
60. •${prefix}drawing <Reply Img>
61. •${prefix}wanted <Reply Img>
62. •${prefix}gtav <Reply Img>
63. •${prefix}map <Lokasi>
64. •${prefix}raindrop <Reply Img>
65. •${prefix}linephoto <Reply Img>
66. •${prefix}laptop <Reply Img>
67. •${prefix}nightbeach <Reply Img>
68. •${prefix}moddroid <Aps Name>
69. •${prefix}happymod <Aps Name>
70. •${prefix}pinterest <Query>
71. •${prefix}pinterestdl <Url>
72. •${prefix}pixiv <Query>
73. •${prefix}pixivdl <Kode>
74. •${prefix}konachan <Query>

</ *Audio Command* >\n 
75. •${prefix}bass <Reply Audio>
76. •${prefix}tupai <Reply Audio>
77. •${prefix}slow  <Reply Audio>
78. •${prefix}gemuk <Reply Audio>

</ *Edukasi Command* >\n
79. •${prefix}nulis1 <Teks>
80. •${prefix}nulis2 <Teks>
81. •${prefix}nulis3 <Teks>
82. •${prefix}nulis4 <Name|Kelas|Text>
83. •${prefix}alquran1 <Nomer Surah>
84. •${prefix}alquran2 <Nomer Surah>
85. •${prefix}ayatkursi	  
86. •${prefix}randomquotes
87. •${prefix}quotesdilan
88. •${prefix}tebakgambar
89. •${prefix}brainly <Soal>
90. •${prefix}kalkulator <*, +, ->

</ *Maker Command* >\n
91. •${prefix}tahta <Teks>
92. •${prefix}ephoto1 <Teks>
93. •${prefix}ephoto2 <Teks>
94. •${prefix}ninjalogo <Teks1|Teks2>
95. •${prefix}textlight <Teks>
96. •${prefix}hallowentext <Teks>
97. •${prefix}hartatahta <Teks>
98. •${prefix}bikinquote <Teks|Author>

</ *Anime Command* >\n 
100. •${prefix}kusonime <Url>
101. •${prefix}kusonimesearch <Query>
102. •${prefix}otakudesu <Url>
103. •${prefix}otakudesusearch <Url>
104. •${prefix}nhentai <Kode Nuklir>
105. •${prefix}nhentaipdf <Kode Nuklir>

</ *Random Image* >\n 
106. •${prefix}randombts
107. •${prefix}randomexo
108. •${prefix}randomelf
109. •${prefix}randomloli
110. •${prefix}randomneko
111. •${prefix}randomwaifu
112. •${prefix}randomshinobu
113. •${prefix}randommegumin
114. •${prefix}randomart
115. •${prefix}randomwallnime

</ *Helper Command* >\n
116. •${prefix}offline <alasan>
117. •${prefix}online
118. •${prefix}public
119. •${prefix}self
120. •${prefix}antidelete aktif|mati
121. •${prefix}antidelete ctaktif|ctmati
122. •${prefix}antidelete banct

</ *Storage Command* >\n
123. •${prefix}addsticker <Name Stick>
124. •${prefix}delsticker <Name Stick>
125. •${prefix}liststicker
126. •${prefix}addvn <Name Audio>
127. •${prefix}delvn <Name Audio>
128. •${prefix}listvn
129. •${prefix}addimage <Name Img>
130. •${prefix}delimage <Name Img>
131. •${prefix}listimage
132. •${prefix}addvideo <ReplyVideo>
133. •${prefix}delvideo <Nama Video>
134. •${prefix}listvideo
135. •${prefix}readallchat
	  
	    𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙 `
			mess = {
				wait: '⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ ᴅɪ ᴩʀᴏꜱᴇꜱ...',
				success: 'ꜱᴜᴋꜱᴇꜱ...',
				error: {
					stick: 'ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ',
					Iv: 'ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!'
				},
				only: {
					group: 'ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴩ!',
					ownerG: 'ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!',
					ownerB: 'ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ʙᴏᴛ! ',
					premium: 'ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!',
					userB: `ʜᴀʟʟᴏ ᴋᴀᴋ ᴋᴀᴍᴜ ʙᴇʟᴏᴍ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪᴅᴀᴛᴀʙᴀꜱᴇ ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ \n${prefix}daftar`,
					admin: 'ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!',
					Badmin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!*',
				}
			}

		const botNumber = xinz.user.jid
		const ownerNumber = ["6281220439155@s.whatsapp.net","447537132816@s.whatsapp.net"] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await xinz.chats.all()
		const groupMetadata = isGroup ? await xinz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const isBot = isGroup ? _bot.includes(from) : false
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false		
		const insom = from.endsWith('@g.us')
		const nameReq = insom ? mek.participant : mek.key.remoteJid
		const pushname = xinz.contacts[nameReq] != undefined ? xinz.contacts[nameReq].vname || xinz.contacts[nameReq].notify : undefined			
			

		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
			xinz.sendMessage(from, teks, text, { quoted: mek })
		}
		const sendMess = (hehe, teks) => {
			xinz.sendMessage(hehe, teks, text)
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? xinz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xinz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
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
					xinz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		const sendPtt = (audio) => {
			xinz.sendMessage(from, audio, mp3, { quoted: mek })
		}

		const sendStickerUrl = async(to, url) => {
				var names = Date.now() / 10000;
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, './media/sticker/' + names + '.png', async function () {
					console.log('done');
					let filess = './media/sticker/' + names + '.png'
					let asw = './media/sticker/' + names + '.webp'
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
						let media = fs.readFileSync(asw)
						xinz.sendMessage(to, media, MessageType.sticker)
					});
				});
			}
function convertBalanceToString(angka) {
	var balancenyeini = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
	return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}			
		const fakegroup = (teks) => {
			xinz.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}	
		const sendPesan = (hehe, teks) => {
			xinz.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*NB0TS4*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}				
			const sendFakeStatus = (from, teks, faketeks) => {
				xinz.sendMessage(from, teks, MessageType.text,{contextInfo: {'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙", 'jpegThumbnail': fs.readFileSync('./media/cecan.jpeg')}}}})}
			const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await xinz.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = fs.readFileSync(`./media/alien.png`)
				xinz.sendMessage(from, qul, MessageType.extendedText, anoim)
			}

exports.ReplyStatusWA = async function(to, text, prevtext, msgId="B826873620DD5947E683E3ABE663F263"){
    waid = "0@s.whatsapp.net"
    anu  = {contextInfo: {'stanzaId': msgId, 'participant': waid, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": prevtext, 'jpegThumbnail': fs.readFileSync('./media/md.jpg')}}}}
    xinz.sendMessage(to, text, MessageType.extendedTextMessage, anu)
}
exports.ReplyStatusWALoc = async function(to, text, prevtext, msgId="B826873620DD5947E683E3ABE663F263"){
    waid = "0@s.whatsapp.net"
    anu  = {contextInfo: {'stanzaId': msgId, 'participant': waid, 'remoteJid': 'status@broadcast', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": "Wildfire", 'jpegThumbnail': fs.readFileSync('./media/md.jpg')}}}}
    xinz.sendMessage(to, text, MessageType.extendedTextMessage, anu)
}							
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 

			// AUTO
			for (let anji of setik){
				if (budy === anji){

					if (mek.key.fromMe){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					xinz.sendMessage(from, result, sticker, {quoted: mek})
				
					}
				}
			}
			for (let anju of vien){
				if (budy === anju){
					if (mek.key.fromMe){
					result = fs.readFileSync(`./media/vn/${anji}.mp3`)
					xinz.sendMessage(from, result, audio, {quoted: mek, ptt: true})
					}
				}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					if (mek.key.fromMe){
					result = fs.readFileSync(`./media/image/${anji}.jpeg`)
					xinz.sendMessage(from, result, image, {quoted: mek})
					}
				}
			}
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		/*if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mEXEC\x1b[1;33m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mEXEC\x1b[1;33m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))*/
        		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

        switch (command) {
			case 'quotesdilan':
                    quotedilan = await fetchJson(`http://lolhuman.herokuapp.com/api/quotes/dilan?apikey=Nafizprem0504`)
                    dilan = quotedilan.result
                    sendFakeStatus(from, dilan, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
                    break    
            case 'simi': 
 		que = body.slice(6)
 		sigo = await axios.get(`https://naufalhoster.xyz/tools/simsimi?apikey=Nafizprem0504&pesan=${que}`).then(response => {
 		siget = response.data.result.response
 		sendFakeStatus(from, `🐣 : *${siget}*`, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
            })
 	break
			case 'menu':
			case 'help':
			case 'cmd':
					//ppimg = 'https://i.pinimg.com/564x/ba/0f/27/ba0f273d2d420d03b690141efa37807f.jpg'
					//ppimg = 'https://i.pinimg.com/564x/62/da/23/62da234d941080696428e6d4deec6d73.jpg'
					//ppimg = 'https://i.pinimg.com/originals/9a/11/33/9a1133d4af3b637e1c6c8ff251785f27.jpg'
					//ppimg = 'https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?size=338&ext=jpg'
					ppimg = 'https://i.ibb.co/L9rBLWt/63170120.png'
						buffer = await getBuffer(ppimg)
				xinz.sendMessage(from, buffer,image,{contextInfo:{ forwardingScore: 999, isForwarded: true},caption: menu,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {  "imageMessage":{"url":"https://mmg.whatsapp.net/d/f/AuDB-5DeyrpWCEilqUEo6aQiGWoC7wokZCtOBMa5rBlf.enc","mimetype":"image/jpeg","fileSha256": "mO1LgrGfnRdNl0ONZLkR329EiQQVqqxOdcl0XlazfxY=", "fileLength": "47141", "height":393,"width":700,"mediaKey":"ybfjha3T8yK2KJxGK/PQ0rPH11QDA9qtk+lI0Aa4hX8=","fileEncSha256":"KBJq28498IikMPYQEIG1jgAx4GiWC2QqKomsI7l02WU=","directPath":"/v/t62.7118-24/34732414_450476602977152_5863934253334182928_n.enc?oh=8992ac7ce8a5f1f0809700aaed478774&oe=605E402D","mediaKeyTimestamp":"1613970988","jpegThumbnail": fs.readFileSync(`./media/cecan.jpeg`), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })		
				//sendFakeStatus(from, buffer,image, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭', { quoted : mek, caption: menu})
				break			
            case 'online':
					offline = false
					sendFakeStatus(from, `*Status : ONLINE*`, `*𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙*`)
					break				
			case 'offline':
				case 'offline':
					offline = true
					waktuafk = Date.now()
					anuu = body.slice(9) ? body.slice(9) : '-'
					alasanafk = anuu
					sendFakeStatus(from, `Fitur OFFLINE diaktifkan`, `*𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙*`)
					break
		case 'ttg':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					ani = body.slice(5)
					anu = await getBuffer(`https://api.vhtear.com/textxgif?text=${ani}&apikey=${vhtearkey}`)
					exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return cheat(mess.error.stick)
						buffer = fs.readFileSync(rano)
						xinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break		
		case 'tolol':
		teks = body.slice(7)
		anu = await getBuffer(`http://api.lolhuman.xyz/api/toloserti?apikey=Nafizprem0504&name=${teks}`)
		xinz.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break								
            case 'hidetag':
                ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
				case 'forward':
                const msk = body.slice(9)
                await xinz.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*NB0TS4*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				break              
					case 'randombokep':
				 data = JSON.parse(fs.readFileSync('./lib/18.json')) 
				 datas = JSON.parse(fs.readFileSync('./lib/18img.json')) 
                 randIndex = data[Math.floor(Math.random() * data.length)]
                 randIndexs = datas[Math.floor(Math.random() * datas.length)]
                 randBokep = await getBuffer(randIndexs)
                 reply(mess.wait)
                 xinz.sendMessage(from, randBokep, image, {quoted: mek, caption: randIndex})
				break				  
					case 'forwardto':
				if (!mek.key.fromMe) return xinz.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*NB0TS4*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(11)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
                sendPesan(`${ajk}@s.whatsapp.net`, chatnya)
				break                
            case 'cr':
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				xinz.sendMessage(from, cs[2], MessageType.text, target)
				break
                case 'antidelete':
                    const dataRevoke = JSON.parse(fs.readFileSync('./antidelete/gc-revoked.json'))
                    const dataCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked.json'))
                    const dataBanCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked-banlist.json'))
                    const isRevoke = dataRevoke.includes(from)
                    const isCtRevoke = dataCtRevoke.data
                    const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                    if (args.length === 0) return xinz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                    if (args[0] == 'aktif') {
                        if (isGroup) {
                            if (isRevoke) return xinz.sendMessage(from, `*Sudah diaktifkan di grup ini!*`, MessageType.text)
                            dataRevoke.push(from)
                            fs.writeFileSync('./antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                            xinz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                        } else if (!isGroup) {
                            xinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                        }
                    } else if (args[0] == 'ctaktif') {
                        if (!isGroup) {
                            if (isCtRevoke) return xinz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                            dataCtRevoke.data = true
                            fs.writeFileSync('./antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                            xinz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                        } else if (isGroup) {
                            xinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                        }
                    } else if (args[0] == 'banct') {
                        if (isBanCtRevoke) return xinz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                        if (args.length === 1 || args[1].startsWith('0')) return xinz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                        dataBanCtRevoke.push(args[1] + '@s.whatsapp.net')
                        fs.writeFileSync('./antidelete/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                        xinz.sendMessage(from, `Kontak ${args[1]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                    } else if (args[0] == 'mati') {
                        if (isGroup) {
                            const index = dataRevoke.indexOf(from)
                            dataRevoke.splice(index, 1)
                            fs.writeFileSync('./antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                            xinz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                        } else if (!isGroup) {
                            xinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                        }
                    } else if (args[0] == 'ctmati') {
                        if (!isGroup) {
                            dataCtRevoke.data = false
                            fs.writeFileSync('./antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                            xinz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                        } else if (isGroup) {
                            xinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                        }
                    }
                    break
                case 'ytmp4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
								const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
								sendMediaURL(from, thumb, captionsYtmp4)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})
			
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
				case 'ytvideo':
					data = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${body.slice(9)}&apikey=nafiz2020`)
					teks = `  --- 「 Youtube MP4 」 --- 

◪ Title: ${data.result.title}

◪ Size: ${data.result.size}

◪ Source: ${data.result.source}`
			buff = await getBuffer(data.result.url_video)
				xinz.sendMessage(from, buff, video, {quoted: mek, caption: teks})
				break
					case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
								const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
								sendMediaURL(from, thumb, captions)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})

							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
			case 'joox':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙋𝙡𝙖𝙮 𝙎𝙤𝙣𝙜 𝙁𝙧𝙤𝙢 𝙅𝙤𝙤𝙭`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, { method: 'get' })
				teks = '-「 Play Music From Joox 」-\n'
				const joox = data.result
				teks += `\n- Judul : ${joox.title}\n- Album : ${joox.album}\n- Publish At : ${joox.dipublikasi}\n\n   -「 SELF-BOT 」-`
				thumb = await getBuffer(joox.thumb)
				xinz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				xinz.sendMessage(from, thumb, image, { quoted: mek, caption: teks })
				buffer = await getBuffer(joox.mp3)
				xinz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: mek })
				break						
                    case 'play':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${body.slice(6)}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                    case 'speedtest':
					reply('Sedang Mengecek...')
					const speedTst = await speedTest({acceptLicense: true, acceptGdpr: true})
					const speer = `    --- 「 Speedtest 」 ---
 
● Server: *${speedTst.isp}*
					 
● Ping: *${speedTst.ping.latency}Ms*
 					 
● Upload: *${speedText(speedTst.upload.bandwidth)}*
					 
● Download: *${speedText(speedTst.download.bandwidth)}*
					 
	「 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭 」`
					sendFakeStatus(from, speer, '𝙎𝙋𝙀𝙀𝘿𝙏𝙀𝙎𝙏 - 𝘽𝙊𝙏')
						break

//------------------------------------------------------ // STICKER MENU // ---------------------------------------------------------------------------------//
				case 'exif':
					const exifff = body.slice(6)
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
			case 'ocr':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await xinz.downloadAndSaveMediaMessage(encmedia)
					reply('Sedang di proses...*')
					await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
						.then(teks => {
							reply(teks.trim())
							fs.unlinkSync(media)
						})
						.catch(err => {
							reply(err.message)
							fs.unlinkSync(media)
						})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
				}
				break			
				case 'identitaspalsu':
				case 'fake':
				anu = await fetchJson(`https://pencarikode.xyz/api/faker?country=id&apikey=pais`, {method: 'get'})
         		teks = `*◪* *IDENTITAS PALSU*\n  *├─ ❏* *Name* : ${anu.data.name.fullName}\n  *├─ ❏* *Birthday* : ${anu.data.date.birthday}\n  *└─ ❏* *Phone Number* : ${anu.data.phone.phone_number}`
				cheat(teks)
				break					
				case 'stickerwm':
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const wmsti = body.slice(11)
 		if (!wmsti.includes('|')) return await reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media1 = await xinz.downloadMediaMessage(encmedia)
						const packname1 = wmsti.split('|')[0]
 	const author1 = wmsti.split('|')[1]
						exif.create(packname1, author1, `takestick_${sender}`)
						sharp(media1)
							.resize({
								width: 256,
								height: 256,
								fit: 'contain',
								background: {
									r: 255,
									g: 255,
									b: 255,
									alpha: 0
								}
							})
							.toFile(`./temp/takestickstage_${sender}.webp`, async (err) => {
								if (err) return console.error(err)
								await exect(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/takestickstage_${sender}.webp -o ./temp/takestick_${sender}.webp`, { log: true })
								if (fs.existsSync(`./temp/takestick_${sender}.webp`)) {
									const datast = fs.readFileSync(`./temp/takestick_${sender}.webp`)
									await xinz.sendMessage(from, datast, sticker, {quoted: { key: { fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗙𝗜𝗭*` }}})
									fs.unlinkSync(`./temp/takestick_${sender}.webp`)
									fs.unlinkSync(`./temp/takestickstage_${sender}.webp`)
									fs.unlinkSync(`./temp/takestick_${sender}.exif`)
								}
							})
					} else {
						reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
					}
					break
				case 'takestick':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					const pembawm = body.slice(11)
 	if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xinz.downloadMediaMessage(encmedia)
					const packname = pembawm.split('|')[0]
                    const author = pembawm.split('|')[1]
                    exif.create(packname, author, `takestick_${sender}`)
						sharp(media)
							//.resize(512, 512)
							.toFile(`./temp/takestickstage_${sender}.webp`, async (err) => {
								if (err) return console.error(err)
								await exect(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/takestickstage_${sender}.webp -o ./temp/takestick_${sender}.webp`, { log: true })
								if (fs.existsSync(`./temp/takestick_${sender}.webp`)) {
									const datast = fs.readFileSync(`./temp/takestick_${sender}.webp`)
									await xinz.sendMessage(from, datast, sticker, {quoted: { key: { fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗙𝗜𝗭*` }}})
									fs.unlinkSync(`./temp/takestick_${sender}.webp`)
									fs.unlinkSync(`./temp/takestickstage_${sender}.webp`)
									fs.unlinkSync(`./temp/takestick_${sender}.exif`)
								}
							})
						break
								/*case 'triger':
							 				var imgbb = require('imgbb-uploader')
							 			 	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							 				ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							 				owgi = await xinz.downloadAndSaveMediaMessage(ger)
							 			  	anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
							 				teks = `${anu.display_url}`
							 			 	ranp = getRandom('.gif')
							 				rano = getRandom('.webp')
							 				anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
 											exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 256:256 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                xinz.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break	*/	
										case 'tourl':
										            var imgbb = require('imgbb-uploader')
										            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
										            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
										 	 	    owgi = await xinz.downloadAndSaveMediaMessage(ger)
										            anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
										        	teks = `${anu.display_url}`
													reply(teks)
												}
														break
case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply('Sedang di proses...')
  owgi = await xinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 xinz.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
case 'wanted':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply('Sedang di proses...')
  owgi = await xinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 xinz.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
if (args.length < 1) return xinz.sendMessage(from, '*☒* Masukan teks', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)
hasil = data.result.kata
reply(hasil)
} catch {
  reply(mess.ferr)
}
break
case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply('Sedang di proses...')
  owgi = await xinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 xinz.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
case 'brainly':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						axios.get(`https://api.vhtear.com/branly?query=${teks}&apikey=cipapremi919`).then((res) => {
							const resultbrainly = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏*「 Brainly 」*\n\n• ${res.data.result.data}`;
							fakegroup(resultbrainly)
						})
					} catch (err) {
						fakegroup(`Err: ${err}`)
					}
					break
case 'map':
  if (args.length < 1) return reply('*☒* Masukan nama daerah')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply('Sedang di proses...')
  hasil = await getBuffer(data.gambar)
  xinz.sendMessage(from, hasil, image, {
quoted: mek, caption: `Hasil Dari *${daerah}*`
  })
  } catch {
  }
  break
  				case 'igsearch':
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=nafiz2020&q=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return cheat(anu.error)
					reply(mess.wait)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Username* : ${i.username}\n*Fullname* : ${i.full_name}\n=================\n`
						buffer = await getBuffer(i.profile_pic)
					}
					xinz.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: mek})
					break
					case 'xnxx':
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xnxx?query=${body.slice(6)}&apikey=Nafizgans0504`, {method: 'get'})
					if (anu.error) return cheat(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Duration* : ${i.duration}\n*Link* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					break  
					case 'xvideosdl':
					if (args.length < 1) return cheat('Linknya mana om?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideosdl?url=${body.slice(11)}&apikey=Nafizgans0504`, {method: 'get'})
					reply('Sedang di proses..')
					teks = `➸ *Judul* : ${anu.judul}\n➸ *Size* : ${anu.size}\n➸ *Link download* :\n${anu.vid}`
					xinz.sendMessage(from, teks, text, {quoted: mek})
					break
					case 'xnxxdl':
					if (args.length < 1) return cheat('Linknya mana om?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xnxxdl?url=${body.slice(8)}&apikey=Nafizgans0504`, {method: 'get'})
					reply('Sedang di proses..')
					teks = `➸ *Judul* : ${anu.judul}\n➸ *Size* : ${anu.size}\n➸ *Link download* :\n${anu.vid}`
					xinz.sendMessage(from, teks, text, {quoted: mek})
					break
                case 'telesticker':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=Nafizprem0504&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBuffer(ini_sticker[sticker_])
                        xinz.sendMessage(from, buffer, sticker)
                    }
                    break
                case 'ig2':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=Nafizprem0504&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    xinz.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break                                              
//---stiker wasted
					/*case 'wasted':
					case 'was':
							var imgbb = require('imgbb-uploader')
							if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
							  owgi = await xinz.downloadAndSaveMediaMessage(ger)
							  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
							  teks = `${anu.display_url}`
							  ranp = getRandom('.gif')
							  rano = getRandom('.webp')
							  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
							  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 256:256 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return reply(mess.error.stick)
							nobg = fs.readFileSync(rano)
							xinz.sendMessage(from, nobg, sticker, { quoted: mek
							})
							fs.unlinkSync(rano)
							  })

							} else {
							reply('Gunakan foto!')
							}
							break 	*/
				case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						fakegroup(mess.wait)
						owgi = await xinz.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
						teks = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							exec(`webpmux -set exif ${addMetadata(`${config.author}`, `${config.packname}`)} ${rano} -o ${rano}`, async (error) => {
								if (error) return fakegroup(`Error: ${error}`)
								xinz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					} else {
						fakegroup(mess.wrongFormat)
					}
					break
				case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						owgi = await xinz.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
						teks = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
						exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return fakegroup(`Error: ${err}`)
							exec(`webpmux -set exif ${addMetadata(`${config.author}`, `${config.packname}`)} ${rano} -o ${rano}`, async (error) => {
								if (error) return fakegroup(`Error: ${error}`)
								xinz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					} else {
						fakegroup('Gunakan foto!')
					}
					break										
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						reply('Tunggu semektar...')
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
						reply('Foto aja Jangan Video')
					}
					break 							
				case 's':
				case 'stiker':
				case 'sticker':
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media = await xinz.downloadMediaMessage(encmedia)
                            sharp(media)
                                .resize({
                                    width: 512,
                                    height: 512,
                                    fit: 'contain',
                                    background: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exect(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender}.webp -o ./temp/${sender}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender}.webp`)) {
                                        const datas = fs.readFileSync(`./temp/${sender}.webp`)
                                        await xinz.sendMessage(from, datas, sticker, {quoted: { key: { fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗙𝗜𝗭*` }}})
                                        fs.unlinkSync(`./temp/${sender}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender}.webp`)
                                    }
                                })
					} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media = await xinz.downloadAndSaveMediaMessage(encmedia)
						ran = '437893.webp'
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								xinz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: { key: { fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗙𝗜𝗭*` }}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
					}
					break
				case 'ttp': //By NOIR
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					const ttptext = body.slice(5)
					axios.get(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`)
					.then(async res => {
						const ttptxt = await res.data
						console.log("SUCCESS!")
						base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							xinz.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗙𝗜𝗭*` }}})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
						})
					 });
				break
				case 'attp':
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					text = body.slice(4).trim()
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${text}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`Errro gan!`)
						xinz.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
//------------------------------------------------------ // STICKER MENU // ---------------------------------------------------------------------------------//			
				case 'speed':
				case 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
						const child = stdout.toString('utf-8')
						const teks = child.replace(/Memory:/, "Ram:")
						const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} Second`
						fakegroup(pingnya)
					})
					break					
			case 'runtime':
				runtime = process.uptime()
				runtimo = `${kyun(runtime)}`
				sendFakeStatus(from, runtimo, 'Nafiz | Gans')
				//xinz.sendMessage(from, `${teks}`, MessageType.text, rtimebro)
				break			
			case 'term':
				const cmd = body.slice(6)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `*EXECUTOR*`
				const term = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				exec(cmd, (err, stdout) => {
					if (err) return xinz.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						xinz.sendMessage(from, stdout, text, term)
					}
				})
				break						
				case 'return':
					return xinz.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					break
				case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xinz.downloadAndSaveMediaMessage(encmedia)
						ran = '10.mp4'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('Gagal :V')
							buffer = fs.readFileSync(ran)
							xinz.sendMessage(from, buffer, video, {quoted: mek, caption: 'NIH'})
							fs.unlinkSync(ran)
						})
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xinz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('Gagal :V')
							buffer = fs.readFileSync(ran)
							xinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH'})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://api.apiflash.com/v1/urltoimage?access_key=8f7b1cd9edfd49dfb9e36baf1622f6cd&url=${args[0]}`, 'nih')
					break
				case 'chidetag':
					var value = body.slice(10)
					var teks1 = value.split("|")[0];
					var teks2 = value.split("|")[1];
						var group = await xinz.groupMetadata(teks1)
						var member = group['participants']
						var mem = []
						member.map( async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
						})
						var optionsi = {
						text: teks2,
						contextInfo: { mentionedJid: mem }
						}
						xinz.sendMessage(teks1, optionsi, text)
					break
//-------------------------------------------------------------------------------------------------------------------------------------------------//	
				
             case 'pastebin':
					reply(mess.wait)
					paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   xinz.sendMessage(from, `${anu.result}`, text, {quoted: mek})			
                   break 
	       case 'smule':
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Semektar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					xinz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					xinz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break  
			case 'jadwalsholat':
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://api.vhtear.com/jadwalsholat?daerah=${sholat}&apiKey=cipapremi919`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\n➸ *Subuh :* ${anu.Subuh} WIB\n*➸ Dzuhur :* ${anu.Dzuhur} WIB\n*➸ Ashar :* ${anu.Ashar} WIB\n*➸ Maghrib :* ${anu.Maghrib} WIB\n*➸ Isya :* ${anu.Isya} WIB`
					xinz.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'tinyurl':
			    reply('Sedang mengambil Data..')
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=BotWeA`)
			        tinyurl = `${anu.result}`
			        sendFakeStatus(from,tinyurl, '𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐍𝐀𝐅𝐈𝐙')
			        break 
         	case 'resepmasakan':
                reply('Sedang Mencari data...')
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=cipapremi919`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n● *Bahan2 digunakan:*\n${anu.result.bahan}\n\n● *Cara masaknya:*\n${anu.result.cara}`
                   xinz.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   break 
         	case 'cersex':
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=cipapremi919`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   buff = await getBuffer(anu.result.image)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   xinz.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   break   
			case 'emojitosticker':
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = emojiUnicode(Far).trim()
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/smoji?emoji=${teks}&apikey=Nafizprem0504`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						xinz.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break 
           case 'kalkulator':
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=cipapremi919`, {method: 'get'})
				    xinz.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})	
				    break 
							
			case 'nulis1':
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis NafizNafiz | Gans:v`)
				nul = body.slice(8)
				tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=apivinz`)
				xinz.sendMessage(from, tak, image, {quoted: mek, caption: 'Nih Cuk, Dasar Males!!*'})
				break					
			case 'nulis2':
			case 'tulis2':
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis1 NafizNafiz | Gans:v`)
				ramlan = body.slice(8)
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=3a644c120da8831d`)
				xinz.sendMessage(from, buff, image, {quoted: mek, caption: 'Nih Cuk, Dasar Males!!*'})
					break
				case 'nulis3':
				case 'tulis3':
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 NafizNafiz | Gans:v`)
				laysha = body.slice(8)
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=3a644c120da8831d`)
				xinz.sendMessage(from, buff, image, {quoted: mek, caption: 'Nih Cuk, Dasar Males!!*'})
					break			
				case 'nulis4':
				case 'nulis4':
				  xinz.updatePresence(from, Presence.composing)
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply('Sedang diproses..')
					tulis = body.slice(7)
				  nama = tulis.split("|")[0];
					kelas = tulis.split("|")[1];
					isi = tulis.split("|")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					xinz.sendMessage(from, nulis, image, {quoted: mek})
					break						
		case 'ninjalogo':
				var gh = body.slice(11)
				var nin = gh.split("|")[0];
				var ja = gh.split("|")[1];
				if (args.length < 1) return reply(`Contoh:  : ${prefix}ninjalogo Nafiz | Gans`)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=3a644c120da8831d`)
				xinz.sendMessage(from, buffer, image, {quoted: mek})
					break				
		case 'halloweentext':
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 10 karakter')
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=3a644c120da8831d`)
		    xinz.sendMessage(from, buffer, image, {quoted: mek})
		 	break
		case 'textlight':
				ligh = body.slice(11)
				if (ligh.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				lawak = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ligh}&apikey=apivinz`)
		    xinz.sendMessage(from, lawak, image, {quoted: mek})
		 	break
                case 'glitchtext':
					var gh = body.slice(12)
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`Contoh:  : ${prefix}glitchtext Nafiz | Gans`)
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break			
		case 'bikinquote':
 	var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka | Kata Nafiz`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					xinz.sendMessage(from, buffer, image, {caption: '*Pesanan Selesai....*', quoted: mek})
					break	
		case 'sounclound':
				  if (args.length < 1) return reply('Masukan link soundcloud')
				  tels = body.slice(12)
				  try {
				  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=Nafizprem0504&url=${tels}`, {
				method: 'get'
				  })
				  lagu = await getBuffer(data.result)
				  xinz.sendMessage(from, lagu, audio, {
				mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek
				  })
				  } catch {
				    reply(mess.ferr)
				  }
				  break							
		case 'ig':
				  if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Format link salah, gunakan link instagram')
				  play = body.slice(4)
				  try {
				  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=Nafizprem0504&url=${play}`)
				  lagu = await getBuffer(anu.result)
				  xinz.sendMessage(from, lagu, video, {
				mimetype: 'video/mp4', filename: `Imlexa.mp4`, quoted: mek })
				  } catch {
				    reply('Error bwang')
				  }
				  break					 				
				case 'igstalk':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fakegroup(mess.wait)
						anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${q}&apikey=cipapremi919`, { method: 'get' })
						bufferigstalk = await getBuffer(anu.result.picture)
						hasil = `「 *INSTAGRAM STALKER* 」

• Fullname: ${anu.result.full_name}
• Post: ${anu.result.post_count}
• Followers: ${convertBalanceToString(anu.result.follower)}
• Following: ${convertBalanceToString(anu.result.follow)}
• Jumlah Postingan: ${convertBalanceToString(anu.result.post_count)}
• Bio: ${anu.result.biography}
• Link: https://www.instagram.com/${anu.result.username}`
						xinz.sendMessage(from, bufferigstalk, image, { quoted: mek, caption: hasil })
					} catch (err) {
						fakegroup(`Error: ${err}`)
					}
					break
				case 'playstore':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fakegroup(mess.wait)
						anu = await fetchJson(`https://api.vhtear.com/playstore?query=${q}&apikey=cipapremi919`, { method: 'get' })
						for (let ply of anu.result) {
							store = `*「 PLAYSTORE 」*\n\n• Nama Apk: ${ply.title}\n• ID: ${ply.app_id}\n• Developer: ${ply.developer}\n• Deskripsi: ${ply.description}\n• Link Apk: https://play.google.com/${ply.url}\n\n`
						}
						fakegroup(store.trim())
					} catch (err) {
						fakegroup(`Error: ${err}`)
					}
					break					
				case 'infoalamat':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fakegroup(mess.wait)
						anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${q}&apikey=cipapremi919`, { method: 'get' })
						fakegroup(`${anu.result.data}`)
					} catch (err) {
						fakegroup(`Error: ${err}`)
					}
					break					
          case 'snackvideo':
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEmekTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://i.pinimg.com/564x/62/da/23/62da234d941080696428e6d4deec6d73.jpg')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                xinz.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                xinz.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                break  								       
        case 'randomcry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						xinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
        case 'randomhentai1':
					buffer = await getBuffer(`https://api.xteam.xyz/randomimage/hentai?APIKEY=3a644c120da8831d`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break		
		case 'randombts':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/bts?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break				
		case 'randomexo':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/exo?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break			
		case 'randomelf':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/elf?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break
		case 'randomloli1':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/loli?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break												
		case 'randomneko1':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/neko?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break
		case 'randomwaifu1':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/waifu?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break
		case 'randomshoita':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/shota?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break		
		case 'randomhusbu':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/husbu?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randomshinobu':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/shinobu?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break		
		case 'randomblackpink':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/blackpink?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randommegumin':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/megumin?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break		
		case 'randomart':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/art?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randomwalnime':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/wallnime?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break		
		case 'randomneko2':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/nsfw/neko?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randomwaifu2':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/nsfw/waifu?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randomloli2':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/nsfw/loli?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	
		case 'randomhentai2':
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/nsfw/chiisaihentai?apikey=Nafizprem0504`)
					xinz.sendMessage(from, buffer, image, {quoted: mek})
					break	

		case 'tebakgambar':
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `❏ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					xinz.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					xinz.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					xinz.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					xinz.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					xinz.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
						break
        case 'moddroid':
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
				hepi = data.result[0] 
				teks = `*❏ Nama*: ${data.result[0].title}\n\n*❏ publisher*: ${hepi.publisher}\n\n*❏ mod info:* ${hepi.mod_info}\n\n*❏ size*: ${hepi.size}\n\n*❏ latest version*: ${hepi.latest_version}\n\n*❏ genre*: ${hepi.genre}\n\n*❏ link:* ${hepi.link}\n\n*❏ download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				xinz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
					break
		case 'happymod':
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
				hupo = data.result[0] 
				teks = `*❏ Nama*: ${data.result[0].title}\n\n*❏ version*: ${hupo.version}\n\n*❏ size:* ${hupo.size}\n\n*❏ root*: ${hupo.root}\n\n*❏ purchase*: ${hupo.price}\n\n*❏ link*: ${hupo.link}\n\n*❏ download*: ${hupo.download}`
				buffer = await getBuffer(hupo.iage)
				xinz.sendMessage(from, buffer, immage, {quoted: mek, caption: `${teks}`})
						break
        case 'pinterestdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestdl?apikey=Nafizprem0504&url=${ini_url}`)
                    ini_url = ini_url.result["736x"]
                    buffer = await getBuffer(ini_url)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break						
		case 'pinterest':
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					xinz.sendMessage(from, pok, image, { quoted: mek, caption: `*Nih Kak :v*`})
					break 	
        case 'pixiv':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=Nafizprem0504&query=${query}`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break		
        case 'pixivdl':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} pixiv_id\nExample: ${prefix + command} 63456028`)
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=Nafizprem0504`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break	
        case 'konachan':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=Nafizprem0504&query=${query}`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
//----------------------------------------------------------------------------------------------------------------------------//
	case 'randombts':
	case 'randomexo':
	case 'randomelf':
	case 'randomloli':
	case 'randomneko':
	case 'randomwaifu':
	case 'randomshota':
	case 'randomhusbu':
	case 'randomsagiri':
	case 'randomshinobu':
	case 'randommegumin':
	case 'randomart':
	case 'randomwallnime':
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=Nafizprem0504`)
		xinz.sendMessage(from, buffer, image, { quoted: mek })
		break																	
	case 'infocuaca':
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply('Sedang mencari data..')
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             xinz.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            break 					
		case 'hartatahta':
				if (args.length < 1) return reply(`Contoh  : ${prefix}hartatahta Ramlan`)
				har = body.slice(12)
				reply(`Harta Tahta ${body.slice(12)} :v`)
				buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${har}&apikey=apivinz`)
				xinz.sendMessage(from, buffer, image, {quoted: mek})
				break			
		case 'nightbeach':
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply('Sedang di proses...')
				  owgi = await xinz.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
				 xinz.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('reply imagenya kak!')
				}
				break

		case 'laptop':
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply('Sedang di proses...')
				  owgi = await xinz.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
				 xinz.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('reply imagenya kak!')
				}
				break

		case 'linephoto':				
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply('Sedang di proses...')
				  owgi = await xinz.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
				 xinz.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('reply imagenya kak!')
				}
				break

				case 'raindrop':
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply('Sedang di proses...')
				  owgi = await xinz.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
				 xinz.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('reply imagenya kak!')
				}
				break	
		case 'sketch':
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply('Sedang di proses...')
				  owgi = await xinz.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
				 xinz.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('reply imagenya kak!')
				}
				break													
//------------------------------------------------ // LOLHUMAN API // -----------------------------------------------------------------------------//
                case 'jadwaltv':
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=Nafizprem0504`)
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    //reply(txt)
                    sendFakeStatus(from, txt, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
                    break                
                case 'kusonime':
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=Nafizprem0504&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    xinz.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                case 'kusonimesearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=Nafizprem0504&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    Xinz.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                case 'otakudesu':
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=Nafizprem0504&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    //reply(txt)
                    sendFakeStatus(from, txt, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
                    break
                case 'otakudesusearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=Nafizprem0504&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    //reply(txt)
                    sendFakeStatus(from, txt, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
                    break
                case 'randomyaoi':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=Nafizprem0504`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'randomyuri':
                    img = await fetchJson(`http://api.lolhuman.xyz/api/random2/yuri?apikey=Nafizprem0504`)
                    img = img.result
                    buffer = await getBuffer(img)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'randomwancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=Nafizprem0504`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break					
				case 'ephoto1':
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=Nafizprem0504&text=${txt}`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break				
                case 'ephoto2':
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=Nafizprem0504&text1=${txt1}&text2=${txt2}`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'randomfisheye':
                    url = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/fisheye?apikey=Nafizprem0504&img=${url}`)
                    xinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
				case 'wiki':
					if (args.length < 1) return reply(`masukan kata kunci\ncontoh : ${prefix}wiki hacker`)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wiki?apikey=itsmeiky633&q=${body.slice(6)}`)
					sendFakeStatus(from, `${anu.result}`,'WIKIPEDIA SEARCH')
						break
					case 'kbbi':
					if (args.length < 1) return reply(`masukan kata kunci\ncontoh : ${prefix}kbbi semangka`)
					abu = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${body.slice(6)}&apikey=nafiz2020`)
					sendFakeStatus(from,`${abu.result}`, 'KBBI SEARCH')
					break									
				case 'ayatkursi':
					const mat1 = await fetchJson("http://hujanapi.xyz/api/ayatkursi?apikey=Nafizgans0504")
					let xyz = "*Ayatkursi*\n\n"
					xyz += mat1.data.arabic
					sendFakeStatus(from, xyz,'AYAT KURSI')	
						break				                     
                case 'alquran1':
                    if (args.length < 1) return reply('_Example:alquran 108_')
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=Nafizprem0504`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x in ayat) {
                        test = ayat[x]
                        arab = test.arab
                        nomor = test.ayat
                        latin = test.latin
                        indo = test.indonesia
                        txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    txt = txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    txt = txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    txt = txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    sendFakeStatus(from, txt, '𝑺𝑬𝑳𝑭𝑩𝑶𝑻 - 𝑵𝑨𝑭𝑰𝒁')
                    break                    
		case 'alquran2':
			reply('Sedang mencari data...*')
			surah = `${body.slice(10)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=nafiz2020`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.data.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n──────────────────────────────\n`
			}
			reply(quran.trim())
					break   					 
		case 'bitly':
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=BotWeA`, {method: 'get'})
			bitly = `${bitlyy.result}`
			xinz.sendMessage(from, anu, text, {quoted: mek})
			break  					                
                case 'ramdomquotes':
                    quotes  = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=Nafizprem0504`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break      
                 case 'randomsagiri':
 	buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/sagiri?apikey=Nafizprem0504`)
 	xinz.sendMessage(from, buffer, image, { quoted: mek })
 		break
				case 'id':
					if (mek.key.fromMe == true || isOwner){
					//reply(`Nih id nya : ${from}`)
					await xinz.sendMessage('6281220439155@c.us', `${from}`, MessageType.text)
				}
					break
				case 'nhentai':
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=Nafizprem0504`)
                    get_result = get_result.result
                    txt = `Title Romaji : ${get_result.title_romaji}\n`
                    txt += `Title Native : ${get_result.title_native}\n`
                    txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    txt += `Parodies : ${get_info.parodies}\n`
                    txt += `Character : ${get_info.characters.join(", ")}\n`
                    txt += `Tags : ${get_info.tags.join(", ")}\n`
                    txt += `Artist : ${get_info.artists}\n`
                    txt += `Group : ${get_info.groups}\n`
                    txt += `Languager : ${get_info.languages.join(", ")}\n`
                    txt += `Categories : ${get_info.categories}\n`
                    txt += `Pages : ${get_info.pages}\n`
                    txt += `Uploaded : ${get_info.uploaded}\n`
                    sendFakeStatus(from, txt, 'IH SANGEAN BGSD:V')
                case 'nhentaipdf':
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=Nafizprem0504`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result.file_pdf)
                    xinz.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf })
                    break   
				case 'sendid':
					xinz.sendMessage('6281220439155@s.whatsapp.net', `Nih ${from}`, text)
					break	
				case 'tomp3':
					xinz.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return fakegroup(mess.wrongFormat)
					fakegroup(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await xinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return fakegroup(`Err: ${err}`)
						buffer453 = fs.readFileSync(ran)
						xinz.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
						fs.unlinkSync(ran)
					})
					break					
					case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await xinz.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.6,asetrate=55000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//------------------------------------- // BY IPUL (MRG3P5) // -------------------------------------------------------------------//
case 'imagetobase64':
case 'imgtobase64':
if (!isQuotedImage) return reply('Tag gambar nya!')
if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const ehgmedia = await xinz.downloadAndSaveMediaMessage(ger)
const nihiya = await imageToBase64(ehgmedia)
	xinz.sendMessage(from, nihiya, text, {quoted: mek})
	break
	case 'sticktobase64':
case 'stickertobase64':
if ((isMedia || isQuotedSticker) && args.length == 0) 
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const ehgmed = await xinz.downloadAndSaveMediaMessage(ger)
plerlah = fs.readFileSync(ehgmed)
const niya = await imageToBase64(plerlah)
	xinz.sendMessage(from, niya, text, {quoted: mek})
	break
	case 'base64toimage':
	case 'base64toimg':
	if (args.length < 1) return reply('Mana base64 nya?')
const base64nih = args[0]
const nihiyak = await Buffer.from(base64nih, 'base64')
cheat(mess.wait)
	xinz.sendMessage(from, nihiyak, image, {quoted: mek, caption: 'Neh..'})
	break
case 'deface':
var gas = body.slice(8)
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var imgbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await xinz.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
fs.writeFileSync(`${run}`, ddatae, 'base64')
xinz.sendMessage(from, linknya, text, { title: "Hacked by mekny", thumbnail: fs.readFileSync(`./${run}`), quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*NB0TS4*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
				case 'fakedeface':
					var nn = body.slice(12)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					imgbbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await xinz.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

					xinz.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
				case 'setname':
					xinz.updatePresence(from, Presence.composing)
					if (!q) return fakegroup(wrongFormat)
					await xinz.updateProfileName(q)
					fakegroup(`Success ganti nama menjadi ${q}`)
					break
				case 'setpp':
					xinz.updatePresence(from, Presence.composing)
					if (!isQuotedImage) return fakegroup(mess.wrongFormat)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await xinz.downloadAndSaveMediaMessage(enmedia)
					await xinz.updateProfilePicture(botNumber, media)
					fakegroup('Success Mengganti Poto Profile')
					break
				case 'tovideo':
					if (!isQuotedSticker) return fakegroup(mess.wrongFormat)
					fakegroup(mess.wait)
					anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await xinz.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return fakegroup(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						xinz.sendMessage(from, buffers, video, { quoted: mek, caption: 'DONE...' })
						fs.unlinkSync(ran)
					})
					break
				case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						fakegroup(mess.wait)
						owgi = await xinz.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
						teks = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							exec(`webpmux -set exif ${addMetadata(`${config.author}`, `${config.packname}`)} ${rano} -o ${rano}`, async (error) => {
								if (error) return fakegroup(`Error: ${error}`)
								xinz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					} else {
						fakegroup(mess.wrongFormat)
					}
					break
				case 'wasted2':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						owgi = await xinz.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
						teks = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
						exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return fakegroup(`Error: ${err}`)
							exec(`webpmux -set exif ${addMetadata(`${config.author}`, `${config.packname}`)} ${rano} -o ${rano}`, async (error) => {
								if (error) return fakegroup(`Error: ${error}`)
								xinz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					} else {
						fakegroup('Gunakan foto!')
					}
					break					
				case 'toptt':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await xinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return fakegroup(`Error: ${err}`)
						topt = fs.readFileSync(ran)
						xinz.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					})
					break	
				case 'otakulast':
					anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=cipapremi919`, { method: 'get' })
					if (anu.error) return fakegroup(anu.error)
					teks = '「 *OTAKULAST* 」\n\n'
					for (let i of anu.result.data) {
						teks += `${i}\n• Title : ${i.title}\n• Link : ${i.link}\n• Published : ${i.datetime}\n`
					}
					fakegroup(teks.trim())
					break
				case 'dork':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fakegroup(mess.wait)
						anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${q}`, { method: 'get' })
						hasil = `${anu.result}`
						xinz.fakegroup(from, hasil, text, { quoted: mek })
					} catch (err) {
						fakegroup(`Error: ${err}`)
					}
					break
				case 'findhost':
					try {
						if (!q) return fakegroup(mess.wrongFormat)
						anu = await fetchJson(`https://api.banghasan.com/domain/hostsearch/${q}`, { method: 'get' })
						fakegroup(anu.hasil)
					} catch (err) {
						fakegroup(`Error: ${err}`)
					}
					break									
				case 'clearall':
					anu = await xinz.chats.all()
					xinz.setMaxListeners(25)
					for (let _ of anu) {
						xinz.deleteChat(_.jid)
					}
					fakegroup('Success delete all chat')
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						xinz.groupAdd(from, [num])
					} catch (e) {
						return fakegroup(`Diprivate asw ama ${num}`)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, Promote :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						xinz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
						xinz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, Demote :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						xinz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
						xinz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List mimin ${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `${no.toString()} @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break					
				case 'linkgc':
					if (!isGroup) return fakegroup(mess.only.group)
					if (!isBotGroupAdmins) return fakegroup(mess.only.Badmin)
					const linkgc = await xinz.groupInviteCode(from)
					fakegroup(`https://chat.whatsapp.com/${linkgc}`)
					break
				case 'ytstalk':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						const channel = await fetchs.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyD0G8IdyC3YfecnL6QAidsdUV8sLA2kTjk&maxResults=1&type=channel`);
						const resultchannel = await fetchs.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyD0G8IdyC3YfecnL6QAidsdUV8sLA2kTjk`);
						const datachannel = `		「 *YOUTUBE-STALK* 」

◪ *Channel*: ${channel.body.items[0].snippet.channelTitle}

◪ *Deskripsi*: ${channel.body.items[0].snippet.description}

◪ *Total Subscribe*: ${convertBalanceToString(resultchannel.body.items[0].statistics.subscriberCount)} 

◪ *Total View*: ${convertBalanceToString(resultchannel.body.items[0].statistics.viewCount)} 

◪ *Total Video*: ${convertBalanceToString(resultchannel.body.items[0].statistics.videoCount)}

◪ *Data Dibuat*: ${channel.body.items[0].snippet.publishedAt}

◪ *Link Channel Youtube*: https://www.youtube.com/channel/${channel.body.items[0].id.channelId}`
						fakegroup(mess.wait)
						var buffer321 = await getBuffer(`${channel.body.items[0].snippet.thumbnails.high.url}`)
						xinz.sendMessage(from, buffer321, MessageType.image, { caption: datachannel, quoted: mek })
					} catch (err) {
						fakegroup(`Err: ${err}`)
					}				
						break
				case 'upswteks':
					xinz.updatePresence(from, Presence.composing)
					xinz.sendMessage('status@broadcast', `${q}`, extendedText)
					fakegroup(`Sukses Up story wea teks ${q}`)
					break
				case 'upswimage':
					xinz.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await xinz.downloadMediaMessage(swsw)
						xinz.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					xinz.sendMessage(from, bur, text, { quoted: mek })
					break
				case 'upswvideo':
					xinz.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await xinz.downloadMediaMessage(swsw)
						xinz.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					xinz.sendMessage(from, bur, text, { quoted: mek })
					break  						
 				/*case 'tomp3':
					    xinz.updatePresence(from,
					    Presence.composing)
						if (!isQuotedVideo) return reply('Reply video')
						reply('Sedang di proses..')
						mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
						duh = await xinz.downloadAndSaveMediaMessage(mitri)
						ran = getRandom('.mp4')
						exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
					 	 fs.unlinkSync(duh)
					 	 if (err) return reply('*☒* Gagal, pada saat mengkonversi video ke mp3')
					 	 buffer = fs.readFileSync(ran)
					 	 xinz.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4', quoted: mek})
						  fs.unlinkSync(ran)
						})
						break*/
			case 'tomp3':
				xinz.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await xinz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					xinz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				break								
				case 'tomp4':
				xinz.updatePresence(from, Presence.composing) 
					if (!isQuotedSticker) return cheat('stickernya mana anjeng')
					bisnis(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xinz.downloadAndSaveMediaMessage(encmedia)
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", media)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return cheat('Error om')
						buffer = fs.readFileSync(ran)
						xinz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', fileName: `${pushname}`, quoted: mek, caption: 'Dah jdi nih bang'})
						fs.unlinkSync(ran)
					})
					break					
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await xinz.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await xinz.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.5,asetrate=22000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'test':
					test1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					test = await xinz.downloadAndSaveMediaMessage(test1)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${test} -filter:a "atempo=1.5,asetrate=60000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(test)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break				
				case 'bass':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await xinz.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=44:width_type=o:width=2:g=23 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break					
				case 'cr2':
					jids = `${targetprivate}@s.whatsapp.net` // nomer target
					var split = args.join(' ').replace(/@|\d/gi, '').split('|')
					var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const options = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split[0]
										}
									}
								}
							}
					const responye = await xinz.sendMessage(jids, `${split[1]}`, MessageType.text, options)
					await xinz.deleteMessage (jids, {id: responye.messageID, remoteJid: jids, fromMe: true})
					break							
		case 'cr':
		var anu = value.split('|')
		//var estd = m.message.extendedTextMessage.contextInfo.mentionedJid
		//console.log(mentioned)
		var optionss ={
			key: {
      remoteJid: '6281220439155-160`947628@g.us',
      fromMe: false,
      id: generateMessageID()
    },
    message: { conversation: anu[1] },
    messageTimestamp: '1608717869',
    status: 'ERROR',
    participant: anu[0]+'@s.whatsapp.net',
	ephemeralOutOfSync: false
  }
  xinz.sendMessage(id, anu[2], MessageType.text, {quoted:optionss})
  break					
				case 'cfitnah':
					cr = body.slice(9)
					cs = cr.split('|')
					taged = cs[0]
					const targeti = {
						contextInfo: {
							participant: taged + '@s.whatsapp.net',
							quotedMessage: {
								extendedTextMessage: {
									text: cs[1]
								}
							}
						}
					}
					xinz.sendMessage(cs[3], cs[2], MessageType.text, targeti)
					break				
			case 'sett':
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xinz.downloadMediaMessage(boij)
				fs.writeFileSync('./media/kaori.jpeg', delb)
				await sendFakeStatus(from, 'Sukses', `*Gambar telah diganti*`)
				break
		case 'readallchat':
					const readallid = await xinz.chats.all()
					xinz.setMaxListeners(25)
					for (let xyz of readallid) {
						await xinz.chatRead(xyz.jid)
					}
					fakegroup('Success read all chat')
					break	
				case 'group':
				case 'grup':
					if (!isGroup) return cheat(mess.only.group)
					if (args[0] === 'open') {
					cheat(`「 *SUCCES OPEN GRUP* 」`)
					xinz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					await xinz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					cheat(`「 *SUCCES CLOSE GRUP* 」`)
					}
					break		
case 'hekweb':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${pushname}`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
}
break								
		        case 'coding':
					var ghst = body.slice(8)
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix}codelogo nih heker`)
					bisnis(mess.wait)
					buffer = await getBuffer(`https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`)
					xinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Neh..'})
					break		
				case 'chat': 
				if (!mek.key.fromMe) return xinz.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*NB0TS4*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(6)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
					sendMess(`${ajk}@s.whatsapp.net`, `${chatnya}`)
					break									
				case 'bot':
					if (args.length < 1) return cheat('Pilih on atau off!')
					const argo = body.split(' ')
					if (argo[1] == 'off') {
						if (isBot) return
						_bot.push(from)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						cheat('*Success Offline!*')
					} else if (argo[1] == 'on') {
						_bot.splice(from, 1)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						cheat('*Success Online!*')
					} else {
						cheat(`*Ketik ${prefix}bot on/off*`)
					}
					break											
			case 'clone':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await xinz.getProfilePicture(id)
					buffer = await getBuffer(pp)
					xinz.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
				}
				break							
			case 'setreply':
			case 'setfake':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝗦𝘆𝘀𝘁𝗲𝗺 𝗖𝗵𝗮𝗻𝗴𝗲𝗱 𝗣𝗿𝗲𝗳𝗶𝘅`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				fake = args[0]
				xinz.sendMessage(from, `Succes Mengganti Conversation Fake : ${fake}`, MessageType.text, selepbot)
				break
					case 'headshot':			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						xinz.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						xinz.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						xinz.groupRemove(from, mentioned)
						}
					break			
										case 'add':
										if (!mek.key.fromMe) return
											if (!isGroup) return cheat(mess.only.group)
											if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
											if (args.length < 1) return cheat('Yang mau di add jin ya?')
											if (args[0].startsWith('08')) return cheat('Gunakan kode negara mas')
									   try {
											num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
											xinz.groupAdd(from, [num])
											} catch (e) {
											console.log('Error :', e)
											return cheat('Diprivate asu:v')
											}
											break						
			case 'scraphtml':
			teks = body.slice(11)
			anu = await fetchJson(`https://pencarikode.xyz/html?url=${teks}&apikey=pais`, {method: 'get'})
				    cheat(anu.html)
					break				
  case 'setthumb':
  case 'setthumbnail':
				    if (!mek.key.fromMe) return xinz.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*NB0TS4*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const ehgmediab = await xinz.downloadAndSaveMediaMessage(ger)
nihiyab = await imageToBase64(ehgmediab)
setthumb = `${nihiyab}` 
					cheat(`*Sukses mengubah thumbnail fake reply*`)
			} else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await xinz.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			setthumb = anu
			cheat(`*Sukses mengubah thumbnail fake reply*`)
			}
					break				
//--------------------------------------------------// GROUP SETTING //---------------------------------------------------------------------------------//
				case 'promote':
				case 'pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						xinz.groupMakeAdmin(from, mentioned) 
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						xinz.groupMakeAdmin(from, mentioned)
					}
					break			
			case 'closetime': 
					if (!isGroup) return reply(mess.only.group)
              xinz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = { text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ Sᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`}
					xinz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					sendFakeStatus(from, close, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
				}, timer)
				break
			case 'opentime': 
					if (!isGroup) return reply(mess.only.group)
              xinz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = { text: `*Tepat Waktu! Group Telah Dibuka Oleh Admin Grup* Semua Member bisa mengirim pesan*`}
					xinz.groupSettingChange (from, GroupSettingChange.messageSend, false);
					sendFakeStatus(from, close, '𝗦𝗘𝗟𝗙𝗕𝗢𝗧 - 𝗡𝗔𝗙𝗜𝗭')
				}, timer)
				break				
//-------------------------------------------------------------// GROUP SETTING //-------------------------------------------------------------------------------------------//
		case 'spamcall':				
			call = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			xinz.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			break  
			case 'spamgmail':
			var spam = body.slice(11)
			var sp = spam.split("|")[0];
			var sa = spam.split("|")[1];			
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${sp}&subjek=${sa}`, {method: 'get'})
			xinz.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			break 												
			case 'setprefix':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝗦𝘆𝘀𝘁𝗲𝗺 𝗖𝗵𝗮𝗻𝗴𝗲 𝗣𝗿𝗲𝗳𝗶𝘅`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				prefix = args[0]
				xinz.sendMessage(from, `Succes Mengganti Prefix : ${prefix}`, MessageType.text, selepbot)
				break					
				case 'addsticker':
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xinz.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					xinz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply('Sukses')
					} catch (err){
						console.log(err)
						reply('Error njir')
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*`
					xinz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
				case 'addvn':
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xinz.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					xinz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
				case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					 reply('Sukses')
					} catch (err){
						console.log(err)
						reply('Error njir')
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*`
					xinz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xinz.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpeg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					xinz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpeg`)
					 reply('Sukses')
					} catch (err){
						console.log(err)
						reply('Error njir')
					}
					break
				case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*`
					xinz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'addvideo':
					if (!isQuotedVideo) return fakegroup(mess.wrongFormat)
					if (!q) return fakegroup(mess.wrongFormat)
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xinz.downloadMediaMessage(boij)
					videonye.push(`${q}`)
					fs.writeFileSync(`./media/video/${q}.mp4`, delb)
					fs.writeFileSync('./media/video.json', JSON.stringify(videonye))
					fakegroup(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`)
					break
				case 'getvideo':
					if (!q) return fakegroup(mess.wrongFormat)
					bufferx2w = fs.readFileSync(`./media/video/${q}.mp4`)
					xinz.sendMessage(from, bufferx2w, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'delvideo':
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fs.unlinkSync(`./media/video/${q}.mp4`)
						fakegroup(`Succes delete video ${q}.mp4`)
					} catch (err) {
						fakegroup(`Gagal delete video ${q}.mp4`)
					}
					break
				case 'listvideo':
				case 'videolist':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `• ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					fakegroup(teks)
				case 'leave':
					fakegroup(`See youu....`)
					sleep(2000)
					xinz.groupLeave(groupId)
					break
				case 'chatlist':
				case 'cekchat':
					xinz.updatePresence(from, Presence.composing)
					fakegroup(`Total : ${totalchat.length} Chat`)
					break
				case 'speed':
				case 'ping':
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
						const child = stdout.toString('utf-8')
						const teks = child.replace(/Memory:/, "Ram:")
						const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} Second`
						fakegroup(pingnya)
					})
					break					
				case 'pinterest':
					dati = await axios.get(`https://api.vhtear.com/pinterest?query=${body.slice(11)}&apikey=cipapremi919`)
					data = dati.data
					for (let i of data.result) {
						const amsulah = data.result
						const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
						sendMediaURL(from, pimterest, body.slice(11))
					}
					break
				case 'tahta':
					sendMediaURL(from, `https://api.vhtear.com/hartatahta?text=${body.slice(7)}&apikey=cipapremi919`)
					break
			case 'tiktokprofile':
			    reply('Sedang diproses....')
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=cipapremi919`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              xinz.sendMessage(from, tiktok, image, {quoted: mek})
			        await lim					
				case 'tiktok':
					reply(mess.wait)
					anu = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${args[0]}`)
					sendMediaURL(from, anu.data.result.videoWithWatermark)
					break
				case 'tiktokaudio':
					reply(mess.wait)
					anu = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${args[0]}`)
					sendMediaURL(from, anu.data.result.audioOnly)
					break
				// MWEHEHEH
        case 'video': // SEARCH VIDEO FROM YOUTUBE
        case 'vidio':
            if (args.length === 0) return reply(`Kirim perintah ${prefix}video judul video`)
            const querv = body.slice(7)
            reply(mess.wait)
            try {
                const resmusv = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv)}&apikey=cipapremi919`)
                const jsonsercmuv = await resmusv.data
                let berhitung1 = 1
                const { result } = await jsonsercmuv
                let xixixai = `Hasil pencarian dari ${querv}\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID\nContoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
                }
                    xixixai += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixai += `(#)${result[ii].id}`
                }
                await sendMediaURL(from, result[0].image, xixixai)
            } catch (err){
                console.log(err)
            }
            break
            
        case 'music': // SEARCH MUSIC FROM YOUTUBE
        case 'musik':
           if (args.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const querv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=cipapremi919`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await sendMediaURL(from, result[0].image, xixixai)
           } catch (err){
               console.log(err)
           }
           break
        case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (args.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah mekar.')
                    })

                } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah mekar._`)
            }
            break
        case 'getvideo':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo* _IdDownload_`)
            try {    
            if (isQuotedImage) {
                if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
                const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                const pilur = dataDownmp3.split('(#)')
                console.log(pilur[args[0]])
                reply(mess.wait)
                ytv(`https://youtu.be/${pilur[args[0]]}`)
                    .then((res) => {
                        // console.log(res)
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })

                    })
                 
            } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
            } else {
                if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo _Id Video_*`)
                if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
                reply(mess.wait)
                ytv(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(mess.error.api)
            }
            break
			case 'sticktag':
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await xinz.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				xinz.sendMessage(from, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break

//-------------------------------------------------------------------------------------------------------------//

	}				
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
        // console.log(e)
    }
}