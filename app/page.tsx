import { TreePine } from "lucide-react";

export default function Home() {
    return (
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
            {/* Soft ambient background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent),transparent_70%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />

            <main className="flex w-full max-w-xl flex-col items-center text-center">
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <TreePine className="size-7 text-primary" strokeWidth={1.5} />
                </div>

                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Willow Springs Neighborhood
                </span>

                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                    Content coming soon
                </h1>

                <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-muted-foreground">
                    We&rsquo;re building the case for why proposed new development in
                    Willow Springs is <strong>too dense</strong>, and how neighbors can
                    make their voices heard. Check back shortly.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                    <a
                        href="mailto:mark@mradlauer.com"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Get in touch
                    </a>
                    <span className="text-sm text-muted-foreground">
                        or email{" "}
                        <a
                            href="mailto:mark@mradlauer.com"
                            className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            mark@mradlauer.com
                        </a>
                    </span>
                </div>
            </main>

            <footer className="absolute inset-x-0 bottom-6 flex justify-center px-6">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} &nbsp; HJR Services
                </p>
            </footer>
        </div>
    );
}
