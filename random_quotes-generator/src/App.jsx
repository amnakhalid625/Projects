import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; 

const App = () => {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      const res = await axios("https://dummyjson.com/quotes");
      return res?.data.quotes;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      return [];
    }
  };

  const handleClick = async () => {
    const quotes = await getQuote();
    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-lg text-center"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
           Daily Quote ✨
        </h1>
        <motion.p
          key={quote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-lg italic mb-6 px-4"
        >
          {quote || "Click the button to generate a new quote!"}
        </motion.p>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-purple-700 text-white rounded-lg text-lg font-semibold hover:bg-purple-800 transition duration-300 shadow-md"
        >
          Generate Quote
        </button>
      </motion.div>
    </div>
  );
};

export default App;
