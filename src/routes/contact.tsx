import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Antonis Loizou & Associates" },
      { name: "description", content: "Engage Cyprus' most established firm of Chartered Surveyors. Nicosia, Limassol and across the Republic." },
      { property: "og:title", content: "Contact — Antonis Loizou & Associates" },
      { property: "og:description", content: "Speak with the practice — valuations, planning, project management." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— Engage the firm</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Begin a conversation with the practice.
        </h1>
      </header>

      <section className="container-x mt-16 grid gap-16 md:grid-cols-12">
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thank you — the firm will be in touch."); }}
          className="md:col-span-7 space-y-8"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Telephone", type: "tel" },
            { id: "subject", label: "Subject of enquiry", type: "text" },
          ].map((f) => (
            <div key={f.id} className="border-b border-border pb-3 focus-within:border-primary">
              <label htmlFor={f.id} className="eyebrow block">{f.label}</label>
              <input id={f.id} type={f.type} required className="mt-3 w-full bg-transparent text-lg text-primary outline-none placeholder:text-muted-foreground/60" />
            </div>
          ))}
          <div className="border-b border-border pb-3 focus-within:border-primary">
            <label htmlFor="message" className="eyebrow block">Brief</label>
            <textarea id="message" rows={5} className="mt-3 w-full resize-none bg-transparent text-lg text-primary outline-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]">
            Send Enquiry →
          </button>
        </form>

        <aside className="space-y-10 md:col-span-4 md:col-start-9">
          {[
            { t: "Our Headquarters", l: ["Eleftheroupoleos 4, Strovolos 2001, Nicosia, Cyprus"] },
            { t: "Call Us", l: ["(357) 22 496 705", "(357) 22 424 853"] },
            { t: "Fax", l: ["(357) 22 496 704"] },
            { t: "Email", l: ["info@aloizou.com.cy", "antonis.loizou@aloizou.com.cy"] },
            { t: "Professional Standing", l: ["FRICS — Fellow of the Royal Institution of Chartered Surveyors", "Registered Firm with ETEK", "Reg. Estate Agent No 567"] },
          ].map((b) => (
            <div key={b.t}>
              <div className="eyebrow">— {b.t}</div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {b.l.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
}
