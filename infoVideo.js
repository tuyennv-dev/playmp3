const { Client } = require("youtubei");
const youtube = new Client();
async function infoVideo(videoID){
     const video = await youtube.getVideo(videoID);
    return video
}
module.exports = infoVideo