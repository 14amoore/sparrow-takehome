import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './views/Employee/EmployeeDashboard';
import CustomerView from './views/CustomerView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/customer" element={<CustomerView />} />
      </Routes>
    </Router>
  );
}

export default App;
