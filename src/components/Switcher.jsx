import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Link
  } from "react-router-dom";
  import Edit from './Editpage';
  import Viewpage from './View';
  import Clear from './Clear';
  import Unclear from './Unclear';
// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// const Edit = lazy(() => import('./Editpage'));
// const Viewpage = lazy(() => import('./View.jsx'));
// const Clear = lazy(() => import('./Clear'));
// const Unclear = lazy(() => import('./Unclear'));


function Switcher() {
    return (
        // <Router>
        //     <Routes>
        //         <Route path='/' element={<Clear />}>
        //             <Route path="/edit/view" element={<Viewpage/>} />
        //             <Route path="/edit/clear" element={<Edit/>} />
        //             <Route path="/edit/unclear" element={<Unclear/>} />

        //         </Route>
        //     </Routes>
        // </Router>
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Edit Page</Link>
              </li>
              <li>
                <Link to="/veiw">View Page</Link>
              </li>
              <li>
                <Link to="/clear">Clear</Link>
              </li>
              <li>
              <Link to="/unclear">Unclear</Link>
            </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Edit />} /> 
            <Route path="/veiw" element={<Viewpage />} />
            <Route exact path="/clear" element={<Clear />} />
            <Route exact path="/unclear" element={<Unclear />} />

              
          </Routes>
        </div>
      </Router>
    )
}

export default Switcher