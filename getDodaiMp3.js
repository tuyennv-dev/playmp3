const ffmpeg = require("fluent-ffmpeg");
var mp3Duration = require("mp3-duration");
async function getDoDaiMp3(filePath) {
  const metadata = await new Promise((resolve, reject) => {
             ffmpeg.ffprobe(filePath, (err, metadata) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(metadata);
                 }
             });
         });
         return metadata.format.duration;
}
module.exports = getDoDaiMp3;
