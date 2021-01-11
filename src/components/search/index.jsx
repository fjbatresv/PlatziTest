import React from 'react';

const Search = () => {
    return (
        <>
            <i className="material-icons md-32 clickable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                search
            </i>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <form>
                            <div class="modal-body">
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Buscar" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary">Buscar</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;