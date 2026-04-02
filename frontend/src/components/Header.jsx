import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Journey', to: 'journey' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'border-white/10 bg-[#0f0d0a]/95 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#c21f2e] shadow-[0_0_16px_rgba(194,31,46,0.7)]" />
          <div className={`text-2xl font-black transition-colors ${isScrolled ? 'text-[#f6efe6]' : 'text-[#f6efe6]'}`}>
            Portfolio
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              duration={500}
              className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#d9d1c7] backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <DarkModeToggle />
          <button
            className="text-[#f6efe6]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#15110d]/95 md:hidden">
          <div className="space-y-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                className="block cursor-pointer rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-[#d9d1c7] transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
