import React from 'react';
import { connect } from 'react-redux';
import { songSelected } from '../actions';

const SongDetail = ({ song }) => {

    if (!song) {
        return <div>Select a song!!</div>;
    }
    return (<div> <h3>Details:</h3>
        <p>
            Title: {song.title}
            <br />
            Duration:  {song.Duration}

        </p>
    </div>);
}

const mapStateToProps = (state) => {
    return { song: state.songSelected }
}

export default connect(mapStateToProps)(SongDetail);