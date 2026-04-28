import { Tent, ShoppingBag, Plane, Car } from 'lucide-react';

const coverageItems = [
  {
    icon: Tent,
    title: 'Full Camp Registration',
    desc: 'Complete 2-week session registration at Camp Billings in Thetford, Vermont — all activities and programs included.',
  },
  {
    icon: ShoppingBag,
    title: 'All Camp Supplies',
    desc: 'Every necessary supply for a full camp session is provided so families don\'t have to worry about preparation costs.',
  },
  {
    icon: Plane,
    title: 'Roundtrip Airfare',
    desc: 'Roundtrip flights from Minneapolis–Saint Paul (MSP) to Burlington, Vermont (BTV) are fully covered.',
  },
  {
    icon: Car,
    title: 'All Ground Transportation',
    desc: 'Ground transportation to and from Minneapolis/St. Paul Airport (MSP) and all transportation to and from camp in Vermont is fully arranged and covered.',
  },
];

export default function ScholarshipCoverage() {
  return (
    <section
      id="coverage"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a3a2a 0%, #0f2518 50%, #1a3a2a 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            What's Included
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Everything is Covered
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            The Raney Family Scholarship is a fully funded experience — selected students
            receive everything needed for an unforgettable two weeks at Camp Billings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-amber-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400/30 transition-colors">
                <Icon className="w-7 h-7 text-amber-300" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-8 md:p-12 text-center">
          <div className="text-6xl md:text-7xl font-bold text-amber-300 mb-3">$0</div>
          <p className="text-white text-xl font-semibold mb-3">Out-of-pocket cost for the selected recipient</p>
          <p className="text-white/60 max-w-xl mx-auto">
            From the moment of selection, the Raney Family Scholarship covers every aspect
            of this life-changing camp experience — no hidden costs, no surprises.
          </p>
        </div>
      </div>
    </section>
  );
}
