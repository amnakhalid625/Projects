// src/components/PatientRegistrationForm.js
import { useState } from 'react';
import { db } from '../../config/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

const PatientRegistrationForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactDetails: '',
        medicalHistory: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save patient data to Firestore
            const patientCollection = collection(db, 'patients'); // 'patients' is the collection name
            await addDoc(patientCollection, {
                ...formData,
                image, // You might want to store the image URL instead
            });
            console.log('Patient Data Submitted:', formData);
            onClose();  // Close the form on submit
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-semibold text-center mb-4">Patient Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <input
                            type="email"
                            name="email" // Change this to name="email"
                            placeholder="Email"
                            value={formData.email} // Change this to value={formData.email}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <input
                            type="text"
                            name="contactDetails"
                            placeholder="Contact"
                            value={formData.contactDetails}
                            onChange={handleChange}
                            className="border rounded p-2"
                            required
                        />
                        <textarea
                            name="medicalHistory"
                            placeholder="Medical History (if any)"
                            value={formData.medicalHistory}
                            onChange={handleChange}
                            className="border rounded p-2 h-24"
                        />
                        
                        {/* Image Upload */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border rounded p-2"
                        />
                        <div className="flex flex-col items-center space-y-2">
                            {image && (
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="w-24 h-24 object-cover rounded-full mb-2"
                                />
                            )}
                        </div>

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

export default PatientRegistrationForm;
