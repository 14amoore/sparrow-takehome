import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeView from './views/EmployeeView';
import CustomerView from './views/CustomerView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" Component={EmployeeView} />
        <Route path="/customer" Component={CustomerView} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
