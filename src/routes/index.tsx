import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  Fingerprint,
  KeyRound,
  Building2,
  Layers,
  Wallet,
  Lock,
  MailCheck,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/site/HeroIllustration";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "saraf.cards — Secure verification, delivered";
const DESCRIPTION =
  "Transactional email infrastructure that helps authorized businesses deliver one-time passwords, sign-in verification, and account-security notifications quickly and reliably.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: KeyRound,
    title: "OTP delivery",
    body: "Fast, dependable delivery for one-time passcodes.",
  },
  {
    icon: UserCheck,
    title: "Account verification",
    body: "Clear verification emails for sign-in and account actions.",
  },
  {
    icon: BellRing,
    title: "Security notifications",
    body: "Important alerts for account protection and recovery.",
  },
];

const steps = [
  {
    title: "Integrate",
    body: "A business integrates its transactional messaging workflow.",
  },
  {
    title: "Deliver",
    body: "saraf.cards delivers security-critical emails reliably.",
  },
  {
    title: "Receive",
    body: "Customers receive clear verification or account-notification messages.",
  },
];

const securityPoints = [
  {
    icon: Fingerprint,
    title: "Authenticated sending",
    body: "Messages are sent from authenticated infrastructure, so mail providers and recipients can confirm where they came from.",
  },
  {
    icon: ShieldCheck,
    title: "Abuse prevention",
    body: "Sending is limited to authorized business customers, and activity is reviewed to detect and stop misuse.",
  },
  {
    icon: Lock,
    title: "Message integrity",
    body: "Messages stay focused on their purpose — verification and account security — and are delivered over encrypted connections wherever receiving servers support it.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground shadow-soft">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Transactional email infrastructure
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[4.1rem]"
            >
              Secure verification, delivered.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              saraf.cards helps authorized businesses deliver one-time passwords, sign-in
              verification, and account-security notifications quickly and reliably.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 px-6 text-[0.95rem]">
                <Link to="/" hash="purpose">
                  Learn More
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-6 text-[0.95rem]">
                <Link to="/faq">Read the FAQ</Link>
              </Button>
            </div>
          </div>
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section
        id="purpose"
        aria-labelledby="purpose-heading"
        className="border-t border-border bg-surface py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="purpose-heading"
              eyebrow="Purpose"
              title="Built for essential messages"
            >
              Focused on the emails people rely on to access and protect their accounts — nothing
              more.
            </SectionHeading>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={i * 90}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we serve */}
      <section aria-labelledby="serve-heading" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading id="serve-heading" eyebrow="Who we serve" title="Built for financial services">
              Built for organizations where every sign-in and account action needs a dependable message.
            </SectionHeading>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Building2, title: "Banks", body: "Verification codes and security alerts for online and mobile banking." },
              { icon: Layers, title: "Fintech", body: "Sign-in confirmation and account notices for financial platforms and apps." },
              { icon: Wallet, title: "Wallets", body: "One-time passcodes and recovery messages for digital wallet users." },
            ].map((x, i) => (
              <Reveal as="li" key={x.title} delay={i * 90} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <x.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{x.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{x.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        aria-labelledby="how-heading"
        className="border-t border-border py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="how-heading"
              eyebrow="How it works"
              title="Simple infrastructure for secure communication"
            />
          </Reveal>
          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-5 right-5 top-5 hidden h-px bg-border md:block"
            />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 110} className="relative">
                  <span className="relative flex size-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-medium text-foreground shadow-soft">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section aria-labelledby="transparency-heading" className="px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <MailCheck className="size-5" aria-hidden="true" />
              </span>
              <h2
                id="transparency-heading"
                className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
              >
                A clear reason for every message
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                saraf.cards delivers transactional communications on behalf of authorized business
                customers. If you received a message from this domain, it relates to a verification,
                sign-in, account, or security action connected to a service you use.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-6 sm:p-7">
              <div>
                <p className="text-sm font-semibold text-foreground">Didn't expect a message?</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2.5">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    Never share a one-time code with anyone who asks for it.
                  </li>
                  <li className="flex gap-2.5">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    If you didn't request it, you can safely ignore the email.
                  </li>
                  <li className="flex gap-2.5">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    For account questions, contact the service provider you use.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Security */}
      <section
        id="security"
        aria-labelledby="security-heading"
        className="border-t border-border bg-surface py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading id="security-heading" eyebrow="Security" title="Designed for trust">
              Transactional email only works when people can trust it. Our delivery practices are
              built to keep these messages authentic, protected from abuse, and focused on the
              action they relate to.
            </SectionHeading>
          </Reveal>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {securityPoints.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="flex gap-5 p-6 sm:p-7">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
