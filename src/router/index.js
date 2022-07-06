import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchWeather from '../component/SearchWeather'
import NotFound from '../component/NotFound'

export default function Path() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SearchWeather />} />
                <Route path="*" element = {<NotFound />} />
            </Routes>
        </div>
    )
}
