import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <form className="navbar-form search-bar" role="search">
                <div className="input-group add-on">
                    <input
                        className="form-controll"
                        placeholder="Search"
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}/>
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;