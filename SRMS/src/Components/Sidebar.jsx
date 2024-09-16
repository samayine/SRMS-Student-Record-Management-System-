import { Link } from "react-router-dom";
import "../Styles/MainContent.css";
import { FaHome, FaClipboard, FaCalendarAlt, FaClock } from "react-icons/fa";
import SchoolLogo from "../assets/Logo.png";

const Sidebar = () => {
  return (
    <aside className="sidebar w-1/5 bg-white border-r shadow-lg flex flex-col">
      <div className="sidebar__header p-6 flex flex-col items-center">
        <div className="sidebar__logo flex items-center">
          <img
            src={SchoolLogo}
            alt="Logo"
            className="sidebar__logo-image w-10 h-10"
          />
          <h1 className="sidebar__title text-teal-600 font-bold ml-3">SRMS</h1>
        </div>
      </div>
      <nav className="sidebar__nav flex flex-col flex-grow">
        <ul className="sidebar__list space-y-4 p-6">
          <li className="sidebar__item flex items-center text-purple-600 font-semibold">
            <FaHome className="sidebar__icon mr-3" />
            <Link to="/" className="sidebar__link">
              Dashboard
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClipboard className="sidebar__icon mr-3" />
            <Link to="/grade" className="sidebar__link">
              Grade Result
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaCalendarAlt className="sidebar__icon mr-3" />
            <Link to="/report" className="sidebar__link">
              Reports
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/exams" className="sidebar__link">
              Exam Schedule
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/performance" className="sidebar__link">
              Performance
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/about" className="sidebar__link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
