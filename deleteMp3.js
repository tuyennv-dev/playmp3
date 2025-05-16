const fs = require('fs/promises');

async function deleteMp3(path){
 await fs.unlink(path);
    console.log('✅ Đã xóa file:', path);
}
module.exports = deleteMp3