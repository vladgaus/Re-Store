import React from 'react';
import {BookStoreServiceConsumer} from '../bookstore-service-context';

const withBookStoreService = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (BookStore) => {
                        return (
                            <Wrapped {...props} BookStore = {BookStore}>
                                {fn}
                            </Wrapped>
                        );
                    }
                }

            </BookStoreServiceConsumer>
        );
    }
};

export {
    withBookStoreService
};
