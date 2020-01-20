import React from 'react';
import './app.css';
import {withBookStoreService} from '../hoc';

const App = ({BookStore}) => {
    console.log(BookStore.getBooks());
    return(
        <h1>Re Store</h1>
    );
};

export default withBookStoreService()(App);
