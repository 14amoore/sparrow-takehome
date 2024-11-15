import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome! Who are you?
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/employee')}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Employee
        </button>
        <button
          onClick={() => navigate('/customer')}
          className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
        >
          Customer
        </button>
      </div>
    </div>
  );
};

export default Home;
