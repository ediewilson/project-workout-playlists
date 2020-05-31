import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://workout-playlists-final-proj.herokuapp.com/api';

export const ActionTypes = {
  FETCH_USER: 'FETCH_USER',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_PLAYLIST: 'FETCH_PLAYLIST',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.AUTH_USER });
  };
}

export function fetchUser(spotifyID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getuser/${spotifyID}/`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/update/${user.spotifyID}`, user)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function createPlaylist(playlist) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/makeplaylist/`, playlist)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPlaylist(ID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/makeplaylist/${ID}/`)
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
