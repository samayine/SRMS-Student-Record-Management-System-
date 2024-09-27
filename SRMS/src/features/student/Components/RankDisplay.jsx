import PropTypes from "prop-types";

function RankDisplay({ semester }) {
  const semesterRank = {
    1: "3/45",
    2: "7/50",
  };

  const rank = semesterRank[Number(semester)] || "N/A";

  return (
    <div className="flex justify-end mt-4">
      <span className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-full">
        Rank {rank}
      </span>
    </div>
  );
}

RankDisplay.propTypes = {
  semester: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RankDisplay;
