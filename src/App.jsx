import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const clientSteps = [
  ['01', 'Request', 'Add pickup, drop-off, item details, and timing in a simple flow.'],
  ['02', 'Match', 'Ferar connects the request with a nearby motorcycle rider.'],
  ['03', 'Follow', 'Track progress from pickup to handoff with clear delivery updates.'],
]

const riderSteps = [
  ['01', 'Go available', 'Receive delivery opportunities that fit your movement around the city.'],
  ['02', 'Pick up', 'Use clear route details to collect the item with confidence.'],
  ['03', 'Deliver', 'Complete the handoff and keep customers informed along the way.'],
]

const benefits = [
  {
    title: 'For customers',
    text: 'Send parcels, food, documents, and essentials without complicated calls or unclear timing.',
    points: ['Quick delivery requests', 'Simple status updates', 'Built for city errands'],
  },
  {
    title: 'For riders',
    text: 'Find delivery requests, understand each trip clearly, and move through the city with purpose.',
    points: ['Clear pickup and drop-off details', 'Motorcycle-friendly delivery flow', 'Straightforward trip progress'],
  },
  {
    title: 'For everyday movement',
    text: 'A clean delivery experience that helps people send and move items faster across town.',
    points: ['Minimal steps', 'Fast matching', 'Reliable handoffs'],
  },
]

const stats = [
  ['2', 'user journeys'],
  ['4', 'simple actions'],
  ['1', 'clean delivery flow'],
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#181714]">
      <section className="relative isolate bg-white">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(255,214,10,0.34),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,214,10,0.16),transparent_26%),linear-gradient(135deg,#ffffff_0%,#ffffff_62%,#fff8cf_100%)]"
          animate={{ backgroundPosition: ['0% 0%', '8% 10%', '0% 0%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-24 top-28 -z-10 size-80 rounded-full bg-[#ffd60a]/30 blur-3xl"
          animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Ferar home">
            <span className="grid size-11 place-items-center rounded-full bg-[#ffd60a] text-lg font-black text-[#181714] shadow-[0_14px_40px_rgba(255,214,10,0.32)] transition group-hover:rotate-6">
              F
            </span>
            <span className="text-xl font-black tracking-tight">Ferar</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#4d493d] md:flex">
            <a className="transition hover:text-black" href="#customers">Customers</a>
            <a className="transition hover:text-black" href="#riders">Riders</a>
            <a className="transition hover:text-black" href="#start">Start</a>
          </div>
          <a className="rounded-full bg-[#ffd60a] px-5 py-3 text-sm font-black text-[#181714] shadow-[0_12px_30px_rgba(255,214,10,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href="#start">
            Get moving
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-16">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-[#181714]/10 bg-white/75 px-4 py-2 text-sm font-bold text-[#4d493d] shadow-sm backdrop-blur">
              Motorcycle delivery for customers and riders
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-[#181714] sm:text-7xl lg:text-8xl">
              City delivery that feels effortless.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5948] sm:text-xl">
              Ferar helps customers request quick motorcycle deliveries and helps riders fulfill clear, reliable city trips.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-[#ffd60a] px-8 py-4 text-center font-black text-[#181714] shadow-[0_18px_45px_rgba(255,214,10,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href="#customers">
                I need delivery
              </a>
              <a className="rounded-full border border-[#181714]/15 bg-white/70 px-8 py-4 text-center font-black text-[#181714] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white" href="#riders">
                I am a rider
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="absolute -inset-6 rounded-[3rem] bg-[#ffd60a]/40 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[2.5rem] border border-[#181714]/10 bg-white shadow-[0_32px_90px_rgba(24,23,20,0.14)]">
              <img className="h-[560px] w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85" alt="Motorcycle rider moving through a city street" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181714]/80 via-[#181714]/10 to-transparent" />
              <motion.div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/20 bg-white/95 p-5 text-[#181714] shadow-2xl backdrop-blur md:left-auto md:w-84" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <p className="text-sm font-bold text-[#6b6244]">Live trip clarity</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">Pickup → Drop-off</h2>
                    <p className="mt-1 text-sm font-semibold text-[#6b6244]">Clear for customer and rider</p>
                  </div>
                  <span className="rounded-full bg-[#ffd60a] px-4 py-2 text-sm font-black">Fast</span>
                </div>
              </motion.div>
            </figure>
          </motion.div>
        </div>
      </section>

      <motion.section className="mx-auto grid max-w-7xl gap-5 px-6 py-10 lg:grid-cols-3 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
        {stats.map(([value, label]) => (
          <motion.article variants={fadeUp} key={label} className="rounded-[1.75rem] border border-[#181714]/10 bg-white p-6 shadow-[0_18px_60px_rgba(24,23,20,0.06)]">
            <p className="text-4xl font-black tracking-[-0.04em]">{value}</p>
            <p className="mt-1 font-bold text-[#6b6244]">{label}</p>
          </motion.article>
        ))}
      </motion.section>

      <JourneySection id="customers" eyebrow="For clients and customers" title="Request deliveries without friction." intro="Ferar keeps the customer side simple: describe what needs to move, confirm the details, and follow the delivery until it arrives." steps={clientSteps} />
      <JourneySection id="riders" eyebrow="For riders and drivers" title="Fulfill requests with clear trip details." intro="Riders get a focused delivery flow built around pickup, movement, and handoff — clean information without unnecessary noise." steps={riderSteps} flipped />

      <section id="benefits" className="border-y border-[#181714]/10 bg-[#fffdf2] px-6 py-20 text-[#181714] lg:px-8 lg:py-28">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b28d00]">Why Ferar</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">One polished experience for both sides of delivery.</h2>
          </motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.article whileHover={{ y: -8 }} variants={fadeUp} key={benefit.title} className="rounded-[1.75rem] border border-[#181714]/10 bg-white p-6 shadow-[0_20px_60px_rgba(24,23,20,0.08)]">
                <span className="mb-5 block h-1.5 w-14 rounded-full bg-[#ffd60a]" />
                <h3 className="text-2xl font-black">{benefit.title}</h3>
                <p className="mt-2 text-lg leading-8 text-[#5f5948]">{benefit.text}</p>
                <ul className="mt-6 space-y-3 text-sm font-bold text-[#4d493d]">
                  {benefit.points.map((point) => <li key={point}>✓ {point}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="start" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <motion.div className="relative overflow-hidden rounded-[2.5rem] bg-[#ffd60a] p-8 shadow-[0_30px_80px_rgba(255,214,10,0.35)] sm:p-12 lg:p-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/35" />
          <div className="absolute -bottom-24 right-24 size-52 rounded-full bg-white/25" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Ready to move something through the city?</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#4d493d]">Start with a delivery request, or join the rider side when you are ready to fulfill trips.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="inline-flex justify-center rounded-full bg-white px-8 py-4 font-black text-[#181714] shadow-[0_14px_35px_rgba(24,23,20,0.12)] transition hover:-translate-y-0.5 hover:bg-[#fff9d8]" href="mailto:hello@ferar.systems?subject=Delivery request">
                Request delivery
              </a>
              <a className="inline-flex justify-center rounded-full border border-[#181714]/15 bg-[#181714] px-8 py-4 font-black text-white shadow-[0_14px_35px_rgba(24,23,20,0.12)] transition hover:-translate-y-0.5 hover:bg-[#2a281f]" href="mailto:hello@ferar.systems?subject=Rider interest">
                Ride with Ferar
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#181714]/10 px-6 py-10 text-sm font-semibold text-[#6b6244] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Ferar.</p>
        <p>Fast, clean motorcycle delivery for customers and riders.</p>
      </footer>
    </main>
  )
}

function JourneySection({ id, eyebrow, title, intro, steps, flipped = false }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <motion.div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${flipped ? 'lg:[&>*:first-child]:order-2' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b28d00]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#5f5948]">{intro}</p>
        </motion.div>
        <div className="space-y-4">
          {steps.map(([number, stepTitle, text]) => (
            <motion.article whileHover={{ x: 8 }} variants={fadeUp} key={number} className="grid gap-5 rounded-[1.75rem] border border-[#181714]/10 bg-white p-6 shadow-[0_18px_60px_rgba(24,23,20,0.07)] sm:grid-cols-[4.5rem_1fr]">
              <span className="flex size-14 items-center justify-center rounded-full bg-[#ffd60a] text-sm font-black text-[#181714]">{number}</span>
              <div>
                <h3 className="text-2xl font-black tracking-tight">{stepTitle}</h3>
                <p className="mt-2 text-lg leading-8 text-[#5f5948]">{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default App
