import "./App.css";0
import PrimarySearchAppBar from "./AppBar";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import TasksContainer from "./TasksContainer"

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/" element={<TasksContainer />} />

            {/* <Route path="/Courses/:courseId" element={<IndividualCourse />} />
            <Route path="/addCourse" element={<AddCourse />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signUp" element={<Sign  up />} /> */}
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
