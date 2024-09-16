import GradeTable from "../Components/GradeTable";
import RankDisplay from "../Components/RankDisplay";

function GradeResult() {
  return (
    <div className="p-6 bg-gray-50 h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Grade Result</h2>
        <div className="flex items-center">
          <label for="semester" className="mr-2 text-lg font-medium">
            Semester
          </label>
          <select id="semester" className="border rounded px-3 py-1">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>

      {/* Grade Table */}
      <GradeTable />

      {/* Rank Display */}
      <RankDisplay />
    </div>
  );
}

export default GradeResult;
