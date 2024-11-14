function OrderTable() {
  const orders = [
    { id: '001', status: 'Pending', totalAmount: 25.99 },
    { id: '002', status: 'In Progress', totalAmount: 30.49 },
    { id: '003', status: 'Completed', totalAmount: 15.99 },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Order ID</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="text-center">
            <td className="py-2 px-4 border-b">{order.id}</td>
            <td className="py-2 px-4 border-b">{order.status}</td>
            <td className="py-2 px-4 border-b">${order.totalAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
