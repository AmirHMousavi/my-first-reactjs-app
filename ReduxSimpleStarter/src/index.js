import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAYKjReBZWH7sdZLOdPo_0wpkXNrkfiZ0U';

class App extends Component {
    //*****************************
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        YTsearch({
            key: API_KEY,
            term: 'google'
        }, (videos) => {
            this.setState({videos});
        });
    }
    //*******************************
    render() {
        return (
            <div className="row">
                <SearchBar/>
                <VideoDetail video={this.state.videos[1]}/>
                <VideoList videos={this.state.videos}/>
                
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));