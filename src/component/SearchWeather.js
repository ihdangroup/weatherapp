import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/SearchWeather.css'

export default function SearchWeather() {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('Indonesia');
    const [data, setData] = useState([]);
    const [clockState, setClockState] = useState()
    let componentMounted = true;
    useEffect(() => {
        const fetchWeather = async() => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3044afdc0173b516e2fb5801681f41a0`);
            if (componentMounted) {
                setData(await response.json());
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000)
    }, [search]);
    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch(input);
    }
    let emoji = null;
    if (data.main !== undefined) {
        if (data.weather[0].main === "Clouds") {
            emoji = "fa-cloud"
        } else if (data.weather[0].main === "Thunderstorm") {
            emoji = "fa-bolt";
        } else if (data.weather[0].main === "Drizzle") {
            emoji = "fa-cloud-rain";
        } else if (data.weather[0].main === "Rain") {
            emoji = "fa-cloud";
        } else if (data.weather[0].main === "Snow") {
            emoji = "fa-snow-flake";
        } else {
            emoji = "fa-smog";
        }
    } else {
        return (
            <div>
                <div className="vh-100 bg-dark bg-opacity-50 text-light fw-bolder flex-decoration-row d-flex align-items-center justify-content-center">
                    <div className="not-found">
                        <h4>City Not Found</h4>
                        <NavLink to="/404">Back</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    let temp = (data.main.temp - 273.35).toFixed(2);
    let temp_min = (data.main.temp_min - 273.35).toFixed(2);
    let temp_max = (data.main.temp_max - 273.35).toFixed(2);

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month:'long'});
    let day = d.toLocaleString("default", {weekday:'long'});

    return (
        <div>
            <div className="container mt-5 vh-100 align-items-center">
                <div className="card text-white text-center border-0">
                    <div className="card-img-overlay">
                        <h2 className="fw-bolder">{clockState}</h2>
                        <p className="card-text lead">
                             {day}, {month} {date}, {year}
                        </p>
                        <form onSubmit = {handleSubmit}>
                            <div className="input-group rounded mb-4 w-75 mx-auto">
                                <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" value={input} aria-describedby="basic-addon2" onChange={(e) => setInput(e.target.value)} required/>
                                <button type="submit" className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                        <div className="bg-dark bg-opacity-50 rounded py-3">
                            <h2 className="card-title">{data.name}</h2>
                            <hr/>
                            <div className="cuaca d-flex">
                                <div className="wraper text-center">
                                    <div className="cloud d-flex justify-content-center align-items-center">
                                        <i className={`emoji fas ${emoji} fa-4x`}></i>
                                        <p className="px-3 lead fw-bolder mb-0">{data.weather[0].main}</p>
                                    </div>
                                    <h1 className="fw-bolder suhu mb-5">{temp}&deg;</h1>
                                </div>
                                <div className="temp">
                                    <p className="lead"> {temp_min} &deg;C</p>
                                    <p className="lead"> {temp_max} &deg;C</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="footer py-5">
                            <p className="lead">WeatherApp &#169; 2022 Ikhdan Maghfuron</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
