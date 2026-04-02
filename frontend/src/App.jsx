import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import DashboardHome from './pages/admin/DashboardHome';
import ManageAbout from './pages/admin/ManageAbout';
import ManageAchievements from './pages/admin/ManageAchievements';
import ManageProjects from './pages/admin/ManageProjects';
import ManageSkills from './pages/admin/ManageSkills';
import ManageExperience from './pages/admin/ManageExperience';
import ManageMessages from './pages/admin/ManageMessages';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <div className="flex min-h-screen flex-col bg-[#0f0d0a] text-[#f5efe6] transition-colors duration-300">
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="about" element={<ManageAbout />} />
          <Route path="achievements" element={<ManageAchievements />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="skills" element={<ManageSkills />} />
          <Route path="experience" element={<ManageExperience />} />
          <Route path="messages" element={<ManageMessages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
