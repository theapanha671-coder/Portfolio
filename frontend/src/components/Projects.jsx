import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const defaultProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with payment integration, product management, and user authentication.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with drag-and-drop functionality.',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      image: '📋',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Weather application with real-time data, forecasts, and interactive maps.',
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      image: '🌤️',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Social media application with user profiles, posts, likes, and real-time notifications.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      image: '📱',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  const [projects, setProjects] = useState(defaultProjects);

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

  return (
    <section id="projects" className="bg-[linear-gradient(180deg,#11100d_0%,#0f0d0a_100%)] py-24 text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="card group flex h-full flex-col overflow-hidden p-6"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-5 flex h-40 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#281d16] to-[#100d0a] text-6xl">
                {project.image && (project.image.startsWith('data:') || project.image.startsWith('http')) ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                  <span>{project.image}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white">{project.title}</h3>
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

              <div className="mt-6 flex gap-4 border-t border-white/10 pt-5">
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4a373] transition-colors hover:text-white"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.demo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4a373] transition-colors hover:text-white"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
