import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Import framer-motion
import "../Styles/MainContent.css";
import studentImage from "../../../assets/student1.png";

const WelcomeBackCard = ({ studentName }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <motion.section
      className="rounded-lg p-6 text-white mb-6 flex items-center justify-between"
      style={{ backgroundColor: "#2C437E" }}
      initial="hidden" // Initial state
      animate="visible" // Animation state
      variants={cardVariants} // Variants for animation
      transition={{ duration: 0.6 }} // Adjust the duration for effect
    >
      <div className="w-full h-full text-white text-center p-10">
        <h1 className="text-2xl font-bold">WELCOME BACK! {studentName}</h1>
        <p>
          Stay informed about your academic progress, results, exam schedule,
          announcements, and performance.
        </p>
      </div>
      <div className="w-20 h-20 p-0 rounded-lg overflow-hidden">
        <img src={studentImage} alt="Student" className="w-full h-full" />
      </div>
    </motion.section>
  );
};

WelcomeBackCard.propTypes = {
  studentName: PropTypes.string.isRequired,
};

export default WelcomeBackCard;
