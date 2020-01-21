const initialState = {
    books: [{
        id: 1,
        title: 'test',
        author: 'name'
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
