import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Honey', duration: '4:00' },
		{ title: 'Baby', duration: '5:00' },
		{ title: 'All Star', duration: '3:00' },
		{ title: 'No Scrubs', duration: '6:00' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};
const loginReducer = (login = null, action) => {
	const dat = JSON.parse(localStorage.getItem('userData'));

	for (var i in dat) {
		var email = dat[i].email;
		var password = dat[i].password;
		if (email === action.payload.email && password === action.payload.password) {
			localStorage.setItem('currentUser', JSON.stringify(action.payload));
			if (action.type === 'LOGIN') {
				return action.payload;
			}
		}
	}

	return login;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
	login: loginReducer
});
