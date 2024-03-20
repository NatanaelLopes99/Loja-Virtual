const express = require('express')
const cors = require('cors')

const app = express()
const db = require('./db');

app.use(cors())
app.use(express.json())

// listar todos os usuários
app.get("/users", async (req, res) => {
  try {
    let results = await db.all();
    return res.json(results);
  } catch (error) {
    return res.json({ message: "Must have some problem :(" }, 500);
  }
})

// login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = await db.login(email, senha);

  if (user) {
    return res.json({ id: user.id, nome: user.nome, email: user.email }, 200);
  }

  return res.json({ message: "invalid credentials" }, 400);
})

// cadastrar um usuário
app.post("/users", async (req, res) => {
  const { nome, email, senha } = req.body;

  const response = await db.checkEmailExists(email);

  if (response) {
    return res.json({ message: "Email already exist" }, 400);
  }

  try {
    const user = { nome, email, senha };
    await db.insertUser(user);
    return res.send(201);
  } catch (error) {
    return res.json({ message: "Must have some problem :(" }, 500);
  }
})

// deletar um usuário com pelo ID
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const response = await db.deleteUserById(userId);

    if (!response) {
      return res.json({ message: "User doesn't exist." }, 404);
    }

    return res.json({ message: "User removed successfully" }, 200);
  } catch (error) {
    console.log(error)
    return res.json({ message: "Must have some problem :(" }, 500);
  }
})

// deletar um usuário com por nome
app.delete("/users/delete/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const response = await db.deleteUserByName(name);

    if (!response) {
      return res.json({ message: "User doesn't exist." }, 404);
    }

    return res.json({ message: "User removed successfully" }, 200);
  } catch (error) {
    console.log(error)
    return res.json({ message: "Must have some problem :(" }, 500);
  }
})

app.listen(3001, () => {
  console.log('Server is running on port 3001 🚀')
})