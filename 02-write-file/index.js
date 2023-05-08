let path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));
stdout.write('Write some text: \n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exitFunc();
  }
    else {
    output.write(data);}
});
process.on('SIGINT', exitFunc)
function exitFunc() {
  stdout.write('Bye-Bye!');
  process.exit();
}