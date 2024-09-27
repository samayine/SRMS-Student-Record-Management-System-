import { useState } from "react";
import PageLayout from "../Components/PageLayout";
import GradeTable from "../Components/GradeTable";
import RankDisplay from "../Components/RankDisplay";

function GradeResult() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  // Sample grades data based on selected semester
  const gradesData = {
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

  const grades = gradesData[selectedSemester] || [];

  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Grades and Results">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Grade Result</h2>
          <div className="flex items-center">
            <label htmlFor="semester" className="mr-2 text-lg font-medium">
              Semester
            </label>
            <select
              id="semester"
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="border rounded px-3 py-1"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>

        {/* Grade Table */}
        <GradeTable semester={selectedSemester} />

        {/* Rank Display */}
        <RankDisplay semester={selectedSemester} grades={grades} />
      </PageLayout>
    </div>
  );
}

export default GradeResult;
