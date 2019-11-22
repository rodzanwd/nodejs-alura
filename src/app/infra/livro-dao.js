class LivroDao {

    constructor(db) {
        this._db = db
    }

    lista(callback){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (err, res) => {
                    if(err) return reject('Não foi possível listar os livros!')
                    return resolve(res)
                }
            )
        })
    }

    adiciona(livro) {
    return new Promise((resolve, reject) => {
        this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o livro!');
                }

                resolve();
            } 
        )       
    });
} 

}

module.exports = LivroDao