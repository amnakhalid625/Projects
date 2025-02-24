
const Button = ({text,onClick}) => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-xl" onClick={onClick}>
    {text}
 
      </button>
    </div>
  );
};

export default Button;
