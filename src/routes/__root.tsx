import type { ReactNode } from "react";
import { useState, useEffect, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Antonis Loizou & Associates — Chartered Surveyors, Cyprus" },
      { name: "description", content: "Cyprus' most established firm of Chartered Surveyors. 45 years of valuations, project management, town planning and estate agency." },
      { name: "author", content: "Antonis Loizou & Associates E.P.E." },
      { property: "og:title", content: "Antonis Loizou & Associates — Chartered Surveyors, Cyprus" },
      { property: "og:description", content: "Cyprus' most established firm of Chartered Surveyors. Valuations, project management, town planning, estate agency." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Firm" },
  { to: "/services", label: "Services" },
  { to: "/valuations", label: "Valuations" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/management", label: "Management" },
  { to: "/cyprus", label: "Cyprus" },
  { to: "/contact", label: "Contact" },
] as const;

// This is your updated uniform HamburgerIcon
function HamburgerIcon() {
  return (
    <div className="flex h-4 w-6 flex-col justify-between" aria-hidden>
      <span className="h-0.5 w-full bg-primary" />
      <span className="h-0.5 w-full bg-primary" />
      <span className="h-0.5 w-full bg-primary" />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        {/* CHANGED: Swapped md:h-20 out for xl:h-20 */}
        <div className="container-x flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex flex-col leading-none" onClick={close}>
            <span className="font-display text-xl text-primary">Antonis Loizou</span>
            <span className="eyebrow mt-1">& Associates · FRICS</span>
          </Link>

          {/* CHANGED: Desktop navigation is now hidden untl 'xl' screens */}
          <nav className="hidden gap-9 lg:flex" aria-label="Primary navigation">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm tracking-wide text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CHANGED: Hamburger button stays active all the way up until 'xl' screens */}
          <button
            id="mobile-menu-toggle"
            className="block lg:hidden p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Toggle navigation menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className="mobile-drawer-backdrop"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        onClick={close}
        aria-hidden
      />

      {/* Mobile drawer */}
      <nav
        id="mobile-drawer"
        className="mobile-drawer"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-header">
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg text-primary">Antonis Loizou</span>
            <span className="eyebrow mt-1">& Associates · FRICS</span>
          </div>
          <button
            className="mobile-drawer-close"
            onClick={close}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>
        <ul className="mobile-drawer-links">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="mobile-drawer-link"
                activeProps={{ className: "mobile-drawer-link active" }}
                activeOptions={{ exact: n.to === "/" }}
                onClick={close}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <div className="eyebrow text-[color:var(--gold)]">Contact</div>
          <p className="mt-2 text-sm text-muted-foreground">+357 22 433 333</p>
          <p className="text-sm text-muted-foreground">info@aloizou.com.cy</p>
        </div>
      </nav>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Antonis Loizou & Associates E.P.E.</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Chartered Surveyors established 1980. The largest and most comprehensive professional firm
            of its kind in Cyprus and the Eastern Mediterranean.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--gold)]">
            <span className="h-px w-8 bg-[color:var(--gold)]" /> RICS · ETEK · Reg. Estate Agent No 567
          </div>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Practice</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-[color:var(--gold)]">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Nicosia · Limassol</li>
            <li>+357 22 433 333</li>
            <li>info@aloizou.com.cy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Antonis Loizou & Associates E.P.E. All rights reserved.</span>
          <span>Est. 1980 · Nicosia, Cyprus</span>
        </div>
      </div>
    </footer>
  );
}

///AAAAAAA