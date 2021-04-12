import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Form } from './components/Form';
import { Climate } from './components/Climate';
import { Error } from './components/Error';

import './styles/WeatherApp.css';

export const WeatherApp = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [consult, setConsult] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    const [showClima, setShowClima] = useState(false);


    useEffect(() => {
        const apiCall = async () => {

            if (consult) {
                try {

                    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`)

                    setResult(resp.data);
                    setConsult(false);
                    setError(false);
                    setShowClima(true);

                } catch (error) {
                    console.log(error);
                    setError(true);
                    setConsult(false);
                    setShowClima(false);
                }
            }

        }
        apiCall();
        //EL comentario de abajo es para quitar el warning que me salta en la consola de las dependencias del useEffect
        // eslint-disable-next-line
    }, [consult])


    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-4 border-5 border p-5 position-absolute mt-10 start-50 translate-middle">
                        <Form
                            city={city}
                            country={country}
                            setCity={setCity}
                            setCountry={setCountry}
                            setConsult={setConsult}
                            errors={setError}
                            setShowClima={setShowClima}
                        />
                    </div>
                    <div className="col-4 text-center position-absolute mt-5 start-50 translate-middle d-grid gap-3 size">
                        {error ? <Error msg="No hay resultados" /> : null}
                        {showClima ? <Climate result={result} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
