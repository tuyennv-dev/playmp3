const { exec } = require('child_process');
const getDoDaiMp3 = require('./getDodaiMp3');
const delay = require('./delay');

async function playMp3(link){
    console.log("đang phát link", link)
    const dec = await getDoDaiMp3(link)
    console.log("🚀 ~ :8 ~ playMp3 ~ dec:", dec)
    await delay(dec * 1000 + 1 * 1000 * 60 * 5)
    exec(`mplayer ${link}`);

}
module.exports = playMp3