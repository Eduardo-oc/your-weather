import React from 'react'
import { WeatherApp } from './WeatherApp';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {

    return (
        <>
            <Header
                titulo="Clima React App"
            />
            <WeatherApp />

            <Footer />
        </>
    )
}
