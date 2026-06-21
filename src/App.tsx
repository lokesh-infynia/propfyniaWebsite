import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileCheck2,
  FileLock2,
  Home,
  Image,
  MapPinned,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Tags,
  UserCheck,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Brand } from "./components/Brand";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import { BUILDING_REPORT_URL, CONTACT_URL, OWNER_PROFILE_URL, WHATSAPP_URL, logoMark } from "./lib/constants";

const ownerFeatures: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Property Vault",
    copy: "Store lease agreements, property photos, furnishing details, parking information, and rent or sale notes in one place.",
    icon: FileLock2,
  },
  {
    title: "Lease Tracker",
    copy: "Track lease expiry and renewal dates so you are reminded before your next rent or sale opportunity.",
    icon: CalendarClock,
  },
  {
    title: "Availability Status",
    copy: "Mark your property as Not Available, Lease Ending Soon, Available for Rent, Considering Sale, or Call Me Later.",
    icon: Tags,
  },
  {
    title: "Wider Agent Reach",
    copy: "When you choose, connect your property opportunity with verified local agents in your area.",
    icon: UserCheck,
  },
  {
    title: "Reusable Photos & Details",
    copy: "Upload photos and property details once and reuse them for ads, WhatsApp sharing, and broker communication.",
    icon: Image,
  },
];

const ownerStatuses = [
  ["Not Available", "Your property is not shared or promoted."],
  ["Lease Ending Soon", "PropFynia may remind you before renewal or vacancy."],
  ["Available for Rent", "Your property can be shared with verified local agents."],
  ["Considering Sale", "Selected agents can be informed about your sale intent."],
  ["Call Me Later", "PropFynia follows up at your preferred time."],
] as const;

const steps = [
  {
    title: "Owner creates or updates property profile.",
    icon: Home,
  },
  {
    title: "Lease documents, photos, flat details, and availability status are stored securely.",
    icon: FileCheck2,
  },
  {
    title: "When lease expiry or owner intent creates an opportunity, PropFynia confirms details through a short assisted conversation.",
    icon: PhoneCall,
  },
  {
    title: "Verified local agents receive structured opportunity information, helping owners get wider reach and agents discover genuine opportunities.",
    icon: Building2,
  },
] as const;

const agentFeatures = [
  "Building-wise owner intent reports",
  "Rent-ready and sale-ready flats",
  "Lease-expiry opportunity signals",
  "Hot, warm, call-later, and already-listed classification",
  "Expected rent and sale price intelligence",
  "Callback-ready owner opportunities",
];

const sampleRows = [
  ["A-1204", "Rent", "3BHK", "Semi-furnished", "₹55,000/month", "Immediate", "Hot"],
  ["B-1802", "Sell", "3BHK", "Furnished", "₹2.4 Cr", "30 days", "Warm"],
  ["C-908", "Call Later", "2BHK", "Not shared", "Not shared", "Sunday callback", "Follow-up"],
  ["D-1101", "Already Listed", "3BHK", "Semi-furnished", "₹58,000/month", "Active", "Listed"],
] as const;

const leadCategories = [
  ["Hot Lead", "Owner is actively ready to rent or sell.", BadgeCheck],
  ["Warm Lead", "Owner is interested but not urgent.", Clock3],
  ["Call Later", "Owner requested follow-up at a specific time.", PhoneCall],
  ["Already Listed", "Owner is already working with another broker.", ClipboardList],
  ["Not Interested", "Owner declined.", CheckCircle2],
  ["Wrong Number", "Invalid or non-owner contact.", MessageCircle],
] as const;

const pricing = [
  {
    name: "Building Report",
    price: "₹1,000",
    copy: "Access one building-wise owner opportunity report.",
    includes: ["Rent and sale intent", "Lead category", "Flat size and furnishing", "Expected price or rent", "Callback status"],
  },
  {
    name: "Area Pack",
    price: "₹4,000",
    copy: "Access up to 5 building reports in one micro-market.",
    includes: [],
  },
  {
    name: "Priority Access",
    price: "Custom",
    copy: "Fresh opportunity alerts, priority building coverage, and recurring reports.",
    includes: [],
  },
] as const;

const trustPoints = [
  "Owners control when property details are shared.",
  "PropFynia does not ask for Aadhaar, PAN, bank details, or documents on calls.",
  "PropFynia does not promise buyers or tenants.",
  "Owners can pause or update availability anytime.",
  "Calls are short, polite, and opportunity-specific.",
  "Property documents and photos are stored for owner convenience and future reuse.",
  "Owners can request human assistance when needed.",
];

const comparisons = [
  ["Owner uploads only when actively listing", "Tracks readiness before listing"],
  ["Photos and documents are scattered", "Property Vault keeps everything together"],
  ["Brokers chase old listings", "Agents get owner intent and lease signals"],
  ["No lease lifecycle tracking", "Lease expiry creates timely reminders"],
  ["Same listing visible everywhere", "Owner-controlled sharing with verified agents"],
  ["Repeated broker calls", "Opportunity-based contact flow"],
] as const;

function App() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-canvas text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8">
          <Brand variant="light" compact />
          <div className="hidden items-center gap-8 text-[15px] font-medium text-body lg:flex">
            <a href="#owners" className="hover:text-ink">Owners</a>
            <a href="#control" className="hover:text-ink">Control</a>
            <a href="#agents" className="hover:text-ink">Agents</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
          </div>
          <a className="btn-primary" href={OWNER_PROFILE_URL}>
            Update Profile <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <Hero />
      <OwnerValue />
      <OwnerControl />
      <HowItWorks />
      <AgentSection />
      <SampleReport />
      <LeadCategories />
      <Pricing />
      <TrustPrivacy />
      <Comparison />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-16 text-ink">
      {/* Atmospheric gradient orbs — pure decoration. */}
      <div className="orb orb-lavender -left-32 -top-24 h-[34rem] w-[34rem]" />
      <div className="orb orb-mint right-[-8rem] top-24 h-[30rem] w-[30rem]" />
      <div className="orb orb-peach bottom-[-10rem] left-1/3 h-[26rem] w-[26rem]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-content items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="badge-pill">Owner-verified property intelligence</span>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            Store your property details once. Activate the right agents when you&apos;re ready to rent or sell.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-body sm:text-lg">
            PropFynia helps apartment owners securely manage lease documents, property photos, and availability status
            while connecting genuine rent and sale opportunities with verified local agents.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={OWNER_PROFILE_URL} className="btn-primary btn-large">
              Update My Property Profile <ArrowRight size={18} />
            </a>
            <a href={BUILDING_REPORT_URL} className="btn-secondary btn-large">
              Request Building Report
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
            No forced broker sharing. No document collection on calls. Owners stay in control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto w-full max-w-lg"
        >
          <div className="relative rounded-2xl border border-hairline bg-surface-card p-6 shadow-soft sm:p-7">
            <div className="flex items-center justify-between border-b border-hairline pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.96px] text-muted">Property Vault</p>
                <p className="mt-2 text-lg font-medium text-ink">A-1204, Lakeview Heights</p>
              </div>
              <img src={logoMark} alt="" className="h-12 w-12 object-contain" />
            </div>
            <div className="mt-6 grid gap-3">
              {[
                ["Lease agreement", "Stored securely"],
                ["Photos & furnishing", "Ready to reuse"],
                ["Availability", "Lease Ending Soon"],
                ["Sharing", "Owner-controlled"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-hairline bg-canvas-soft p-4">
                  <span className="text-sm text-muted">{label}</span>
                  <span className="text-right text-sm font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-hairline bg-surface-strong p-4 text-sm leading-7 text-body">
              Lease-triggered reminder ready. Share with verified local agents only when the owner confirms.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OwnerValue() {
  return (
    <Section
      id="owners"
      title="For Property Owners"
      copy="Keep your property ready, organized, and discoverable only when you choose."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {ownerFeatures.map((feature) => (
          <Card key={feature.title} title={feature.title} copy={feature.copy} icon={feature.icon} />
        ))}
      </div>
    </Section>
  );
}

function OwnerControl() {
  return (
    <Section id="control" dark title="You decide when your property becomes an opportunity.">
      <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-on-dark-soft">
        PropFynia is designed to reduce random broker calls. Owners are contacted only when there is a relevant
        property event or owner-marked opportunity.
      </p>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-dark-elevated">
        <div className="grid grid-cols-[0.85fr_1.15fr] border-b border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-[0.96px] text-on-dark-soft sm:px-6">
          <span>Status</span>
          <span>Meaning</span>
        </div>
        {ownerStatuses.map(([status, meaning]) => (
          <div key={status} className="grid grid-cols-[0.85fr_1.15fr] gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 sm:px-6">
            <strong className="text-sm font-medium text-white sm:text-base">{status}</strong>
            <span className="text-sm leading-6 text-on-dark-soft">{meaning}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how-it-works" title="How PropFynia Works">
      <div className="grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title} title={`Step ${index + 1}`} icon={step.icon}>
            <p className="mt-3 text-sm leading-7 text-body">{step.title}</p>
            <div className="mt-6 font-display text-5xl font-normal text-muted-soft">0{index + 1}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function AgentSection() {
  return (
    <Section id="agents" dark title="For Real Estate Agents">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <h3 className="font-display text-3xl font-normal leading-[1.13] tracking-[-0.02em] text-white sm:text-4xl">
            Know which owners are ready before the market does.
          </h3>
          <p className="mt-6 text-base leading-8 text-on-dark-soft">
            PropFynia gives agents building-wise access to owner-approved or lease-triggered rent and sale
            opportunities. Instead of chasing stale listings, agents can view structured owner intent, expected price or
            rent, flat size, furnishing status, urgency, and callback readiness.
          </p>
          <a href={BUILDING_REPORT_URL} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-[15px] font-medium leading-none text-ink transition hover:bg-on-dark-soft">
            Request Building Report <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {agentFeatures.map((feature) => (
            <div key={feature} className="flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-surface-dark-elevated px-5 py-4 text-[15px] font-medium text-on-dark-soft">
              <MapPinned size={18} className="shrink-0 text-white" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SampleReport() {
  return (
    <Section
      id="sample-report"
      title="Sample Building Opportunity Report"
      copy="A simple view of rent and sale opportunities inside a building."
    >
      <div className="overflow-x-auto rounded-xl border border-hairline bg-surface-card shadow-card">
        <table className="min-w-[820px] w-full border-collapse text-left text-sm">
          <thead className="bg-surface-strong text-ink">
            <tr>
              {["Flat", "Intent", "Size", "Furnishing", "Expected Price/Rent", "Urgency", "Lead Quality"].map((head) => (
                <th key={head} className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.96px] text-muted">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((row) => (
              <tr key={row[0]} className="border-t border-hairline">
                {row.map((cell) => (
                  <td key={`${row[0]}-${cell}`} className="px-4 py-4 text-body">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-sm text-muted">Sample data shown for illustration only.</p>
    </Section>
  );
}

function LeadCategories() {
  return (
    <Section id="lead-categories" title="Lead Categories Agents Understand">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadCategories.map(([title, copy, Icon]) => (
          <Card key={title} title={title} copy={copy} icon={Icon} />
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" dark title="Simple Pricing for Agents">
      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.map((plan, index) => {
          const featured = index === 1;
          return (
            <article
              key={plan.name}
              className={
                featured
                  ? "flex min-h-72 flex-col rounded-xl border border-white/15 bg-surface-card p-8 text-ink"
                  : "flex min-h-72 flex-col rounded-xl border border-white/10 bg-surface-dark-elevated p-8 text-white"
              }
            >
              <WalletCards className={featured ? "mb-5 text-ink" : "mb-5 text-white"} size={24} strokeWidth={1.6} />
              <h3 className={featured ? "text-lg font-medium text-ink" : "text-lg font-medium text-white"}>{plan.name}</h3>
              <p className={featured ? "mt-3 font-display text-4xl font-normal text-ink" : "mt-3 font-display text-4xl font-normal text-white"}>
                {plan.price}
              </p>
              <p className={featured ? "mt-5 flex-1 text-sm leading-7 text-body" : "mt-5 flex-1 text-sm leading-7 text-on-dark-soft"}>
                {plan.copy}
              </p>
              {plan.includes.length > 0 && (
                <ul className={featured ? "mt-5 space-y-2 text-sm leading-6 text-body" : "mt-5 space-y-2 text-sm leading-6 text-on-dark-soft"}>
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className={featured ? "mt-1 shrink-0 text-ink" : "mt-1 shrink-0 text-white"} size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={WHATSAPP_URL}
                className={
                  featured
                    ? "btn-primary mt-7"
                    : "mt-7 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-medium leading-none text-ink transition hover:bg-on-dark-soft"
                }
              >
                Request Pricing on WhatsApp <MessageCircle size={17} />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function TrustPrivacy() {
  return (
    <Section id="privacy" eyebrow="Trust & Privacy" title="Built for owner trust.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point) => (
          <div key={point} className="status-tile min-h-28">
            <ShieldCheck size={19} strokeWidth={1.6} />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-muted">
        AI voice and transcript intelligence supports the backend workflow, helping summarize short assisted
        conversations without making AI the owner&apos;s burden.
      </p>
    </Section>
  );
}

function Comparison() {
  return (
    <Section id="comparison" dark title="Why PropFynia is different">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-dark-elevated">
        <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.04] px-4 py-4 text-xs font-semibold uppercase tracking-[0.96px] text-on-dark-soft sm:px-6">
          <span>Normal Property Portals</span>
          <span>PropFynia</span>
        </div>
        {comparisons.map(([portal, propfynia]) => (
          <div key={portal} className="grid grid-cols-2 gap-4 border-b border-white/10 px-4 py-4 last:border-b-0 sm:px-6">
            <span className="text-sm leading-6 text-on-dark-soft">{portal}</span>
            <span className="text-sm font-medium leading-6 text-white">{propfynia}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad bg-canvas">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-canvas-soft px-5 py-16 shadow-card sm:px-10 lg:px-16">
          <div className="orb orb-sky -right-20 -top-16 h-72 w-72" />
          <div className="orb orb-rose -bottom-20 -left-16 h-72 w-72" />
          <div className="relative">
            <p className="eyebrow text-muted">Ready when you are</p>
            <h2 className="section-title text-ink">Ready to organize your property or discover real opportunities?</h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={OWNER_PROFILE_URL} className="btn-primary btn-large">
                Update My Property Profile <ArrowRight size={18} />
              </a>
              <a href={BUILDING_REPORT_URL} className="btn-secondary btn-large">
                Request Building Report
              </a>
            </div>
            <a href={WHATSAPP_URL} className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-body hover:text-ink">
              <MessageCircle size={18} />
              Send us your society or building name on WhatsApp.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas px-5 py-16 text-body sm:px-12">
      <div className="mx-auto grid max-w-content gap-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Brand variant="light" compact />
          <p className="mt-4 text-sm text-muted">PropFynia by InfyniaLabs</p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-6 text-[15px] font-medium text-body">
            <a href="#owners" className="hover:text-ink">For Owners</a>
            <a href="#agents" className="hover:text-ink">For Agents</a>
            <a href="#privacy" className="hover:text-ink">Privacy</a>
            <a href={CONTACT_URL} className="hover:text-ink">Contact</a>
            <a href={WHATSAPP_URL} className="hover:text-ink">WhatsApp</a>
          </div>
          <p className="max-w-3xl text-xs leading-6 text-muted-soft lg:text-right">
            PropFynia supports owner-controlled property readiness and building opportunity reports. It does not promise
            buyers, tenants, pricing outcomes, or guaranteed transactions.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-0.5 hover:text-white sm:h-auto sm:w-auto sm:px-5"
      aria-label="Contact PropFynia on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="ml-2 hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

export default App;
