import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Router
import { useHistory } from 'react-router-dom';
// actions
import { updateSearchTerm } from '../../actions';
// Bootstrap
import Modal from 'react-bootstrap/Modal';

const Search = props => {
    const history = useHistory();
    const [form, setValues] = useState({
        searchTerm: ''
    });
    const [modalShow, setModalShow] = React.useState(false);

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updateSearchTerm(form['searchTerm']);
        setModalShow(false);
        history.push('/search');
    }

    return (
        <>
            <i className="material-icons md-32 clickable" onClick={() => setModalShow(true)}>
                search
            </i>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Body>
                    <form onSubmit={handleSubmit} >
                        <div className="modal-body">
                            <input name="searchTerm" className="form-control" placeholder="Buscar" onChange={handleInput} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setModalShow(false)} >Cancelar</button>
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapDispatchToProps = {
    updateSearchTerm
};

export default connect(null, mapDispatchToProps)(Search);