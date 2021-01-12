import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { updateSearchTerm, clearSearchTerm } from '../../actions';
// Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import ActualSearch from '../../components/actualSearch';
import Results from '../../components/results';

const SearchResults = props => {
    return (
        <>
            <Header />
            <ActualSearch />
            <Results />
            <Footer />
        </>
    );
};

export default SearchResults;