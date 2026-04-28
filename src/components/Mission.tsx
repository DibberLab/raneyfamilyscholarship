import { Heart, Users, Star, Shield, Award, User } from 'lucide-react';
import cbimg from '/SquareCB48.png';

const values = [
  {
    icon: Heart,
    title: 'Individuality Celebrated',
    desc: 'Every camper is valued for who they are. Camp Billings is a safe haven where children are free to truly be themselves.',
  },
  {
    icon: Users,
    title: 'Real Friendships',
    desc: 'Uninterrupted by cellphones and modern technology, campers forge meaningful, lasting friendships.',
  },
  {
    icon: Star,
    title: 'Independence & Confidence',
    desc: 'For more than a century, Camp Billings has inspired campers to build self-reliance through daily activities and cabin duties.',
  },
  {
    icon: Shield,
    title: 'Community & Belonging',
    desc: 'A spirit of friendship, kindness, and belonging has shaped generations of happy memories on Lake Fairlee.',
  },
];

const boardMembers = [
  'Andy Nelson - Executive Director', 
  'Steve Durhman - President',
  'Scott Nelson - Vice-President',
  'Stefanie Binner - Treasurer',
  'Sarah Stinson - Secretary'
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
              About the Scholarship
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
              A Family's Way of
              <span className="block text-amber-600">Giving Back</span>
            </h2>
            <div className="w-16 h-1 bg-amber-400 mb-8 rounded-full" />
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              This scholarship is our family's way of giving back to a community and a place that
              has shaped so many of our happiest memories. By helping more children discover the
              wonder of Camp Billings and the beauty of Lake Fairlee, we hope to pass along the
              same spirit of friendship, kindness, and belonging that has meant so much to us.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Camp Billings in Thetford, Vermont, gives children a safe haven to truly be
              themselves — a place exploding with creativity, imagination, and fun, where new
              friendships are formed far from the distractions of modern technology.
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5036960/pexels-photo-5036960.jpeg')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-xs">
              <p className="text-green-900 font-bold text-2xl">100+</p>
              <p className="text-stone-500 text-sm">Years inspiring independence at Camp Billings</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-400 rounded-xl shadow-xl p-4 text-center">
              <p className="text-green-900 font-bold text-xl">2 Weeks</p>
              <p className="text-green-900/70 text-xs font-medium">Full Session</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <Icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="font-bold text-green-900 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 flex gap-5">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Legal Status</p>
              <h3 className="font-bold text-green-900 text-lg mb-2">501(c)(3) Nonprofit Organization</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The Raney Family Scholarship is a registered 501(c)(3) nonprofit organization.
                Contributions are tax-deductible to the extent permitted by law.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-5">Board of Directors</p>
            <ul className="space-y-2.5">
              {boardMembers.map((name, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                  <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3.5 h-3.5 text-green-700" />
                  </div>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-green-900 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* UPDATED IMAGE BELOW */}
            <div
              className="h-64 lg:h-auto bg-cover bg-center"
              style={{
                backgroundImage: `url(${cbimg})`,
              }}
            />
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-amber-300 font-semibold uppercase tracking-widest text-sm mb-3">
                Camp Billings
              </p>
              <h3 className="text-3xl font-bold text-white mb-6">
                Thetford, Vermont on Lake Fairlee
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Camp Billings offers a wide range of activities — from athletics and water sports
                to outdoor adventures, crafts, and performing arts. Campers build independence
                and enjoy the freedom to try new activities every day alongside their cabin mates.
              </p>
              <a
                href="https://campbillings.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
              >
                Visit Camp Billings Website
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}