import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import portrait from "@/assets/about-portrait.webp";
import detail from "@/assets/cyprus_hero.webp";
import antonisloizou from "@/assets/antonisloizou.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antonis Loizou & Associates — Chartered Surveyors, Cyprus" },
      {
        name: "description",
        content:
          "Chartered Surveyors established 1980. Over 42 years in the Cyprus property market: valuations, project management, property administration and town planning.",
      },
      { property: "og:title", content: "Antonis Loizou & Associates — Chartered Surveyors" },
      { property: "og:description", content: "Where quality of services counts, we are streets ahead." },
      { property: "og:image", content: detail },
      { property: "twitter:image", content: detail },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  { n: "01", t: "Valuations", d: "Independent valuations of every property type and interest, prepared to RICS Red Book standards." },
  { n: "02", t: "Project Management", d: "End-to-end direction of development from feasibility through delivery and handover." },
  { n: "03", t: "Town Planning", d: "Applications, appeals and strategic advice across all districts of the Republic." },
  { n: "04", t: "Estate Agency", d: "Curated promotion of prime residential, commercial and investment assets." },
  { n: "05", t: "Administration", d: "Long-term stewardship of estates, leases and complex property portfolios." },
  { n: "06", t: "Building Surveys", d: "Technical condition reports and dilapidations for buyers, lenders and trustees." },
];

function MagneticChar({ char, index }: { char: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 28, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 80, damping: 28, mass: 0.8 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = 220;

      if (dist < radius && dist > 0) {
        const t = 1 - dist / radius;
        const f = t * t * 5;
        x.set((dx / dist) * f);
        y.set((dy / dist) * f);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block", willChange: "transform" }}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.25 + index * 0.02, ease: EASE }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function HeadlineLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.05em]">
      <motion.span
        className="block w-full"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {text.split("").map((c, i) => (
          <MagneticChar key={i} char={c} index={i} />
        ))}
      </motion.span>
    </span>
  );
}

function Rule({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="h-px w-full origin-left"
      style={{ backgroundColor: "var(--border)" }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    />
  );
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const tx = useTransform(mx, [0, 1], [-8, 8]);
  const ty = useTransform(my, [0, 1], [-8, 8]);
  const sx = useSpring(tx, { stiffness: 60, damping: 20 });
  const sy = useSpring(ty, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <>
      {/* Slogan Hero Section Layout */}
      <section className="relative overflow-hidden bg-background px-8 pt-24 pb-4">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ x: sx, y: sy }}
        >
          <div className="absolute inset-x-8 top-0 h-full opacity-[0.07]">
            <div className="grid h-full grid-cols-12 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-l" style={{ borderColor: "var(--primary)" }} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mx-auto relative grid max-w-[1400px] grid-cols-12 gap-6">
          <div className="col-span-12 mb-12 flex items-center justify-center md:justify-start gap-4 md:col-span-8">
            <motion.span
              className="block h-px w-12 origin-center md:origin-left"
              style={{ backgroundColor: "var(--gold)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            />
            <FadeUp delay={0.2}>
              <span className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)]">
                Est. 1980 · Nicosia
              </span>
            </FadeUp>
          </div>

          <h1
            className="col-span-12 font-display font-medium tracking-[-0.035em] text-[clamp(3.2rem,8.5vw,9rem)] leading-[0.90] text-center md:text-left"
            style={{ color: "var(--primary)" }}
          >
            <HeadlineLine text="Where quality" delay={0.15} />
            <HeadlineLine text="of service counts," delay={0.25} />
            <span className="block italic" style={{ color: "var(--gold)" }}>
              <HeadlineLine text="we are streets ahead." delay={0.35} />
            </span>
          </h1>
        </div>
      </section>

      {/* Animated Metrics Bento Grid Layout */}
      <section className="mx-auto max-w-[1400px] px-8 py-16">
        <Rule delay={0.5} />
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { n: "42+", l: "Years in the market", k: "01" },
            { n: "150+", l: "Articles (Greek & English)", k: "02" },
            { n: "№ 1", l: "Estate Agent, Cyprus", k: "03" },
            { n: "FRICS", l: "Chartered Standing", k: "04" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 + i * 0.08, ease: EASE }}
              className="group relative flex flex-col items-center text-center px-4 py-8 md:items-start md:text-left md:px-8 first:md:pl-0 last:md:pr-0 border-b border-r md:border-b-0 md:last:border-r-0 border-border"
            >
              <div className="mb-6 text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)]">
                {s.k}
              </div>
              <div className="font-display text-4xl tracking-tight transition-[font-style] duration-500 group-hover:italic text-primary sm:text-5xl md:text-7xl">
                {s.n}
              </div>
              <div className="mt-4 text-[11px] tracking-[0.22em] uppercase opacity-60">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
        <Rule delay={0.8} />
      </section>

      {/* The Firm Editorial Info Section */}
      <section className="container-x mt-12 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">— The Firm</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">
            A practice that has helped shape modern Cyprus property.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Antonis Loizou &amp; Associates E.P.E. is a professional firm of Chartered Surveyors set up in
            1980. Over four decades it has established itself as the largest and most comprehensive
            practice of its kind in Cyprus and the Eastern Mediterranean.
          </p>
          <p>
            We work alongside private owners, family offices, developers, banks, the EU and the World
            Bank — providing a full range of property services, available separately or in combination
            to cover each client's particular needs.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)]">
            Read about the firm →
          </Link>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="container-x mt-32">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <div className="eyebrow">— Practice Areas</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Our Practice Areas</h2>
          </div>
          <Link to="/services" className="hidden text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)] md:inline">All Services →</Link>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.n} className="group bg-background p-8 transition-colors hover:bg-secondary md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl text-[color:var(--gold-deep)]">{s.n}</span>
                <span className="h-px w-8 bg-border group-hover:bg-[color:var(--gold)]" />
              </div>
              <h3 className="mt-8 font-display text-2xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="container-x mt-28">
        <div className="border border-border bg-secondary p-10 md:p-16">
          <div className="eyebrow">— At a glance</div>
          <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">
            RICS-aligned, Cyprus-based, and institution-trusted.
          </h2>
          <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            <li>Fellow of the RICS and registered firm with ETEK.</li>
            <li>Project Management.</li>
            <li>Property Administration / Property Management.</li>
            <li>Town Planning Services (through associate office ALA Planning Partnership).</li>
            <li>Valuations of real estate (all types of property and the interests therein).</li>
            <li>Estate agency, promotion and building surveys.</li>
            <li>
              Education / information service through publication of articles in the local press (Greek
              &amp; English) and correspondence with institutions such as the EU and the World Bank.
            </li>
          </ul>
        </div>
      </section>

      {/* Updated Portrait Section with zoom-expand and removed overflow-hidden containers */}
      <section className="container-x mt-32 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          {/* Removed overflow-hidden to allow zoom-expand to grow */}
          <div className="relative aspect-[3/4] rounded-md">
            <img
              src={portrait}
              alt="Antonis Loizou at the drafting desk"
              loading="lazy"
              width={1080}
              height={1440}
              className="h-full w-full object-cover rounded-md zoom-expand"
            />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-[color:var(--gold)]" aria-hidden />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <div className="eyebrow">— Managing Director</div>
          <blockquote className="mt-6 font-display text-3xl leading-snug text-primary md:text-4xl">
            "Any business plan relies on projections based on reasonable assumptions and data."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <div>
              <div className="font-display text-lg text-primary">Antonis Loizou, FRICS</div>
              <div className="eyebrow">Managing Director</div>

              {/* Removed overflow-hidden, applied zoom-expand layout */}
              <div className="mt-4 h-52 w-52 rounded-md">
                <img
                  src={antonisloizou}
                  alt="Antonis Loizou, FRICS"
                  loading="lazy"
                  width={420}
                  height={420}
                  className="h-full w-full object-cover rounded-md zoom-expand"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyprus Market Section (EXCLUDED EFFECT AS REQUESTED) */}
      <section className="relative mt-32 overflow-hidden bg-primary text-primary-foreground">
        <img src={detail} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="container-x relative grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="eyebrow !text-[color:var(--gold)]">— Cyprus Market</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              A market we have followed, written about, and shaped since 1980.
            </h2>
          </div>
          <div className="space-y-6 text-primary-foreground/85 md:pt-4">
            <p>
              Antonis Loizou has authored more than 150 articles in the local Greek and English press,
              and corresponded annually with institutions including the EU and the World Bank.
            </p>
            <Link to="/cyprus" className="inline-flex items-center gap-3 border border-[color:var(--gold)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[color:var(--gold)] transition hover:bg-[color:var(--gold)] hover:text-primary">
              About Cyprus →
            </Link>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="container-x mt-28">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <div className="eyebrow">— Questions &amp; Answers</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Straight answers, in context.</h2>
          </div>
          <Link to="/contact" className="hidden text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)] md:inline">
            Submit a question →
          </Link>
        </div>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              q: "Do you value all property types and interests?",
              a: "Yes — we undertake evaluation and valuation of all kinds of immovable property and the interests therein, for a range of purposes.",
            },
            {
              q: "Do you work with banks and institutions?",
              a: "The firm acts as accredited valuers / property consultants for financing institutions and a wide range of public and private clients.",
            },
            {
              q: "Can I engage multiple services together?",
              a: "Services are available separately or in combination, tailored to precisely suit the client's particular needs.",
            },
          ].map((i) => (
            <div key={i.q} className="group bg-background p-10 transition-colors hover:bg-secondary">
              <div className="font-display text-2xl text-primary">{i.q}</div>
              <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 mb-8 flex flex-col items-start justify-between gap-10 border-t border-border pt-16 md:flex-row md:items-center">
        <div>
          <div className="eyebrow">— Engage the firm</div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-primary md:text-5xl">
            Begin a conversation with the practice.
          </h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]">
          Contact us →
        </Link>
      </section>
    </>
  );
}