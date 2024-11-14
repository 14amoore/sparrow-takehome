import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeView from './views/EmployeeView';
import CustomerView from './views/CustomerView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeView />} />
        <Route path="/customer" element={<CustomerView />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
