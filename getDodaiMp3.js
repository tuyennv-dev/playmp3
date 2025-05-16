const ffmpeg = require("fluent-ffmpeg");
var mp3Duration = require("mp3-duration");
const fs = require("fs")
const getMP3Duration = require('get-mp3-duration')
const { parseFile } = require('music-metadata');

async function getDoDaiMp3(filePath) {
//   const metadata = await new Promise((resolve, reject) => {
//              ffmpeg.ffprobe(filePath, (err, metadata) => {
//                  if (err) {
//                      reject(err);
//                  } else {
//                      resolve(metadata);
//                  }
//              });
//          });
//          return metadata.format.duration;
// const buffer = fs.readFileSync(filePath)
// const duration = getMP3Duration(buffer)
 
//     return duration


  const metadata = await parseFile(filePath, {duration: true});
  return metadata.format.duration

}
module.exports = getDoDaiMp3;
