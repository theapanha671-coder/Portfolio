export default function Achievements() {
  const achievements = [
    { icon: '🏆', title: 'Developer of the Year', description: 'Recognized as the best developer in 2023', year: '2023' },
    { icon: '⭐', title: 'Open Source Contributor', description: '500+ contributions to popular open source projects', year: '2023' },
    { icon: '🎓', title: 'Tech Speaker', description: 'Speaker at 10+ international tech conferences', year: '2022-2023' },
    { icon: '🚀', title: 'Product Launch', description: 'Led development of SaaS product with 10K+ users', year: '2022' },
    { icon: '🥇', title: 'Hackathon Winner', description: 'Won 5 hackathons with innovative projects', year: '2021-2023' },
    { icon: '📈', title: 'Performance Improvement', description: 'Optimized app performance by 300%', year: '2022' },
  ];

  return (
    <section
      id="achievements"
      className="bg-[linear-gradient(180deg,#11100d_0%,#0f0d0a_100%)] py-24 text-[#f5efe6]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">My Achievements</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="card p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="mb-4 text-4xl">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#b9afa3]">{achievement.description}</p>
              <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a373]">
                {achievement.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
