const db = require('./index.js');

module.exports = {
  readAll: callback => {
    db.query("SELECT * FROM tennis;", (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result)
      }
    });
  },
  addItem: ({ name, amount }, callback) => {
    var msg = `INSERT INTO tennis (item_name, amount) VALUES ("${name}",${amount});`
    db.query(msg, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },
};