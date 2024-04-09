import { Routes, Route } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard.js";
import Error401 from "./Pages/401.js";
import Error404 from "./Pages/404.js";
import Error500 from "./Pages/500.js";
import Login from "./Pages/login.js";
import Password from './Pages/password.js';
import Register from "./Pages/register.js";
import Layoutstatic from './Pages/layoutstatic.js';
import Layoutsidenavlight from './Pages/layoutsidenavlight.js';
import Tables from './Pages/tables.js';
import Charts from "./Pages/charts.js";
// import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path="Dashboard" element={<Dashboard />} /> */}
        <Route path='/Error401' element={<Error401 />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path='/Error500' element={<Error500 />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Password' element={<Password />} />
        <Route path='/Register' element={<Register />} />

        <Route path='/Layoutstatic' element={<Layoutstatic />} />
        <Route path='/Layoutsidenavlight' element={<Layoutsidenavlight />} />

        <Route path='/Tables' element={<Tables />} />
        <Route path='/Charts' element={<Charts />} />
        {/* </Route> */}
      </Routes>
      {/* <Dashboard />
      <Error401 /> */}
    </div>
  );
}

export default App;
