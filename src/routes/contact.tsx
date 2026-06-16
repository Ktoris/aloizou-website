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

      {/* CHANGED: mt-16 to mt-28 to drop the content cards lower down from the header */}
      <section className="container-x mt-28 mb-24 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Address Card */}
        <div className="border border-border bg-secondary/30 p-8 transition-colors hover:border-primary/30">
          <div className="flex items-center gap-3">
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--gold-deep)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <div className="eyebrow text-[color:var(--gold-deep)]">Our Headquarters</div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Eleftheroupoleos 4, Strovolos 2001,
            <br />
            Nicosia, Cyprus
          </p>
        </div>

        {/* Call Card */}
        <div className="border border-border bg-secondary/30 p-8 transition-colors hover:border-primary/30">
          <div className="flex items-center gap-3">
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--gold-deep)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-1.27.387-1.55l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.75Z" />
            </svg>
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <div className="eyebrow text-[color:var(--gold-deep)]">Call Us</div>
          </div>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li><a href="tel:+35722496705" className="transition-colors hover:text-primary">(357) 22 496 705</a></li>
            <li><a href="tel:+35722424853" className="transition-colors hover:text-primary">(357) 22 424 853</a></li>
          </ul>
        </div>

        {/* Fax Card */}
        <div className="border border-border bg-secondary/30 p-8 transition-colors hover:border-primary/30">
          <div className="flex items-center gap-3">
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--gold-deep)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096a42.42 42.42 0 0 0-10.56 0m10.56 0L17.66 18m0 0a.75.75 0 0 1-.75.75H7.09a.75.75 0 0 1-.75-.75m11.32 0a2.18 2.18 0 0 0 .75-1.661V14m-12.82 2.339c-.058-.087-.1-.182-.126-.282L2.75 12.25c-.172-.65.29-1.25.962-1.25h16.576c.673 0 1.134.6.962 1.25l-1.394 5.282c-.025.1-.068.195-.126.282m-16.576-6.5h16.576M6.25 7.25h11.5M7.25 3.75h9.5" />
            </svg>
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <div className="eyebrow text-[color:var(--gold-deep)]">Fax</div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            (357) 22 496 704
          </p>
        </div>

        {/* Email Card */}
        <div className="border border-border bg-secondary/30 p-8 transition-colors hover:border-primary/30 lg:col-span-1">
          <div className="flex items-center gap-3">
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--gold-deep)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <div className="eyebrow text-[color:var(--gold-deep)]">Email</div>
          </div>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground break-all">
            <li><a href="mailto:info@aloizou.com.cy" className="transition-colors hover:text-primary">info@aloizou.com.cy</a></li>
            <li><a href="mailto:antonis.loizou@aloizou.com.cy" className="transition-colors hover:text-primary">antonis.loizou@aloizou.com.cy</a></li>
          </ul>
        </div>

        {/* Professional Credentials Card */}
        <div className="border border-border bg-secondary/30 p-8 transition-colors hover:border-primary/30 md:col-span-2">
          <div className="flex items-center gap-3">
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--gold-deep)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.5 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 10.5c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0113.5 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            {/* CHANGED: text-primary to text-[color:var(--gold-deep)] */}
            <div className="eyebrow text-[color:var(--gold-deep)]">Professional Standing</div>
          </div>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>FRICS — Fellow of the Royal Institution of Chartered Surveyors</li>
            <li>Registered Firm with ETEK</li>
            <li>Reg. Estate Agent No 567</li>
          </ul>
        </div>
      </section>
    </>
  );
}