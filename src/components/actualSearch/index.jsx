import React, { useState } from 'react';
// Style
import './actualSearch.scss';
// Bootstrap
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
// Actions
import { updateSearchTerm, clearSearchTerm } from '../../actions';
// Router
import { useHistory } from 'react-router-dom';

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
                        className="searchInput"
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
    clearSearchTerm
};

export default connect(mapStateProps, mapDispatchToProps)(ActualSearch);