import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterSection from "./components/FooterSection/FooterSection";
import HomePage from "./Pages/HomePage/HomePage";
import RegulationPage from "./Pages/RegulationPage/RegulationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PolicyPage from "./Pages/PolicyPage/PolicyPage";
import FaqPage from "./Pages/FaqPage/FaqPage";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Dashboard/AdminAuth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regulation" element={<RegulationPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
