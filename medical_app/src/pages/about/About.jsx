// src/pages/About.js
import Button from '../../components/button/Button';
// import './about.css';

const About = () => {
  return (
    <div className="about-parent flex flex-col lg:flex-row justify-center items-center min-h-screen bg-white px-6 sm:px-8 lg:px-16 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="child-one flex-1 space-y-4 sm:space-y-6 max-w-lg lg:max-w-none text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
          We are dedicated to providing high-quality products that blend style and functionality. Our mission is to help you create a home that reflects your personality and meets your needs.
        </p>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
          With years of experience in the industry, our team is committed to excellence and customer satisfaction. Join us on this journey to elevate your living spaces.
        </p>

        <div className="flex justify-center lg:justify-start space-x-4 mt-6 sm:mt-8">
          <Button text="Learn More" className="bg-gray-300 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105" />
        </div>
      </div>

      <div className="child-two flex-1 flex justify-center items-center lg:justify-end">
        <img src="https://i.pinimg.com/564x/c9/4d/2a/c94d2a94760946b1d50a3cbeba5c348a.jpg" alt="About our company" className="w-full max-w-sm sm:max-w-md lg:max-w-lg transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default About;
