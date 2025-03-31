import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("http://localhost:5000/api/data");
  return data;
};

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Dashboard;
