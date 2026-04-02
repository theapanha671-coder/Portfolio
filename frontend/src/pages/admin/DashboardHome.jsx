import { FaBriefcase, FaCode, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

export default function DashboardHome() {
  const stats = [
    { label: 'Projects', count: 6, icon: FaProjectDiagram, accent: 'from-cyan-500 to-blue-600' },
    { label: 'Skills', count: 24, icon: FaCode, accent: 'from-[#c21f2e] to-[#d4a373]' },
    { label: 'Experience', count: 3, icon: FaBriefcase, accent: 'from-amber-500 to-orange-600' },
    { label: 'Messages', count: 12, icon: FaEnvelope, accent: 'from-emerald-500 to-teal-600' },
  ];

  const recentActivity = [
    { type: 'Project Added', description: 'E-Commerce Platform', time: '2 hours ago' },
    { type: 'Message Received', description: 'From john@example.com', time: '5 hours ago' },
    { type: 'Skills Updated', description: 'React.js updated to 95%', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <h1 className="text-3xl font-black">Dashboard</h1>
        <p className="mt-1 text-sm text-[#b9afa3]">Welcome back! Here&apos;s your portfolio overview.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#b9afa3]">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.count}</p>
              </div>
              <div className={`rounded-2xl bg-gradient-to-br ${stat.accent} p-4 text-white shadow-lg`}>
                <stat.icon className="text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <h2 className="mb-4 text-xl font-bold text-white">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#d4a373]" />
                <div className="flex-1">
                  <p className="font-semibold text-white">{activity.type}</p>
                  <p className="text-sm text-[#b9afa3]">{activity.description}</p>
                  <p className="mt-1 text-xs text-[#8a7f75]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="mb-4 text-xl font-bold text-white">Quick Stats</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#b9afa3]">Profile Completion</span>
                <span className="text-sm font-bold text-white">85%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1d1813]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#c21f2e] to-[#d4a373]" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#b9afa3]">Content Updated</span>
                <span className="text-sm font-bold text-white">92%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1d1813]">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
