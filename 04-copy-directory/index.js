const path = require('path');
const fs = require('fs');

fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true }, (error) => {
  fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true, force: true }, (errors) => {
      if (errors) throw err;
      files.forEach((file) => {
        fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (er) => {
          if (er) throw err;
        });
      });
    });
  });
  return error;
});
