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
                        As new information becomes available, we’ll post updates here. Check back often.
                    </p>
                </div>
            </div>

            {/* ---------- Hero ---------- */}
            <section className="flex flex-col items-center px-6 pt-16 pb-14 text-center sm:pt-24">
                <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                    Keep Willow Springs at one home per acre
                </h1>

                <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                    The proposed <strong>Mountain Village</strong> development would be
                    <strong> twice as dense</strong> &nbsp; as Jefferson County&rsquo;s Long
                    Range Plan specifies in The Valley.

                    We&rsquo;re not against development;
                    we&rsquo;re for development that follows the plan our valley has always
                    been held to.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                    <a
                        href="#meetings"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        See upcoming meetings
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
                            2&times;
                        </span>
                        <span className="mt-3 text-sm font-medium text-muted-foreground">
                            that density
                        </span>
                    </div>
                </div>
            </section>

            {/* ---------- Where we stand ---------- */}
            <section className="border-t border-border bg-secondary/40 px-6 py-16">
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
                            The county&rsquo;s Long Range Plan calls for one dwelling unit
                            per acre; the standard every significant valley
                            development has met.
                        </Point>
                        <Point
                            icon={<Signpost className="size-5 text-primary" strokeWidth={1.5} />}
                            title="Twice as dense is too much"
                        >
                            Mountain Village doubles that density. We oppose this plan,
                            but we&rsquo;d support a less dense one that fits the Plan.
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
                        The elected <strong>Board of County Commissioners</strong> &nbsp; are the
                        deciders. They can agree with the Planning Commission&rsquo;s
                        recommendation [or not]. They hear from the Planning
                        Commission and from the community before they decide, which is why
                        showing up and speaking up makes a real difference.
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The Board of County Commissioners meeting will be in early September; more updates to follow.

                    </p>
                    <a
                        href="#meetings"
                        className="mt-4 inline-flex h-11 items-center justify-center gap-2"
                    >
                        See upcoming meetings
                        <ArrowRight className="size-4" strokeWidth={2} />
                    </a>
                </div>
            </section>

            {/* ---------- Meetings ---------- */}
            <section
                id="meetings"
                className="scroll-mt-8 border-t border-border bg-secondary/40 px-6 py-16"
            >
                <div className="mx-auto w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Upcoming meetings
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                        Both meetings are open to the community. Attending and being
                        heard matters.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <MeetingCard
                            eyebrow="Step 1 · Recommendation"
                            title="Jefferson County Planning Commission"
                            date="August 12 · 6:15 PM"
                            location="Jefferson County Government Center"
                            scheduled
                        >
                            The Planning Commission reviews the proposal and hears from the
                            community, then makes its recommendation.
                        </MeetingCard>

                        <MeetingCard
                            eyebrow="Step 2 · The key decision"
                            title="Board of County Commissioners"
                            date="Early September · date to be confirmed"
                            location="Jefferson County Government Center"
                            scheduled={false}
                        >
                            The key meeting. The elected commissioners hear the Planning
                            Commission and the community, then decide. Not yet officially
                            scheduled; check back for the date.
                        </MeetingCard>
                    </div>
                </div>
            </section>

            {/* ---------- Lawn sign ---------- */}
            <LawnSign />

            <footer className="border-t border-border px-6 py-8">
                <p className="text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} &nbsp; Willow Springs HOA &nbsp;&middot;&nbsp;
                    Questions?{" "}
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
            <section id="lawn-sign" className="scroll-mt-8 px-6 py-16">
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

function MeetingCard({
    eyebrow,
    title,
    date,
    location,
    scheduled,
    children,
}: {
    eyebrow: string;
    title: string;
    date: string;
    location: string;
    scheduled: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col rounded-3xl border border-border bg-card p-7">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                <span
                    className={`size-1.5 rounded-full ${scheduled ? "bg-primary" : "bg-muted-foreground"
                        }`}
                />
                {eyebrow}
            </span>

            <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                {title}
            </h3>

            <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-foreground">
                    <CalendarDays className="size-4 text-muted-foreground" strokeWidth={1.5} />
                    <dd className="font-medium">{date}</dd>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                    <MapPin className="size-4" strokeWidth={1.5} />
                    <dd>{location}</dd>
                </div>
            </dl>

            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                {children}
            </p>
        </div>
    );
}
