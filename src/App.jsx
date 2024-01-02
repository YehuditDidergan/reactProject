import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import './App.css'
import AdminWellcom from './allComponent/admin/adminwellcom'
import ClientWellcom from './allComponent/client/clientWellcom';
import AdminAppointments from './allComponent/admin/adminAppointments'
import AdminServices from './allComponent/admin/adminServices';
import Home from './allComponent/home';

function App() {

  const [count, setCount] = useState(0);
  return (<>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"client"} element={<ClientWellcom />}></Route>
            <Route path={"admin"} element={<AdminWellcom />}>
              <Route path={'appointments'} element={<AdminAppointments />}></Route>
              <Route path={'services'} element={<AdminServices />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>)
}
export default App;