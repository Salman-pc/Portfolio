import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Hero from '../Hero';
import Moreproject from '../Pages/Moreproject';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/projects' element={<Moreproject />} />
                <Route path='/' element={<Hero />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;
