import { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center">
            <TreePine className="w-5 h-5 text-green-900" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide hidden sm:block">
            Raney Family Scholarship
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', id: 'mission' },
            { label: 'Scholarship', id: 'coverage' },
            { label: 'Eligibility', id: 'eligibility' },
            { label: 'Apply', id: 'apply' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('apply')}
            className="bg-amber-400 hover:bg-amber-300 text-green-900 font-semibold px-5 py-2 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Apply Now
          </button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-700 px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'About Camp Billings', id: 'mission' },
            { label: 'Scholarship Coverage', id: 'coverage' },
            { label: 'Eligibility & Deadlines', id: 'eligibility' },
            { label: 'Apply Now', id: 'apply' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-amber-300 text-left font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
