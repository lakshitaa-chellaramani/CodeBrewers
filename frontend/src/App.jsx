import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar, ResumeGenerator } from "./components";
import {
  About,
  Auth,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
import Results from "./components/Results";
import PlayQuiz from "./components/PlayQuiz";
import Quiz from "./components/Quiz";
import { Dashboard } from "./components/Dashboard";


function Layout() {
  const { user } = useSelector((state) => state.user);
  // console.log(user?.accountType)
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          
          <Route
            path= "/user-profile" element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<Auth />} />
        <Route path='/resume-generator' element={<ResumeGenerator />} />
        <Route path="/" element={<Dashboard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/playquiz/:quizId" element={<PlayQuiz />}/>
        <Route path="/results/:quizId" element={<Results />}/>
        </Routes>
      
      {user && <Footer />}
    </main>
  );
}

export default App;

