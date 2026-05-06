const features = [
  {
    title: 'Fast City Delivery',
    text: 'Motorcycle-based delivery helps move through busy streets more efficiently than traditional transport options.',
  },
  {
    title: 'Simple Booking',
    text: 'Create a delivery request in just a few steps with clear pickup and drop-off details.',
  },
  {
    title: 'Reliable Riders',
    text: 'Ferar connects you with riders ready to handle everyday delivery needs with care and professionalism.',
  },
  {
    title: 'For Customers & Businesses',
    text: 'Send personal items, documents, shop orders, food packages, and more with a flexible delivery option.',
  },
  {
    title: 'Clear Delivery Flow',
    text: 'Know what’s happening from request to pickup to drop-off, without confusing coordination.',
  },
  {
    title: 'Built for Local Movement',
    text: 'Designed for city logistics, short-distance delivery, and fast movement across neighborhoods.',
  },
]

const steps = [
  ['01', 'Request a Delivery', 'Enter your pickup location, drop-off location, and delivery details.'],
  ['02', 'Get Matched', 'Ferar connects your request with an available motorcycle rider.'],
  ['03', 'Rider Picks Up', 'Your item is collected from the pickup point.'],
  ['04', 'Delivered to Destination', 'The rider completes the delivery and gets your item where it needs to go.'],
]

const useCases = [
  'Personal package delivery',
  'Business order delivery',
  'Document and parcel transport',
  'Shop-to-customer deliveries',
  'Food and small item delivery',
  'Urgent local errands',
  'Marketplace and merchant deliveries',
  'Office-to-office item movement',
]

const benefits = [
  'Faster movement through city traffic',
  'Convenient delivery for everyday needs',
  'Flexible for individuals and businesses',
  'Easy request process',
  'Suitable for small and urgent deliveries',
  'Helps businesses reach customers more efficiently',
  'Reduces delivery coordination hassle',
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,.25),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,.18),transparent_35%)]" />
      <div className="relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600 font-black text-slate-950 shadow-lg shadow-cyan-500/20">F</span>
            <span className="text-xl font-semibold tracking-tight">Ferar</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>
            <a href="#use-cases" className="hover:text-white">Use Cases</a>
          </div>
          <a href="#start" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white hover:text-slate-950">Book a Delivery</a>
        </nav>

        <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">Fast local delivery for everyday city needs</div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Fast Motorcycle Delivery, Built for City Movement</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Ferar helps customers and businesses move items quickly across town with reliable motorcycle ride delivery designed for everyday needs.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#start" className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200">Book a Delivery</a>
              <a href="#how-it-works" className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/15">Learn How It Works</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-fuchsia-500/25 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div><p className="text-sm text-slate-400">Ferar Delivery</p><h2 className="text-2xl font-bold">Across Town</h2></div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">Moving</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/[.06] p-4"><p className="text-slate-400">Pickup</p><b className="text-3xl">Home</b></div>
                  <div className="rounded-2xl bg-white/[.06] p-4"><p className="text-slate-400">Drop-off</p><b className="text-3xl">Shop</b></div>
                  <div className="rounded-2xl bg-white/[.06] p-4"><p className="text-slate-400">Vehicle</p><b className="text-3xl">Bike</b></div>
                  <div className="rounded-2xl bg-white/[.06] p-4"><p className="text-slate-400">Best for</p><b className="text-3xl">City</b></div>
                  <div className="sm:col-span-2 rounded-2xl bg-white/[.06] p-4">
                    {['Delivery request created', 'Rider picks up your item', 'Delivered to destination'].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 border-b border-white/10 py-3 last:border-0">
                        <span className="grid size-8 place-items-center rounded-full bg-cyan-300/15 text-sm text-cyan-200">{index + 1}</span>
                        <span className="text-slate-200">{item}</span>
                        <span className="ml-auto text-sm text-slate-500">clear</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-red-300/15 bg-red-400/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-red-200">The problem</p>
              <h2 className="mt-4 text-3xl font-black">City delivery can be slow, unpredictable, and hard to coordinate.</h2>
              <p className="mt-6 text-slate-300">Whether it’s a small package, business order, document, or urgent item, customers need a faster way to get things from point A to point B without unnecessary delays or complicated steps.</p>
            </div>
            <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">The Ferar solution</p>
              <h2 className="mt-4 text-3xl font-black">Ferar makes local delivery simple.</h2>
              <p className="mt-6 text-slate-300">Request a motorcycle delivery, share the pickup and drop-off details, and get your item moving with a delivery option made for speed, convenience, and urban roads.</p>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl"><p className="text-cyan-200">Features</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Made for fast everyday delivery.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/[.06] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[.09]"><div className="mb-5 size-12 rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600" /><h3 className="text-xl font-bold">{feature.title}</h3><p className="mt-3 text-slate-400">{feature.text}</p></article>)}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[.06] p-8 lg:p-10">
            <div className="max-w-3xl"><p className="text-cyan-200">How It Works</p><h2 className="mt-3 text-4xl font-black">From request to drop-off in a clear flow.</h2></div>
            <div className="mt-10 grid gap-5 lg:grid-cols-4">{steps.map(([num, title, text]) => <div key={num} className="rounded-3xl bg-slate-950/70 p-6"><span className="text-sm font-black text-cyan-300">{num}</span><h3 className="mt-5 text-2xl font-bold">{title}</h3><p className="mt-3 text-slate-400">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl"><p className="text-cyan-200">Use Cases</p><h2 className="mt-3 text-4xl font-black">Useful for personal, business, and urgent city deliveries.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => <div key={useCase} className="rounded-2xl border border-white/10 bg-white/[.06] p-5 font-semibold text-slate-200">{useCase}</div>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[.06] p-8 lg:p-10">
            <div className="max-w-3xl"><p className="text-cyan-200">Benefits</p><h2 className="mt-3 text-4xl font-black">A faster, easier way to move items across town.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => <div key={benefit} className="rounded-2xl bg-slate-950/70 p-5 font-semibold text-slate-200">✓ {benefit}</div>)}
            </div>
          </div>
        </section>

        <section id="start" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 p-10 text-slate-950 lg:p-14">
            <div className="max-w-3xl"><h2 className="text-4xl font-black tracking-tight sm:text-5xl">Move Anything Across Town, Faster</h2><p className="mt-5 text-lg font-semibold text-slate-900/80">Whether you’re sending a personal item or fulfilling customer orders, Ferar makes motorcycle delivery simple, fast, and reliable.</p><a href="mailto:hello@ferar.systems" className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800">Start a Delivery</a></div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Ferar.</p>
          <p>Ferar — Fast motorcycle delivery for everyday city movement.</p>
        </footer>
      </div>
    </main>
  )
}

export default App
