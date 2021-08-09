import ConnectionFactory from './ConnectionFactory';

class PetDao {

    constructor(connection) {
        this._factory = new ConnectionFactory();
        this._connection = null;
        this._factory.getConnection()
            .then(connection => this._connection = connection);
    }

    adiciona(pet, store) {
        this.abreConceccao();
        return new Promise((resolve, reject) => {          
            let request = this._connection
                .transaction([store], 'readwrite')
                .objectStore(store)
                .add(pet);

            request.onsuccess = e => {
                console.log('Pet adicionado com sucesso');
                resolve();
            };

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível adicionar a negociação');
            };
        });
    }

    listaTodos(store) {
        this.abreConceccao();
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([store], 'readwrite')
                .objectStore(store)
                .openCursor();

            let Pets = [];

            cursor.onsuccess = e => {
                let atual = e.target.result;
                if(atual) {
                    Pets.push({...atual.value});
                    atual.continue();
                } else {
                    resolve(Pets);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível listar as negociações');
            };
        });
    }

    apagaTodos(store) {
        this.abreConceccao();
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([store], 'readwrite')
                .objectStore(store)
                .clear();

            request.onsuccess = e => resolve('Negociações apagadas com sucesso');

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível apagar as negociações');
            }; 
        });
    }

    abreConceccao(){
        if(!this._connection){
            this._factory.getConnection()
                .then( connection => this._connection = connection);
        }
    }

    fechaConeccao() {
        this._connection.closeConnection();
        this._connection = null;
    }
}

export default PetDao;