// Action Creater
export const selectSong = (song) => {
	// return an action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

export const login = (user) => {
	return {
		type: 'LOGIN',
		payload: user
	};
};
