const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

const fetchBooks = (dispatch, bookStore) => () => {
    dispatch(booksRequested());
    bookStore.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

export const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
};

export const bookRemovedFromCart = (id) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: id
    }
};

export const allBooksRemovedFromCart = (id) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: id
    }
};

export {
    fetchBooks
};
