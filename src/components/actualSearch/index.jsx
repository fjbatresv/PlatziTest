import React, { useState } from 'react';
// Style
import style from './actualSearch.styl';
// Bootstrap
import { InputGroup, FormControl } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
// Actions
import { updateSearchTerm, clearSearchTerm, searchResults } from '../../actions';
// Router
import { useHistory } from 'react-router-dom';
import { getSearch } from '../../hooks/tmdb.api';

const ActualSearch = props => {

    const history = useHistory();
    const [form, setValues] = useState({
        searchTerm: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updateSearchTerm(form['searchTerm']);
        getSearch(form['searchTerm'])
            .then(list => props.searchResults(list));
    }

    const clearSearch = event => {
        props.clearSearchTerm();
        history.push('/');
    }

    return (
        <div className="container-fluid mb-32">
            <form onSubmit={handleSubmit}>
                <InputGroup className="w-100 d-flex justify-content-center align-items-center">
                    <InputGroup.Prepend>
                        <i className="material-icons">
                            search
                        </i>
                    </InputGroup.Prepend>
                    <FormControl
                        className={style.searchInput}
                        placeholder="Buscar"
                        name="searchTerm"
                        onChange={handleInput}
                        defaultValue={props.searchTerm} />
                    <InputGroup.Append>
                        <i className="material-icons" onClick={clearSearch}>
                            clear
                        </i>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </div>
    );
};

const mapStateProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

const mapDispatchToProps = {
    updateSearchTerm,
    clearSearchTerm,
    searchResults
};

export default connect(mapStateProps, mapDispatchToProps)(ActualSearch);