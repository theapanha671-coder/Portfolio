import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaTrophy,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaSignOutAlt,
  FaTimes,
  FaUser,
} from 'react-icons/fa';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', icon: FaHome, path: '/admin/dashboard' },
    { label: 'About', icon: FaUser, path: '/admin/dashboard/about' },
    { label: 'Achievements', icon: FaTrophy, path: '/admin/dashboard/achievements' },
    { label: 'Projects', icon: FaProjectDiagram, path: '/admin/dashboard/projects' },
    { label: 'Skills', icon: FaCode, path: '/admin/dashboard/skills' },
    { label: 'Experience', icon: FaBriefcase, path: '/admin/dashboard/experience' },
    { label: 'Messages', icon: FaEnvelope, path: '/admin/dashboard/messages' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0f0d0a] text-[#f5efe6]">
      <div className="flex min-h-screen">
        <aside
          className={`fixed z-40 h-screen overflow-y-auto border-r border-white/10 bg-[#15110d] transition-all duration-300 ${
            sidebarOpen ? 'w-72' : 'w-20'
          } md:relative`}
        >
          <div className="border-b border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c21f2e] font-black text-white">
                P
              </div>
              {sidebarOpen && <span className="text-lg font-black">Portfolio Admin</span>}
            </div>
          </div>

          <nav className="space-y-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-[#f2e9dd] transition-colors hover:bg-white/10"
              >
                <item.icon className="text-lg text-[#d4a373]" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={handleLogout}
              className="btn-secondary w-full justify-center bg-red-500/10 text-red-100 hover:bg-red-500/20"
            >
              <FaSignOutAlt />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#15110d]/95 px-4 py-4 backdrop-blur-xl">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 md:hidden"
            >
              {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#b9afa3]">
                Welcome, {localStorage.getItem('adminEmail')}
              </span>
              <button onClick={handleLogout} className="btn-primary px-4 py-2 text-sm">
                Logout
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
