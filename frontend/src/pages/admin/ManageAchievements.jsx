import { useMemo, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

export default function ManageAchievements() {
  const [achievements, setAchievements] = useState([
    { id: 1, icon: '🏆', title: 'Developer of the Year', description: 'Recognized as the best developer in 2023', year: '2023' },
    { id: 2, icon: '⭐', title: 'Open Source Contributor', description: '500+ contributions to popular open source projects', year: '2023' },
    { id: 3, icon: '🎓', title: 'Tech Speaker', description: 'Speaker at 10+ international tech conferences', year: '2022-2023' },
    { id: 4, icon: '🚀', title: 'Product Launch', description: 'Led development of SaaS product with 10K+ users', year: '2022' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ icon: '🏆', title: '', description: '', year: '' });

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ icon: '🏆', title: '', description: '', year: '' });
  };

  const stats = useMemo(
    () => [
      { label: 'Achievements', value: achievements.length },
      { label: 'Top Year', value: achievements[0]?.year || 'N/A' },
      { label: 'Featured', value: achievements.slice(0, 2).length },
    ],
    [achievements],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setAchievements(achievements.map((item) => (item.id === editingId ? { ...formData, id: editingId } : item)));
      setEditingId(null);
    } else {
      setAchievements([...achievements, { ...formData, id: Math.max(...achievements.map((item) => item.id), 0) + 1 }]);
    }

    resetForm();
  };

  const handleEdit = (achievement) => {
    setFormData({
      icon: achievement.icon,
      title: achievement.title,
      description: achievement.description,
      year: achievement.year,
    });
    setEditingId(achievement.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setAchievements(achievements.filter((achievement) => achievement.id !== id));
  };

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8a7f75]">My Achievements</p>
          <h1 className="mt-2 text-3xl font-black">Manage Achievements</h1>
          <p className="mt-1 text-sm text-[#b9afa3]">Add and update portfolio achievements.</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ icon: '🏆', title: '', description: '', year: '' });
          }}
          className="btn-primary"
        >
          <FaPlus /> Add Achievement
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a7f75]">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a7f75]">Achievement editor</p>
              <h2 className="mt-2 text-2xl font-black text-white">
                {editingId !== null ? 'Edit Achievement' : 'Add New Achievement'}
              </h2>
            </div>
            <button type="button" onClick={resetForm} className="btn-secondary">
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Icon</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="dark-input"
                  placeholder="🏆"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="dark-input"
                  placeholder="2023"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="dark-input"
                placeholder="Achievement title"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="dark-input min-h-28 resize-none"
                rows="4"
                placeholder="Describe the achievement"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                {editingId !== null ? 'Update Achievement' : 'Add Achievement'}
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="card flex h-full flex-col p-6">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
            <p className="mt-2 flex-grow text-sm leading-7 text-[#b9afa3]">{achievement.description}</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a373]">
                {achievement.year}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(achievement)}
                  className="inline-flex items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 p-3 text-blue-100 transition-colors hover:bg-blue-400/20"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(achievement.id)}
                  className="inline-flex items-center justify-center rounded-full border border-red-400/20 bg-red-400/10 p-3 text-red-100 transition-colors hover:bg-red-400/20"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
