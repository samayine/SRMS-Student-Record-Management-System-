import PageLayout from "../Components/PageLayout";
import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";
import UpcomingEventsCard from "../Components/UpcomingEventsCard";

const ParentDashboard = () => {
  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "October 5, 2024",
      location: "Main Hall",
      description:
        "An opportunity for parents to meet with teachers and discuss student progress.",
    },
    {
      title: "Science Fair",
      date: "October 15, 2024",
      location: "Auditorium",
      description:
        "Students will showcase their science projects and experiments.",
    },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <PageLayout userName="Parent Name" pageTitle="Parent Dashboard">
        <div className="ml-64 flex-1 p-8 pt-[60px]">
          {/* Welcome back section */}
          <WelcomeBackCard studentName="Mr Kebede" />

          {/* Main content section */}
          <section className="flex mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Parent's Children Info */}
            <StudentInfoCard
              studentName="Child Name: Abebe Kebede"
              student_id="ST/4536/7"
              class_grade="7B"
            />
          </section>
          <section>
            <UpcomingEventsCard events={upcomingEvents} />
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default ParentDashboard;
