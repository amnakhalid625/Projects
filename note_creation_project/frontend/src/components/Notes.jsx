import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus, FaTimes } from 'react-icons/fa'; // Icons for buttons

const Notes = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => navigate('/home');

  const addNote = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/note/add", { title, description });
      response.data.success ? toast.success('Note added successfully!') : toast.error('Failed to add note!');
      navigate('/home');
    } catch (error) {
      toast.error('Error adding note!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    title && description ? addNote() : toast.warning('Title and description are required!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Add Notes
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Add your title"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter your description"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-300 resize-none h-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaPlus className="mr-2" />
              Create Task
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaTimes className="mr-2" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notes;