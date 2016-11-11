import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.onInputChange = this
            .onInputChange
            .bind(this);
        this.onFormSubmit = this
            .onFormSubmit
            .bind(this);
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value})
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    value={this.state.searchTerm}
                    placeholder="favorite city"
                    className="form-control"
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="sumit" className="btn btn-secondary">Search
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);