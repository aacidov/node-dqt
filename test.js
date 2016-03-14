var DQT = require("./");
var arr = DQT.group(['mum', 'dad', 'son', 'dauther', 'dog', 'cat'])
var dqt = new DQT(arr);

dqt.on('step', console.log).on('choosen', console.log);
process.stdin.on('data', (data)=>{
   dqt.emit('click');
});
