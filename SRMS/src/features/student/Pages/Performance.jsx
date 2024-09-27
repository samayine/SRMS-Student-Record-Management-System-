import PageLayout from "../Components/PageLayout";

function Performance() {
  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Performance">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-xl font-semibold mb-4">
            Weekly Performance Report from a Teacher
          </h1>
          <p className="mb-4">
            This week's performance compared to last week's progress:
          </p>

          <h3 className="text-lg font-semibold">Classroom Engagement:</h3>
          <p className="text-gray-700 mb-4">
            You have shown improved engagement, with active participation in
            class discussions and increased attendance. There has been a 15%
            increase in participation compared to last semester.
          </p>

          <h3 className="text-lg font-semibold">Test Scores:</h3>
          <p className="text-gray-700 mb-4">
            The average test scores for this week show a 10% improvement
            compared to last semester. Many students scored above 85% in recent
            assessments, indicating a better understanding of the subject
            matter.
          </p>

          <h3 className="text-lg font-semibold">Homework Completion:</h3>
          <p className="text-gray-700 mb-4">
            Homework submission rates have improved by 20%, with students
            submitting assignments on time and with better quality.
          </p>

          <h3 className="text-lg font-semibold">Challenges:</h3>
          <p className="text-gray-700 mb-4">
            While overall performance has improved, some students continue to
            struggle with specific topics, such as [subject/topic]. A more
            focused approach will be applied to help them overcome these
            challenges.
          </p>

          <h3 className="text-lg font-semibold">Goals for Next Week:</h3>
          <p className="text-gray-700">
            Continue improving engagement and test scores, while providing
            targeted assistance to those needing additional support in any
            subject area.
          </p>
        </div>
      </PageLayout>
    </div>
  );
}

export default Performance;
