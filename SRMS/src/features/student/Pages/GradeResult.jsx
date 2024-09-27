import PropTypes from "prop-types";

function GradeTable({ semester }) {
  const semesterData = {
    1: [
      { subject: "Maths", test1: 16, assignment: 8, test2: 14, final: 42 },
      { subject: "English", test1: 18, assignment: 9, test2: 17, final: 43 },
      { subject: "Chemistry", test1: 10, assignment: 6, test2: 12, final: 34 },
      { subject: "Physics", test1: 17, assignment: 8, test2: 16, final: 46 },
      { subject: "Biology", test1: 16, assignment: 9, test2: 15, final: 41 },
      { subject: "Amharic", test1: 19, assignment: 8, test2: 18, final: 45 },
    ],
    2: [
      { subject: "Maths", test1: 15, assignment: 7, test2: 16, final: 38 },
      { subject: "English", test1: 17, assignment: 9, test2: 18, final: 44 },
      { subject: "Chemistry", test1: 18, assignment: 8, test2: 17, final: 48 },
      { subject: "Physics", test1: 19, assignment: 9, test2: 18, final: 49 },
      { subject: "Biology", test1: 18, assignment: 9, test2: 17, final: 47 },
      { subject: "Amharic", test1: 17, assignment: 8, test2: 15, final: 41 },
    ],
  };

  const data = semesterData[semester] || [];

  // Add total to each grade object
  const gradesWithTotal = data.map((row) => ({
    ...row,
    total: row.test1 + row.assignment + row.test2 + row.final,
  }));

  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-200 text-sm uppercase text-gray-600">
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Test 1</th>
            <th className="px-4 py-2">Assignment</th>
            <th className="px-4 py-2">Test 2</th>
            <th className="px-4 py-2">Final</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {gradesWithTotal.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
            >
              <td className="border px-4 py-2">{row.subject}</td>
              <td className="border px-4 py-2">{row.test1}</td>
              <td className="border px-4 py-2">{row.assignment}</td>
              <td className="border px-4 py-2">{row.test2}</td>
              <td className="border px-4 py-2">{row.final}</td>
              <td className="border px-4 py-2 font-semibold">{row.total}</td>
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
