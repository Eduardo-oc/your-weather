import React from 'react';
import '../styles/WeatherApp.css';

export const Climate = ({ result }) => {

    const { name, main } = result;


    // pasamos los grados a celsius
    const kelvin = 273.15;

    return (
        <div className="card position-absolute mb-10 start-50 translate-middle-x d-grid gap-3 size p-4 border-5">
            {name && main ? <div>
                <h2> El clima de {name} </h2>
                <p>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> ℃ </
                    span>
                </p>
                <p>Temperatura Máxima :
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> ℃ </
                    span>
                </p>
                <p>Temperatura Mìnima :
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> ℃ </
                    span>
                </p>
            </div> : null}
        </div>
    )
}


