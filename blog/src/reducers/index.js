import { combineReducers } from 'redux';
import PostReducer from './reducer-posts.js';

const rootReducer = combineReducers({
  post: PostReducer
});

export default rootReducer;
