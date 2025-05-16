const player = require("play-sound")();
async function playMp3(link) {
  player.play("file.mp3", (err) => {
    if (err) return ("Lỗi khi phát nhạc:", err);
    else console.log("Đang phat nhac");
  });
}
module.exports = playMp3
