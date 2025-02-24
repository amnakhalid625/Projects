import { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const DoctorProfileList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorCollection = collection(db, 'doctors');
                const doctorSnapshot = await getDocs(doctorCollection);
                const doctorList = doctorSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDoctors(doctorList);
            } catch (error) {
                console.error('Error fetching doctor profiles:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Doctor Profiles</h1>
            <ul className="space-y-4">
                {doctors.map(doctor => (
                    <li key={doctor.id} className="border p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">{doctor.name}</h2>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Contact: {doctor.contactInfo}</p>
                        <p>Schedule: {doctor.schedule}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorProfileList;
