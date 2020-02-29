const db = require('./index.js');

const data = [
  { name: 'tom0', amount: 234 },
  { name: 'tom1', amount: 2334 },
  { name: 'tom2', amount: 24 },
  { name: 'tom3', amount: 4 },
  { name: 'tom4', amount: 33333234 },
];


data.forEach(({ name, amount }) => {
  var msg = `INSERT INTO tennis (item_name, amount) VALUES ("${name}",${amount});`
  db.query(msg)
});

