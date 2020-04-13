import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <div className="TrackList">
                    <TrackList tracks={this.props.searchResults} />
                </div>
            </div>
        );
    }
}

export default SearchResults;