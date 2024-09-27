import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Import framer-motion

const StudentInfoCard = ({ studentName, student_id, class_grade }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Student Info Card */}
      <motion.div
        className="bg-white shadow-md rounded-lg p-6 w-full h-full"
        initial="hidden" // Initial state
        animate="visible" // Animation state
        variants={cardVariants} // Variants for animation
        transition={{ duration: 0.6, delay: 0.6 }} // Duration of the animation
      >
        <h3 className="text-lg font-semibold mb-4">{studentName}</h3>
        <p className="text-gray-600">ID: {student_id}</p>
      </motion.div>

      {/* Class Grade Card */}
      <motion.div
        className="bg-white shadow-md rounded-lg p-6 w-full h-full"
        initial="hidden" // Initial state
        animate="visible" // Animation state
        variants={cardVariants} // Variants for animation
        transition={{ duration: 0.6, delay: 0.1 }} // Duration with slight delay
      >
        <h3 className="text-lg font-semibold">Class:</h3>
        <p className="text-gray-700 text-lg font-semibold">{class_grade}</p>
      </motion.div>
    </div>
  );
};

StudentInfoCard.propTypes = {
  studentName: PropTypes.string.isRequired,
  student_id: PropTypes.string.isRequired,
  class_grade: PropTypes.string.isRequired,
};

export default StudentInfoCard;
