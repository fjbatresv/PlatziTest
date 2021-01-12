import React, { useState } from 'react';
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
        </>
    );
};

export default SearchResults;