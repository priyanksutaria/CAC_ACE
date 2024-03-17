import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Inventory from './layout/Inventory/Inventory';
import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home/Home';
import Volunteer from './layout/Volunteer/Volunteer';
import Reports from './layout/Reports/Reports';
import AdminDashboard from './layout/AdminDashboard/AdminDashboard';
import Json from './timepass';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inventory />} />
        <Route path='/Volunteer' element={<Volunteer />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/json' element={<Json />} />
      </Routes>
    </>
  );
}

export default App;
