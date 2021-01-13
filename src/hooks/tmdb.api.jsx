import { useState, useEffect } from 'react';

const key = '768f63de8053f4e2c3324955e06f6738';
const baseUrl = 'https://api.themoviedb.org/3';

export const getPopulars = () => {
    const [movies, setPopulars] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/movie/popular?api_key=${key}&language=es`)
            .then(response => response.json())
            .then(data => setPopulars(data.results));
    }, []);
    return movies;
}

export const getSearch = (searchTerm) => {
    return fetch(`${baseUrl}/search/movie?api_key=${key}&language=es&include_adult=false&query=${searchTerm}&page=1`)
        .then(response => response.json())
        .then(data => data.results);
}

export const getMovieDetails = (id) => {
    const [movie, setMovie] = useState({
        title: '',
        overview: '',
        poster_path: ''
    });
    useEffect(() => fetch(`${baseUrl}/movie/${id}?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovie(data)
        }), []);
    return movie;
}

export const getMovieVideos = (id) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => fetch(`${baseUrl}/movie/${id}/videos?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => setVideos(data.results)), []);
    return videos;
}

export const getMovieImages = (id) => {
    const [images, setImages] = useState([]);
    useEffect(() => fetch(`${baseUrl}/movie/${id}/images?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => setImages(data.posters)), []);
    return images
}

export const getMovieKeywords = (id) => {
    const [keywords, setKeywords] = useState([]);
    useEffect(() => fetch(`${baseUrl}/movie/${id}/keywords?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => setKeywords(data.keywords)), []);
    return keywords
}
export const getMovieSimilars = (id) => {
    const [similars, setSimilars] = useState([]);
    useEffect(() => fetch(`${baseUrl}/movie/${id}/similar?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => setSimilars(data.results)), []);
    return similars;
}
export const getMovieReviews = (id) => {
    const [reviews, setRevies] = useState([]);
    useEffect(() => fetch(`${baseUrl}/movie/${id}/reviews?api_key=${key}&langauge=es`)
        .then(response => response.json())
        .then(data => setRevies(data.results)), []);
    return reviews;
}

export const getMovieGenres = (id) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/movie/popular?api_key=${key}&language=es`)
            .then(response => response.json())
            .then(data => setMovies(data.results));
    }, []);
}
