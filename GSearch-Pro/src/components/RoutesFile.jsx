import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Results from './Results'

const RoutesFile = () => {

    return (
        <>
            <div className="p-6">
                <Routes>
                    <Route exact path="/" element={(<Navigate replace to="/search"/>)}/>
                    <Route exact path="/search" element={<Results />} />
                    <Route exact path="/imagesearch" element={<Results />} />
                </Routes>
            </div>
        </>
    )
}

export default RoutesFile
