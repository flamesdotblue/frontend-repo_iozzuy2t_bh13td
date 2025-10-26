import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="how" className="bg-gray-950 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-3 text-gray-300">
                Create an account with your college email, list books or tutoring services, chat with students in real time, and rate your experiences.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Sign up with .edu email","Post or request a listing","Chat to coordinate","Meet, exchange, and rate"].map((step, idx) => (
                <li key={step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
