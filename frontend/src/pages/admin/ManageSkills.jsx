import { useMemo, useState } from 'react';
import { FaBolt, FaCode, FaCubes, FaEdit, FaPlus, FaShieldAlt, FaStar, FaTrash, FaWrench } from 'react-icons/fa';

export default function ManageSkills() {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React.js', level: 90, category: 'Frontend' },
    { id: 2, name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { id: 3, name: 'Node.js', level: 90, category: 'Backend' },
    { id: 4, name: 'MongoDB', level: 88, category: 'Backend' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', level: 50, category: 'Frontend' });
  const [editingId, setEditingId] = useState(null);

  const categories = ['Frontend', 'Backend', 'Tools & Others', 'Soft Skills'];
  const categoryMeta = {
    Frontend: {
      icon: FaCode,
      title: 'Front-end',
      accent: 'from-[#c21f2e] via-[#d4a373] to-[#8b5e34]',
      note: 'Interfaces, motion, and polished user experiences.',
    },
    Backend: {
      icon: FaShieldAlt,
      title: 'Back-end',
      accent: 'from-[#d4a373] via-[#a16207] to-[#4c2a1a]',
      note: 'APIs, data flow, and reliable application logic.',
    },
    'Tools & Others': {
      icon: FaWrench,
      title: 'Tools',
      accent: 'from-[#8a7f75] via-[#b9afa3] to-[#5b544d]',
      note: 'Workflow, deployment, and productivity tools.',
    },
    'Soft Skills': {
      icon: FaCubes,
      title: 'Soft Skills',
      accent: 'from-[#f2c48d] via-[#d4a373] to-[#a85d2a]',
      note: 'Communication, leadership, and collaboration.',
    },
  };

  const heroStats = useMemo(() => {
    const total = skills.length;
    const average = total ? Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / total) : 0;
    const topSkill = [...skills].sort((a, b) => b.level - a.level)[0];
    const topCategory = skills.reduce((acc, skill) => {
      acc[skill.category] = (acc[skill.category] || 0) + 1;
      return acc;
    }, {});
    const leadingCategory = Object.entries(topCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Frontend';

    return [
      { label: 'Total Skills', value: total },
      { label: 'Average Level', value: `${average}%` },
      { label: 'Top Skill', value: topSkill?.name || 'N/A' },
      { label: 'Lead Category', value: leadingCategory },
    ];
  }, [skills]);

  const handleAddSkill = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setSkills(skills.map((skill) => (skill.id === editingId ? { ...formData, id: editingId } : skill)));
      setEditingId(null);
    } else {
      setSkills([...skills, { ...formData, id: Math.max(...skills.map((skill) => skill.id), 0) + 1 }]);
    }

    setFormData({ name: '', level: 50, category: 'Frontend' });
    setShowForm(false);
  };

  const handleEdit = (skill) => {
    setFormData({ name: skill.name, level: skill.level, category: skill.category });
    setEditingId(skill.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: '', level: 50, category: 'Frontend' });
  };

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <div>
          <h1 className="text-3xl font-black">Manage Skills</h1>
          <p className="mt-1 text-sm text-[#b9afa3]">Add and update your professional skills.</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ name: '', level: 50, category: 'Frontend' });
          }}
          className="btn-primary"
        >
          <FaPlus /> Add Skill
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {heroStats.map((item) => (
          <div key={item.label} className="card p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a7f75]">{item.label}</p>
            <p className="mt-2 text-xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          const meta = categoryMeta[category];
          const categorySkills = skills.filter((skill) => skill.category === category);
          const Icon = meta.icon;

          return (
            <div key={category} className="card p-5">
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${meta.accent} p-3 text-white shadow-lg`}>
                <Icon className="text-xl" />
              </div>
              <h2 className="mt-5 text-lg font-bold text-white">{meta.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#b9afa3]">{meta.note}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-[#8a7f75]">Skills tracked</span>
                <span className="font-semibold text-[#d4a373]">{categorySkills.length}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8a7f75]">Why Skills Matters</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Skills are the visible proof of the work behind the portfolio.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#b9afa3]">
              This page keeps your original data, but frames it with a more immersive visual language:
              warmth, depth, panels, and stronger hierarchy.
            </p>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingId(null);
                setFormData({ name: '', level: 50, category: 'Frontend' });
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c21f2e] to-[#d4a373] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c21f2e]/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FaBolt />
              Read More
            </button>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8a7f75]">Coverage</p>
                <p className="mt-2 text-3xl font-black text-white">{skills.length}</p>
                <p className="mt-2 text-sm text-[#b9afa3]">Total skills in your portfolio</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8a7f75]">Momentum</p>
                <p className="mt-2 text-3xl font-black text-white">{heroStats.find((item) => item.label === 'Average Level')?.value}</p>
                <p className="mt-2 text-sm text-[#b9afa3]">Average proficiency across records</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skills.slice(0, 2).map((skill) => (
                <div key={skill.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-sm font-bold text-[#d4a373]">{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#1d1813]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#c21f2e] via-[#d4a373] to-[#f2c48d]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showForm && (
          <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#8a7f75]">Skill editor</p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  {editingId !== null ? 'Edit Skill' : 'Add New Skill'}
                </h2>
              </div>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Close
              </button>
            </div>

            <form onSubmit={handleAddSkill} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Skill Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="dark-input"
                    placeholder="e.g., React.js"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="dark-input"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <label className="block text-sm font-semibold text-white">Proficiency Level</label>
                  <span className="rounded-full border border-[#d4a373]/20 bg-[#d4a373]/10 px-3 py-1 text-xs font-semibold text-[#f2e9dd]">
                    {formData.level}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value, 10) })}
                  className="w-full accent-[#d4a373]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c21f2e] to-[#d4a373] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c21f2e]/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {editingId !== null ? 'Update Skill' : 'Add Skill'}
                </button>
                <button type="button" onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div id="skill-plans" className="space-y-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8a7f75]">Skill Plans</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Organize your portfolio like a premium product
          </h2>
        </div>

        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);
          if (categorySkills.length === 0) return null;

          const meta = categoryMeta[category];
          const Icon = meta.icon;
          const isFeatured = category === 'Backend';

          return (
            <div key={category} className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#15110d] ${isFeatured ? 'ring-1 ring-[#d4a373]/30' : ''}`}>
              {isFeatured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#d4a373] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#100d0a]">
                  Featured
                </div>
              )}

              <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${meta.accent} p-3 text-white shadow-lg`}>
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{meta.title}</h2>
                    <p className="mt-1 text-sm text-[#b9afa3]">{meta.note}</p>
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f2e9dd]">
                  {categorySkills.length} skill{categorySkills.length > 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid gap-4 p-6">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-base font-semibold text-white">{skill.name}</p>
                          <span className="rounded-full border border-[#d4a373]/20 bg-[#d4a373]/10 px-3 py-1 text-xs font-semibold text-[#f2e9dd]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#1d1813]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#c21f2e] via-[#d4a373] to-[#f2c48d]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-4">
                        <button
                          onClick={() => handleEdit(skill)}
                          className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 transition-colors hover:bg-blue-400/20"
                        >
                          <FaEdit />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-100 transition-colors hover:bg-red-400/20"
                        >
                          <FaTrash />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
