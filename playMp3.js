const { exec } = require('child_process');
const getDoDaiMp3 = require('./getDodaiMp3');
const delay = require('./delay');

async function playMp3(link, dec){
    console.log("đang phát link", link)
    exec(`mplayer ${link}`);
    await delay(dec * 1000 + 1 * 1000 * 60 * 5)

}
module.exports = playMp3