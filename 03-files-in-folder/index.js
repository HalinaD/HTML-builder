const path = require('path');
const fs = require('fs');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    files.forEach((file) => {
      if (file.isFile()) {
        fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stat) => {
          if (error) {
            console.log(error);
            process.exit();
          }
          console.log(`${file.name.split('.')[0]} - ${path.extname(file.name).slice(1)} - ${stat.size} bytes`);
        });
      }
    });
  },
);