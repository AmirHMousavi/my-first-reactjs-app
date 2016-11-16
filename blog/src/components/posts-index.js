import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
//import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js';


class PostsIndex extends Component {
    componentWillMount() {
        console.log('this would be a good time to call an action creator to fetch post');
        this
            .props
            .fetchPosts();
        // strategy for fetching data is to dispatch an action when ever index component
        // is about to be rendered to the DOM
    }
    render() {
        return (
            <div>
            <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
            </div>
                list of blog posts
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);
