import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import EmployeeDashboard from './views/Employee/EmployeeDashboard';
import CustomerHome from './views/Customer/CustomerHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/customer" element={<CustomerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
