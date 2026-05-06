const steps = [
  {
    number: '01',
    title: 'Request a delivery',
    text: 'Enter pickup and drop-off details in a few quick steps.',
  },
  {
    number: '02',
    title: 'Confirm your order',
    text: 'Review the route, delivery details, and price before sending.',
  },
  {
    number: '03',
    title: 'Get matched with a rider',
    text: 'A motorcycle rider picks up your item and starts the delivery.',
  },
  {
    number: '04',
    title: 'Track until it arrives',
    text: 'Follow the trip and receive your delivery quickly and reliably.',
  },
]

const benefits = [
  {
    title: 'Fast city delivery',
    text: 'Motorcycle riders move easily through traffic to get items delivered sooner.',
  },
  {
    title: 'Simple from start to finish',
    text: 'Clear steps, clean tracking, and no complicated process.',
  },
  {
    title: 'Built for everyday needs',
    text: 'Send parcels, food, documents, or small essentials across the city.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#fffdf3] text-[#181714]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,214,10,0.42),transparent_36%),linear-gradient(135deg,#fffdf3_0%,#fff7c7_46%,#f7f2de_100%)]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[#ffd60a]/20 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Ferar home">
            <span className="grid size-11 place-items-center rounded-full bg-[#181714] text-lg font-black text-[#ffd60a] shadow-[0_14px_40px_rgba(24,23,20,0.18)]">
              F
            </span>
            <span className="text-xl font-black tracking-tight">Ferar</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#4d493d] md:flex">
            <a className="transition hover:text-black" href="#how-to-use">How to use</a>
            <a className="transition hover:text-black" href="#benefits">Benefits</a>
            <a className="transition hover:text-black" href="#start">Start</a>
          </div>
          <a className="rounded-full bg-[#181714] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black" href="#start">
            Start a delivery
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#181714]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#4d493d] shadow-sm backdrop-blur">
              Motorcycle delivery for everyday city movement
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-[#181714] sm:text-7xl lg:text-8xl">
              Ride delivery, made simple.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5948] sm:text-xl">
              Ferar connects customers with fast motorcycle delivery for everyday orders, parcels, and city errands.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-[#ffd60a] px-8 py-4 text-center font-black text-[#181714] shadow-[0_18px_45px_rgba(255,214,10,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href="#start">
                Start a delivery
              </a>
              <a className="rounded-full border border-[#181714]/15 bg-white/60 px-8 py-4 text-center font-black text-[#181714] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white" href="#how-to-use">
                How it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[#ffd60a]/40 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[2.5rem] bg-[#181714] shadow-[0_32px_90px_rgba(24,23,20,0.28)]">
              <img
                className="h-[560px] w-full object-cover opacity-90"
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85"
                alt="Motorcycle rider moving through a city street"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181714]/80 via-[#181714]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/20 bg-white/90 p-5 text-[#181714] shadow-2xl backdrop-blur md:left-auto md:w-80">
                <p className="text-sm font-bold text-[#6b6244]">Current delivery</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">On the way</h2>
                    <p className="mt-1 text-sm font-semibold text-[#6b6244]">Pickup → Drop-off</p>
                  </div>
                  <span className="rounded-full bg-[#ffd60a] px-4 py-2 text-sm font-black">Fast</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="how-to-use" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b28d00]">How to use Ferar</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Four clear steps. No complicated process.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5948]">Request, confirm, match with a rider, then track the delivery until it arrives.</p>
          </div>
          <div className="divide-y divide-[#181714]/10 border-y border-[#181714]/10">
            {steps.map((step) => (
              <article key={step.number} className="grid gap-5 py-8 sm:grid-cols-[5rem_1fr]">
                <span className="flex size-14 items-center justify-center rounded-full bg-[#ffd60a] text-sm font-black text-[#181714]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-lg leading-8 text-[#5f5948]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#181714] px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd60a]">Why Ferar</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Fast motorcycle delivery, designed around customers.</h2>
          </div>
          <div className="space-y-8">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border-l-4 border-[#ffd60a] pl-6">
                <h3 className="text-2xl font-black">{benefit.title}</h3>
                <p className="mt-2 text-lg leading-8 text-white/70">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ffd60a] p-8 shadow-[0_30px_80px_rgba(255,214,10,0.35)] sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/35" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Ready to send something?</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#4d493d]">Use Ferar for quick, simple motorcycle delivery across the city.</p>
            <a className="mt-8 inline-flex rounded-full bg-[#181714] px-8 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-black" href="mailto:hello@ferar.systems">
              Request delivery
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#181714]/10 px-6 py-10 text-sm font-semibold text-[#6b6244] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Ferar.</p>
        <p>Ride delivery, made simple.</p>
      </footer>
    </main>
  )
}

export default App
