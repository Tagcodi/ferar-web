import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const navItems = [
  ['How It Works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['Riders', '#riders'],
  ['Safety', '#safety'],
  ['Help', '#help'],
]

const howSteps = [
  ['Pickup & drop-off', 'Add the sender, recipient, package, and route details in one clear request.'],
  ['Matched with a rider', 'Ferar connects the delivery to an approved motorcycle rider who can complete the job.'],
  ['Track delivery', 'Follow status updates from request through pickup, transit, and arrival.'],
  ['Confirm arrival', 'Complete the handoff with delivery confirmation and support if anything needs attention.'],
]

const priceFactors = [
  ['Distance', 'Longer pickup-to-drop-off routes affect the delivery estimate.'],
  ['Delivery size', 'Package size and handling needs help set the right rider fit.'],
  ['Urgency', 'Priority timing can influence the final estimate when available.'],
  ['Route conditions', 'Traffic, access, and route complexity may change the expected effort.'],
]

const riderBenefits = ['Flexible work', 'Local delivery demand', 'Simple delivery flow', 'Support when issues come up']
const riderRequirements = ['Motorcycle', 'Valid documents', 'Smartphone', 'Knowledge of Addis routes']
const customerUseCases = ['Documents', 'Parcels', 'Small business orders', 'Personal errands']
const customerBenefits = ['Fast motorcycle delivery', 'Simple requests', 'Rider updates', 'Reliable handoff']

const safetyItems = [
  ['Rider onboarding', 'Ferar is built around verified riders with profile, vehicle, and document checks.'],
  ['Delivery tracking', 'Status updates keep customers, riders, and recipients aligned during the trip.'],
  ['Clear delivery details', 'Pickup, drop-off, recipient, and package notes reduce confusion before pickup.'],
  ['Support for issues', 'Help flows give both sides a place to raise problems and resolve handoff questions.'],
  ['Respect for everyone', 'The experience is designed for customers, riders, and recipients to be treated clearly and fairly.'],
]

const faqs = [
  ['What can I send?', 'Documents, parcels, small business orders, and personal items that are safe and allowed. Prohibited items will be restricted before public launch.'],
  ['Where does Ferar operate?', 'Ferar is focused on motorcycle delivery across Addis Ababa. Coverage details will be published at launch.'],
  ['How does pricing work?', 'The estimate depends on distance, package size, urgency, and route conditions. You see it before sending.'],
  ['Can I track my delivery?', 'Yes. Ferar is built around request, rider assignment, pickup, transit, and arrival status updates.'],
  ['What if something goes wrong?', 'Contact support with the delivery details so the team can review the issue and help resolve it.'],
  ['How do I become a rider?', 'Use the rider application CTA and prepare your motorcycle, valid documents, smartphone, and route knowledge.'],
  ['Can businesses use Ferar?', 'Yes. Ferar is designed to support small business deliveries as well as personal requests.'],
]

function App() {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-ink">
      <Header />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Riders />
      <Customers />
      <Safety />
      <Help />
      <Contact />
      <TermsPrivacy />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="Ferar home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink font-display text-xl font-black text-primary shadow-[0_14px_30px_rgba(24,23,20,0.14)]">F</span>
          <span className="font-display text-2xl font-black tracking-[-0.04em]">Ferar</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-extrabold text-ink/75 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="transition hover:text-ink" href={href}>{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a className="hidden rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-black transition hover:border-ink/30 sm:inline-flex" href="#riders">Become a Rider</a>
          <a className="rounded-full bg-ink px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_26px_rgba(24,23,20,0.16)] transition hover:-translate-y-0.5 hover:bg-[#2b2924]" href="#customers">Request Delivery</a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(255,214,10,.36),transparent_32%),linear-gradient(120deg,#ffffff_0%,#ffffff_62%,#fff3aa_62%,#ffd60a_100%)]" />
      <motion.div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:py-28" initial="hidden" animate="visible" variants={stagger}>
        <div>
          <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-ink/70 shadow-sm">Motorcycle delivery for Addis Ababa</motion.p>
          <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-6xl font-black leading-[0.9] tracking-[-0.075em] text-ink sm:text-8xl lg:text-[7.6rem]">Send it across Addis, clearly.</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-ink/75 sm:text-xl">Ferar helps customers request deliveries, see estimates, track rider progress, and confirm arrival — without the back-and-forth.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-primary px-8 py-4 text-center font-black text-ink shadow-[0_18px_42px_rgba(255,214,10,0.34)] transition hover:-translate-y-1 hover:bg-[#ffe45a]" href="#customers">Request Delivery</a>
            <a className="rounded-full border border-ink/15 bg-white px-8 py-4 text-center font-black text-ink shadow-sm transition hover:-translate-y-1 hover:border-ink/30" href="#riders">Become a Rider</a>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="relative min-h-[520px] rounded-[3rem] bg-ink p-6 text-white shadow-[0_30px_90px_rgba(24,23,20,0.18)]">
          <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,214,10,.32),transparent_35%)]" />
          <div className="relative flex h-full flex-col justify-between rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">Live delivery</p>
              <h2 className="mt-3 font-display text-5xl font-black tracking-[-0.06em]">Bole → Piassa</h2>
            </div>
            <div className="space-y-3">
              {['Request created', 'Rider matched', 'Picked up', 'In transit', 'Arrival confirmed'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-black">{index + 1}</span>
                  <span className="font-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function PageSection({ id, eyebrow, title, children, dark = false }) {
  return (
    <section id={id} className={`${dark ? 'bg-ink text-white' : 'bg-[#fffdf7] text-ink'} px-5 py-20 sm:px-8 lg:py-28`}>
      <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? 'text-primary' : 'text-[#8a6b00]'}`}>{eyebrow}</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">{title}</h2>
        </motion.div>
        {children}
      </motion.div>
    </section>
  )
}

function HowItWorks() {
  return (
    <PageSection id="how-it-works" eyebrow="How it works" title="Motorcycle delivery across Addis, made simple.">
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {howSteps.map(([title, text], index) => <StepCard key={title} number={index + 1} title={title} text={text} />)}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a className="rounded-full bg-primary px-7 py-4 text-center font-black text-ink" href="#customers">Request Delivery</a>
        <a className="rounded-full border border-ink/15 bg-white px-7 py-4 text-center font-black text-ink" href="#riders">Want to deliver? Become a Rider</a>
      </div>
    </PageSection>
  )
}

function StepCard({ number, title, text }) {
  return (
    <motion.article variants={fadeUp} className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-[0_18px_55px_rgba(24,23,20,0.06)]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary font-display text-xl font-black text-ink">{number}</span>
      <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.04em]">{title}</h3>
      <p className="mt-3 font-semibold leading-7 text-ink/72">{text}</p>
    </motion.article>
  )
}

function Pricing() {
  return (
    <PageSection id="pricing" eyebrow="Pricing / Estimates" title="Clear delivery estimates before you send." dark>
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div variants={fadeUp} className="rounded-[2.4rem] bg-primary p-8 text-ink">
          <h3 className="font-display text-4xl font-black tracking-[-0.05em]">Get an estimate before confirming.</h3>
          <p className="mt-4 text-lg font-semibold leading-8 text-ink/75">Price depends on distance, delivery size, urgency, and route conditions. The estimate appears before the request is submitted, so there are no hidden surprises.</p>
          <a className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-black text-white" href="#customers">Get an Estimate</a>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {priceFactors.map(([title, text]) => <InfoCard key={title} title={title} text={text} dark />)}
          <InfoCard title="Payment options" text="Payment methods are being prepared for public launch and will be listed here." dark />
          <InfoCard title="No hidden surprises" text="Customers review the delivery estimate before sending the request." dark />
        </div>
      </div>
    </PageSection>
  )
}

function Riders() {
  return (
    <PageSection id="riders" eyebrow="Become a Rider" title="Earn by delivering with Ferar.">
      <SplitLists intro="Ferar gives riders a straightforward way to receive local delivery work, manage status updates, and stay supported while moving around Addis." leftTitle="Benefits" left={riderBenefits} rightTitle="Requirements" right={riderRequirements} cta="Apply to Ride" ctaHref="mailto:hello@ferar.systems?subject=Rider application" />
    </PageSection>
  )
}

function Customers() {
  return (
    <PageSection id="customers" eyebrow="Customers" title="Send items across Addis without the back-and-forth." dark>
      <SplitLists intro="Use Ferar for documents, parcels, business orders, and everyday errands with clear requests, rider updates, and reliable handoff." leftTitle="Use cases" left={customerUseCases} rightTitle="Benefits" right={customerBenefits} cta="Request Delivery" ctaHref="mailto:hello@ferar.systems?subject=Delivery request" dark />
    </PageSection>
  )
}

function SplitLists({ intro, leftTitle, left, rightTitle, right, cta, ctaHref, dark = false }) {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <motion.div variants={fadeUp}>
        <p className={`text-lg font-semibold leading-8 ${dark ? 'text-white/78' : 'text-ink/74'}`}>{intro}</p>
        <a className={`mt-8 inline-flex rounded-full px-7 py-4 font-black ${dark ? 'bg-primary text-ink' : 'bg-ink text-white'}`} href={ctaHref}>{cta}</a>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        <ListBlock title={leftTitle} items={left} dark={dark} />
        <ListBlock title={rightTitle} items={right} dark={dark} />
      </div>
    </div>
  )
}

function ListBlock({ title, items, dark = false }) {
  return (
    <motion.div variants={fadeUp} className={`rounded-[2.2rem] p-6 ${dark ? 'bg-white text-ink' : 'bg-white'} shadow-[0_18px_55px_rgba(24,23,20,0.06)]`}>
      <h3 className="font-display text-3xl font-black tracking-[-0.05em]">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-bold text-ink/75"><span className="mt-1 h-3 w-3 rounded-full bg-primary" />{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function Safety() {
  return (
    <PageSection id="safety" eyebrow="Safety / Trust" title="Built for safer, more reliable deliveries.">
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {safetyItems.map(([title, text]) => <InfoCard key={title} title={title} text={text} />)}
      </div>
    </PageSection>
  )
}

function Help() {
  return (
    <PageSection id="help" eyebrow="Help / FAQ" title="Questions before launch? Start here." dark>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {faqs.map(([question, answer]) => <InfoCard key={question} title={question} text={answer} dark />)}
      </div>
      <a className="mt-10 inline-flex rounded-full bg-primary px-7 py-4 font-black text-ink" href="#contact">Contact Support</a>
    </PageSection>
  )
}

function Contact() {
  const contacts = [
    ['Customer support', 'For delivery questions, tracking issues, and handoff help.'],
    ['Rider applications', 'For becoming a rider and document review questions.'],
    ['Business inquiries', 'For small business delivery support and future partnerships.'],
    ['General questions', 'For launch timing, coverage, and Ferar information.'],
  ]
  return (
    <PageSection id="contact" eyebrow="Contact" title="Reach the right Ferar team.">
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {contacts.map(([title, text]) => <InfoCard key={title} title={title} text={text} />)}
      </div>
      <div className="mt-8 rounded-[2rem] border border-ink/10 bg-white p-6 font-bold leading-8 text-ink/74 shadow-[0_18px_55px_rgba(24,23,20,0.06)]">
        <p>Phone: coming soon · Email: hello@ferar.systems · WhatsApp: coming soon</p>
        <p>Address: Addis Ababa, Ethiopia · Socials: coming soon</p>
      </div>
    </PageSection>
  )
}

function TermsPrivacy() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <PolicyBlock id="terms" title="Terms placeholder" text="Public launch terms will cover delivery requests, rider use, payments, cancellations, prohibited items, support processes, and acceptable use of the Ferar service." />
        <PolicyBlock id="privacy" title="Privacy placeholder" text="Public launch privacy details will explain how Ferar handles contact details, location information, delivery data, account data, support records, and related service communications." />
      </div>
    </section>
  )
}

function PolicyBlock({ id, title, text }) {
  return (
    <article id={id} className="rounded-[2.2rem] bg-[#fff8cf] p-7 text-ink">
      <h2 className="font-display text-4xl font-black tracking-[-0.05em]">{title}</h2>
      <p className="mt-4 font-semibold leading-8 text-ink/74">{text}</p>
    </article>
  )
}

function InfoCard({ title, text, dark = false }) {
  return (
    <motion.article variants={fadeUp} className={`rounded-[2rem] p-6 ${dark ? 'border border-white/12 bg-white/[0.08] text-white' : 'border border-ink/10 bg-white text-ink'} shadow-[0_18px_55px_rgba(24,23,20,0.05)]`}>
      <h3 className="font-display text-2xl font-black tracking-[-0.04em]">{title}</h3>
      <p className={`mt-3 font-semibold leading-7 ${dark ? 'text-white/76' : 'text-ink/72'}`}>{text}</p>
    </motion.article>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm font-bold text-ink/65 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Ferar. On-demand motorcycle delivery in Addis Ababa.</p>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-ink" href="#contact">Contact</a>
          <a className="hover:text-ink" href="#terms">Terms</a>
          <a className="hover:text-ink" href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default App
