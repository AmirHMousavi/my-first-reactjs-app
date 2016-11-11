import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (
                    <li
                        onClick={() => this.props.selectBook(book)}
                        key={book.title}
                        className="list-group-item">{book.title}</li>
                );
            });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//this function is the glue between react and redux
function mapStateToProps(state) {
    //what ever returns from here will show up as props inside of BookList
    return {books: state.books};
}

// gets all the actions and pass them to all the different reducers
// anything returns from this function will end up as props on the BookList container
// returns props of the BookList container.
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

// connect takes a function and a component(class) and produces a container the
// container is a component that is aware of a state contained by redux check
// redux documentation for different way to use connect.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);