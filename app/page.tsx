import {
    ArrowRight,
    CalendarDays,
    Mail,
    MapPin,
    Phone,
    Ruler,
    Signpost,
    TreePine,
} from "lucide-react";

// The three Jefferson County commissioners deciding on Sept 1. All three are
// elected countywide, so every valley resident is a constituent of each.
const COMMISSIONERS = [
    { name: "Rachel Zenzinger", district: "District 1", email: "rzenzing@jeffco.us" },
    { name: "Andy Kerr", district: "District 2", email: "akerr@jeffco.us" },
    { name: "Lesley Dahlkemper", district: "District 3", email: "ldahlkem@jeffco.us" },
];

// A prefilled, on-message note residents can personalize before sending.
const EMAIL_SUBJECT = "Please hold Mountain Village to the Long Range Plan";
const EMAIL_BODY = `Dear Commissioners,

I am a resident of the Willow Springs valley. I am writing to ask that the Mountain Village project be held to the same density standard set out in the county's Long Range Plan: one dwelling unit per acre, which the rest of our valley has met.

Thank you for your consideration.

Sincerely,
[Your name and street address]`;

// RFC 6068: mailto line breaks must be CRLF. A bare %0A (from a lone \n) gets
// stripped by some clients (Outlook, various webmail), collapsing the body onto
// one line. Normalize to \r\n *before* encoding so we emit %0D%0A.
const EMAIL_BODY_ENCODED = encodeURIComponent(EMAIL_BODY.replace(/\r?\n/g, "\r\n"));

const MAILTO_ALL = `mailto:${COMMISSIONERS.map((c) => c.email).join(",")}?subject=${encodeURIComponent(
    EMAIL_SUBJECT,
)}&body=${EMAIL_BODY_ENCODED}`;

export default function Home() {
    return (
        <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* Soft ambient background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_0%,var(--accent),transparent_70%)]"
            />

            {/* ---------- Top banner ---------- */}
            <div className="border-b border-border bg-primary/10">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-2 px-6 py-3 text-center sm:flex-row sm:text-left">
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <Signpost className="size-4 shrink-0 text-primary" strokeWidth={2} />
                        As new information becomes available, we’ll post updates here. Last updated Aug. 15
                    </p>
                </div>
            </div>

            {/* ---------- Hero ---------- */}
            <section className="flex flex-col items-center px-6 pt-16 pb-14 text-center sm:pt-24">
                <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                    Keep Willow Springs average density one home per acre
                </h1>

                <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                    The proposed <strong>Mountain Village</strong> development would be{" "}
                    <strong>1.7 times as dense</strong>{" "}
                    as Jefferson County&rsquo;s Long
                    Range Plan allows in The Valley. We&rsquo;re not against development;
                    we&rsquo;re for development that follows the plan our valley has always
                    been held to.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                    <a
                        href="#take-action"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Here&rsquo;s how to help
                        <ArrowRight className="size-4" strokeWidth={2} />
                    </a>
                    <a
                        href="#lawn-sign"
                        className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                        Request a lawn sign
                    </a>
                </div>
            </section>

            {/* ---------- The numbers ---------- */}
            <section className="px-6 pb-16">
                <div className="mx-auto grid w-full max-w-3xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
                    <div className="flex flex-col items-center bg-card px-6 py-10 text-center">
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            The Long Range Plan allows
                        </span>
                        <span className="mt-3 text-6xl font-semibold leading-none tracking-tight text-foreground tabular-nums">
                            1
                        </span>
                        <span className="mt-3 text-sm font-medium text-muted-foreground">
                            dwelling unit per acre
                        </span>
                    </div>
                    <div className="flex flex-col items-center bg-card px-6 py-10 text-center">
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Mountain Village proposes
                        </span>
                        <span className="mt-3 text-6xl font-semibold leading-none tracking-tight text-destructive tabular-nums">
                            1.7&times;
                        </span>
                        <span className="mt-3 text-sm font-medium text-muted-foreground">
                            that density
                        </span>
                    </div>
                </div>
            </section>

            {/* ---------- Where we stand ---------- */}
            <section className="border-y border-border bg-secondary/40 px-6 py-16">
                <div className="mx-auto w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Where we stand
                    </h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-3">
                        <Point
                            icon={<TreePine className="size-5 text-primary" strokeWidth={1.5} />}
                            title="Not anti-development"
                        >
                            We all live in homes that were once newly built. Thoughtful
                            growth is part of our valley.
                        </Point>
                        <Point
                            icon={<Ruler className="size-5 text-primary" strokeWidth={1.5} />}
                            title="One home per acre"
                        >
                            The county&rsquo;s Long Range Plan calls for one dwelling unit per acre
                            and our valley already meets it. 1,170 homes on 1,418 acres works
                            out to just 0.8 DU/A. This project should meet the same standard.
                        </Point>
                        <Point
                            icon={<Signpost className="size-5 text-primary" strokeWidth={1.5} />}
                            title="Nearly twice as dense"
                        >
                            Mountain Village almost doubles that density. We oppose this plan, but we’d support a less dense one that fits the Plan.
                        </Point>
                    </div>
                </div>
            </section>

            {/* ---------- Why your voice matters ---------- */}
            <section className="px-6 py-16">
                <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card px-8 py-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Why your voice matters
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        On <strong>August 12</strong>, the Planning Commission recommended
                        approval by a 5&ndash;1 vote. The final decision now rests with the
                        elected <strong>Board of County Commissioners</strong>, who can
                        approve the plan, send it back, or scale it down.
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Officials answer to voters, and a real groundswell on density gives
                        a right-sized plan its best chance. If you have an opinion, what
                        you do before <strong>September 1 at 9:00 AM</strong> matters.
                    </p>
                    <a
                        href="#take-action"
                        className="mt-4 inline-flex h-11 items-center justify-center gap-2"
                    >
                        See how you can help
                        <ArrowRight className="size-4" strokeWidth={2} />
                    </a>
                </div>
            </section>

            {/* ---------- What you can do ---------- */}
            <section
                id="take-action"
                className="scroll-mt-8 border-y border-border bg-secondary/40 px-6 py-16"
            >
                <div className="mx-auto w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Here&rsquo;s what you can do
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                        The Board decides on <strong>September 1</strong>. Here&rsquo;s how
                        to weigh in, and every voice adds to the count.
                    </p>

                    <ol className="mt-8 space-y-4">
                        <Step
                            n={1}
                            title="Put a sign on your lawn"
                            cta="Request a sign"
                            href="#lawn-sign"
                        >
                            Show where the valley stands. Signs are free to any Willow
                            Springs resident, and they&rsquo;re the fastest way to make our
                            numbers visible.
                        </Step>

                        <Step
                            n={2}
                            title="Email the commissioners"
                            cta="How to reach them"
                            href="#contact"
                        >
                            A short, personal note to the three elected commissioners
                            carries real weight. We&rsquo;ll show you who they are and what
                            to say.
                        </Step>

                        <Step
                            n={3}
                            variant="meeting"
                            title="Attend the Board of County Commissioners meeting"
                            meta={[
                                {
                                    icon: (
                                        <CalendarDays
                                            className="size-4 shrink-0 text-muted-foreground"
                                            strokeWidth={1.5}
                                        />
                                    ),
                                    text: "Tuesday, September 1 · 9:00 AM",
                                },
                                {
                                    icon: (
                                        <MapPin
                                            className="size-4 shrink-0 text-muted-foreground"
                                            strokeWidth={1.5}
                                        />
                                    ),
                                    text: "Jefferson County Government Center, Golden",
                                },
                            ]}
                        >
                            The commissioners hear the community, then render the final
                            vote. Being there in person makes the strongest impression. We&rsquo;ll update this page
                            with a Zoom link when it&rsquo;s available.
                        </Step>
                    </ol>
                </div>
            </section>

            {/* ---------- Contact the commissioners ---------- */}
            <section id="contact" className="scroll-mt-8 px-6 py-16">
                <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card px-8 py-10">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary">
                        <Mail className="size-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Email the three commissioners
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        All three are elected <strong>countywide</strong>, so they all represent
                        you. A quick, personal note goes a long way. If you reach out,
                        mention that you&rsquo;re concerned the proposed density doesn&rsquo;t
                        match the valley&rsquo;s published plan. Something like:
                    </p>
                    <blockquote className="mt-4 border-l-2 border-primary pl-4 text-base italic leading-relaxed text-foreground">
                        I&rsquo;m not against development, but I&rsquo;d like to see Mountain Village
                        held to the same one-home-per-acre standard as the rest of the valley.
                    </blockquote>

                    <a
                        href={MAILTO_ALL}
                        className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                    >
                        <Mail className="size-4" strokeWidth={2} />
                        Email all three commissioners
                    </a>
                    <p className="mt-2 text-xs text-muted-foreground">
                        A ready-to-send draft opens in your mail app.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {COMMISSIONERS.map((c) => (
                            <a
                                key={c.email}
                                href={`mailto:${c.email}?subject=${encodeURIComponent(
                                    EMAIL_SUBJECT,
                                )}&body=${EMAIL_BODY_ENCODED}`}
                                className="flex flex-col rounded-2xl border border-border bg-secondary/40 px-4 py-3 transition-colors hover:bg-accent"
                            >
                                <span className="text-sm font-semibold text-foreground">
                                    {c.name}
                                </span>
                                <span className="mt-0.5 text-xs text-muted-foreground">
                                    {c.district}
                                </span>
                                <span className="mt-1 break-all text-xs text-primary">
                                    {c.email}
                                </span>
                            </a>
                        ))}
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        You can also call the Board at{" "}
                        <a
                            href="tel:+13032718525"
                            className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            303-271-8525
                        </a>{" "}
                        or write to 100 Jefferson County Parkway, Suite 5550, Golden, CO
                        80419.
                    </p>
                </div>
            </section>

            {/* ---------- Lawn sign ---------- */}
            <LawnSign />

            <footer className="border-t border-border px-6 py-8">
                <p className="text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Willow Springs HOA&nbsp;&middot;&nbsp;Questions?{" "}
                    <a
                        href="mailto:mark@mradlauer.com"
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                        mark@mradlauer.com
                    </a>
                </p>
            </footer>
        </div>
    );
}

function LawnSign() {
    return (
        <>
            <section
                id="lawn-sign"
                className="scroll-mt-8 border-y border-border bg-secondary/40 px-6 py-16"
            >
                <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 rounded-3xl border border-border bg-card px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-md">
                        <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary">
                            <Signpost className="size-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                            Put a sign on your lawn
                        </h2>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                            Show where our community stands. Signs are free to any Willow
                            Springs community member. Contact AMA and we&rsquo;ll give you one.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:w-auto">
                        <a
                            href="tel:+13038507766"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            <Phone className="size-4" strokeWidth={2} />
                            303-850-7766
                        </a>
                        <a
                            href="mailto:admin@AMAcolorado.com"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                        >
                            <Mail className="size-4" strokeWidth={2} />
                            admin@AMAcolorado.com
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}

function Point({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-card">
                {icon}
            </div>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {children}
            </p>
        </div>
    );
}

function Step({
    n,
    title,
    cta,
    href,
    meta,
    eyebrow,
    variant = "default",
    children,
}: {
    n: number;
    title: string;
    cta?: string;
    href?: string;
    meta?: { icon: React.ReactNode; text: string }[];
    eyebrow?: string;
    variant?: "default" | "meeting";
    children: React.ReactNode;
}) {
    const isMeeting = variant === "meeting";
    return (
        <li className="flex items-start gap-5 rounded-3xl border border-border bg-card p-7">
            <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground tabular-nums"
            >
                {n}
            </span>
            <div className="flex-1">
                {eyebrow && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {eyebrow}
                    </span>
                )}
                <h3
                    className={`font-semibold leading-snug text-foreground ${eyebrow ? "mt-3" : ""}`}
                >
                    <span className="sr-only">Step {n}: </span>
                    {title}
                </h3>

                {meta && meta.length > 0 && (
                    <dl className="mt-3 space-y-2 text-sm">
                        {meta.map((m, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-muted-foreground">
                                {m.icon}
                                <dd>{m.text}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                <p
                    className={`text-sm leading-relaxed text-muted-foreground ${isMeeting ? "mt-4 border-t border-border pt-4" : "mt-3"
                        }`}
                >
                    {children}
                </p>

                {cta && href && (
                    <a
                        href={href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                        {cta}
                        <ArrowRight className="size-4" strokeWidth={2} />
                    </a>
                )}
            </div>
        </li>
    );
}
