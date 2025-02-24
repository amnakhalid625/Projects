import { useState } from 'react';
import { db } from '../../config/firebaseConfig'; // Adjust the import path to your firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const DoctorRegistrationForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        contactInfo: '',
        schedule: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add the doctor data to Firestore
            await addDoc(collection(db, 'doctors'), formData);
            console.log('Doctor Data Submitted:', formData);
            onClose();  // Close the form on submit
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-semibold text-center mb-4">Doctor Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Doctor's Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <input
                            type="text"
                            name="specialization"
                            placeholder="Specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <input
                            type="text"
                            name="contactInfo"
                            placeholder="Contact Information"
                            value={formData.contactInfo}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <input
                            type="date"
                            name="schedule"
                            value={formData.schedule}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
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

export default DoctorRegistrationForm;
