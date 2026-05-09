import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const floatLoop = { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
const floatSlow = { duration: 9, repeat: Infinity, ease: 'easeInOut' }

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

const pricingFactors = [
  ['Distance', 'Longer pickup-to-drop-off routes affect the delivery estimate.'],
  ['Package size', 'Package size and handling needs help set the right rider fit.'],
  ['Urgency', 'Priority timing can influence the final estimate when available.'],
  ['Route conditions', 'Traffic, access, and route complexity may change expected effort.'],
]

const safetyItems = [
  ['Verified onboarding', 'Riders complete profile, vehicle, and document checks before approval.'],
  ['Delivery tracking', 'Status updates keep customers, riders, and recipients aligned during the trip.'],
  ['Clear details', 'Pickup, drop-off, recipient, and package notes reduce confusion before pickup.'],
  ['Support paths', 'Help flows give both sides a place to raise problems and resolve handoff questions.'],
]

const contactReasons = [
  ['Customer support', 'Help with delivery requests, route details, status questions, handoff issues, and receipts.'],
  ['Rider applications', 'Apply to ride with Ferar and ask about onboarding, documents, vehicle details, and payouts.'],
  ['Business inquiries', 'Discuss small business delivery needs, recurring routes, launch partnerships, or account questions.'],
  ['General questions', 'Ask anything else about Ferar, availability, launch timing, or how the service works.'],
]

const contactChannels = [
  ['Email', 'hello@ferar.systems', 'mailto:hello@ferar.systems?subject=Ferar contact'],
  ['Phone', '+251 900 000 000', 'tel:+251900000000'],
  ['WhatsApp', '+251 900 000 000', 'https://wa.me/251900000000'],
  ['Address', 'Addis Ababa, Ethiopia', null],
  ['Social', '@ferar.delivery', null],
]

const faqs = [
  ['What can I send?', 'Documents, parcels, small business orders, and personal items that are safe and allowed.'],
  ['Where does Ferar operate?', 'Ferar is focused on motorcycle delivery across Addis Ababa.'],
  ['How does pricing work?', 'The estimate depends on distance, package size, urgency, and route conditions.'],
  ['Can I track my delivery?', 'Yes. Ferar is built around request, rider assignment, pickup, transit, and arrival status updates.'],
  ['How do riders join?', 'Riders can contact Ferar, prepare ID, license, vehicle details, and complete verification before accepting delivery offers.'],
  ['Who do I contact for support?', 'Email hello@ferar.systems with your delivery route, account role, or question so the team can direct it quickly.'],
]

const termsItems = [
  ['Service use', 'Ferar is a public launch service for customers requesting motorcycle deliveries and verified riders fulfilling accepted delivery jobs.'],
  ['Delivery requests', 'Customers should provide accurate pickup, drop-off, recipient, package, and contact details. Ferar may decline unsafe, restricted, or unclear requests.'],
  ['Pricing and payment', 'Fare estimates may consider distance, route conditions, package size, urgency, and available riders. Final payment terms will be confirmed before full public launch.'],
  ['Rider responsibilities', 'Riders must keep documents accurate, follow applicable road rules, handle packages with care, and update delivery status honestly.'],
  ['Cancellations and support', 'Eligible cancellations, failed handoffs, complaints, refunds, and support processes will be handled through Ferar support channels.'],
  ['Launch placeholder', 'These terms are launch-ready placeholder terms and should be reviewed by legal counsel before final production use.'],
]

const privacyItems = [
  ['Information collected', 'Ferar may collect account contact details, delivery addresses, recipient details, package notes, rider profile documents, support messages, and payment or payout records.'],
  ['Location and delivery data', 'Ferar uses pickup, drop-off, route, and status information to estimate fares, match riders, track deliveries, and support handoffs.'],
  ['How information is used', 'Information is used to operate the service, verify riders, communicate updates, improve safety, provide support, prevent misuse, and prepare payment or payout workflows.'],
  ['Sharing', 'Relevant delivery details may be shared between customers, riders, recipients, service providers, and authorities when required for safety, operations, support, or legal compliance.'],
  ['Retention and choices', 'Ferar keeps records only as needed for operations, security, support, accounting, and legal obligations. Users may contact support about access, correction, or deletion requests.'],
  ['Launch placeholder', 'This privacy notice is concise placeholder copy for launch and should be reviewed by legal counsel before final production use.'],
]

const navLinks = [
  ['Journeys', '/#journeys'],
  ['How it works', '/#how'],
  ['Pricing', '/#pricing'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
  ['Terms', '/terms'],
  ['Privacy', '/privacy'],
]

function App() {
  const route = window.location.pathname.replace(/\/$/, '') || '/'

  if (route === '/terms') return <StandaloneLegalPage type="terms" />
  if (route === '/privacy') return <StandaloneLegalPage type="privacy" />
  if (route === '/faq') return <StandaloneFaqPage />
  if (route === '/contact') return <StandaloneContactPage />

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <TrustStrip />
      <JourneySection />
      <HowItWorks />
      <FeatureRail />
      <LaunchPages />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function AppShell({ children, dark = false, className = '' }) {
  return (
    <div className={`relative isolate ${dark ? 'bg-foreground text-background' : 'bg-background text-foreground'} ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(129,140,248,0.14),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(250,204,21,0.16),transparent_22%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.06),transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.34] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>
      {children}
    </div>
  )
}

function Navigation({ compact = false, dark = false }) {
  return (
    <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="flex items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-3" aria-label="Ferar home">
          <span className={`relative grid h-12 w-12 place-items-center rounded-[1.25rem] border ${dark ? 'border-white/12 bg-white/10 text-white' : 'border-foreground/10 bg-foreground text-background'} font-display text-xl font-black shadow-[0_18px_42px_rgba(0,0,0,0.14)] transition duration-300 group-hover:-rotate-6 group-hover:scale-[1.03]`}>
            F
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[color:var(--color-primary)] shadow-[0_0_0_6px_rgba(250,204,21,0.16)]" />
          </span>
          <span className="font-display text-2xl font-black tracking-[-0.04em]">Ferar</span>
        </a>
        <a
          className={`rounded-full px-5 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 ${dark ? 'bg-white text-foreground focus-visible:ring-offset-foreground' : 'bg-foreground text-background shadow-[0_14px_32px_rgba(16,16,18,0.16)] focus-visible:ring-offset-background'}`}
          href={compact ? '/#start' : '#start'}
        >
          Get started
        </a>
      </div>
      <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 md:hidden">
        {navLinks.map(([label, href]) => (
          <a
            key={label}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-extrabold shadow-sm backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 ${dark ? 'border-white/12 bg-white/8 text-white/80 focus-visible:ring-offset-foreground' : 'border-foreground/10 bg-white/78 text-foreground/70 focus-visible:ring-offset-background'}`}
            href={href}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="hidden items-center gap-5 rounded-full border border-foreground/10 bg-white/70 px-5 py-3 text-sm font-extrabold text-foreground/65 shadow-[0_14px_32px_rgba(0,0,0,0.06)] backdrop-blur md:flex md:flex-wrap">
        {navLinks.map(([label, href]) => (
          <a className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-background" key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
      <a
        className={`hidden rounded-full px-5 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 md:inline-flex ${dark ? 'bg-white text-foreground focus-visible:ring-offset-foreground' : 'bg-foreground text-background shadow-[0_14px_32px_rgba(16,16,18,0.16)] focus-visible:ring-offset-background'}`}
        href={compact ? '/#start' : '#start'}
      >
        Get started
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <AppShell>
      <section id="top" className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_26%),linear-gradient(135deg,#f8fafc_0%,#f4f7fb_46%,#eef2ff_100%)]" />
        <motion.div aria-hidden="true" className="absolute left-[-7rem] top-24 -z-10 h-80 w-80 rounded-full bg-[rgba(250,204,21,0.28)] blur-3xl" animate={{ scale: [1, 1.12, 1], x: [0, 24, 0] }} transition={floatLoop} />
        <motion.div aria-hidden="true" className="absolute right-[-6rem] top-10 -z-10 h-72 w-72 rounded-full bg-[rgba(99,102,241,0.16)] blur-3xl" animate={{ scale: [1, 1.16, 1], y: [0, 18, 0] }} transition={floatSlow} />

        <Navigation />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
            <motion.p variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-4 py-2 text-sm font-black text-foreground/70 shadow-[0_14px_32px_rgba(0,0,0,0.05)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary)] shadow-[0_0_0_6px_rgba(250,204,21,0.18)]" />
              Customer delivery + verified rider network
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-3xl font-display text-6xl font-black leading-[0.86] tracking-[-0.075em] sm:text-8xl lg:text-[7.5rem]">
              City delivery that feels sharp, fast, and clear.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg font-medium leading-8 text-foreground/62 sm:text-xl">
              Ferar helps customers request motorcycle deliveries across Addis Ababa while verified riders accept jobs, update progress, and track earnings.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-[color:var(--color-primary)] px-8 py-4 text-center font-black text-foreground shadow-[0_18px_42px_rgba(250,204,21,0.34)] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="#journeys">
                See customer flow
              </a>
              <a className="rounded-full border border-foreground/12 bg-white/70 px-8 py-4 text-center font-black text-foreground shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="#rider-journey">
                Rider journey
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {['Fare preview', 'Live status', 'Proof-ready'].map((item) => (
                <div key={item} className="rounded-[1.3rem] border border-foreground/10 bg-white/72 px-4 py-3 text-sm font-black text-foreground/72 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative min-h-[660px] lg:min-h-[700px]" initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <RouteCanvas />
            <PhoneMockup />
            <OrbitCards />
          </motion.div>
        </div>
      </section>
    </AppShell>
  )
}

function RouteCanvas() {
  return (
    <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] border border-foreground/8 bg-[radial-gradient(circle_at_50%_18%,rgba(250,204,21,.24),transparent_28%),linear-gradient(165deg,#ffffff_0%,#eef2ff_49%,#111827_49%,#111827_100%)] shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 700" fill="none">
        <motion.path d="M84 520 C176 448 132 300 266 284 C422 266 366 128 548 96" stroke="url(#routeGlow)" strokeWidth="10" strokeLinecap="round" strokeDasharray="18 24" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, ease: 'easeInOut' }} />
        <motion.path d="M116 548 C230 500 292 574 390 474 C486 374 442 272 566 228" stroke="rgba(255,255,255,.46)" strokeWidth="2" strokeDasharray="8 12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.4, delay: 0.2, ease: 'easeInOut' }} />
        {[['84', '520'], ['266', '284'], ['548', '96'], ['390', '474']].map(([cx, cy], index) => (
          <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="11" fill={index === 2 ? '#111827' : '#facc15'} stroke="white" strokeWidth="7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + index * 0.16, type: 'spring', stiffness: 220 }} />
        ))}
        <defs>
          <linearGradient id="routeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div className="absolute left-8 top-10 rounded-[1.4rem] border border-white/12 bg-white/88 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur" animate={{ y: [0, -10, 0] }} transition={floatLoop}>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-foreground/45">Estimate</p>
        <p className="mt-1 font-display text-3xl font-black tracking-[-0.05em]">ETB fare</p>
        <p className="text-sm font-bold text-foreground/55">Distance + time preview</p>
      </motion.div>
      <motion.div className="absolute bottom-10 left-8 rounded-full bg-[color:var(--color-primary)] px-5 py-3 text-sm font-black text-foreground shadow-[0_20px_50px_rgba(250,204,21,0.28)]" animate={{ x: [0, 10, 0] }} transition={{ ...floatLoop, duration: 4.6 }}>
        OTP confirmed
      </motion.div>
    </div>
  )
}

function PhoneMockup() {
  const statuses = ['Requested', 'Rider assigned', 'Picked up', 'In transit', 'Delivered']
  return (
    <motion.div className="absolute left-1/2 top-1/2 z-10 -ml-[155px] w-[310px] rounded-[2.6rem] border-[10px] border-foreground bg-foreground p-4 shadow-[0_28px_90px_rgba(15,23,42,.34)] sm:-ml-[175px] sm:w-[350px]" animate={{ y: ['-50%', 'calc(-50% - 14px)', '-50%'] }} transition={{ ...floatLoop, duration: 6.2 }}>
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/18" />
      <div className="rounded-[2rem] bg-[#f8fafc] p-5 text-foreground">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-foreground/45">Ferar live</p>
            <h2 className="font-display text-3xl font-black tracking-[-0.05em]">Bole → Piassa</h2>
          </div>
          <span className="rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-xs font-black text-foreground">24 min</span>
        </div>
        <div className="mt-5 rounded-[1.5rem] bg-foreground p-4 text-white shadow-[0_18px_48px_rgba(15,23,42,.18)]">
          <div className="flex items-center justify-between text-sm font-bold text-white/62"><span>Estimated fare</span><span>ETB</span></div>
          <p className="mt-1 font-display text-4xl font-black tracking-[-0.05em]">Clear before request</p>
        </div>
        <ol className="mt-5 space-y-3">
          {statuses.map((status, index) => (
            <motion.li key={status} className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]" initial={{ opacity: 0.45 }} animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.8, delay: index * 0.25, repeat: Infinity }}>
              <span className={`h-3 w-3 rounded-full ${index < 3 ? 'bg-[color:var(--color-primary)]' : 'bg-foreground/16'}`} />
              <span className="text-sm font-black text-foreground/72">{status}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.div>
  )
}

function OrbitCards() {
  return (
    <>
      <motion.div className="absolute right-4 top-12 w-40 rounded-[1.6rem] border border-white/14 bg-white/84 p-4 shadow-[0_20px_48px_rgba(15,23,42,0.16)] backdrop-blur" animate={{ y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] }} transition={{ ...floatSlow, duration: 7 }}>
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-foreground/45">Status</p>
        <p className="mt-1 font-display text-2xl font-black tracking-[-0.05em]">Live handoff</p>
      </motion.div>
      <motion.div className="absolute right-8 bottom-18 w-52 rounded-[1.6rem] border border-white/14 bg-foreground/92 p-4 text-white shadow-[0_20px_48px_rgba(15,23,42,0.24)] backdrop-blur" animate={{ y: [0, 10, 0], x: [0, -10, 0] }} transition={{ ...floatLoop, duration: 8 }}>
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/48">Payout</p>
        <p className="mt-1 font-display text-2xl font-black tracking-[-0.05em]">Wallet ready</p>
        <p className="mt-2 text-sm font-semibold text-white/60">Earnings, incentives, and payout requests.</p>
      </motion.div>
    </>
  )
}

function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10 px-5 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] border border-foreground/10 bg-white/82 p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-4">
        {proofPoints.map(([title, text], index) => (
          <motion.div
            key={title}
            className="rounded-[1.5rem] border border-transparent p-5 transition duration-300 hover:border-[color:var(--color-primary)]/24 hover:bg-[rgba(250,204,21,0.12)]"
            whileHover={{ y: -5 }}
            style={{ background: index % 2 === 0 ? 'rgba(248,250,252,0.92)' : 'rgba(255,255,255,0.78)' }}
          >
            <p className="font-display text-xl font-black tracking-[-0.04em]">{title}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-foreground/58">{text}</p>
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
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[color:var(--color-primary)]">Two sides of one city route</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">Customers request. Riders fulfill. Ferar keeps both moving.</h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2" id="rider-journey">
          <JourneyCard title="Customer path" intro="Built for anyone sending packages across Addis Ababa with clear estimates and visible progress." items={customerJourney} image="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1100&q=82" />
          <JourneyCard title="Rider path" intro="Built for verified riders who want structured offers, status tools, earnings, and payouts." items={riderJourney} dark image="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1100&q=82" />
        </div>
      </motion.div>
    </section>
  )
}

function JourneyCard({ title, intro, items, image, dark = false }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`relative overflow-hidden rounded-[2.5rem] border ${dark ? 'border-white/10 bg-foreground text-white' : 'border-foreground/10 bg-white text-foreground'} p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] sm:p-8`}
    >
      <div className="absolute inset-x-0 top-0 h-56 opacity-35" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className={`absolute inset-x-0 top-0 h-56 ${dark ? 'bg-gradient-to-b from-foreground/5 via-foreground/28 to-foreground' : 'bg-gradient-to-b from-white/10 via-white/36 to-white'}`} />
      <div className="relative">
        <span className="mb-8 inline-flex rounded-full bg-[color:var(--color-primary)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-foreground shadow-[0_10px_24px_rgba(250,204,21,.24)]">
          {title}
        </span>
        <p className={`max-w-xl font-display text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl ${dark ? 'text-white' : 'text-foreground'}`}>{intro}</p>
        <div className="mt-9 grid gap-3">
          {items.map(([label, text], index) => (
            <motion.div
              key={label}
              className={`grid grid-cols-[3rem_1fr] gap-4 rounded-[1.4rem] border border-transparent p-4 transition duration-300 ${dark ? 'bg-white/8 hover:border-white/10 hover:bg-white/12' : 'bg-[rgba(250,204,21,0.16)] hover:border-[color:var(--color-primary)]/30 hover:bg-[rgba(250,204,21,0.22)]'}`}
              whileHover={{ x: 8 }}
            >
              <span className="font-display text-3xl font-black text-[color:var(--color-primary)]">{index + 1}</span>
              <div>
                <h3 className="font-black">{label}</h3>
                <p className={`mt-1 text-sm font-medium leading-6 ${dark ? 'text-white/62' : 'text-foreground/60'}`}>{text}</p>
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
    <section id="how" className="relative overflow-hidden bg-foreground px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp} className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[color:var(--color-primary)]">Stepped workflow</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">From request to delivered, no mystery in the middle.</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/62">The experience stays customer-facing and accurate: delivery requests, verified riders, estimates, status updates, OTP/PIN proof, earnings, and payouts.</p>
        </motion.div>
        <div className="space-y-4">
          {steps.map(([number, title, text], index) => (
            <motion.article
              key={number}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              className="group grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:grid-cols-[5rem_1fr] sm:p-7"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--color-primary)] font-display text-2xl font-black text-foreground transition group-hover:rotate-6">
                {number}
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/35">Phase {index + 1}</p>
                <h3 className="mt-1 font-display text-3xl font-black tracking-[-0.04em]">{title}</h3>
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
      <motion.div className="relative overflow-hidden rounded-[3rem] border border-foreground/10 bg-white p-6 shadow-[0_24px_90px_rgba(15,23,42,.09)] sm:p-10 lg:p-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgba(250,204,21,0.36)] blur-3xl" />
        <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[rgba(99,102,241,0.08)] blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[color:var(--color-primary)]">Less clutter, stronger signals</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">Designed around the moments people actually need.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Saved addresses', 'Promo and referral support', 'Eligible cancellation before pickup', 'Customer support', 'Vehicle registration', 'Rider online/offline availability', 'Accept or decline offers', 'Wallet and payout history'].map((item) => (
              <motion.div key={item} className="rounded-full border border-foreground/10 bg-[rgba(248,250,252,0.98)] px-5 py-4 text-sm font-black text-foreground/72 shadow-[0_10px_30px_rgba(15,23,42,0.04)]" whileHover={{ backgroundColor: 'rgba(250,204,21,0.2)', color: '#111827', x: 6 }}>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function LaunchPages() {
  return (
    <>
      <PricingPage />
      <RidersPage />
      <CustomersPage />
      <SafetyPage />
      <HelpPage />
      <ContactPage />
    </>
  )
}

function PageShell({ id, eyebrow, title, children, dark = false }) {
  return (
    <section id={id} className={`${dark ? 'bg-foreground text-white' : 'bg-background text-foreground'} px-5 py-24 sm:px-8 lg:py-32`}>
      <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-primary)]'}`}>{eyebrow}</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">{title}</h2>
        </motion.div>
        {children}
      </motion.div>
    </section>
  )
}

function PricingPage() {
  return (
    <PageShell id="pricing" eyebrow="Pricing" title="Clear estimates before a delivery is requested." dark>
      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={fadeUp} className="rounded-[2.5rem] bg-[color:var(--color-primary)] p-8 text-foreground shadow-[0_24px_80px_rgba(250,204,21,.24)]">
          <h3 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.05em]">Fare preview, then confirm.</h3>
          <p className="mt-5 text-lg font-semibold leading-8 text-foreground/65">Customers see an estimated fare and delivery time before submitting. Final launch pricing can reflect route, package, and urgency details.</p>
          <a className="mt-8 inline-flex rounded-full bg-foreground px-7 py-4 font-black text-white shadow-[0_14px_35px_rgba(15,23,42,.16)] transition hover:-translate-y-1" href="mailto:hello@ferar.systems?subject=Delivery estimate">
            Get an estimate
          </a>
        </motion.div>
        <InfoGrid items={pricingFactors} dark />
      </div>
    </PageShell>
  )
}

function RidersPage() {
  return (
    <PageShell id="riders" eyebrow="Riders" title="Apply to deliver with Ferar.">
      <TwoColumnCard
        intro="Ferar is built for verified motorcycle riders who want structured delivery offers, simple status tools, earnings visibility, and payout readiness."
        leftTitle="Rider benefits"
        leftItems={['Flexible delivery work', 'Accept or decline offers', 'Wallet and payout history', 'Support when issues come up']}
        rightTitle="What riders prepare"
        rightItems={['Motorcycle access', 'Valid ID and license', 'Vehicle registration', 'Smartphone and Addis route knowledge']}
        cta="Apply to ride"
        href="mailto:hello@ferar.systems?subject=Rider application"
      />
    </PageShell>
  )
}

function CustomersPage() {
  return (
    <PageShell id="customers" eyebrow="Customers" title="Send documents, parcels, and errands across Addis." dark>
      <TwoColumnCard
        intro="Ferar supports customer and small business deliveries with clear request details, fare estimates, rider updates, and confirmation at arrival."
        leftTitle="Use cases"
        leftItems={['Documents', 'Parcels', 'Small business orders', 'Personal errands']}
        rightTitle="Customer benefits"
        rightItems={['Fast motorcycle delivery', 'Simple request details', 'Visible delivery progress', 'Reliable handoff confirmation']}
        cta="Request delivery"
        href="mailto:hello@ferar.systems?subject=Delivery request"
        dark
      />
    </PageShell>
  )
}

function SafetyPage() {
  return (
    <PageShell id="safety" eyebrow="Safety" title="Trust signals for customers, riders, and recipients.">
      <InfoGrid items={safetyItems} />
    </PageShell>
  )
}

function HelpPage() {
  return (
    <PageShell id="help" eyebrow="Help" title="Support for delivery, rider, and business questions." dark>
      <motion.div variants={fadeUp} className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <p className="max-w-3xl text-lg font-semibold leading-8 text-white/64">Find quick launch answers on the dedicated FAQ page, or contact Ferar support with your route, role, or question.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex rounded-full bg-[color:var(--color-primary)] px-7 py-4 font-black text-foreground shadow-[0_14px_35px_rgba(250,204,21,.18)] transition hover:-translate-y-1" href="/faq">
            Open FAQ
          </a>
          <a className="inline-flex rounded-full border border-white/15 bg-white px-7 py-4 font-black text-foreground shadow-sm transition hover:-translate-y-1" href="/contact">
            Contact support
          </a>
        </div>
      </motion.div>
    </PageShell>
  )
}

function ContactContent() {
  return (
    <motion.div variants={fadeUp} className="mt-14 rounded-[2.5rem] border border-foreground/10 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.09)]">
      <div className="grid gap-5 md:grid-cols-2">
        {contactReasons.map(([item, text]) => (
          <div key={item} className="rounded-[1.5rem] bg-[rgba(250,204,21,0.16)] p-5">
            <h3 className="font-display text-2xl font-black tracking-[-0.04em]">{item}</h3>
            <p className="mt-2 font-semibold leading-7 text-foreground/62">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {contactChannels.map(([label, value, href]) => {
          const content = (
            <>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--color-primary)]">{label}</span>
              <span className="mt-2 block font-black text-foreground">{value}</span>
            </>
          )
          return href ? (
            <a key={label} className="rounded-[1.3rem] border border-foreground/10 bg-background p-4 transition hover:-translate-y-1 hover:border-[color:var(--color-primary)]" href={href}>
              {content}
            </a>
          ) : (
            <div key={label} className="rounded-[1.3rem] border border-foreground/10 bg-background p-4">
              {content}
            </div>
          )
        })}
      </div>
      <p className="mt-8 max-w-3xl font-semibold leading-7 text-foreground/62">Launch placeholders are ready to replace with Ferar’s official phone, WhatsApp, address, and social links before public launch.</p>
    </motion.div>
  )
}

function ContactPage() {
  return (
    <PageShell id="contact" eyebrow="Contact" title="Reach Ferar for delivery, rider, or business questions.">
      <ContactContent />
    </PageShell>
  )
}

function StandaloneShell({ eyebrow, title, intro, children, dark = false }) {
  return (
    <AppShell dark={dark}>
      <div className={`min-h-screen overflow-hidden ${dark ? 'text-white' : 'text-foreground'}`}>
        <section className={`relative isolate ${dark ? 'bg-foreground text-white' : 'bg-background text-foreground'}`}>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_60%,#eef2ff_100%)]" />
          <Navigation compact dark={dark} />
          <motion.div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className={`mb-6 inline-flex rounded-full border px-4 py-2 text-sm font-black uppercase tracking-[0.22em] shadow-sm ${dark ? 'border-white/12 bg-white/8 text-white/80' : 'border-foreground/10 bg-white text-[color:var(--color-primary)]'}`}>
              {eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-8xl">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className={`mt-7 max-w-3xl text-lg font-semibold leading-8 sm:text-xl ${dark ? 'text-white/64' : 'text-foreground/62'}`}>
              {intro}
            </motion.p>
          </motion.div>
        </section>
        {children}
        <Footer />
      </div>
    </AppShell>
  )
}

function StandaloneLegalPage({ type }) {
  const isTerms = type === 'terms'
  const items = isTerms ? termsItems : privacyItems
  return (
    <StandaloneShell
      eyebrow={isTerms ? 'Legal' : 'Privacy'}
      title={isTerms ? 'Terms of Service' : 'Privacy Notice'}
      intro={isTerms ? 'Concise launch terms for Ferar customers and verified riders.' : 'How Ferar plans to handle public customer and rider information at launch.'}
    >
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <InfoGrid items={items} dark={false} />
        </motion.div>
      </section>
    </StandaloneShell>
  )
}

function StandaloneFaqPage() {
  return (
    <StandaloneShell eyebrow="FAQ" title="Frequently asked launch questions." intro="Quick public answers for Ferar customers, recipients, and verified riders." dark>
      <section className="bg-foreground px-5 py-24 text-white sm:px-8 lg:py-32">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <InfoGrid items={faqs} dark />
          <motion.a variants={fadeUp} className="mt-10 inline-flex rounded-full bg-[color:var(--color-primary)] px-7 py-4 font-black text-foreground shadow-[0_14px_35px_rgba(250,204,21,.18)] transition hover:-translate-y-1" href="/contact">
            Contact support
          </motion.a>
        </motion.div>
      </section>
    </StandaloneShell>
  )
}

function StandaloneContactPage() {
  return (
    <StandaloneShell eyebrow="Contact" title="Contact Ferar." intro="Support and launch inquiry paths for customers, verified riders, businesses, and general questions.">
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <ContactContent />
        </motion.div>
      </section>
    </StandaloneShell>
  )
}

function TwoColumnCard({ intro, leftTitle, leftItems, rightTitle, rightItems, cta, href, dark = false }) {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <motion.div variants={fadeUp} className={`${dark ? 'text-white/68' : 'text-foreground/62'} text-lg font-semibold leading-8`}>
        <p>{intro}</p>
        <a className={`${dark ? 'bg-[color:var(--color-primary)] text-foreground' : 'bg-foreground text-white'} mt-8 inline-flex rounded-full px-7 py-4 font-black shadow-[0_14px_35px_rgba(15,23,42,.14)] transition hover:-translate-y-1`} href={href}>
          {cta}
        </a>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        <ListBlock title={leftTitle} items={leftItems} dark={dark} />
        <ListBlock title={rightTitle} items={rightItems} dark={dark} />
      </div>
    </div>
  )
}

function ListBlock({ title, items, dark = false }) {
  return (
    <motion.div variants={fadeUp} className={`${dark ? 'bg-white text-foreground' : 'bg-white text-foreground'} rounded-[2.2rem] border border-foreground/10 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]`}>
      <h3 className="font-display text-3xl font-black tracking-[-0.05em]">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-bold text-foreground/70">
            <span className="mt-1 h-3 w-3 rounded-full bg-[color:var(--color-primary)]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function InfoGrid({ items, dark = false }) {
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-2">
      {items.map(([title, text]) => (
        <motion.article key={title} variants={fadeUp} className={`${dark ? 'border border-white/10 bg-white/[0.07] text-white' : 'border border-foreground/10 bg-white text-foreground'} rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]`}>
          <h3 className="font-display text-2xl font-black tracking-[-0.04em]">{title}</h3>
          <p className={`${dark ? 'text-white/64' : 'text-foreground/62'} mt-3 font-semibold leading-7`}>{text}</p>
        </motion.article>
      ))}
    </div>
  )
}

function FinalCTA() {
  return (
    <section id="start" className="px-5 pb-14 sm:px-8">
      <motion.div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-foreground/10 bg-[linear-gradient(135deg,rgba(250,204,21,0.96)_0%,rgba(253,230,138,0.96)_52%,rgba(255,255,255,0.96)_100%)] p-7 text-foreground shadow-[0_28px_80px_rgba(250,204,21,.24)] sm:p-12 lg:p-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-foreground/55">Move with Ferar</p>
            <h2 className="mt-3 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">Request a delivery or apply to ride.</h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-foreground/62">For Addis Ababa customers sending packages and riders ready to fulfill deliveries with clear workflows.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="rounded-full bg-white px-8 py-4 text-center font-black text-foreground shadow-[0_14px_35px_rgba(15,23,42,.12)] transition hover:-translate-y-1" href="mailto:hello@ferar.systems?subject=Delivery request">
              Request delivery
            </a>
            <a className="rounded-full bg-foreground px-8 py-4 text-center font-black text-white shadow-[0_14px_35px_rgba(15,23,42,.16)] transition hover:-translate-y-1" href="mailto:hello@ferar.systems?subject=Rider interest">
              Become a rider
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-foreground/10 px-5 py-10 text-sm font-bold text-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© 2026 Ferar.</p>
      <div className="flex flex-wrap gap-4">
        <a className="hover:text-foreground" href="/contact">Contact</a>
        <a className="hover:text-foreground" href="/faq">FAQ</a>
        <a className="hover:text-foreground" href="/terms">Terms</a>
        <a className="hover:text-foreground" href="/privacy">Privacy</a>
      </div>
    </footer>
  )
}

export default App
