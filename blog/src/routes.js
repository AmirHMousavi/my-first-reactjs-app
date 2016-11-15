import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostsIndex from './components/posts-index.js';

import App from './components/app.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
    </Route>

);