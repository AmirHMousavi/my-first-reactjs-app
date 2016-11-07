import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyAYKjReBZWH7sdZLOdPo_0wpkXNrkfiZ0U';

// create a new component. the component should produce HTML
const App = () => {
    return <div>
        <SearchBar/>
    </div>;
}
// take the component's generated HTML and pu it int he DOM.
ReactDOM.render(<App />,document.querySelector('.container'));