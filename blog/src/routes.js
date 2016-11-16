import React from 'react';
import {Route, IndexRoute} from 'react-router';


import PostsIndex from './components/posts-index.js';
import App from './components/app.js';
import PostsNew from './components/posts-new.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
    </Route>

);