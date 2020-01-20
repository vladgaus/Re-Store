import React from "react";
import BookStoreServiceConsumer from '../hoc';

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

export default withBookStoreService;