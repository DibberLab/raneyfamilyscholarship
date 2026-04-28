import { ChevronDown, TreePine } from 'lucide-react';
import logo from '/RaneyFamilyScholarship-Logo-1.png';

export default function Hero() {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/75 via-green-900/60 to-green-950/85" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-amber-400/60" />
          <div className="flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5">
            <TreePine className="w-4 h-4 text-amber-300" />
            <span className="text-amber-300 text-sm font-semibold uppercase tracking-widest">
              2026 Applications Open
            </span>
          </div>
          <div className="h-px w-16 bg-amber-400/60" />
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-auto h-60 mb-6 shadow-xl">
            <img 
        src={logo} 
        alt="Raney Family Scholarship Logo" 
        className="h-60 w-auto" // Adjust size as needed
      />
          </div>
        </div>
{/* HIDE H1 Tags
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
          Raney Family
          <span className="block text-amber-300">Scholarship</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 font-light mb-4 italic">
          Sending Red Wing Kids to Camp on Lake Fairlee, Vermont
        </p>
 END HIDE H1 */}
        <div className="w-20 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A fully funded 2-week adventure at Camp Billings — covering registration,
          supplies, airfare, and all transportation for students in the Red Wing School District.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToApply}
            className="bg-amber-400 hover:bg-amber-300 text-green-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Apply by May 8th, 2026
          </button>
          <button
            onClick={scrollToMission}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Ages 12–15 as of June 1
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Red Wing School District
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Fully Funded Experience
          </span>
        </div>
      </div>

      <button
        onClick={scrollToMission}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
