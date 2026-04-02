import { useEffect, useMemo, useState } from 'react';
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  const [aboutData, setAboutData] = useState({
    profileImage: '',
    profileMediaType: '',
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

  const heroStats = useMemo(
    () => [
      { label: 'Projects', value: '15' },
      { label: 'Clients', value: '20' },
      { label: 'Awards', value: '3' },
    ],
    [],
  );

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#journey' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Blog', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const isVideoMedia = (media, mediaType) => {
    if (!media) return false;
    if (mediaType === 'video') return true;
    if (media.startsWith('data:video/')) return true;
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(media);
  };

  return (
    <div className="min-h-screen bg-[#0f0d0a] text-[#f5efe6]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(161,98,7,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.24),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.78)_0%,rgba(15,13,10,0.94)_100%)]" />

        <main id="home" className="relative mx-auto max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-[28px] border border-[#2a241d] bg-[#15110d] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />

            <header className="relative flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-black text-white">
                  N
                </div>
                <span className="text-lg font-black tracking-tight text-white">Neteer.</span>
              </div>

              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-[12px] font-semibold tracking-wide transition-colors ${
                      item.label === 'Home' ? 'text-[#c21f2e]' : 'text-[#d9d1c7] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                className="rounded-full border border-[#3b3128] bg-white/5 px-4 py-2 text-xs font-semibold text-[#f1e7da] transition-colors hover:bg-white/10"
              >
                Hire Me
              </a>
            </header>

            <div className="relative grid items-center gap-10 px-5 pb-10 pt-2 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-12 lg:pt-4">
              <div className="relative">
                <div className="absolute left-[-34px] top-1/2 hidden -translate-y-1/2 -rotate-90 text-[11px] uppercase tracking-[0.45em] text-[#a79b90] md:block">
                  Professional Portfolio
                </div>

                <div className="max-w-2xl space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#9d4a41]">- I am</p>
                    <h1 className="font-serif text-5xl leading-none tracking-tight text-[#f6efe6] sm:text-7xl lg:text-[5.5rem]">
                      {aboutData.fullName}
                    </h1>
                    <p className="text-xl font-medium text-[#d7cbbd] sm:text-2xl">{aboutData.professionalTitle}</p>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-[#b9afa3] sm:text-[15px]">
                    {aboutData.fullBio}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="rounded-full border border-[#8b342e] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f2e9dd] transition-colors hover:bg-[#8b342e]/20"
                    >
                      Contact Me
                    </a>
                    <a
                      href="#projects"
                      className="rounded-full border border-[#3b3128] bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f2e9dd] transition-colors hover:bg-white/10"
                    >
                      View Work
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="absolute inset-0 mx-auto h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)] blur-2xl" />
                <div className="relative w-full max-w-[520px]">
                  <div className="absolute -right-2 top-12 hidden h-60 w-10 flex-col justify-between py-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#b8b0a8] md:flex">
                    <span className="rotate-90 origin-left">Instagram</span>
                    <span className="rotate-90 origin-left">LinkedIn</span>
                    <span className="rotate-90 origin-left">Dribbble</span>
                    <span className="rotate-90 origin-left">Behance</span>
                  </div>

                  <div className="relative mx-auto h-[24rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#2a1f17] via-[#1a1612] to-[#100d0a] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-[32rem] sm:w-[24rem]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
                    {aboutData.profileImage && (aboutData.profileImage.startsWith('data:') || aboutData.profileImage.startsWith('http')) ? (
                      isVideoMedia(aboutData.profileImage, aboutData.profileMediaType) ? (
                        <video
                          src={aboutData.profileImage}
                          className="h-full w-full object-cover object-center"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={aboutData.profileImage}
                          alt={aboutData.fullName}
                          className="h-full w-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="h-[18rem] w-[18rem] rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_32%),linear-gradient(145deg,#3b2a21,#140f0b)] shadow-[inset_0_0_80px_rgba(255,255,255,0.04)]" />
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f0d0a] to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f1e6d6]">
                      Portfolio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-wrap items-end justify-between gap-4 border-t border-white/5 px-5 pb-6 pt-4 sm:px-8">
              <div className="flex gap-4">
                {heroStats.map((item) => (
                  <div key={item.label} className="min-w-20">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#8a7f75]">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-[#f6efe6]">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-[#f2e9dd] transition-colors hover:bg-white/10"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-[#f2e9dd] transition-colors hover:bg-white/10"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-[#f2e9dd] transition-colors hover:bg-white/10"
                >
                  <FaDribbble />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-[#f2e9dd] transition-colors hover:bg-white/10"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </section>

          <div className="space-y-0 pt-8">
            <Journey />
            <Achievements />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
