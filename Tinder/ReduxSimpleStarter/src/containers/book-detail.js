import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>
                No Book Is Selected!
            </div>
        }
        return (
            <div>
                <h3>details for:</h3>
                <div>
                    title: {this.props.book.title}
                </div>
                <div>
                    pages: {this.props.book.pages}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //what ever returns from here will show up as props inside of BookList
    return {book: state.activeBook};
}

export default connect(mapStateToProps)(BookDetail);