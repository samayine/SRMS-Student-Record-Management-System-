import Header from "../Components/Header";
import "../Styles/MainContent.css";
import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Header userName="Abebe " />

      <div className="flex-1 bg-gray-100 p-6">
        <WelcomeBackCard studentName="Abebe " />
        <section className="flex space-x-6">
          <StudentInfoCard studentName="Abebe Kebede" class_grade="7B" />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
