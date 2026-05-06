import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const heroBullets = [
  'Fare and time estimates before you request',
  'Verified riders with managed onboarding',
  'Delivery status updates from pickup to completion',
  'ETB wallet, promos, and support built in',
]

const customerBenefits = [
  'Saved addresses',
  'Fare/time estimate',
  'Delivery status tracking',
  'Cancel eligible deliveries before pickup',
  'Promo/referral support',
  'Rating and feedback after delivery',
]

const riderBenefits = [
  'Phone sign-in',
  'Rider profile and city setup',
  'Vehicle registration',
  'Document verification',
  'Online/offline availability',
  'Accept or decline offers',
  'Earnings and payout requests',
  'Incentives',
]

const customerSteps = [
  ['01', 'Sign in with your phone', 'Use OTP-based login to access your customer account.'],
  ['02', 'Add pickup and drop-off details', 'Enter addresses, recipient info, and package size.'],
  ['03', 'Check the estimate', 'Ferar calculates distance, estimated fare, and estimated delivery time in ETB.'],
  ['04', 'Request your delivery', 'Your request enters the delivery workflow and riders can be matched.'],
  ['05', 'Track progress', 'Follow statuses like requested, rider assigned, picked up, in transit, and delivered.'],
  ['06', 'Confirm and rate', 'After completion, rate the delivery, leave feedback, and optionally tip.'],
]

const riderSteps = [
  ['01', 'Create your rider account', 'Sign in by phone and set up your rider profile.'],
  ['02', 'Register your vehicle', 'Add make, model, and plate number.'],
  ['03', 'Upload verification documents', 'Submit ID, driver’s license, vehicle registration, profile photo, and payout account documents.'],
  ['04', 'Wait for approval', 'Your documents are reviewed before approval.'],
  ['05', 'Go online', 'Set availability to online when ready to receive delivery offers.'],
  ['06', 'Accept and complete deliveries', 'Accept offers, update pickup/transit/delivery status, and submit proof such as photo, signature, or PIN where required.'],
  ['07', 'Track earnings and request payouts', 'View wallet balance, delivery earnings, and payout history.'],
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
            <a className="transition hover:text-black" href="#how">How it works</a>
          </div>
          <a className="rounded-full bg-[#ffd60a] px-5 py-3 text-sm font-black text-[#181714] shadow-[0_12px_30px_rgba(255,214,10,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href="#start">
            Request a delivery
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-16">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-[#181714]/10 bg-white/75 px-4 py-2 text-sm font-bold text-[#4d493d] shadow-sm backdrop-blur">
              On-demand motorcycle delivery in Addis Ababa
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-[#181714] sm:text-7xl lg:text-8xl">
              Fast motorcycle delivery across Addis Ababa
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5948] sm:text-xl">
              Request a rider, send your package, and follow every step from pickup to drop-off — powered by Ferar’s delivery and rider network.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-[#ffd60a] px-8 py-4 text-center font-black text-[#181714] shadow-[0_18px_45px_rgba(255,214,10,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href="#customers">
                Request a delivery
              </a>
              <a className="rounded-full border border-[#181714]/15 bg-white/70 px-8 py-4 text-center font-black text-[#181714] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white" href="#riders">
                Become a rider
              </a>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-8 grid gap-3 text-sm font-bold text-[#4d493d] sm:grid-cols-2">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2"><span className="text-[#b28d00]">✓</span>{bullet}</li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="absolute -inset-6 rounded-[3rem] bg-[#ffd60a]/40 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[2.5rem] border border-[#181714]/10 bg-white shadow-[0_32px_90px_rgba(24,23,20,0.14)]">
              <img className="h-[560px] w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85" alt="Motorcycle rider moving through a city street" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181714]/80 via-[#181714]/10 to-transparent" />
              <motion.div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/20 bg-white/95 p-5 text-[#181714] shadow-2xl backdrop-blur md:left-auto md:w-84" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <p className="text-sm font-bold text-[#6b6244]">Delivery status and location updates</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">Pickup → Drop-off</h2>
                    <p className="mt-1 text-sm font-semibold text-[#6b6244]">Clear for customers and riders</p>
                  </div>
                  <span className="rounded-full bg-[#ffd60a] px-4 py-2 text-sm font-black">ETB</span>
                </div>
              </motion.div>
            </figure>
          </motion.div>
        </div>
      </section>

      <AudienceSection
        id="customers"
        eyebrow="For customers and clients"
        title="Send packages without the back-and-forth"
        intro="Ferar helps customers request motorcycle delivery from one address to another. Add pickup and drop-off details, recipient information, and package size, then get an estimated fare before creating the request."
        benefits={customerBenefits}
        cta="Start a delivery request"
        ctaHref="#start"
      />

      <AudienceSection
        id="riders"
        eyebrow="For riders and drivers"
        title="Earn by completing deliveries in your city"
        intro="Ferar gives riders a structured way to receive delivery offers, accept jobs, update delivery progress, and manage earnings. Riders create a profile, register their vehicle, upload verification documents, and go online when ready to work."
        benefits={riderBenefits}
        cta="Apply to ride with Ferar"
        ctaHref="#start"
        flipped
      />

      <section id="how" className="border-y border-[#181714]/10 bg-[#fffdf2] px-6 py-20 text-[#181714] lg:px-8 lg:py-28">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b28d00]">How it works</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Simple steps from request to completion.</h2>
          </motion.div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <StepsList title="Customers" steps={customerSteps} />
            <StepsList title="Riders" steps={riderSteps} />
          </div>
        </motion.div>
      </section>

      <section id="start" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <motion.div className="relative overflow-hidden rounded-[2.5rem] bg-[#ffd60a] p-8 shadow-[0_30px_80px_rgba(255,214,10,0.35)] sm:p-12 lg:p-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/35" />
          <div className="absolute -bottom-24 right-24 size-52 rounded-full bg-white/25" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Move with Ferar</h2>
            <div className="mt-6 grid gap-4 text-lg font-semibold leading-8 text-[#4d493d] sm:grid-cols-2">
              <p>Need to send something across the city?</p>
              <p>Ready to earn with your motorcycle?</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="inline-flex justify-center rounded-full bg-white px-8 py-4 font-black text-[#181714] shadow-[0_14px_35px_rgba(24,23,20,0.12)] transition hover:-translate-y-0.5 hover:bg-[#fff9d8]" href="mailto:hello@ferar.systems?subject=Delivery request">
                Request a delivery
              </a>
              <a className="inline-flex justify-center rounded-full border border-[#181714]/15 bg-[#181714] px-8 py-4 font-black text-white shadow-[0_14px_35px_rgba(24,23,20,0.12)] transition hover:-translate-y-0.5 hover:bg-[#2a281f]" href="mailto:hello@ferar.systems?subject=Rider interest">
                Become a Ferar rider
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#181714]/10 px-6 py-10 text-sm font-semibold text-[#6b6244] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Ferar.</p>
        <p>On-demand motorcycle delivery in Addis Ababa.</p>
      </footer>
    </main>
  )
}

function AudienceSection({ id, eyebrow, title, intro, benefits, cta, ctaHref, flipped = false }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <motion.div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${flipped ? 'lg:[&>*:first-child]:order-2' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b28d00]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#5f5948]">{intro}</p>
          <a className="mt-8 inline-flex rounded-full bg-[#ffd60a] px-7 py-4 font-black text-[#181714] shadow-[0_14px_35px_rgba(255,214,10,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ffdf3d]" href={ctaHref}>
            {cta}
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-[2rem] border border-[#181714]/10 bg-white p-6 shadow-[0_18px_60px_rgba(24,23,20,0.07)]">
          <span className="mb-6 block h-1.5 w-16 rounded-full bg-[#ffd60a]" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl bg-[#fff8cf] px-4 py-3 text-sm font-black text-[#4d493d]">{benefit}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

function StepsList({ title, steps }) {
  return (
    <motion.div variants={fadeUp} className="rounded-[2rem] border border-[#181714]/10 bg-white p-6 shadow-[0_20px_60px_rgba(24,23,20,0.08)]">
      <h3 className="text-3xl font-black tracking-[-0.03em]">{title}</h3>
      <ol className="mt-6 space-y-5">
        {steps.map(([number, stepTitle, text]) => (
          <li key={number} className="grid gap-4 sm:grid-cols-[3.5rem_1fr]">
            <span className="flex size-12 items-center justify-center rounded-full bg-[#ffd60a] text-sm font-black text-[#181714]">{number}</span>
            <div>
              <h4 className="text-xl font-black tracking-tight">{stepTitle}</h4>
              <p className="mt-1 leading-7 text-[#5f5948]">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}

export default App
