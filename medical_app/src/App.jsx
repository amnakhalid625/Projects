import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Login from "./components/login/SignUp";
import RegistrationForm from "./components/form/RegistrationForm";
import PatientRegistrationForm from "./components/form/PatientRegistrationForm";
import DoctorRegistrationForm from "./components/form/DoctorRegistrationForm";
import DoctorProfileList from "./pages/doctorProfile/DoctorProfileList";
import PatientList from "./pages/patientProfile/PatientProfile";
import Services from "./pages/services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/login" element={<Login />} />

        <Route path="/form" element={<RegistrationForm />} />
        <Route path="/patient" element={<PatientRegistrationForm />} />

        <Route path="/doctor" element={<DoctorRegistrationForm />} />
        <Route path="/doctorlist" element={<DoctorProfileList />} />
        <Route path="/patientlist" element={<PatientList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
