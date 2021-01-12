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
    const [movies, setResults] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/search/movie?api_key=${key}&language=es&include_adult=false&query=${searchTerm}&page=1`)
            .then(response => response.json())
            .then(data => setResults(data.results));
    }, []);
    return movies;
}