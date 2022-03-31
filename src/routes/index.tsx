import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

function HelloWorld() {
    return (
        <div>Hello World</div>
    )
}

export default function () {
    return (
        <Routes>
            <Route path="/" element={<HelloWorld />} />
        </Routes>
    );
};