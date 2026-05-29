import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — BUILTIQ',
  description: 'Terms governing your use of the BUILTIQ website.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--bq-ink-500)] mb-12">
          Effective date: 29 May 2026 &nbsp;·&nbsp; Last updated: 29 May 2026
        </p>

        <Section title="1. Acceptance of terms">
          <p>
            By accessing or using the BUILTIQ website at{' '}
            <strong>builtiq.org</strong> ("the Site"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree, please do not use the Site.
          </p>
          <p className="mt-3">
            These Terms apply to all visitors and users of the Site. They govern your use of the publicly
            accessible marketing website only — separate terms apply to any future BUILTIQ software products or
            services.
          </p>
        </Section>

        <Section title="2. Who we are">
          <p>
            The Site is operated by <strong>BUILTIQ</strong>. You can contact us at{' '}
            <a href="mailto:info@builtiq.org" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              info@builtiq.org
            </a>
            .
          </p>
        </Section>

        <Section title="3. Permitted use">
          <p>You may use the Site for lawful, personal or professional informational purposes only. You must not:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Copy, reproduce, or republish any Site content without our prior written consent.</li>
            <li>Use the Site in any way that is unlawful, harmful, or fraudulent.</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its underlying systems.</li>
            <li>Use automated tools to scrape, crawl, or extract data from the Site at scale.</li>
            <li>Transmit any unsolicited commercial communications via the Site.</li>
          </ul>
        </Section>

        <Section title="4. Intellectual property">
          <p>
            All content on the Site — including text, graphics, logos, images, icons, and software — is the
            property of BUILTIQ or its licensors and is protected by applicable copyright, trademark, and other
            intellectual property laws.
          </p>
          <p className="mt-3">
            Nothing in these Terms grants you any right or licence to use BUILTIQ's intellectual property except
            as expressly permitted here.
          </p>
        </Section>

        <Section title="5. Disclaimer of warranties">
          <p>
            The Site is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties
            of any kind, express or implied, including but not limited to warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>
          <p className="mt-3">
            We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other
            harmful components. We reserve the right to modify or discontinue the Site at any time without notice.
          </p>
        </Section>

        <Section title="6. Limitation of liability">
          <p>
            To the fullest extent permitted by applicable law, BUILTIQ shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill,
            or business interruption — arising out of or in connection with your use of (or inability to use) the
            Site, even if we have been advised of the possibility of such damages.
          </p>
          <p className="mt-3">
            Our total liability for any claim arising from these Terms or your use of the Site shall not exceed
            €100.
          </p>
        </Section>

        <Section title="7. Third-party links">
          <p>
            The Site may contain links to third-party websites. These links are provided for convenience only.
            We have no control over third-party sites and accept no responsibility for their content, privacy
            practices, or availability. Visiting a linked site is at your own risk.
          </p>
        </Section>

        <Section title="8. Privacy">
          <p>
            Your use of the Site is also governed by our{' '}
            <Link href="/privacy" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="9. Governing law and jurisdiction">
          <p>
            These Terms are governed by the laws of the <strong>Republic of Latvia</strong> and, where
            applicable, the law of the European Union. Any disputes arising from these Terms shall be subject
            to the exclusive jurisdiction of the courts of Latvia, unless mandatory consumer protection laws in
            your country of residence provide otherwise.
          </p>
        </Section>

        <Section title="10. Changes to these terms">
          <p>
            We may update these Terms from time to time. The "Last updated" date at the top will reflect any
            changes. Your continued use of the Site after changes are posted constitutes your acceptance of the
            revised Terms. If you do not agree to the revised Terms, stop using the Site.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms? Email us at{' '}
            <a href="mailto:info@builtiq.org" className="text-[var(--bq-teal-800)] underline underline-offset-2">
              info@builtiq.org
            </a>
            .
          </p>
        </Section>

        <div className="mt-16 pt-8 border-t border-[var(--bq-line)] flex justify-between items-center text-xs text-[var(--bq-ink-400)]">
          <span>© 2026 BUILTIQ</span>
          <Link href="/privacy" className="hover:text-[var(--bq-teal-800)] transition-colors">
            Privacy Policy →
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
