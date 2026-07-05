import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  Coins,
  FileLock2,
  FolderLock,
  Handshake,
  History,
  Home,
  KeyRound,
  Landmark,
  Mic,
  PhoneCall,
  ReceiptText,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Tags,
  UploadCloud,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Brand } from "./components/Brand";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import {
  AGENT_WHATSAPP_URL,
  APP_URL,
  INFYNIA_LABS_URL,
  WHATSAPP_URL,
  logoMark,
} from "./lib/constants";

// ── For Agents ───────────────────────────────────────────────────────────────
const agentGroups: Array<{
  eyebrow: string;
  title: string;
  copy: string;
  items: Array<{ title: string; copy: string; icon: LucideIcon }>;
}> = [
  {
    eyebrow: "Through the Tenancy",
    title: "The deal closing isn't where you stop.",
    copy: "Most agents hand over the keys and move to the next lead. PropFynia routes things back to you for as long as the tenancy runs — not out of obligation, but because that's what the app is built to do.",
    items: [
      {
        title: "Deal Hub stays open",
        copy: "Rent receipts, the maintenance log, and the move-in checklist don't get archived at signing — they stay live for the life of the tenancy.",
        icon: ReceiptText,
      },
      {
        title: "Disputes come to you",
        copy: "A tenant escalates a maintenance issue, or the owner and tenant disagree on what was agreed — it lands in your Disputes tab, not left for the two of them to sort out alone.",
        icon: Scale,
      },
      {
        title: "Renewal comes back to you",
        copy: "When the lease is up, it isn't a fresh deal for whoever's fastest — it resurfaces as your task: draft the new agreement, message the tenant, mark it handled.",
        icon: RefreshCcw,
      },
      {
        title: "Documentation, always on hand",
        copy: "The agreement, the receipts, every status change — pull up the full history the instant either side needs it, instead of digging through old chats.",
        icon: FolderLock,
      },
    ],
  },
  {
    eyebrow: "Getting Leads",
    title: "Two ways contacts become leads",
    copy: "Upload a list and let Infynia Labs' voice agents do the calling, or log an inquiry the moment it happens.",
    items: [
      {
        title: "Import Society",
        copy: "Drop in an Excel of names, phones, flats and prices — PropFynia turns it into a full society and property inventory in one pass.",
        icon: UploadCloud,
      },
      {
        title: "Submit Leads to Infynia Labs",
        copy: "Upload a phone list of owners or buyers/renters. Our voice agents call every contact — qualified leads land in your Leads tab within 24–48 hours.",
        icon: Mic,
      },
      {
        title: "Log a lead yourself",
        copy: "A walk-in, a call, a referral — tap Log and it's in your pipeline immediately, no upload required.",
        icon: PhoneCall,
      },
    ],
  },
  {
    eyebrow: "Closing a Deal",
    title: "A confirmed close, not a finish line",
    copy: "Society Opportunities gives you the market-rate comparison; the rest of the deal runs through the app end to end — and stays there afterward.",
    items: [
      {
        title: "Token Paid, then Deal Done",
        copy: "Report a token and the flat locks from other agents. Report Deal Done and the owner is notified instantly to confirm.",
        icon: Handshake,
      },
      {
        title: "The flat updates itself",
        copy: "The moment the owner confirms, status, availability and your name as servicing agent are all set automatically.",
        icon: CheckCircle2,
      },
      {
        title: "Both sides held to the same terms",
        copy: "The rent, deposit and dates agreed at signing stay on record — so what either side owes or is owed is never a matter of memory.",
        icon: BadgeCheck,
      },
    ],
  },
  {
    eyebrow: "Getting Paid",
    title: "You keep your commission — we take our share of that",
    copy: "1% from the owner, 1% from the buyer or tenant, adjustable per deal. PropFynia takes an agreed platform share of what you actually collect — never a cut of a deal you haven't closed.",
    items: [
      {
        title: "Pay PropFynia",
        copy: "Platform share on closed deals and any calling charges — each with its own invoice — settled in one place via Razorpay.",
        icon: Banknote,
      },
      {
        title: "Set for your agency, not a flat rate",
        copy: "Your platform share and calling arrangement are set for your agency specifically — not a flat rate applied blind to everyone.",
        icon: Handshake,
      },
    ],
  },
  {
    eyebrow: "Your Team & Your Numbers",
    title: "Bring on support staff — and see what's converting",
    copy: "Invite staff by phone number; they work the same leads and deals you do, with none of the money visible to them.",
    items: [
      {
        title: "Support staff, without the risk",
        copy: "Your team logs in with their own phone. No commission figures, no payments, no banking details — ever.",
        icon: Users,
      },
      {
        title: "Analytics",
        copy: "Which inquiry source converts, closed value by month, and which societies are yielding the most commission.",
        icon: BarChart3,
      },
    ],
  },
];

// ── For Owners ───────────────────────────────────────────────────────────────
const ownerFeatures: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "One card for the whole flat",
    copy: "Tower, floor, flat number and a live status — Rented Out, Vacant for Rent, or Vacant for Sale — always current, never a stale listing.",
    icon: Home,
  },
  {
    title: "List another property yourself",
    copy: "Own more than one flat? Add the next one directly. No admin queue — agents are already vetted, so listing doesn't wait on anyone.",
    icon: Building2,
  },
  {
    title: "Invite your tenant to the app",
    copy: "Record their name and phone once. The next time they log in, they land straight in their own tenant portal.",
    icon: UserCheck,
  },
  {
    title: "Rent, confirmed in one tap",
    copy: "When your tenant marks a month paid, it lands on your home screen for you to Confirm or Dispute — no more chasing screenshots.",
    icon: Banknote,
  },
  {
    title: "Deposit, on the record",
    copy: "Your tenant logs the security deposit; you confirm it once. A shared, timestamped fact instead of two different memories.",
    icon: ShieldCheck,
  },
  {
    title: "Your agent, credited automatically",
    copy: "When your agent closes the deal, their name, agency and RERA number appear on your account — no manual tagging, and they stay reachable for as long as the tenancy runs.",
    icon: BadgeCheck,
  },
  {
    title: "Photo Locker & Document Vault",
    copy: "Private, per-property photo storage and a home for the rental agreement itself — attached to the flat, not a phone's camera roll.",
    icon: FolderLock,
  },
  {
    title: "A record you didn't have to keep",
    copy: "Every status change, tenant update and invite is logged automatically — a quiet activity history for the flat.",
    icon: History,
  },
  {
    title: "One inbox for the whole flat",
    copy: "A rent payment reported, a deposit updated, a deal closed — everything that needs your attention arrives in one place.",
    icon: Bell,
  },
];

// ── For Tenants ──────────────────────────────────────────────────────────────
const tenantFeatures: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Your tenancy, up front",
    copy: "Flat, society, and lease expiry with a countdown once it's approaching — self-declared until your owner verifies it.",
    icon: KeyRound,
  },
  {
    title: "Maintenance, tracked not texted",
    copy: "Report an issue with photos and it goes straight to your owner — Reported to Resolved, not lost in a chat thread.",
    icon: Wrench,
  },
  {
    title: "Rent Ledger",
    copy: "Pay online, or record a payment you made another way — either becomes a confirmable entry your owner can see.",
    icon: Coins,
  },
  {
    title: "Deposit, protected",
    copy: "Log your security deposit once, so there's a dated record of what was paid — useful the day you negotiate move-out.",
    icon: ShieldCheck,
  },
  {
    title: "Lease renewal, in-app",
    copy: "Around 90 days from expiry, PropFynia nudges you to start the conversation. Propose your terms; your owner is notified directly.",
    icon: RefreshCcw,
  },
  {
    title: "See what else is open in your society",
    copy: "Unlock a live list of vacant flats in your own society with expected rent — free, with one tap to say I'm Interested.",
    icon: Tags,
  },
  {
    title: "Lease Documents",
    copy: "Upload your rental agreement once — handy for renewal talks, and for deposit disputes if it ever comes to that.",
    icon: FileLock2,
  },
  {
    title: "An agent who's still reachable",
    copy: "If an agent handled your flat's deal, you'll see who they are — name, agency, RERA number — and they're still the one to call if something needs sorting out.",
    icon: BadgeCheck,
  },
];

const trustPoints = [
  "Owners and tenants sign in with their own phone number — no passwords to manage or leak.",
  "Every property, lease, and payment record is owner-controlled — nothing is shared until the owner confirms it.",
  "Agents are vetted by our team before they ever touch a listing — not an open marketplace anyone can join.",
  "Rent and deposit records are two-sided by design: the tenant reports it, the owner confirms it. Neither side's word alone.",
  "Agent identity — name, agency, RERA number — is shown automatically once a deal closes. No anonymous brokers.",
  "Support staff can work leads and deals without ever seeing commission, payments, or banking details.",
];

const infyniaProducts: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Voice Agents",
    copy: "Sub-400ms voice AI in 8+ languages including Hindi — the same voice agents that call and qualify leads for PropFynia's agents.",
    icon: Mic,
  },
  {
    title: "BeatMyEMI",
    copy: "Loan prepayment and payoff optimization — linked directly from every PropFynia owner's home screen for their home loan.",
    icon: Landmark,
  },
  {
    title: "Agent Infrastructure",
    copy: "The full-stack platform behind it all — speech, LLM inference, voice synthesis, and CRM integration at enterprise scale.",
    icon: Sparkles,
  },
];

function App() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-canvas text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8">
          <Brand variant="light" compact />
          <div className="hidden items-center gap-8 text-[15px] font-medium text-body lg:flex">
            <a href="#agents" className="hover:text-ink">Agents</a>
            <a href="#owners" className="hover:text-ink">Owners</a>
            <a href="#tenants" className="hover:text-ink">Tenants</a>
            <a href="#trust" className="hover:text-ink">Trust</a>
          </div>
          <a className="btn-primary" href={APP_URL}>
            Open the App <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <Hero />
      <RolePicker />
      <AgentsSection />
      <OwnersSection />
      <TenantsSection />
      <InfyniaLabsSection />
      <TrustSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-16 text-ink">
      <div className="orb orb-gold -left-32 -top-24 h-[34rem] w-[34rem]" />
      <div className="orb orb-navy right-[-8rem] top-24 h-[30rem] w-[30rem]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-content items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="badge-pill">Property Agents CRM</span>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-display-tight text-ink sm:text-6xl lg:text-7xl">
            The deal closes. You don't.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-body sm:text-lg">
            PropFynia is the CRM built for property agents — not a generic sales pipeline with real estate labels
            bolted on. Work leads through to close, then stay the agent of record for the life of the tenancy:
            involved when rent's confirmed, when a dispute needs settling, and when the lease comes up for renewal.
            Every document and status change is one tap away, for as long as it matters.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={AGENT_WHATSAPP_URL} className="btn-accent btn-large">
              Request Agent Access <ArrowRight size={18} />
            </a>
            <a href="#owners" className="btn-secondary btn-large">
              I own or rent a home
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
            Agent access is granted by request, after we've vetted you as a genuine agent. Free for the owners and tenants you bring on.
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
                <p className="text-xs font-bold uppercase tracking-label text-muted">Deal Hub</p>
                <p className="mt-2 text-lg font-medium text-ink">B-402, Sunrise Meadows</p>
              </div>
              <img src={logoMark} alt="" className="h-12 w-12 object-contain" />
            </div>
            <div className="mt-6 grid gap-3">
              {[
                ["Lease", "Active · 14 mo remaining"],
                ["Rent receipts", "Jun receipt generated"],
                ["Disputes", "None open"],
                ["Renewal task", "None pending"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-hairline bg-canvas-soft p-4">
                  <span className="text-sm text-muted">{label}</span>
                  <span className="text-right text-sm font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-hairline bg-brand-soft p-4 text-sm leading-7 text-body">
              Still the agent of record, months after signing — nothing handed off after the deal closed.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RolePicker() {
  const roles = [
    {
      key: "agents",
      emoji: "🤝",
      title: "I'm an agent",
      copy: "Work leads, close deals, and stay the point of contact for the life of the tenancy.",
    },
    {
      key: "owners",
      emoji: "🏠",
      title: "I own a property",
      copy: "Track rent, deposits, and documents for every flat you own.",
    },
    {
      key: "tenants",
      emoji: "🔑",
      title: "I rent a home",
      copy: "Pay rent, log maintenance, and manage your lease from one place.",
    },
  ] as const;

  return (
    <section className="section-pad bg-canvas-soft">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {roles.map((role) => (
            <a key={role.key} href={`#${role.key}`} className="role-card">
              <span className="text-3xl">{role.emoji}</span>
              <h3 className="font-display text-xl font-bold text-ink">{role.title}</h3>
              <p className="text-sm leading-6 text-body">{role.copy}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                See what's inside <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <Section id="agents" dark eyebrow="For Agents" title="Vetted agents. Not just closers.">
      <p className="mx-auto -mt-6 mb-14 max-w-2xl text-center text-base leading-8 text-on-dark-soft">
        PropFynia doesn't open agent access to anyone who signs up. We vet every agent for genuine, active real
        estate work before they're onboarded to the platform.
      </p>
      <div className="flex flex-col gap-14">
        {agentGroups.map((group) => (
          <div key={group.eyebrow}>
            <p className="text-xs font-bold uppercase tracking-label text-accent">{group.eyebrow}</p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-[1.15] text-white sm:text-3xl">{group.title}</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-on-dark-soft">{group.copy}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => (
                <Card key={item.title} title={item.title} copy={item.copy} icon={item.icon} dark />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-surface-dark-elevated px-6 py-10 text-center sm:px-12">
        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Request agent access</h3>
        <p className="max-w-xl text-sm leading-7 text-on-dark-soft">
          Tell us your agency name and the city or societies you cover. Our team verifies every request before
          granting access — usually within a couple of business days.
        </p>
        <a href={AGENT_WHATSAPP_URL} className="btn-accent btn-large mt-2">
          Request Agent Access <ArrowRight size={18} />
        </a>
      </div>
    </Section>
  );
}

function OwnersSection() {
  return (
    <Section
      id="owners"
      soft
      eyebrow="For Property Owners"
      title="Run your property without waiting on anyone."
      copy="List a flat, invite your tenant, and confirm the rent that comes in — no agent approval gate at any step."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ownerFeatures.map((feature) => (
          <Card key={feature.title} title={feature.title} copy={feature.copy} icon={feature.icon} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={APP_URL} className="btn-primary btn-large">
          Open PropFynia <ArrowRight size={18} />
        </a>
      </div>
    </Section>
  );
}

function TenantsSection() {
  return (
    <Section
      id="tenants"
      eyebrow="For Tenants"
      title="Your side of the lease, just as visible."
      copy="Pay rent, log a maintenance issue, or start the renewal conversation early — from the flat you're actually living in."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {tenantFeatures.map((feature) => (
          <Card key={feature.title} title={feature.title} copy={feature.copy} icon={feature.icon} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={APP_URL} className="btn-primary btn-large">
          Open PropFynia <ArrowRight size={18} />
        </a>
      </div>
    </Section>
  );
}

function InfyniaLabsSection() {
  return (
    <Section
      id="infynia-labs"
      soft
      eyebrow="Built by Infynia Labs"
      title="The AI infrastructure behind PropFynia, not just a name on the footer."
      copy="PropFynia is one product from Infynia Labs — the same company running production voice AI and financial tooling elsewhere."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {infyniaProducts.map((product) => (
          <Card key={product.title} title={product.title} copy={product.copy} icon={product.icon} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={INFYNIA_LABS_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary btn-large"
        >
          Visit infynialabs.com <ArrowRight size={18} />
        </a>
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <Section id="trust" eyebrow="Trust & Privacy" title="Built so no one has to take the other side's word for it.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point) => (
          <div key={point} className="status-tile min-h-28">
            <ShieldCheck size={19} strokeWidth={1.6} />
            <span>{point}</span>
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
          <div className="orb orb-gold -right-20 -top-16 h-72 w-72" />
          <div className="orb orb-navy -bottom-20 -left-16 h-72 w-72" />
          <div className="relative">
            <p className="eyebrow text-muted">Ready when you are</p>
            <h2 className="section-title text-ink">Ready to stay the agent, not just the closer?</h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={AGENT_WHATSAPP_URL} className="btn-accent btn-large">
                Request Agent Access <ArrowRight size={18} />
              </a>
              <a href={APP_URL} className="btn-primary btn-large">
                Open PropFynia <ArrowRight size={18} />
              </a>
            </div>
            <a href={WHATSAPP_URL} className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-body hover:text-ink">
              <PhoneCall size={17} />
              Or send us your question on WhatsApp.
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
          <p className="mt-4 text-sm text-muted">
            PropFynia by{" "}
            <a href={INFYNIA_LABS_URL} target="_blank" rel="noreferrer" className="font-medium hover:text-ink">
              Infynia Labs
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-6 text-[15px] font-medium text-body">
            <a href="#agents" className="hover:text-ink">For Agents</a>
            <a href="#owners" className="hover:text-ink">For Owners</a>
            <a href="#tenants" className="hover:text-ink">For Tenants</a>
            <a href="#trust" className="hover:text-ink">Trust</a>
            <a href={WHATSAPP_URL} className="hover:text-ink">WhatsApp</a>
          </div>
          <p className="max-w-3xl text-xs leading-6 text-muted-soft lg:text-right">
            Agent access is granted by request only, after we've vetted the agent. Free for the owners and tenants
            an agent brings onto PropFynia.
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
      <PhoneCall size={24} />
      <span className="ml-2 hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

export default App;
