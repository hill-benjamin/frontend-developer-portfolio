const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',          // El servidor de base de datos (cámbialo según tu configuración)
  user: 'root',          // Tu nombre de usuario de la base de datos
  password: 'Septiembre_13',   // Tu contraseña de la base de datos
  database: 'contactDB' // El nombre de la base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = 'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, subject, message];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error al guardar los datos en la base de datos:', error);
      res.status(500).send('Error al guardar los datos.');
    } else {
      console.log('Datos guardados en la base de datos');
      res.send('¡Gracias por enviar el formulario!');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
