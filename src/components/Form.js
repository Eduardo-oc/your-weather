import React, { useState } from 'react';
import { Error } from "./Error";
import Select from 'react-select';

import { options } from '../helpers/optionsCountry';

import '../styles/Form.css';

export const Form = ({ city, country, setCity, setCountry, setConsult, errors, setShowClima }) => {

    const [error, setError] = useState(false);

    const handleChangeCountry = (e) => {
        setCountry(e.value);

    }

    const handleChangeCity = (e) => {
        setCity(e.target?.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validamos 
        if (city === '' || country === '') {
            setError(true);
            errors(false);
            setShowClima(false);
            return;
        }
        setError(false);

        setConsult(true);

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="text-center position-absolute start-50 translate-middle d-grid gap-3 possition-error">
                {error ? <Error msg="Todos los campos son obligatorios" /> : null}
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="city"> Ciudad </label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChangeCity}
                    className="form-control"
                    placeholder="Escriba ciudad"
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="city"> País </label>
                <Select
                    options={options}
                    name="country"
                    id='country'
                    value={options.label}
                    onChange={handleChangeCountry}
                />
            </div>

            <div className="text-center d-grid gap-2">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="btn btn-color mt-3 mb-0"
                />


            </div>
        </form>
    )
}
