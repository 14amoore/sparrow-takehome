import OrderTable from './OrderTable';
import OrderStatusUpdate from './OrderStatus';

function EmployeeDashboard() {
  return (
    <div>
      <h1>Orders Dashboard</h1>
      <OrderTable />
      <OrderStatusUpdate />
    </div>
  );
}

export default EmployeeDashboard;
