import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({saveSearch}) => {

    const [word, saveWord] = useState('');
    const [error, saveError] = useState(false);

    const searchImages = e => {
        e.preventDefault();

        // Validar
        if(word.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // Enviar el termino de busqueda hacia el componente principal
        saveSearch(word);
    }

    return (
        <form
            onSubmit = { searchImages }
        >
            <div className="row">
                <div className="form-group col-md-8 rounded-0">
                    <input
                        type = "text"
                        className = "form-control form-control-lg shadow"
                        placeholder = "Example: bitcoin"
                        onChange = { e => saveWord(e.target.value) }
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type = "submit"
                        className = "btn btn-lg btn-dark btn-block"
                        value = "Search"
                    />
                </div>
            </div>

            { error ? <Error message="Add a search term" /> : null }

        </form>
    );
}

Form.propTypes = {
    saveSearch: PropTypes.func.isRequired
}
 
export default Form;