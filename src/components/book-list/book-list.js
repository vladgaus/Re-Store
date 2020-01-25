import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import { withBookStoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';


class BookList extends Component {

    componentDidMount() {
        const {bookStore} = this.props;
        const data = bookStore.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return(
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        );
    };
}

const mapStateToProps = ({books}) => {
    return {books};
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

