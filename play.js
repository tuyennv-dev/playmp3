const downloadYouTubeMP3 = require("./dowloadMp3.js");
const infoVideo = require("./infoVideo.js");
const Link = require("./mp3.model.js");
const playMp3 = require("./playMp3.js");
const path = require("path")
async function play(bot, chatId) {
  const mp3 = await Link.findOneAndUpdate(
    {
      numberRun: 0,
    },
    { $inc: { numberRun: 0 } }
  ).lean();
  if(!mp3){
    await bot.sendMessage(chatId, 'Đã hết link phát' );
  }
  const linkYTB = mp3.link
  const idVideo = linkYTB.split("/")[3].slice(8,)

  //Tai mp3 
  const resDowloadMp3 = await downloadYouTubeMP3(idVideo)
  const ifVideo = await infoVideo(idVideo)
  const titleVideo =  ifVideo.title
 await bot.sendMessage(chatId, `Bắt đầu chạy: ${titleVideo}` );
 const pathMp3 = path.join(__dirname, resDowloadMp3 )
 console.log("🚀 ~ :25 ~ play ~ pathMp3:", pathMp3)
 const playVoice = await playMp3(pathMp3)
  await bot.sendMessage(chatId, playVoice );


}
module.exports = play;
