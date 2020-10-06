import { combineReducers } from 'redux';
//REDUCERS
//song list
const songsReducer = () => {
    return [
        {title: 'Song1', duration: '4:08'},
        {title: 'Song2', duration: '5:28'},
        {title: 'Song3', duration: '3:49'},
        {title: 'Song4', duration: '2:05'}
    ];
};

//selected song
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
         //payload property
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});