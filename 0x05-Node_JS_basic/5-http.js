const http = require('http');
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const path = req.url;

  if (path === '/') { res.end('Hello Holberton School!'); } else if (path === '/students') {
    countStudents(database)
      .then((response) => {
        res.write('This is the list of our students\n');
        for (const line of response) {
          res.write(`${line}\n`);
        }
        res.end();
      })
      .catch(() => {
        res.statusCode = 404;
        res.write('This is the list of our students\n');
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
