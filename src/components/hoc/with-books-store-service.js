import React from 'react';
import {BookStoreServiceConsumer} from '../bookstore-service-context';


const withBookStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStore) => {
                        return (<Wrapped {...props}
                                         bookStore={bookStore}/>);
                    }
                }
            </BookStoreServiceConsumer>
        );
    }
};

export default withBookStoreService;
