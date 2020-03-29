const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

//npm init -y // npm install express

//metodos HTTP: get, post, put, delete

//yarn add nodemon -D
// SQLLITE BD/ vamos usar o KNEX.js
//para instalar npm install knex
//npm install sqlite3 
//  DRIVER: SELECT * FROM users
// query Builder: table('user')
// PARA INSTALAR MIGRATIONS npx knex migrate:make create_ongs
// biblioteca de validação npm install celebrate
// TDD (TEST-DRIVEN DEVELOPMENT)/ PRIMEIRO FAZER AS VALIAÇÕES
// npm install jest  FREMEWORK DE TESTE
// npx jest --init ele não vai encostar em nem uma conection
//npm install cross-env para ver sé estamos em um ambiente de teste
// validacoes de API npm install supertest -D