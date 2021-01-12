import { useState, useEffect } from 'react';

export const moviePoster = (poster) => {
    const [img, setPoster] = useState(`https://image.tmdb.org/t/p/w185${poster}`);
    useEffect(() => {
        fetch(`${baseUrl}/movie/popular?api_key=${key}&language=es`)
            .then(response => response.json())
            .then(data => setPopulars(data.results));
    }, []);
    return movies;
}