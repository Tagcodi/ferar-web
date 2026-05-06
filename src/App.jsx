import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
}

const customerJourney = [
  ['Request', 'Pickup, drop-off, recipient details, and package size.'],
  ['Estimate', 'Ferar previews distance, ETB fare, and delivery time.'],
  ['Track', 'Watch requested, assigned, picked up, in transit, and delivered states.'],
  ['Confirm', 'OTP/PIN proof, rating, feedback, and optional tip after completion.'],
]

const riderJourney = [
  ['Verify', 'Phone sign-in, profile, vehicle, ID, license, and payout documents.'],
  ['Go online', 'Set availability in Addis Ababa and receive delivery offers.'],
  ['Deliver', 'Accept or decline jobs and update pickup-to-drop-off progress.'],
  ['Earn', 'Review wallet balance, incentives, delivery earnings, and payouts.'],
]

const proofPoints = [
  ['Fare clarity', 'Customers see estimated fare and time before a delivery is requested.'],
  ['Verified riders', 'Riders complete profile, vehicle, and document checks before approval.'],
  ['Live workflow', 'Status updates keep both sides aligned from pickup through delivery.'],
  ['Payout ready', 'Riders can track earnings, wallet activity, incentives, and payout requests.'],
]

const steps = [
  ['01', 'Create the delivery', 'The customer adds pickup/drop-off addresses, recipient details, package size, and delivery notes.'],
  ['02', 'Review the estimate', 'Ferar calculates estimated distance, delivery time, and ETB fare before the request is submitted.'],
  ['03', 'Match a rider', 'Approved riders who are online can receive the offer and choose to accept or decline it.'],
  ['04', 'Move through statuses', 'The rider updates assigned, picked up, in transit, delivered, or cancelled when eligible.'],
  ['05', 'Finish with proof', 'Completion can include photo, signature, OTP/PIN proof, rating, feedback, and tip support.'],
]

const floatTransition = { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf7] text-ink">
      <Hero />
      <TrustStrip />
      <JourneySection />
      <HowItWorks />
      <FeatureRail />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate bg-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_58%,#fff2a3_58%,#ffd60a_100%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-10rem] top-24 -z-10 h-80 w-80 rounded-full bg-primary/35 blur-3xl"
        animate={{ scale: [1, 1.18, 1], x: [0, 24, 0] }}
        transition={floatTransition}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-12 top-24 hidden rounded-full border border-ink/10 bg-white/60 px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-ink/55 backdrop-blur lg:block"
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ ...floatTransition, duration: 7 }}
      >
        Addis Ababa delivery grid
      </motion.div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Ferar home">
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-ink font-display text-xl font-black text-primary shadow-[0_18px_36px_rgba(24,23,20,0.16)] transition group-hover:-rotate-6">
            F<span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
          </span>
          <span className="font-display text-2xl font-black tracking-[-0.04em]">Ferar</span>
        </a>
        <div className="hidden items-center gap-7 rounded-full border border-ink/10 bg-white/70 px-5 py-3 text-sm font-extrabold text-ink/65 shadow-sm backdrop-blur md:flex">
          <a className="hover:text-ink" href="#journeys">Journeys</a>
          <a className="hover:text-ink" href="#how">How it works</a>
          <a className="hover:text-ink" href="#features">Features</a>
        </div>
        <a className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(24,23,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c2a22]" href="#start">
          Get started
        </a>
      </nav>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-14">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-ink/65 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(255,214,10,0.22)]" />
            Customer delivery + verified rider network
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-6xl font-black leading-[0.86] tracking-[-0.075em] text-ink sm:text-8xl lg:text-[7.4rem]">
            City delivery that feels sharp, fast, and clear.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg font-medium leading-8 text-ink/62 sm:text-xl">
            Ferar helps customers request motorcycle deliveries across Addis Ababa while verified riders accept jobs, update progress, and track earnings.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-primary px-8 py-4 text-center font-black text-ink shadow-[0_18px_42px_rgba(255,214,10,0.38)] transition hover:-translate-y-1 hover:bg-[#ffe45a]" href="#journeys">
              See customer flow
            </a>
            <a className="rounded-full border border-ink/15 bg-white px-8 py-4 text-center font-black text-ink shadow-sm transition hover:-translate-y-1 hover:border-ink/25" href="#riders">
              Rider journey
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="relative min-h-[620px]" initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <RouteCanvas />
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}

function RouteCanvas() {
  return (
    <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_20%,rgba(255,214,10,.55),transparent_34%),linear-gradient(160deg,#fff7bc,#ffffff_52%,#191714_52%,#191714_100%)] shadow-[0_34px_90px_rgba(24,23,20,0.16)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 700" fill="none">
        <motion.path d="M86 520 C178 448 132 300 266 284 C422 266 366 128 548 96" stroke="#ffd60a" strokeWidth="10" strokeLinecap="round" strokeDasharray="18 24" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, ease: 'easeInOut' }} />
        <motion.path d="M116 548 C230 500 292 574 390 474 C486 374 442 272 566 228" stroke="rgba(255,255,255,.52)" strokeWidth="2" strokeDasharray="8 12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.4, delay: 0.3, ease: 'easeInOut' }} />
        {[['86','520'], ['266','284'], ['548','96'], ['390','474']].map(([cx, cy], index) => (
          <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="11" fill={index === 2 ? '#181714' : '#ffd60a'} stroke="white" strokeWidth="7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45 + index * 0.18, type: 'spring', stiffness: 220 }} />
        ))}
      </svg>
      <motion.div className="absolute right-8 top-10 rounded-[1.4rem] bg-white p-4 shadow-2xl" animate={{ y: [0, -10, 0] }} transition={floatTransition}>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Estimate</p>
        <p className="mt-1 font-display text-3xl font-black tracking-[-0.05em]">ETB fare</p>
        <p className="text-sm font-bold text-ink/55">Distance + time preview</p>
      </motion.div>
      <motion.div className="absolute bottom-10 left-8 rounded-full bg-primary px-5 py-3 text-sm font-black text-ink shadow-2xl" animate={{ x: [0, 10, 0] }} transition={{ ...floatTransition, duration: 4.6 }}>
        OTP confirmed
      </motion.div>
    </div>
  )
}

function PhoneMockup() {
  const statuses = ['Requested', 'Rider assigned', 'Picked up', 'In transit', 'Delivered']
  return (
    <motion.div className="absolute left-1/2 top-1/2 -ml-[155px] w-[310px] rounded-[2.6rem] border-[10px] border-ink bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,.32)] sm:-ml-[175px] sm:w-[350px]" animate={{ y: ['-50%', 'calc(-50% - 14px)', '-50%'] }} transition={{ ...floatTransition, duration: 6.2 }}>
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-ink/20" />
      <div className="rounded-[2rem] bg-[#fffaf0] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ink/45">Ferar live</p>
            <h2 className="font-display text-3xl font-black tracking-[-0.05em]">Bole → Piassa</h2>
          </div>
          <span className="rounded-full bg-primary px-3 py-2 text-xs font-black">24 min</span>
        </div>
        <div className="mt-5 rounded-3xl bg-ink p-4 text-white">
          <div className="flex items-center justify-between text-sm font-bold text-white/62"><span>Estimated fare</span><span>ETB</span></div>
          <p className="mt-1 font-display text-4xl font-black tracking-[-0.05em]">Clear before request</p>
        </div>
        <ol className="mt-5 space-y-3">
          {statuses.map((status, index) => (
            <motion.li key={status} className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-sm" initial={{ opacity: 0.45 }} animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.8, delay: index * 0.25, repeat: Infinity }}>
              <span className={`h-3 w-3 rounded-full ${index < 3 ? 'bg-primary' : 'bg-ink/16'}`} />
              <span className="text-sm font-black text-ink/70">{status}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.div>
  )
}

function TrustStrip() {
  return (
    <section className="relative z-10 -mt-8 px-5 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] border border-ink/10 bg-white/90 p-3 shadow-[0_20px_70px_rgba(24,23,20,0.08)] backdrop-blur md:grid-cols-4">
        {proofPoints.map(([title, text]) => (
          <motion.div key={title} className="rounded-[1.5rem] p-5 transition hover:bg-[#fff8cf]" whileHover={{ y: -5 }}>
            <p className="font-display text-xl font-black tracking-[-0.04em]">{title}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink/58">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section id="journeys" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b28d00]">Two sides of one city route</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">Customers request. Riders fulfill. Ferar keeps both moving.</h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2" id="riders">
          <JourneyCard title="Customer path" intro="Built for anyone sending packages across Addis Ababa with clear estimates and visible progress." items={customerJourney} image="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1100&q=82" />
          <JourneyCard title="Rider path" intro="Built for verified riders who want structured offers, status tools, earnings, and payouts." items={riderJourney} dark image="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1100&q=82" />
        </div>
      </motion.div>
    </section>
  )
}

function JourneyCard({ title, intro, items, image, dark = false }) {
  return (
    <motion.article variants={fadeUp} className={`relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8 ${dark ? 'bg-ink text-white' : 'bg-white text-ink'} shadow-[0_24px_80px_rgba(24,23,20,0.1)]`}>
      <div className="absolute inset-x-0 top-0 h-48 opacity-25" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative">
        <span className="mb-8 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">{title}</span>
        <p className={`max-w-xl font-display text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>{intro}</p>
        <div className="mt-9 grid gap-3">
          {items.map(([label, text], index) => (
            <motion.div key={label} className={`grid grid-cols-[3rem_1fr] gap-4 rounded-[1.4rem] p-4 ${dark ? 'bg-white/8' : 'bg-[#fff8cf]'}`} whileHover={{ x: 8 }}>
              <span className="font-display text-3xl font-black text-primary">{index + 1}</span>
              <div>
                <h3 className="font-black">{label}</h3>
                <p className={`mt-1 text-sm font-medium leading-6 ${dark ? 'text-white/62' : 'text-ink/60'}`}>{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative bg-ink px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp} className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">Stepped workflow</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">From request to delivered, no mystery in the middle.</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/62">The experience stays customer-facing and accurate: delivery requests, verified riders, estimates, status updates, OTP/PIN proof, earnings, and payouts.</p>
        </motion.div>
        <div className="space-y-4">
          {steps.map(([number, title, text]) => (
            <motion.article key={number} variants={fadeUp} whileHover={{ scale: 1.015 }} className="group grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:grid-cols-[5rem_1fr] sm:p-7">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary font-display text-2xl font-black text-ink transition group-hover:rotate-6">{number}</span>
              <div>
                <h3 className="font-display text-3xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-2 max-w-2xl font-medium leading-7 text-white/62">{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function FeatureRail() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <motion.div className="relative overflow-hidden rounded-[3rem] bg-white p-6 shadow-[0_24px_90px_rgba(24,23,20,.09)] sm:p-10 lg:p-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b28d00]">Less clutter, stronger signals</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">Designed around the moments people actually need.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Saved addresses', 'Promo and referral support', 'Eligible cancellation before pickup', 'Customer support', 'Vehicle registration', 'Rider online/offline availability', 'Accept or decline offers', 'Wallet and payout history'].map((item) => (
              <motion.div key={item} className="rounded-full border border-ink/10 bg-[#fffaf0] px-5 py-4 text-sm font-black text-ink/72" whileHover={{ backgroundColor: '#ffd60a', color: '#181714', x: 6 }}>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="start" className="px-5 pb-14 sm:px-8">
      <motion.div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary p-7 text-ink shadow-[0_28px_80px_rgba(255,214,10,.32)] sm:p-12 lg:p-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-ink/55">Move with Ferar</p>
            <h2 className="mt-3 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">Request a delivery or apply to ride.</h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-ink/62">For Addis Ababa customers sending packages and riders ready to fulfill deliveries with clear workflows.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="rounded-full bg-white px-8 py-4 text-center font-black shadow-[0_14px_35px_rgba(24,23,20,.12)] transition hover:-translate-y-1" href="mailto:hello@ferar.systems?subject=Delivery request">Request delivery</a>
            <a className="rounded-full bg-ink px-8 py-4 text-center font-black text-white shadow-[0_14px_35px_rgba(24,23,20,.16)] transition hover:-translate-y-1" href="mailto:hello@ferar.systems?subject=Rider interest">Become a rider</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-ink/10 px-5 py-10 text-sm font-bold text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© 2026 Ferar.</p>
      <p>On-demand motorcycle delivery in Addis Ababa.</p>
    </footer>
  )
}

export default App
