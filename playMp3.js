const { exec } = require('child_process');
const getDoDaiMp3 = require('./getDodaiMp3');
const delay = require('./delay');

async function playMp3(link){
    const dec = await getDoDaiMp3(link)
    await delay(dec * 1000 + 1 * 1000 * 60 * 5)
    exec(`mplayer ${link}`);

}
module.exports = playMp3