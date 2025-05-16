const fs = require("fs");
// const ytdl = require("@distube/ytdl-core");
const ytdl = require("@nuclearplayer/ytdl-core");

async function downloadYouTubeMP3(video_id) {
  let info = await ytdl.getInfo(video_id);
  let audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  const res = ytdl(`https://www.youtube.com/watch?v=${video_id}`, {
    format: audioFormats[0],
  }).pipe(require("fs").createWriteStream(`${video_id}.mp3`));
  return `${video_id}.mp3`;
}
module.exports = downloadYouTubeMP3;
