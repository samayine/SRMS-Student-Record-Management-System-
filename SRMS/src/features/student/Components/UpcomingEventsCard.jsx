import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";

const UpcomingEventsCard = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const itemVariants = {
    hidden: { opacity: 0, scale: 1.2, x: 20 }, // Zoom effect
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  // Function to handle the next button click
  const handleNext = () => {
    if (currentIndex + 2 < events.length) {
      setCurrentIndex(currentIndex + 2); // Move to the next two events
    }
  };

  // Function to handle the previous button click
  const handlePrev = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2); // Move to the previous two events
    }
  };

  // Get the current events to display
  const currentEvents = events.slice(currentIndex, currentIndex + 2);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <motion.div
        className="flex space-x-4"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={itemVariants}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        {currentEvents.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="min-w-[250px] p-4 bg-gray-100 rounded-lg flex-shrink-0" // Style for each event card
            transition={{ duration: 1.5, delay: index * 0.2 }} // Increased duration for better visibility
          >
            <h3 className="font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">Location: {event.location}</p>
            <p className="text-gray-800">{event.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + 2 >= events.length}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

// Prop validation
UpcomingEventsCard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired, // Expecting an array of objects
};

export default UpcomingEventsCard;
