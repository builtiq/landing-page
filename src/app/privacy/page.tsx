import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BUILTIQ',
  description: 'How BUILTIQ collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium mb-10 text-[var(--bq-teal-800)] hover:opacity-70 transition-opacity"
        >
          ← Back to BUILTIQ
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-[var(--bq-ink-900)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--bq-ink-500)] mb-12">
          Effective date: 29 May 2026 &nbsp;·&nbsp; Last updated: 29 May 2026
        </p>

        <Section title="1. Who we are">
          <p>
            This website is operated by <strong>BUILTIQ</strong> ("we", "us", "our"). We build intelligent
            building data software. You can reach us at{' '}
            <a href="mailto:info@builtiq.org" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              info@builtiq.org
            </a>
            . BUILTIQ acts as the <strong>data controller</strong> for personal data collected through this
            website.
          </p>
          <p className="mt-3">
            This policy explains what personal data we collect, why we collect it, how we use it, and what
            rights you have under the General Data Protection Regulation (GDPR) and applicable Latvian law.
          </p>
        </Section>

        <Section title="2. What data we collect and why">
          <SubHeading>Contact form</SubHeading>
          <p>
            When you send us a message we collect your <strong>name, email address,</strong> and the content of
            your message. We use this to respond to your enquiry. Legal basis:{' '}
            <em>legitimate interests</em> (Article 6(1)(f) GDPR) — replying to messages you initiate.
          </p>

          <SubHeading>Waitlist / newsletter sign-up</SubHeading>
          <p>
            If you subscribe for product updates we collect your <strong>email address</strong>. We use it only
            to send you the updates you requested. Legal basis: <em>consent</em> (Article 6(1)(a) GDPR). You
            can withdraw consent at any time by clicking unsubscribe in any email we send.
          </p>

          <SubHeading>Analytics</SubHeading>
          <p>
            We use third-party analytics tools to understand how visitors use our site. These may collect your{' '}
            <strong>IP address, browser type, operating system, pages visited, and session duration</strong>. We
            use this data in aggregated, anonymised form to improve the website. Legal basis:{' '}
            <em>legitimate interests</em> (Article 6(1)(f) GDPR) after balancing against your privacy rights. We
            will update this policy with the specific tool used once one is selected.
          </p>

          <SubHeading>Cookies</SubHeading>
          <p>
            We use <strong>strictly necessary cookies</strong> to operate the site (no consent required) and,
            where you agree, <strong>analytics cookies</strong> to measure traffic. You can manage cookie
            preferences through your browser settings at any time. Refusing analytics cookies does not affect
            your ability to use the site.
          </p>
        </Section>

        <Section title="3. How we share your data">
          <p>
            We do not sell your personal data. We may share data with:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Service providers</strong> acting as data processors on our behalf (e.g. hosting, analytics,
              email delivery). They are contractually bound to process data only on our instructions and in
              accordance with GDPR.
            </li>
            <li>
              <strong>Authorities</strong> if required by law or to protect legal rights.
            </li>
          </ul>
          <p className="mt-3">
            Any international transfers outside the EU/EEA are protected by Standard Contractual Clauses or an
            equivalent safeguard.
          </p>
        </Section>

        <Section title="4. How long we keep your data">
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact form messages: up to <strong>2 years</strong> from last contact.</li>
            <li>Waitlist emails: until you unsubscribe or request deletion.</li>
            <li>Analytics data: as determined by the analytics provider's default retention setting.</li>
          </ul>
          <p className="mt-3">
            After these periods data is deleted or anonymised unless a longer retention period is required by law.
          </p>
        </Section>

        <Section title="5. Your rights under GDPR">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Access</strong> — request a copy of your personal data.</li>
            <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
            <li><strong>Erasure</strong> — ask us to delete your data ("right to be forgotten").</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
            <li><strong>Restriction</strong> — ask us to pause processing in certain circumstances.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
            <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time.</li>
          </ul>
          <p className="mt-3">
            To exercise any right email us at{' '}
            <a href="mailto:info@builtiq.org" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              info@builtiq.org
            </a>
            . We will respond within 30 days. If you are not satisfied with our response you have the right to
            lodge a complaint with the{' '}
            <strong>Latvian Data State Inspectorate (Datu valsts inspekcija)</strong> at{' '}
            <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              www.dvi.gov.lv
            </a>
            .
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            We take reasonable technical and organisational measures to protect your personal data against
            unauthorised access, loss, or disclosure. No method of transmission over the internet is completely
            secure, however, so we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Changes to this policy">
          <p>
            We may update this policy as our services evolve or legal requirements change. The "Last updated"
            date at the top will reflect any changes. For material changes we will notify you by email if we
            hold your contact details.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            For any privacy-related questions contact us at{' '}
            <a href="mailto:info@builtiq.org" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              info@builtiq.org
            </a>
            .
          </p>
        </Section>

        <div className="mt-16 pt-8 border-t border-[var(--bq-line)] flex justify-between items-center text-xs text-[var(--bq-ink-400)]">
          <span>© 2026 BUILTIQ</span>
          <Link href="/terms" className="hover:text-[var(--bq-teal-800)] transition-colors">
            Terms of Service →
          </Link>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-[var(--bq-teal-800)] mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-[var(--bq-ink-700)] leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold text-[var(--bq-ink-800)] mt-4 mb-1 text-[15px]">
      {children}
    </h3>
  );
}
