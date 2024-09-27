import PageLayout from "../Components/PageLayout";
import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";
import UpcomingEventsCard from "../Components/UpcomingEventsCard";

const Dashboard = () => {
  // Define your array of upcoming events
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
    {
      title: "School Sports Day",
      date: "October 25, 2024",
      location: "School Playground",
      description: "Join us for a day of fun and sports competitions.",
    },
    {
      title: "Final Exams Begin",
      date: "November 1, 2024",
      location: "Classrooms",
      description:
        "Students should prepare for their final examinations during this period.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <PageLayout userName="Abebe" pageTitle="Dashboard">
        <div className="ml-64 flex-1 p-8 pt-[60px]">
          {/* Welcome back section */}
          <WelcomeBackCard studentName="Abebe Kebede" />

          {/* Main content section */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Student Info Card */}
            <StudentInfoCard
              studentName="Abebe Kebede"
              student_id="ST/4536/7"
              class_grade="7B"
            />
          </section>

          {/* Upcoming Events section */}
          <section className="mt-8">
            <UpcomingEventsCard events={upcomingEvents} />{" "}
            {/* Pass events here */}
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default Dashboard;
