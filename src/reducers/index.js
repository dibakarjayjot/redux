import { combineReducers } from "redux";
import { reducer } from "redux-form";

const songsReducer = () => {
  return [
    { title: "Honey", duration: "4:00" },
    { title: "Baby", duration: "5:00" },
    { title: "All Star", duration: "3:00" },
    { title: "No Scrubs", duration: "6:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  form: reducer
});
