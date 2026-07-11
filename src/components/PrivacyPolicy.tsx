import { Brand } from "./Brand";

const EFFECTIVE_DATE = "11 July 2026";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-body">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl font-display font-semibold tracking-display text-ink">{children}</h2>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mt-2 text-base leading-8 text-body">{children}</li>;
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-hairline bg-surface-card">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8">
          <Brand compact />
          <a href="/" className="text-sm font-medium text-primary hover:text-primary-active">
            ← Back to propfynia.com
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="eyebrow text-muted">Legal</p>
        <h1 className="mt-2 text-4xl font-display font-semibold tracking-display-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Effective {EFFECTIVE_DATE}</p>

        <P>
          PropFynia is a property management platform operated by Infynia Labs
          ("PropFynia", "we", "us") serving property owners, tenants, and
          real-estate agents/dealers across India. This policy explains what
          information we collect through the PropFynia app and website (web,
          Android, and iOS), why we collect it, and the choices you have.
        </P>

        <H2>Information we collect</H2>
        <P>We collect only what each feature actually needs to function:</P>
        <ul className="list-disc pl-6">
          <Li>
            <strong>Phone number.</strong> Used to create and sign in to your
            account via one-time password (OTP). This is the primary way we
            identify you — PropFynia does not use passwords.
          </Li>
          <Li>
            <strong>Name and, for owner/admin accounts, email address.</strong>{" "}
            Used to personalize your account and for communication about your
            properties, tenancies, or deals.
          </Li>
          <Li>
            <strong>Property, lease, and tenancy records.</strong> Flat details,
            rent amounts, lease dates, deposit amounts, and maintenance
            requests you or your counterparty (owner/tenant/agent) enter.
          </Li>
          <Li>
            <strong>Photos and documents.</strong> Property photos, move-in
            and move-out condition photos, maintenance request photos, lease
            agreements, and KYC documents you choose to upload. These files
            may contain identity information such as Aadhaar or PAN numbers
            if you include them in an uploaded document or photo — we store
            these files as you provide them and do not extract or read the
            identity numbers within them.
          </Li>
          <Li>
            <strong>Payment and financial information.</strong> Rent and
            deposit payment records, and — for agents receiving commission
            payouts — bank account details (bank name, account number, IFSC
            code, account holder name). Card and UPI payment details are
            processed directly by our payment partner, Razorpay; PropFynia
            never receives or stores your card number or UPI PIN.
          </Li>
          <Li>
            <strong>Push notification token.</strong> A device-specific token
            used to deliver notifications (e.g. rent payment confirmations,
            new leads, maintenance updates). This token identifies your
            device for notification delivery only.
          </Li>
        </ul>
        <P>
          We do not collect your location, and we do not use advertising or
          analytics SDKs that track you across other apps or websites.
        </P>

        <H2>How we use your information</H2>
        <ul className="list-disc pl-6">
          <Li>To operate core features: tenancy records, rent tracking, maintenance requests, deal management, and document generation.</Li>
          <Li>To verify your identity via OTP and keep your account secure.</Li>
          <Li>To send you notifications relevant to your account (payment confirmations, lease reminders, new leads).</Li>
          <Li>To process payments through Razorpay and pay agent commissions to the bank account you provide.</Li>
          <Li>To comply with legal and accounting obligations (e.g. retaining financial records).</Li>
        </ul>
        <P>We do not sell your personal information, and we do not use it for third-party advertising.</P>

        <H2>Who we share information with</H2>
        <P>We share information only where necessary to provide the service:</P>
        <ul className="list-disc pl-6">
          <Li>
            <strong>Razorpay</strong> (payment processor) — for in-app rent
            and agent payments. Razorpay handles your card/UPI details
            directly under its own privacy policy.
          </Li>
          <Li>
            <strong>Google Firebase / Google Cloud</strong> — our
            infrastructure provider for authentication, data storage, and
            notifications. Firebase processes data on our behalf and does not
            use it for its own purposes.
          </Li>
          <Li>
            <strong>The other party to your tenancy or deal.</strong> An
            owner and their tenant, or an agent and their client, see the
            information relevant to their shared property or deal (e.g. a
            tenant's move-in photos are visible to their owner; a deal's
            contact details are visible to the agent handling it). This is
            core to how the app functions and is limited to what's relevant
            to that relationship.
          </Li>
        </ul>
        <P>We do not share your information with data brokers or advertisers.</P>

        <H2>Data retention and deletion</H2>
        <P>
          You can permanently delete your account at any time from within the
          app (Settings → Delete Account, on every surface — owner, tenant,
          and agent). When you do:
        </P>
        <ul className="list-disc pl-6">
          <Li>Your ability to sign in is disabled immediately.</Li>
          <Li>
            Your name and other personal profile details are permanently
            removed within 30 days.
          </Li>
          <Li>
            Financial and lease records tied to a property (rent history,
            deposit records, agreements) are retained without your personal
            details attached, for legal and accounting reasons — the same
            standard that applies to financial records generally.
          </Li>
        </ul>

        <H2>Security</H2>
        <P>
          All data is encrypted in transit (HTTPS/TLS). Access to your data
          within the app is restricted by account role — for example, an
          agent can only see deals and leads assigned to them, and a tenant
          can only see their own tenancy records.
        </P>

        <H2>Your rights</H2>
        <P>
          You can access and update most of your information directly in the
          app. You can request account deletion at any time as described
          above. If you have questions about your data that the app doesn't
          answer, contact us using the details below.
        </P>

        <H2>Children's privacy</H2>
        <P>
          PropFynia is intended for adults engaging in property transactions
          and is not directed at children under 18. We do not knowingly
          collect information from children.
        </P>

        <H2>Changes to this policy</H2>
        <P>
          We may update this policy as the app evolves. We'll update the
          effective date above when we do. Material changes affecting how we
          handle your data will be communicated in-app.
        </P>

        <H2>Contact us</H2>
        <P>
          For privacy questions or data requests, contact Infynia Labs at{" "}
          <a href="mailto:privacy@propfynia.com" className="text-primary underline">
            privacy@propfynia.com
          </a>
          .
        </P>
      </main>

      <footer className="border-t border-hairline py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Infynia Labs. All rights reserved.
      </footer>
    </div>
  );
}
