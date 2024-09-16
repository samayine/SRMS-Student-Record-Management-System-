import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Styles/App.css";
import Dashboard from "./Pages/Dashboard";
import GradeResult from "./Pages/GradeResult";
//import Exams from "./Pages/ExamSchedule";
import About from "./Pages/About";
import Sidebar from "./Components/Sidebar";
import NoPage from "./Pages/NoPage";
import PageLayout from "./Components/PageLayout";

function App() {
  const userName = "Abebe";

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout userName={userName} pageTitle="Dashboard">
                  <Dashboard />
                </PageLayout>
              }
            />
            <Route
              path="/grade"
              element={
                <PageLayout userName={userName} pageTitle="Grade Result">
                  <GradeResult />
                </PageLayout>
              }
            />

            {/* <Route
              path="/exams"
              element={
                <PageLayout userName={userName} pageTitle="Exams Schedule">
                  <Exams />
                </PageLayout>
              }
            /> */}
            <Route
              path="/about"
              element={
                <PageLayout userName={userName} pageTitle="About Us">
                  <About />
                </PageLayout>
              }
            />
            <Route
              path="*"
              element={
                <PageLayout userName={userName} pageTitle="Page Not Found">
                  <NoPage />
                </PageLayout>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
