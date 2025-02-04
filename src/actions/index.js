import { getSearch } from '../hooks/tmdb.api';

export const genresReceived = payload => ({
    type: 'GENRES_RECEIVED',
    payload
});

export const popularsReceived = payload => ({
    type: 'POPULARS_RECEIVED',
    payload
});

export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
});

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload
});

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload
});

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload
});

export const clearSearchTerm = () => ({
    type: 'UPDATE_SEARCH',
    payload: ''
});

export const updateSearchTerm = payload => {
    return ({
        type: 'UPDATE_SEARCH',
        payload
    });
};

export const searchResults = payload => ({ type: 'SEARCH_RESULTS', payload });

export const setMovie = payload => ({type: 'SET_MOVIE', payload});