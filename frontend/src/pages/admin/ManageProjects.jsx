import { useEffect, useMemo, useState } from 'react';
import { FaEdit, FaExternalLinkAlt, FaGithub, FaPlus, FaUpload, FaTrash } from 'react-icons/fa';

export default function ManageProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with payments',
      image: '🛒',
      techStack: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Published',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaboration app',
      image: '📋',
      techStack: ['React', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Draft',
      date: '2024-01-10',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    techStack: '',
    github: '',
    demo: '',
  });

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      try {
        const parsed = JSON.parse(savedProjects);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjects(parsed);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }
  }, []);

  const saveProjectsToStorage = (projectsList) => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projectsList));
  };

  const stats = useMemo(
    () => [
      { label: 'Projects', value: projects.length },
      { label: 'Published', value: projects.filter((project) => project.status === 'Published').length },
      { label: 'Drafts', value: projects.filter((project) => project.status === 'Draft').length },
    ],
    [projects],
  );

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      image: '',
      techStack: '',
      github: '',
      demo: '',
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Max size is 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        image: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a project title');
      return;
    }

    const nextProject = {
      id: editingId ?? Math.max(...projects.map((project) => project.id), 0) + 1,
      title: formData.title,
      description: formData.description,
      image: formData.image || '📁',
      techStack: formData.techStack ? formData.techStack.split(',').map((tech) => tech.trim()) : [],
      github: formData.github,
      demo: formData.demo,
      status: 'Published',
      date: editingId ? projects.find((project) => project.id === editingId)?.date || new Date().toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    };

    const updatedProjects = editingId !== null
      ? projects.map((project) => (project.id === editingId ? nextProject : project))
      : [...projects, nextProject];

    setProjects(updatedProjects);
    saveProjectsToStorage(updatedProjects);
    resetForm();
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      techStack: project.techStack?.join(', ') || '',
      github: project.github || '',
      demo: project.demo || '',
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
    saveProjectsToStorage(updatedProjects);
  };

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <div>
          <h1 className="text-3xl font-black">Manage Projects</h1>
          <p className="mt-1 text-sm text-[#b9afa3]">Create and manage your portfolio projects.</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              description: '',
              image: '',
              techStack: '',
              github: '',
              demo: '',
            });
          }}
          className="btn-primary"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a7f75]">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="card p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a7f75]">Project editor</p>
              <h2 className="mt-2 text-2xl font-black text-white">
                {editingId !== null ? 'Edit Project' : 'Create New Project'}
              </h2>
            </div>
            <button type="button" onClick={resetForm} className="btn-secondary">
              Close
            </button>
          </div>

          <form onSubmit={handleAddProject} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="dark-input"
                  placeholder="Project title"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Tech Stack</label>
                <input
                  type="text"
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  className="dark-input"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="dark-input min-h-28 resize-none"
                rows="4"
                placeholder="Project description"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">GitHub Link</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="dark-input"
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Live Demo Link</label>
                <input
                  type="url"
                  value={formData.demo}
                  onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                  className="dark-input"
                  placeholder="https://demo.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Project Image</label>
              <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-white/5 p-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="projectImageUpload"
                />
                <label htmlFor="projectImageUpload" className="flex cursor-pointer flex-col items-center">
                  <FaUpload className="mb-2 text-2xl text-[#d4a373]" />
                  <p className="text-sm font-semibold text-white">Click to upload project image</p>
                  <p className="mt-1 text-xs text-[#8a7f75]">PNG, JPG, GIF (Max 5MB)</p>
                </label>
              </div>

              {formData.image && (
                <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    {formData.image.startsWith('data:') && (
                      <img src={formData.image} alt="Project" className="h-12 w-12 rounded object-cover" />
                    )}
                    <span className="text-sm text-[#b9afa3]">Image selected</span>
                  </div>
                  <button type="button" onClick={() => setFormData({ ...formData, image: '' })} className="btn-secondary px-3 py-2 text-xs">
                    Remove
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="btn-primary">
                {editingId !== null ? 'Update Project' : 'Save Project'}
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="card flex h-full flex-col overflow-hidden p-6">
            <div className="mb-5 flex h-40 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#281d16] to-[#100d0a] text-6xl">
              {project.image && (project.image.startsWith('data:') || project.image.startsWith('http')) ? (
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <span>{project.image}</span>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#d4a373]">
                {project.status}
              </span>
            </div>

            <p className="mt-2 flex-grow text-sm leading-7 text-[#b9afa3]">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack?.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f2e9dd]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="text-xs text-[#8a7f75]">{project.date}</div>
              <div className="flex gap-2">
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <FaExternalLinkAlt />
                </a>
                <button
                  onClick={() => handleEdit(project)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-100 transition-colors hover:bg-blue-400/20"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10 text-red-100 transition-colors hover:bg-red-400/20"
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
