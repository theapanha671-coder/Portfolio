import { useMemo, useState } from 'react';
import { FaEdit, FaPlus, FaTrash, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

export default function ManageExperience() {
  const [experiences, setExperiences] = useState([
    { id: 1, title: 'Senior Developer', company: 'Tech Corp', duration: '2022-2024', type: 'Work', description: '' },
    { id: 2, title: 'Full Stack Developer', company: 'StartUp Inc', duration: '2021-2022', type: 'Work', description: '' },
    { id: 3, title: 'Bachelor of Science', company: 'State University', duration: '2020', type: 'Education', description: '' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    duration: '',
    type: 'Work',
    description: '',
  });
  const [editingId, setEditingId] = useState(null);

  const types = ['Work', 'Education', 'Certification'];

  const typeMeta = {
    Work: { icon: FaBriefcase, accent: 'from-[#c21f2e] to-[#d4a373]', label: 'Work' },
    Education: { icon: FaGraduationCap, accent: 'from-[#d4a373] to-[#a16207]', label: 'Education' },
    Certification: { icon: FaCertificate, accent: 'from-[#8a7f75] to-[#b9afa3]', label: 'Certification' },
  };

  const stats = useMemo(
    () => [
      { label: 'Timeline Items', value: experiences.length },
      { label: 'Work Roles', value: experiences.filter((exp) => exp.type === 'Work').length },
      { label: 'Education', value: experiences.filter((exp) => exp.type === 'Education').length },
      { label: 'Certifications', value: experiences.filter((exp) => exp.type === 'Certification').length },
    ],
    [experiences],
  );

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: '', company: '', duration: '', type: 'Work', description: '' });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setExperiences(experiences.map((exp) => (exp.id === editingId ? { ...formData, id: editingId } : exp)));
      setEditingId(null);
    } else {
      setExperiences([...experiences, { ...formData, id: Math.max(...experiences.map((exp) => exp.id), 0) + 1 }]);
    }

    resetForm();
  };

  const handleEdit = (exp) => {
    setFormData({
      title: exp.title,
      company: exp.company,
      duration: exp.duration,
      type: exp.type,
      description: exp.description || '',
    });
    setEditingId(exp.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8a7f75]">My Journey</p>
          <h1 className="mt-2 text-3xl font-black">Manage Experience</h1>
          <p className="mt-1 text-sm text-[#b9afa3]">Add work experience, education, and certifications.</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ title: '', company: '', duration: '', type: 'Work', description: '' });
          }}
          className="btn-primary"
        >
          <FaPlus /> Add Journey Item
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a7f75]">Journey editor</p>
              <h2 className="mt-2 text-2xl font-black text-white">
                {editingId !== null ? 'Edit Journey Item' : 'Add New Journey Item'}
              </h2>
            </div>
            <button type="button" onClick={resetForm} className="btn-secondary">
              Close
            </button>
          </div>

          <form onSubmit={handleAddExperience} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="dark-input"
                placeholder="Title / Position"
                required
              />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="dark-input"
                placeholder="Company / Institution"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="dark-input"
                placeholder="Duration"
                required
              />
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="dark-input"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="dark-input min-h-32 resize-none"
              rows="4"
              placeholder="Describe your responsibilities and achievements"
            />

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                {editingId !== null ? 'Update Journey Item' : 'Add Journey Item'}
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {types.map((type) => {
          const meta = typeMeta[type];
          const Icon = meta.icon;
          const items = experiences.filter((exp) => exp.type === type);

          return (
            <div key={type} className="card p-5">
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${meta.accent} p-3 text-white shadow-lg`}>
                <Icon className="text-lg" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">{meta.label}</h2>
              <p className="mt-2 text-sm text-[#b9afa3]">{items.length} item{items.length === 1 ? '' : 's'} in this section.</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => {
          const meta = typeMeta[exp.type];
          const Icon = meta.icon;

          return (
            <div key={exp.id} className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className={`inline-flex rounded-2xl bg-gradient-to-br ${meta.accent} p-3 text-white shadow-lg`}>
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-sm text-[#8a7f75]">{exp.duration}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f2e9dd]">
                      {exp.type}
                    </span>
                  </div>
                  <p className="font-medium text-[#d4a373]">{exp.company}</p>
                  {exp.description && <p className="mt-3 text-sm leading-7 text-[#b9afa3]">{exp.description}</p>}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(exp)}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 transition-colors hover:bg-blue-400/20"
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-100 transition-colors hover:bg-red-400/20"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
