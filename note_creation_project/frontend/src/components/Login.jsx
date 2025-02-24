import { Link, useNavigate } from "react-router-dom";
import illustration from "../assets/images/Login-cuate.svg";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Trim input values
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validate input fields
    if (!trimmedEmail || !trimmedPassword) {
      toast.error("Please fill in all fields!");
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Invalid email format!");
      setLoading(false);
      return;
    }

    const payload = { email: trimmedEmail, password: trimmedPassword };

    try {
      const res = await axios.post("http://localhost:4000/user/login", payload);
      
      toast.success("Login Successfully!", { autoClose: 2000 });

      localStorage.setItem("token", JSON.stringify(res.data.token));

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      console.error("Error in login:", err);

      if (err.response) {
        toast.error(err.response.data.message || "Invalid Credentials!");
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          {/* Login Form */}
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-md max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                  placeholder="Enter user email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 font-bold px-4 text-sm tracking-wide rounded-lg text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
              <p className="text-sm mt-6 text-center text-gray-800">
                Don&apos;t have an account?
                <Link to="/" className="text-yellow-500 font-semibold hover:underline ml-1">
                  Register here
                </Link>
              </p>
            </form>
          </div>
          {/* Illustration */}
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src={illustration}
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
