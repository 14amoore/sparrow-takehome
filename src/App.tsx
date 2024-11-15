import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './views/Employee/EmployeeDashboard';
// import MenuView from './views/Customer/MenuView';
import CustomerHome from './views/Customer/CustomerHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/customer" element={<CustomerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
