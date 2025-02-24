import { useState } from 'react';
import PatientRegistrationForm from "./PatientRegistrationForm";
import DoctorRegistrationForm from "./DoctorRegistrationForm";

const RegistrationForm = ({ onClose }) => {
    const [formType, setFormType] = useState(null);

    const handleOpenPatientForm = () => setFormType("patient");
    const handleOpenDoctorForm = () => setFormType("doctor");

    if (formType === "patient") {
        return <PatientRegistrationForm onClose={() => setFormType(null)} />;
    }

    if (formType === "doctor") {
        return <DoctorRegistrationForm onClose={() => setFormType(null)} />;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <img 
                    src="https://i.pinimg.com/564x/ba/fe/6f/bafe6fcae4e30007c9cf9b32b2c24b0c.jpg" 
                    alt="Registration" 
                    className="w-full h-32 object-cover rounded-lg mb-4" 
                />
                <h2 className="text-lg font-semibold text-center mb-4">Register</h2>
                <div className="flex flex-col space-y-4">
                    <button 
                        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        onClick={handleOpenPatientForm}
                    >
                        Register as a Patient
                    </button>
                    <button 
                        className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        onClick={handleOpenDoctorForm}
                    >
                        Register as a Doctor
                    </button>
                </div>
                <button 
                    className="mt-4 text-red-500 underline" 
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;
