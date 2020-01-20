import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song){
        return <div>no song selected yet</div>
    }

    return <div>{song.title}</div>
};

const mapStateToProps = state => {
    return {
        song:state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);