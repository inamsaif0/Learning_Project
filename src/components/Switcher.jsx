import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
const Edit = lazy(() => import('./Editpage'));
const Viewpage = lazy(() => import('./View.jsx'));


function Switcher() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Viewpage/>}>
                    <Route path="/route/Editpage" element={<Edit />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Switcher