import { useState, useEffect } from 'react';

const key = '768f63de8053f4e2c3324955e06f6738';

const getPopulars = () => {
    const [movies, setPopulars] = useState([]);
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-GT`)
            .then(response => response.json())
            .then(data => setPopulars(data.results));
    }, []);
    return movies;
}

export default getPopulars;