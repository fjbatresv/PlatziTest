import React from 'react';
import { connect } from 'react-redux';
import { getSearch } from '../../hooks/tmdb.api';
import Categories from '../../components/categories';
import Carousel from '../../components/carousel';
import CarouselItem from '../../components/carouselItem';

const Results = props => {
    let movies = [];
    movies = getSearch(props.searchTerm);
    return (
        <div className="container-fluid">
            <Categories title="" >
                <Carousel axis="y">
                    {movies.map(item =>
                        <CarouselItem movie={item} />
                    )}
                </Carousel>
            </Categories>
        </div>
    );
};

const mapStateProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateProps, null)(Results);