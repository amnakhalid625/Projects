// src/components/PatientList.js
import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig'; 
import { collection, getDocs } from 'firebase/firestore';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const patientCollection = collection(db, 'patients'); 
                const patientSnapshot = await getDocs(patientCollection);
                const patientList = patientSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPatients(patientList);
            } catch (error) {
                console.error("Error fetching patients: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="patient-list">
            <h2 className="text-2xl font-semibold mb-4">Patient List</h2>
            <ul className="space-y-4">
                {patients.map(patient => (
                    <li key={patient.id} className="border p-4 rounded shadow">
                        <h3 className="text-xl font-bold">{patient.name}</h3>
                        <p><strong>Email:</strong> {patient.email}</p>
                        <p><strong>Contact:</strong> {patient.contactDetails}</p>
                        <p><strong>Medical History:</strong> {patient.medicalHistory || 'N/A'}</p>
                        {patient.image && (
                            <img src={patient.image} alt={`${patient.name}'s Profile`} className="w-24 h-24 object-cover rounded-full mt-2" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
