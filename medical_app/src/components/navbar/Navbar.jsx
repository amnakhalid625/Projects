import { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.avif";
import RegistrationForm from "../form/RegistrationForm";

const Navbar = (props) => {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <>
      <nav
        className="relative flex w-full items-center justify-between py-5 shadow-md bg-white/90 dark:bg-neutral-700"
        data-twe-navbar-ref
      >
        <div className="flex w-full items-center justify-between px-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
            <span className="text-xl font-bold text-blue-500">MEDICROP</span>
          </div>

          <div className="hidden mt-2 lg:flex lg:mt-0 lg:flex-grow items-center">
            <ul className="flex flex-col lg:flex-row items-center gap-5 ml-auto">
              <li>
                <Link
                  className="text-black dark:text-white"
                  to="/"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/doctorlist"
                >
                  Doctor List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/patientlist"
                >
                  Patient List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <Button text="Login" />
              <Button text="Register" onClick={clickHandler} />
            </ul>
          </div>
        </div>
      </nav>

      {showForm && <RegistrationForm onClose={closeFormHandler} />}
    </>
  );
};

export default Navbar;
