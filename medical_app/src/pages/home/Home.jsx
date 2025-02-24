// src/pages/Home.js
import Button from '../../components/button/Button';
import HomeImg from '../../../public/left-image-removebg-preview.png';
import './home.css';

const Home = () => {
  return (
    <div className="home-parent flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 px-6 sm:px-8 lg:px-16 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="child-one flex-1 space-y-4 sm:space-y-6 max-w-lg lg:max-w-none text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-4 sm:mb-6">
          Simplify Your <span className="text-blue-500">Treatment With Us</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
          Discover the perfect blend of style and comfort. With a vast range of contemporary designs, your home’s look and feel are just a click away. Let us help you transform your space into a cozy, elegant haven.
        </p>

        <div className="flex justify-center lg:justify-start space-x-4 mt-6 sm:mt-8">
          <Button text="Services" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105" />
          <Button text="Explore" className="bg-gray-300 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105" />
        </div>
      </div>

      <div className="child-two flex-1 flex justify-center items-center lg:justify-end">
        <img src={HomeImg} alt="Home medical_img" className="w-full max-w-sm sm:max-w-md lg:max-w-lg transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default Home;
