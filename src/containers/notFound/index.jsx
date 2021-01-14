import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

const NotFound = () => {
    return (
        <>
            <Header />
            <h3>
                No hay nada aqui...
            </h3>
            <Link to="/" >
                Volver al inicio
            </Link>
        </>
    );
};

export default NotFound;