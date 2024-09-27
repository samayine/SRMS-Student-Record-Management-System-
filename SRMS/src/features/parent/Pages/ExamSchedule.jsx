import PageLayout from "../Components/PageLayout";
function ExamSchedule() {
  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Exam Notification">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">Examiner</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">Math</td>
              <td className="border px-4 py-2">September 25, 2024</td>
              <td className="border px-4 py-2">9:00 AM - 12:00 PM</td>
              <td className="border px-4 py-2">Room A101</td>
              <td className="border px-4 py-2">Mr.Habtamu</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Physics</td>
              <td className="border px-4 py-2">September 26, 2024</td>
              <td className="border px-4 py-2">1:00 PM - 4:00 PM</td>
              <td className="border px-4 py-2">Room B202</td>
              <td className="border px-4 py-2">Ms.Selam</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Amharic</td>
              <td className="border px-4 py-2">September 27, 2024</td>
              <td className="border px-4 py-2">10:00 AM - 1:00 PM</td>
              <td className="border px-4 py-2">Room C303</td>
              <td className="border px-4 py-2">Teacher Kebede</td>
            </tr>
          </tbody>
        </table>
      </PageLayout>
    </div>
  );
}

export default ExamSchedule;
