import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Terms — saraf.cards";
const DESCRIPTION =
  "Terms governing the use of saraf.cards transactional email delivery by authorized business customers.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage eyebrow="Terms" title="Terms of service" intro={<p>Last updated October 2026.</p>}>
      <section>
        <h2>The service</h2>
        <p>
          saraf.cards provides infrastructure for delivering transactional emails, including
          one-time passcodes, sign-in verification, and account-security notifications.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          The service may only be used by authorized business customers to send transactional
          messages that recipients expect as part of using that business's service. Marketing,
          unsolicited, deceptive, or harmful messages are not permitted.
        </p>
      </section>
      <section>
        <h2>Enforcement</h2>
        <p>
          We may suspend or end access for any account that misuses the service or puts the
          integrity of transactional email at risk.
        </p>
      </section>
    </LegalPage>
  );
}
