import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './views/Employee/EmployeeDashboard';
import MenuView from './views/Customer/MenuView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/customer" element={<MenuView />} />
      </Routes>
    </Router>
  );
}

export default App;
