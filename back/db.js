const mysql = require('mysql2');

const connection = mysql.createConnection({
  connectionLimit: 100,
  password: 'root',
  user: 'root',
  database: 'prova_ab2',
  host: 'localhost',
  port: '3306'
});

let db = {};

db.all = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM usuarios`, (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    });
  });
};

db.login = (email, senha) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (error, result) => {
      if (error) {
        return reject(error);
      }

      if (result.length === 1) {
        return resolve(result[0]);
      } else {
        return resolve(null);
      }
    });
  });
};

db.findByEmailAndPassword = (email, senha) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM usuarios WHERE email = ? AND senha = ?`, [email, senha], (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    });
  });
};

db.insertUser = (user) => {
  const { nome, email, senha } = user;
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha], (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result.insertId);
    });
  });
};

db.deleteUserById = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM usuarios WHERE id = ?', [userId], (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result.affectedRows > 0);
    });
  });
};

db.deleteUserByName = (nome) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM usuarios WHERE nome = ?', [nome], (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result.affectedRows > 0);
    });
  });
};

db.checkEmailExists = (email) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS count FROM usuarios WHERE email = ?', [email], (error, result) => {
      if (error) {
        return reject(error);
      }

      const emailExists = result[0].count > 0;
      return resolve(emailExists);
    });
  });
};

module.exports = db;