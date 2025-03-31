import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Dashboard />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
