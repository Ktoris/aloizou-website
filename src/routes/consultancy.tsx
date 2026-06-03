import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Consultancy — Antonis Loizou & Associates" },
      {
        name: "description",
        content:
          "Property development consultancy across Cyprus — feasibility studies, viability assessments, cash flow projections, design briefings and project marketing.",
      },
      { property: "og:title", content: "Consultancy — Antonis Loizou & Associates" },
      {
        property: "og:description",
        content:
          "Decades of experience in property development, valuations, taxation, financing and project management — applied to give you sound, actionable development advice.",
      },
    ],
  }),
  component: Consultancy,
});

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "bullets"; intro: string; items: string[] };

type ConsultancySection = {
  id: string;
  label: string;
  title: string;
  content: ContentBlock[];
};

const SECTIONS: ConsultancySection[] = [
  {
    id: "feasibility",
    label: "Feasibility studies",
    title: "Rigorous analysis before a single brick is laid.",
    content: [
      {
        type: "p",
        text: "Our experience in the fields of property development, promotion and sales of property, valuations, taxation, financing and project management provides us with the necessary background for giving advice on property development projects. We use this experience for carrying out feasibility and viability studies for this purpose.",
      },
      {
        type: "p",
        text: "Studies of such a nature are normally governed by the client's brief as to their extent and nature, but they normally include the following:",
      },
      {
        type: "bullets",
        intro: "A typical feasibility study covers:",
        items: [
          "Identification of alternative development schemes on the site",
          "The ascertainment of the feasibility and viability of a project",
          "The risk factor and equity return",
          "The assessment of the required equity capital",
          "The amount, timing and cost of finance required",
          "Cash in/out flow projections",
          "Design briefings and the timing of a development",
          "The marketing of the project",
          "Suggestions on the organisation structure for the management of the project",
        ],
      },
    ],
  },
  {
    id: "design-implementation",
    label: "Design & implementation",
    title: "Market intelligence applied throughout the design stage.",
    content: [
      {
        type: "p",
        text: "After reporting, the office is usually employed throughout the design stage either on a full or part-time basis. Market preferences must be translated into design details and unnecessary costs avoided.",
      },
      {
        type: "p",
        text: "Each type of property has a different market source and what is suitable in one case might not be in another. Keeping a careful watch on the market during the implementation of a project is therefore of the utmost importance.",
      },
    ],
  },
];

function SectionContent({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
      {content.map((block, i) =>
        block.type === "p" ? (
          <p key={i}>{block.text}</p>
        ) : (
          <div key={i}>
            <p className="text-xl font-display leading-snug text-primary">{block.intro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

function Consultancy() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— Consultancy</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Property development consultancy.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Decades of hands-on experience across development, valuations, taxation, financing and
          project management — brought to bear on the decisions that matter most to your project.
        </p>
      </header>

      <nav
        aria-label="Consultancy categories"
        className="container-x mt-16 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-8"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="container-x mt-4 space-y-0">
        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-28 grid gap-14 py-16 md:grid-cols-12 ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="md:col-span-5">
              <div className="eyebrow">— {s.label}</div>
              <h2 className="mt-5 font-display text-3xl leading-tight text-primary md:text-4xl">
                {s.title}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <SectionContent content={s.content} />
            </div>
          </section>
        ))}
      </div>

      <section className="container-x mt-8 mb-8">
        <div className="border border-border bg-secondary p-10 md:p-16">
          <div className="eyebrow">— Engage the firm</div>
          <h2 className="mt-6 max-w-3xl font-display text-3xl text-primary md:text-4xl">
            Discuss your development project with our team.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you are at the land-acquisition stage or mid-development, we scope the
            instruction before work begins and tailor our advice to your specific brief.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}