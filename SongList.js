import React, { Component } from 'react';
import { connect } from 'react-redux';
import { songSelected } from '../actions'

class SongList extends Component {
    renderFullList() {
        return this.props.songs.map((songs) => {
            return (
                <div className="item" key={songs.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.songSelected(songs)}>
                            Select
                    </button>
                    </div>
                    <div className="content">{songs.title}</div>
                </div >
            )
        })
    }

    render() {
        
        return <div className="ui divided list">{this.renderFullList()}</div>;
    }
}
const mapStateToProps = (state) => {
    console.log(state);

    return { songs: state.songs };

};
export default connect(mapStateToProps, { songSelected })(SongList);