// import fs from 'fs';
const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fields = {};

        for (const line of lines) {
          if (line !== '' && !line.startsWith('firstname,')) {
            const values = line.split(',');
            const name = values[0];
            const field = values[3];

            if (field in fields) {
              fields[field].push(name);
            } else {
              fields[field] = [name];
            }
          }
        }
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
