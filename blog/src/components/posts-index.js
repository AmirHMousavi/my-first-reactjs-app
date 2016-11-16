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
    renderPosts() {
        return this
            .props
            .posts
            .map((post) => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <Link to={"posts/"+post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                        </Link>
                    </li>
                );
            });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);