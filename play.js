const deleteMp3 = require("./deleteMp3.js");
const downloadYouTubeMP3 = require("./dowloadMp3.js");
const infoVideo = require("./infoVideo.js");
const Link = require("./mp3.model.js");
const playMp3 = require("./playMp3.js");
const path = require("path");

const { DateTime } = require('luxon');

async function play(bot, chatId) {
  await bot.sendMessage(chatId, `Bắt đầu chạy chương trình`);

  let pathChaoCo = path.join(__dirname, "thuongco.mp3");
  await playMp3(pathChaoCo, 200);

  for (let i = 0; i < 20; i++) {
    try{
    const now = DateTime.now().setZone('Asia/Bangkok');
    if (now.hour >= 21) {
        break;
    }
    await bot.sendMessage(chatId, `Chạy lần ${i + 1}`);
    const mp3 = await Link.findOneAndUpdate(
      {
        numberRun: 0,
      },
      { $inc: { numberRun: 1 } }
    ).lean();
    if (!mp3) {
      await bot.sendMessage(chatId, "Đã hết link phát");
      process.exit(1)
    }
    const linkYTB = mp3.link;
    const idVideo = linkYTB.split("/")[3].slice(8);

    //Tai mp3
    const resDowloadMp3 = await downloadYouTubeMP3(idVideo);
    const ifVideo = await infoVideo(idVideo);
    const titleVideo = ifVideo.title;
    const duraVideo = ifVideo.duration
    await bot.sendMessage(chatId, `Bắt đầu chạy: ${titleVideo}`);
    const pathMp3 = path.join(__dirname, resDowloadMp3);
    const playVoice = await playMp3(pathMp3,duraVideo);
    await deleteMp3(pathMp3); 
    }catch(err){
    await bot.sendMessage(chatId, err);

    }
  }
  let pathThongbao = path.join(__dirname, 'thongbaodingu.mp3')
  await playMp3(pathThongbao, 10 )
  let pathBai1 = path.join(__dirname, 'bac_1.mp3')
    await playMp3(pathBai1, 200 )


}
module.exports = play;
