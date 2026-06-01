import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Clock3,
  Database,
  FileLock2,
  FileText,
  Gauge,
  History,
  Home,
  Image,
  KeyRound,
  LockKeyhole,
  MessageCircle,
  Mic,
  PhoneCall,
  Radar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { Brand } from "./components/Brand";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import { APP_URL, logoMark } from "./lib/constants";

const owners = [
  ["Update property status once", Home],
  ["Reduce repeated broker calls", PhoneCall],
  ["Get indicative society rent and sale range", TrendingUp],
  ["Store lease documents securely", FileLock2],
  ["Save property photos for future listings", Image],
  ["Control who can contact you", ShieldCheck],
  ["Share only with verified local agents", UserCheck],
  ["Keep your flat ready for rent or sale anytime", Clock3],
] as const;

const agents = [
  ["Verified owner intent", BadgeCheck],
  ["Building-wise sell/rent opportunity reports", Building2],
  ["Fresh status updates", Gauge],
  ["Better conversion", TrendingUp],
  ["Less time wasted on uninterested owners", Clock3],
  ["Better owner trust", ShieldCheck],
  ["AI-qualified opportunities", BrainCircuit],
  ["Future paid reports and lead access", WalletCards],
] as const;

const portalFeatures = [
  ["Phone OTP login", KeyRound],
  ["My property dashboard", Home],
  ["Current usage status", CheckCircle2],
  ["Sell/rent preference", TrendingUp],
  ["Lease expiry tracking", Clock3],
  ["Lease document upload", FileText],
  ["Property photo locker", Image],
  ["Indicative market range", BarChart3],
  ["Consent controls", ShieldCheck],
  ["Activity history", History],
] as const;

const trustBadges = [
  "Owner-first",
  "Consent-controlled",
  "Verified agents",
  "Private documents",
  "Secure property media",
  "No public sharing by default",
];

const workflow = [
  "Owner Database",
  "AI Outreach",
  "WhatsApp / SMS / Voice Call",
  "Structured Property Status",
  "Consent Layer",
  "Agent Reports",
];

const steps = [
  {
    title: "Owner receives PropFynia link or AI inquiry",
    copy: "The first interaction can arrive through WhatsApp, SMS or voice, with a clear purpose and simple next action.",
  },
  {
    title: "Owner logs in with phone OTP",
    copy: "Owners view their mapped property without needing a complex account setup.",
  },
  {
    title: "Owner updates status, documents, photos and consent",
    copy: "Property intent, lease details, media and sharing preferences stay in one controlled place.",
  },
  {
    title: "Verified agents access consented reports",
    copy: "Agents later use paid building-wise opportunity intelligence based on owner-approved data.",
  },
];

function App() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-porcelain text-navy-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand variant="dark" compact />
          <div className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">
            <a href="#owners">Owners</a>
            <a href="#agents">Agents</a>
            <a href="#ai-channels">AI Channels</a>
            <a href="#how-it-works">How It Works</a>
          </div>
          <a className="btn-primary" href={APP_URL}>
            Open App <ArrowRight size={17} />
          </a>
        </nav>
      </header>

      <Hero />
      <WhatPropFyniaDoes />
      <Benefits />
      <AIChannels />
      <OwnerPortal />
      <Trust />
      <HowItWorks />
      <FutureAgentPlatform />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-navy-950 pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(217,180,92,0.17),transparent_31%),linear-gradient(135deg,#041120_0%,#071A2E_48%,#0B2742_100%)]" />
      <div className="data-grid absolute inset-0 opacity-45" />
      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow text-gold-400">Owner-controlled property intelligence</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            AI-Powered Property Intelligence for Owners and Agents
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            PropFynia is an AI-enabled property database that connects owners and verified agents through structured,
            consent-aware property intent data, helping owners reach more agents for better deals while reducing blind
            calling and spam.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={APP_URL} className="btn-primary btn-large">
              Open PropFynia App <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary btn-large">
              How It Works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="hero-orbit">
            <div className="hero-core">
              <img src={logoMark} alt="" className="h-20 w-20 object-contain" />
              <span>Property Intelligence Core</span>
            </div>
            <Channel icon={MessageCircle} label="WhatsApp" className="left-2 top-8" />
            <Channel icon={FileText} label="SMS" className="right-2 top-20" />
            <Channel icon={Mic} label="Voice Call" className="bottom-8 left-1/2 -translate-x-1/2" />
            <div className="tower tower-a" />
            <div className="tower tower-b" />
            <div className="tower tower-c" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Channel({ icon: Icon, label, className }: { icon: typeof MessageCircle; label: string; className: string }) {
  return (
    <div className={`channel-pill ${className}`}>
      <Icon size={18} />
      <span>{label}</span>
    </div>
  );
}

function WhatPropFyniaDoes() {
  return (
    <Section
      id="what"
      eyebrow="What PropFynia does"
      title="An intelligently managed property database between owners and agents."
      copy="Owners can update whether their property is self-use, vacant, rented out, under renovation, open to sell, open to rent, or not interested. PropFynia then propagates consented opportunity data to verified agents, giving owners wider market reach and better deal discovery while reducing repeated random broker calls."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Self-use", "Open to rent", "Open to sell", "Not interested"].map((item) => (
          <div key={item} className="status-tile">
            <Sparkles size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <>
      <Section id="owners" dark eyebrow="Benefits for owners" title="Your property. Your data. Your control.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {owners.map(([title, Icon]) => (
            <Card key={title} title={title} icon={Icon} dark />
          ))}
        </div>
      </Section>
      <Section
        id="agents"
        eyebrow="Benefits for property agents"
        title="Cleaner building-wise intelligence without calling every owner."
        copy="Spend less time chasing cold numbers. PropFynia helps agents focus on owners who are actually open to a conversation, saving effort while protecting owner trust."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map(([title, Icon]) => (
            <Card key={title} title={title} icon={Icon} />
          ))}
        </div>
      </Section>
    </>
  );
}

function AIChannels() {
  return (
    <Section
      id="ai-channels"
      dark
      eyebrow="AI data collection channels"
      title="AI-managed data refresh without blind owner calling."
      copy="PropFynia uses AI-driven communication across WhatsApp, SMS and voice calls to collect, verify and refresh property status in a structured way. The system is designed to avoid blindly calling every owner by capturing preferences once, respecting consent, and updating the database intelligently."
    >
      <div className="workflow">
        {workflow.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="workflow-node"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function OwnerPortal() {
  return (
    <Section
      id="portal"
      eyebrow="Owner portal features"
      title="Everything a flat owner needs to keep property information ready."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {portalFeatures.map(([title, Icon]) => (
          <Card key={title} title={title} icon={Icon} />
        ))}
      </div>
    </Section>
  );
}

function Trust() {
  return (
    <Section
      dark
      id="trust"
      eyebrow="Consent and trust"
      title="Built to Reduce Harassment, Not Increase It"
      copy="PropFynia is designed around owner consent and agent efficiency. Owners choose whether their requirement can be shared, how they prefer to be contacted, and how many verified agents may reach out, while agents get cleaner data instead of repeatedly calling every flat owner."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trustBadges.map((badge) => (
          <div key={badge} className="trust-badge">
            <LockKeyhole size={18} />
            {badge}
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Four steps from owner update to verified opportunity reports.">
      <div className="grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title} title={step.title} icon={index === 0 ? Bot : index === 1 ? KeyRound : index === 2 ? Database : Users}>
            <p className="mt-3 text-sm leading-7 text-navy-800/70">{step.copy}</p>
            <div className="mt-6 text-5xl font-semibold text-gold-400/45">0{index + 1}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FutureAgentPlatform() {
  const items = [
    "Paid building reports",
    "Society-wise sell/rent intelligence",
    "Lead freshness score",
    "Owner-approved contact requests",
    "Market trend reports",
    "AI-qualified opportunities",
  ];

  return (
    <Section
      dark
      id="future"
      eyebrow="Future agent platform"
      title="Upcoming paid intelligence for verified local agents."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="future-item">
            <Radar size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad bg-porcelain">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="cta-panel">
          <p className="eyebrow text-gold-600">Start today</p>
          <h2 className="section-title text-navy-950">Start with your property status today.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75">
            Open PropFynia and keep your property information ready whenever you decide to rent, sell or simply track your society market.
          </p>
          <a href={APP_URL} className="btn-primary btn-large mt-8">
            Open PropFynia App <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Brand variant="dark" compact />
          <p className="mt-4 text-sm text-white/60">AI-powered property intelligence</p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-5 text-sm font-medium text-white/75">
            <a href="#owners">Owners</a>
            <a href="#agents">Agents</a>
            <a href="#how-it-works">How It Works</a>
            <a href={APP_URL}>Open App</a>
          </div>
          <p className="max-w-3xl text-xs leading-6 text-white/50 lg:text-right">
            Indicative market information shown on PropFynia is not an official valuation. Actual price or rent may vary by tower, floor, view,
            furnishing, condition, parking and negotiation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
