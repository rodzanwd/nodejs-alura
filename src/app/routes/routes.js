const db = require('../../config/database')
const LivroDao = require('../infra/livro-dao')

module.exports = (app) => {

    app.get('/livros', function(req, resp) {
        db.all('SELECT * FROM livros', function(err, res) {
            const livroDao = new LivroDao(db)
            livroDao.lista()
            .then(livros => resp.marko(
                require('../views/books/list/lista.marko'),
                {
                    livros: res
                }
            ))
            .catch(err => console.error(err)) 
        })
    })

    app.get('/livros/form/', (req, resp) => {
        resp.marko(require('../views/books/form/form.marko'))
    })

    app.post('/livros', function(req, resp) {
        console.log(`Resposta: ${req.body}`);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

}