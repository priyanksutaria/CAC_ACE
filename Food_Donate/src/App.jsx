import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Inventory from './layout/Inventory/Inventory';
import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home/Home';
import Volunteer from './layout/Volunteer/Volunteer';
import Reports from './layout/Reports/Reports';
import AdminDashboard from './layout/AdminDashboard/AdminDashboard';
import donate from './Donate_food/donate/donate';
import forgetpassword from './Donate_food/forgetpassword/forgetpassword';
import about from './Donate_food/about/about';
import contact from './Donate_food/contact/contact';
import donation_page from './Donate_food/donation_page/donation_page';
import index from './Donate_food/index/index';
import signin from './Donate_food/signin/signin';
import volunteer from './Donate_food/volunteer/volunteer';
import Timepass from './layout/Timepass';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inventory/>} />
        <Route path='/Volunteer' element={<Volunteer />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/Timepass' element={<Timepass />} />
        <Route path='/donate' element={<donate />} />
        <Route path='/donation_page' element={<donation_page />} />
          <Route path='/forgetpass' element={<forgetPassword />} />
          {/* <Route path='/signin' element={<signin />} />
          <Route path='/volunteer' element={<volunteer />} /> */}
           </Routes>
    </>
  )
}

export default App
