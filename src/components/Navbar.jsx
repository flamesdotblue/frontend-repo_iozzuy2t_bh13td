import { GraduationCap, MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-gray-950/80 to-gray-950/30 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
              <GraduationCap size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">CampusConnect</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#chat" className="hover:text-white flex items-center gap-1"><MessageCircle size={16} /> Chat</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 hover:text-white">Log in</button>
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
