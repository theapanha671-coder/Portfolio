import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0f0d0a] py-12 text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl font-black tracking-tight gradient-text">Portfolio</h3>
            <p className="text-sm text-[#b9afa3]">Building polished, design-forward digital experiences.</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-[#b9afa3]">
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-[#8a7f75]">
            © {currentYear} My Portfolio. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
