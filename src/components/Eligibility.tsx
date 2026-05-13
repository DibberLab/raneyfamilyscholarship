import { CalendarDays, MapPin, UserCheck, Mail, Clock, MessageSquare } from 'lucide-react';

const requirements = [
  {
    icon: MapPin,
    title: 'Red Wing School District',
    desc: 'Applicants must live within the Red Wing School District boundary.',
  },
  {
    icon: UserCheck,
    title: 'Ages 12–15 as of June 1',
    desc: 'Students must be between 12 and 15 years of age as of June 1 of the award year.',
  },
];

const timeline = [
  {
    icon: CalendarDays,
    date: 'February 15, 2027',
    label: 'Application Deadline',
    desc: 'All applications must be submitted online by February 15th, 2027.',
    color: 'bg-amber-400',
  },
  {
    icon: Mail,
    date: 'By May 15, 2027',
    label: 'Notification',
    desc: 'All applicants will be contacted by email with information regarding their application status.',
    color: 'bg-sky-500',
  },
  {
    icon: MessageSquare,
    date: 'Week of May 18, 2027',
    label: 'Finalist Interviews',
    desc: 'Selected finalists will have a 20-minute interview with the applicant, a parent/guardian, and board members.',
    color: 'bg-green-600',
  },
  {
    icon: Clock,
    date: 'July 12–25, 2027',
    label: 'Camp Session',
    desc: 'The selected recipient attends a 2-week session at Camp Billings in Thetford, Vermont.',
    color: 'bg-emerald-500',
  },
];

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Eligibility & Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Who Can Apply
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            The Raney Family Scholarship is open to students in the Red Wing community
            who meet the following requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto">
          {requirements.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 p-8 bg-green-50 rounded-2xl border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-900 text-center mb-12">Application Timeline</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-stone-200 z-0" />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {timeline.map(({ icon: Icon, date, label, desc, color }) => (
                <div key={label} className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{date}</p>
                  <h4 className="font-bold text-green-900 mb-2">{label}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Apply?</h3>
            <p className="text-white/70">
              Applications must be submitted online or mailed by <strong className="text-amber-300">February 15th, 2027</strong>.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-green-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
}
