const http = require('http');
const port = 3000

const rotas = {
  '/':'Curso de node',
  '/livros':'Entrei na pag de livros',
  '/autores': 'Listagem de autores',
  '/editoras': 'Página das Editoras',
  '/sobre':'Info sobre '
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Contet-type':'text/plain'});
  res.end(rotas[req.url]);
});

server.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));