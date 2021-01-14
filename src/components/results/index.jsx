import React from 'react';
import { connect } from 'react-redux';
import Categories from '../../components/categories';
import Carousel from '../../components/carousel';
import CarouselItem from '../../components/carouselItem';

const Results = props => {
    return (
        <div className="container-fluid">
            <Categories title="" >
                <Carousel axis="y">
                    {props.searchResults.map(item =>
                        <CarouselItem movie={item} />
                    )}
                </Carousel>
            </Categories>
        </div>
    );
};

const mapStateProps = state => {
    return {
        searchTerm: state.searchTerm,
        searchResults: state.searchResults
    };
};

export default connect(mapStateProps, null)(Results);