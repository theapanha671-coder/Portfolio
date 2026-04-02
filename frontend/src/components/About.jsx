import { useEffect, useState } from 'react';

export default function About() {
  const [aboutData, setAboutData] = useState({
    profileImage: '',
    fullName: 'John Doe',
    professionalTitle: 'Full Stack Developer',
    shortBio: 'Design-focused full stack developer',
    fullBio:
      'I build polished web experiences with a strong focus on clarity, performance, and modern interaction design.',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioAboutData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setAboutData((prev) => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading about data:', error);
      }
    }
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#11100d] py-24 text-[#f5efe6]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,31,46,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(212,163,115,0.08),transparent_26%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9d4a41]">About</p>
          <h2 className="font-serif text-4xl tracking-tight text-[#f6efe6] sm:text-5xl">
            {aboutData.fullName}
          </h2>
          <p className="text-xl font-medium text-[#d7cbbd]">{aboutData.professionalTitle}</p>
          <p className="max-w-2xl text-sm leading-7 text-[#b9afa3] sm:text-[15px]">
            {aboutData.fullBio}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-[#b9afa3] sm:text-[15px]">
            {aboutData.shortBio}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              'React and modern frontend systems',
              'Node.js APIs and backend workflows',
              'UI design with performance in mind',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-[#f2e9dd]">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
