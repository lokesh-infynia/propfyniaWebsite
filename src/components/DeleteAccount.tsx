import { Brand } from "./Brand";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-body">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl font-display font-semibold tracking-display text-ink">{children}</h2>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mt-2 text-base leading-8 text-body">{children}</li>;
}

export function DeleteAccount() {
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
        <p className="eyebrow text-muted">Account</p>
        <h1 className="mt-2 text-4xl font-display font-semibold tracking-display-tight text-ink sm:text-5xl">
          Delete Your Account
        </h1>

        <P>
          You can permanently delete your PropFynia account and its
          associated personal data at any time, directly from the app — no
          need to contact support. The steps are the same whether you're an
          owner, tenant, or agent, since deletion is tied to your phone
          number, not your role.
        </P>

        <H2>How to delete your account</H2>
        <ol className="list-decimal pl-6">
          <Li>Open the PropFynia app and sign in with your phone number.</Li>
          <Li>
            <strong>Owners:</strong> tap your initials in the top-right
            corner of the home screen to open the account menu, then tap{" "}
            <strong>Delete Account</strong>.
          </Li>
          <Li>
            <strong>Tenants:</strong> from your tenancy home screen, scroll
            to the bottom and tap <strong>Delete Account</strong>.
          </Li>
          <Li>
            <strong>Agents:</strong> open <strong>Settings</strong> from the
            bottom navigation, scroll to the bottom, and tap{" "}
            <strong>Delete Account</strong>.
          </Li>
          <Li>Confirm the deletion when prompted.</Li>
        </ol>

        <H2>What gets deleted</H2>
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

        <H2>Don't have the app installed?</H2>
        <P>
          Account creation on PropFynia only happens through the app itself
          via phone-number verification, so account deletion is only
          available the same way. If you no longer have the app installed,
          reinstall it, sign in with the same phone number, and follow the
          steps above — no data is preserved on our side that would let you
          delete an account without signing in first, since we authenticate
          every deletion request against the verified phone number it
          belongs to.
        </P>
        <P>
          If you're unable to sign in for any reason and need your data
          deleted, contact us at{" "}
          <a href="mailto:privacy@propfynia.com" className="text-primary underline">
            privacy@propfynia.com
          </a>{" "}
          from the email or number associated with your account and we'll
          process the request manually.
        </P>
      </main>

      <footer className="border-t border-hairline py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Infynia Labs. All rights reserved.
      </footer>
    </div>
  );
}
