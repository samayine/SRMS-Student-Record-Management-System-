import PropTypes from "prop-types";

function GradeTable({ semester }) {
  const semesterData = {
    1: [
      { subject: "Maths", result: 28, avg: 22.5, highest: 30 },
      { subject: "English", result: 29, avg: 20.5, highest: 29 },
      { subject: "Chemistry", result: 14, avg: 22.5, highest: 30 },
      { subject: "Physics", result: 26.5, avg: 20.5, highest: 27 },
      { subject: "Biology", result: 26, avg: 20.5, highest: 29 },
      { subject: "Amharic", result: 28, avg: 20.5, highest: 30 },
    ],
    2: [
      { subject: "Maths", result: 19, avg: 20, highest: 25 },
      { subject: "English", result: 24, avg: 20.5, highest: 29 },
      { subject: "Chemistry", result: 28, avg: 22.5, highest: 29 },
      { subject: "Physics", result: 29, avg: 20.5, highest: 29 },
      { subject: "Biology", result: 30, avg: 25, highest: 30 },
      { subject: "Amharic", result: 27, avg: 20.5, highest: 27 },
    ],
  };

  // Ensure that the semester is a number
  const data = semesterData[semester] || [];

  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-200 text-sm uppercase text-gray-600">
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Student Result</th>
            <th className="px-4 py-2">Class AVG</th>
            <th className="px-4 py-2">Highest Grade</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
            >
              <td className="border px-4 py-2">{row.subject}</td>
              <td className="border px-4 py-2">{row.result}</td>
              <td className="border px-4 py-2">{row.avg}</td>
              <td className="border px-4 py-2 font-semibold">{row.highest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

GradeTable.propTypes = {
  semester: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GradeTable;
