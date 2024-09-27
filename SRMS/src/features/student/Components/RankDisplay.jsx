import PropTypes from "prop-types";

function RankDisplay({ semester, grades }) {
  const semesterRank = {
    1: "3/45",
    2: "7/50",
  };

  const rank = semesterRank[Number(semester)] || "N/A";

  // Calculate the average of totals
  const totalScores = grades.map(
    (grade) => grade.test1 + grade.assignment + grade.test2 + grade.final
  );
  const totalSum = totalScores.reduce((acc, curr) => acc + curr, 0);
  const average =
    totalScores.length > 0 ? (totalSum / totalScores.length).toFixed(2) : 0;

  return (
    <div className="flex flex-col items-end mt-4">
      <span className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-full">
        Rank {rank}
      </span>
      <span className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full mt-2">
        Average: {average}
      </span>
    </div>
  );
}

RankDisplay.propTypes = {
  semester: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string,
      test1: PropTypes.number,
      assignment: PropTypes.number,
      test2: PropTypes.number,
      final: PropTypes.number,
    })
  ),
};

export default RankDisplay;
