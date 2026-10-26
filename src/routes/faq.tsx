import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "FAQ — saraf.cards";
const DESCRIPTION =
  "Answers to common questions about verification and account-security emails sent by saraf.cards, and how businesses use the service.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

type Faq = { q: string; a: string };

const recipientFaqs: Faq[] = [
  {
    q: "What is saraf.cards?",
    a: "saraf.cards is a transactional email service. We deliver one-time passcodes, sign-in verification emails, and account-security notifications on behalf of authorized businesses.",
  },
  {
    q: "Why did I receive an email from saraf.cards?",
    a: "A service you use asked us to send it. The message relates to a verification, sign-in, account, or security action connected to that service — for example, a login code you just requested.",
  },
  {
    q: "I didn't request this code. What should I do?",
    a: "Don't share the code with anyone. You can safely ignore the email. If you receive codes you didn't request repeatedly, consider changing your password with the service provider you use.",
  },
  {
    q: "How can I tell if a message is genuine?",
    a: "A genuine message relates to something you just did, like signing in. It will never ask you to reply with your code, share your password, or install software. If something feels wrong, don't click any links and contact the service directly.",
  },
  {
    q: "Can saraf.cards help me access my account?",
    a: "No. We only deliver messages — we don't hold or manage your account. For login problems or account changes, contact the service provider you use directly.",
  },
  {
    q: "Can I unsubscribe from these emails?",
    a: "These messages are tied to actions on your account, so they can't be switched off like a newsletter. If you no longer use the service, contact your service provider to close your account.",
  },
];

const businessFaqs: Faq[] = [
  {
    q: "What kinds of messages does saraf.cards send?",
    a: "Only transactional messages: one-time passcodes, sign-in and account verification, and security notifications such as password changes or new-device alerts. Marketing email is not permitted.",
  },
  {
    q: "Who can use saraf.cards?",
    a: "The service is available to authorized business customers who need to send essential transactional email to their own users.",
  },
];

function FaqGroup({ title, items, idPrefix }: { title: string; items: Faq[]; idPrefix: string }) {
  return (
    <section aria-labelledby={`${idPrefix}-heading`}>
      <h2 id={`${idPrefix}-heading`} className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-4 rounded-2xl border border-border bg-card px-6 shadow-soft"
      >
        {items.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`${idPrefix}-${i}`}
            className="border-border last:border-b-0"
          >
            <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Quick answers about the messages we deliver and how the service works.
        </p>
      </div>

      <div className="mt-14 space-y-12">
        <FaqGroup title="If you received a message" items={recipientFaqs} idPrefix="recipients" />
        <FaqGroup title="For businesses" items={businessFaqs} idPrefix="business" />
      </div>

    </div>
  );
}
