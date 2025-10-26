import { Book, Users, Star, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="absolute inset-0 opacity-30">
        <div className="pointer-events-none absolute -left-1/4 top-[-10%] h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
        <div className="pointer-events-none absolute -right-1/4 bottom-[-10%] h-80 w-80 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Exchange Books. Share Knowledge. Connect on Campus.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              CampusConnect helps students buy, sell, and swap books, find tutors, and chat in real-time — all verified with your college email.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
              <div className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-md sm:max-w-md">
                <Search className="text-gray-300" size={18} />
                <input
                  className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
                  placeholder="Search books or tutors"
                />
              </div>
              <div className="flex gap-3">
                <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
                  Find Books
                </button>
                <button className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
                  Find Tutors
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-left text-sm text-gray-300 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/10 p-2"><Book size={18} /></div>
                <span>10k+ books exchanged</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/10 p-2"><Users size={18} /></div>
                <span>5k+ active students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/10 p-2"><Star size={18} /></div>
                <span>4.9/5 rated</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto h-72 w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 shadow-2xl backdrop-blur md:h-96">
              <div className="grid h-full w-full grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400" />
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500" />
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500" />
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-orange-500 to-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
