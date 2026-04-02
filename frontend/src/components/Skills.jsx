export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Vue.js', level: 75 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'SEO Optimization', level: 82 },
        { name: 'Figma', level: 75 },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Teamwork', level: 92 },
        { name: 'Project Management', level: 85 },
        { name: 'Time Management', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0f0d0a] py-24 text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">My Skills</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="card p-6"
              style={{ animationDelay: `${catIdx * 0.12}s` }}
            >
              <h3 className="mb-5 border-b border-white/10 pb-4 text-2xl font-bold text-white">
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="mb-2 flex justify-between">
                      <span className="font-semibold text-[#f2e9dd]">{skill.name}</span>
                      <span className="font-bold text-[#d4a373]">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-[#1d1813]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#c21f2e] via-[#d4a373] to-[#f2c48d]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
