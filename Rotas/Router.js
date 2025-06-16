import express from 'express'

const router = express.Router()

let usuarios = [
    {   
        id: 1,
        nome: 'Daniel'
    }
]

//principal
router.get('/', (req, res) => {
  res.send('Seja Bem-Vindo');
});

//mostrar
router.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

//criar
router.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
});

//atualizar
router.put('/usuarios/:id', (req, res) => {
  const id = req. params;
  res.json({ mensagem: 'Usuário atualizado com sucesso' });
});

//deletar
router.delete('/usuarios/:id', (req, res) => {
  const id = req. params;
  res.json({ mensagem: 'Usuário removido com sucesso' });
});

//teste
router.get('/teste', (req, res) =>{
    res.status(200).json({message: 'tudo certo'})
})

export default router;