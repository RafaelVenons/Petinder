const stores = ['like','dislike'];
const version = 1;
const dbName = 'petinderframe';

class ConnectionFactory {

    constructor() {
        this.connection = null;
        this._close = null;
    }

    getConnection() {    
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);
            
            openRequest.onupgradeneeded = e => {
                this._createStores(e.target.result);
            };

            openRequest.onsuccess = e => {
                if(!this.connection) {
                    this.connection = e.target.result;
                    this.close = this.connection.close.bind(this.connection);
                    this.connection.close = function() {
                        throw new Error('Você não pode fechar diretamente a conexão');
                    };
                }
                resolve(this.connection);
            };

            openRequest.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error.name);
            };
        });
    }

    _createStores(connection) {
        stores.forEach(store => {
            if (connection.objectStoreNames.contains(store))connection.deleteObjectStore(store);
            connection.createObjectStore(store, { autoIncrement: true});
        });
    }

    closeConnection() {
        if(this.connection) {
            this.close();
            this.connection = null;
            this.close = null;
        }
    }
}

export default ConnectionFactory;