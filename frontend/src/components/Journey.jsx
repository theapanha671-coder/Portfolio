import { FaAward, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Journey() {
  const education = [
    { school: 'State University', degree: 'Bachelor of Science', field: 'Computer Science', year: '2020' },
    { school: 'Tech Academy', degree: 'Diploma', field: 'Full Stack Web Development', year: '2021' },
  ];

  const training = [
    { title: 'Advanced React Patterns', provider: 'Udemy', year: '2023' },
    { title: 'AWS Solutions Architect', provider: 'Amazon Web Services', year: '2023' },
    { title: 'MongoDB Certification', provider: 'MongoDB University', year: '2022' },
  ];

  const experience = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      duration: '2022-2024',
      responsibilities: 'Led team of 5 developers, architected scalable applications',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      duration: '2021-2022',
      responsibilities: 'Built and maintained 10+ production applications',
    },
    {
      title: 'Junior Developer',
      company: 'Web Solutions',
      duration: '2020-2021',
      responsibilities: 'Developed frontend components and backend APIs',
    },
  ];

  const panelClass = 'rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.22)]';

  return (
    <section id="journey" className="bg-[#0f0d0a] py-24 text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">My Journey</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className={panelClass}>
            <div className="mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-[#d4a373]" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#15110d] p-4">
                  <h4 className="text-lg font-semibold text-white">{edu.school}</h4>
                  <p className="text-[#d4a373]">{edu.degree}</p>
                  <p className="text-sm text-[#b9afa3]">{edu.field}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#8a7f75]">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={panelClass}>
            <div className="mb-6 flex items-center gap-3">
              <FaAward className="text-2xl text-[#c21f2e]" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {training.map((cert, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#15110d] p-4">
                  <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                  <p className="text-[#b9afa3]">{cert.provider}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#8a7f75]">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={panelClass}>
            <div className="mb-6 flex items-center gap-3">
              <FaBriefcase className="text-2xl text-[#d4a373]" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#15110d] p-4">
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <p className="text-[#d4a373]">{exp.company}</p>
                  <p className="text-sm text-[#b9afa3]">{exp.duration}</p>
                  <p className="mt-2 text-sm text-[#b9afa3]">{exp.responsibilities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
