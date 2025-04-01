import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReviewForm from "./components/ReviewForm";
import Analysis from "./components/Analysis";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area on the right */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<ReviewForm />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
