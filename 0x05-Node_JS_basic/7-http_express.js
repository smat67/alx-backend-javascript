const express = require('express');
const fs = require('fs');

const database = process.argv[2].toString();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else {
        const lines = data.split('\n');
        let numOfStudents = 0;
        const fields = {};
        const response = [];

        for (const line of lines) {
          if (line !== '' && !line.startsWith('firstname,')) {
            numOfStudents += 1;

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
        response.push(`Number of students: ${numOfStudents}`);

        for (const [field, students] of Object.entries(fields)) {
          response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        resolve(response);
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((response) => {
      res.send([
        'This is the list of our students',
        ...response,
      ].join('\n'));
    })
    .catch(() => {
      res.send([
        'This is the list of our students',
        'Cannot load the database',
      ].join('\n'));
    });
});

app.listen(1245);

module.exports = app;
