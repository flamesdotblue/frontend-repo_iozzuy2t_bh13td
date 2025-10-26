import { Book, Users, MessageCircle, Star, Upload, Shield } from 'lucide-react';

const features = [
  {
    title: 'Book Exchange',
    description: 'Buy, sell, or swap textbooks with peers on your campus.',
    icon: Book,
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Tutoring Hub',
    description: 'Offer or request tutoring sessions across subjects.',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Real-time Chat',
    description: 'Coordinate meetups and details instantly via chat.',
    icon: MessageCircle,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Ratings & Reviews',
    description: 'Rate books and tutors to help others choose wisely.',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Easy Uploads',
    description: 'Add listings with images in seconds using drag & drop.',
    icon: Upload,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Verified Students',
    description: 'Access restricted to .edu emails for trusted exchanges.',
    icon: Shield,
    color: 'from-purple-500 to-fuchsia-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gray-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to thrive on campus
          </h2>
          <p className="mt-3 text-gray-300">
            A single space to exchange books, connect with tutors, and collaborate with classmates — fast and secure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${f.color} p-3 text-white shadow-lg shadow-black/20`}>
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{f.description}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
