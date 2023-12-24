const { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    updateBookbyIdHandler, 
    deleteBookByIdHandler } = require("./handler");

const routes = [
    { // nambah buku
        method  : 'POST',
        path    : '/books',
        handler : addBookHandler,
    },
    { // nampilin semua buku
        method  : 'GET',
        path    : '/books',
        handler : getAllBooksHandler,
    },
    { // nampilin detail buku sesuai id
        method  : 'GET',
        path    : '/books/{bookId}',
        handler : getBookByIdHandler,
    },
    { // ngubah data buku
        method  : 'PUT',
        path    : '/books/{bookId}',
        handler : updateBookbyIdHandler,
    },
    { // ngapus buku sesuai id
        method  : 'DELETE',
        path    : '/books/{bookId}',
        handler : deleteBookByIdHandler
    }
]

module.exports = routes;