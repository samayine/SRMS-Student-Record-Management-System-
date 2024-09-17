import PageLayout from "../Components/PageLayout";

import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <PageLayout userName="Abebe " pageTitle="Dashboard">
        <div className="ml-64 flex-1 bg-gray-100 p-6 pt-[60px]">
          <WelcomeBackCard studentName="Abebe " />
          <section className="flex space-x-6">
            <StudentInfoCard studentName="Abebe Kebede" class_grade="7B" />
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default Dashboard;
