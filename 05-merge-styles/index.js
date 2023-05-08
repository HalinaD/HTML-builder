const fs = require('fs');

const path = require('path');

const style = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist/bundle.css');
fs.readdir(style, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  const css = files.filter((file) => path.extname(file.name) === '.css');
  const stream = fs.createWriteStream(bundle);
  css.forEach((cssFile) => {
    const cssfile = path.join(style, cssFile.name);
    const newstream = fs.createReadStream(cssfile);
    newstream.on('data', (data) => stream.write(data));
  });
});