import { ArrowRight, CalendarDays, Mail, MapPin, Users } from "lucide-react";

import { DaysUntil } from "@/components/days-until";
import { TopoLines } from "@/components/topo-lines";

// The three Jefferson County commissioners deciding on Sept 1. All three are
// elected countywide, so every valley resident is a constituent of each.
const COMMISSIONERS = [
    { name: "Rachel Zenzinger", district: "District 1", email: "rzenzing@jeffco.us" },
    { name: "Andy Kerr", district: "District 2", email: "akerr@jeffco.us" },
    { name: "Lesley Dahlkemper", district: "District 3", email: "ldahlkem@jeffco.us" },
];

// The whole argument, in the units both a neighbor and a commissioner think in.
// 143 units / 84.7 acres = 1.69 DU/A. At the plan's 1.0 DU/A the site supports
// about 85 homes, so the proposal is 58 homes over the published standard.
const PROPOSED_UNITS = 143;
const SITE_ACRES = 84.7;
const CONFORMING_UNITS = Math.round(SITE_ACRES);
const EXCESS_UNITS = PROPOSED_UNITS - CONFORMING_UNITS;

const VOTE_ISO = "2026-09-01T09:00:00-06:00";

// One measure (homes per acre) across three entities on a shared axis. Ember is
// reserved for the value that exceeds the standard and always ships with a
// written label, never color alone.
const AXIS_MAX = 1.8;
const DENSITIES = [
    {
        label: "Willow Springs, as built",
        value: 0.83,
        note: "1,170 homes across 1,418 acres",
        over: false,
    },
    {
        label: "Long Range Plan standard",
        value: 1.0,
        note: "The county’s published density for The Valley",
        over: false,
    },
    {
        label: "Mountain Village, proposed",
        value: 1.69,
        note: `${PROPOSED_UNITS} units across ${SITE_ACRES} acres`,
        over: true,
    },
];

// A prefilled, on-message note residents can personalize before sending.
const EMAIL_SUBJECT = "Mountain Village: please hold the proposal to the Long Range Plan";
const EMAIL_BODY = `Dear Commissioners,

I live in the Willow Springs valley, and I am writing to you about the Mountain Village proposal.

The county's Long Range Plan calls for one home per acre. At that density, this ${SITE_ACRES} acre site supports about ${CONFORMING_UNITS} homes. The proposal asks for ${PROPOSED_UNITS} homes instead. Our valley was built to 0.83 homes per acre, and every other major development has met that same standard.

I also have concerns about the fire-resistance commitments. The developer calls this a highly fire-resistant community, but the record does not define what that means, does not verify it, and does not bind future owners to it. Approvals run with the land, so any promise that is not written into the conditions disappears the day the property changes hands.

Please send this proposal back so the density can be brought into conformance with the Long Range Plan and the fire-resistance commitments can be written into enforceable conditions.

Thank you for your time and attention to this matter.

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
        <div className="relative flex flex-1 flex-col">
            {/* ---------- Deadline strip ---------- */}
            <div className="border-b border-border bg-card">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-x-4 gap-y-1 px-6 py-3 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            The Board votes
                        </span>
                        <span className="text-sm font-medium text-foreground">
                            Tuesday, September 1 at 9:00 AM
                        </span>
                        <DaysUntil iso={VOTE_ISO} />
                    </p>
                    <a
                        href="#act"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                        How to weigh in
                        <ArrowRight className="size-3.5" strokeWidth={2} />
                    </a>
                </div>
            </div>

            {/* ---------- Hero ---------- */}
            <section className="relative isolate px-6 pt-20 pb-16 sm:pt-28">
                <TopoLines />

                <div className="mx-auto w-full max-w-4xl">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Jefferson County &middot; Mountain Village rezoning
                    </p>

                    <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                        <span className="block text-balance">
                            Keep Willow Springs average density one home per acre
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Jefferson County&rsquo;s Long Range Plan calls for one home per acre in
                        The Valley. We&rsquo;re not against development; we&rsquo;re for
                        development that follows the plan our valley has always been held to.
                    </p>

                    {/* The two figures the whole case rests on. */}
                    <div className="mt-12 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                        <Figure
                            eyebrow="The plan allows"
                            value={CONFORMING_UNITS}
                            unit="homes"
                            note={`One home per acre across ${SITE_ACRES} acres`}
                        />
                        <Figure
                            eyebrow="The proposal asks for"
                            value={PROPOSED_UNITS}
                            unit="homes"
                            note="1.69 homes per acre"
                            over
                        />
                    </div>
                    <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-foreground">
                        {EXCESS_UNITS} more homes than the Long Range Plan allows on this site.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#act"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            <Mail className="size-4" strokeWidth={2} />
                            Email the commissioners
                        </a>
                        <a
                            href="#meeting"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                        >
                            Speak at the September 1 meeting
                        </a>
                    </div>
                </div>
            </section>

            {/* ---------- Question one: density ---------- */}
            <Question
                n="one"
                title="The valley met this standard. Why not Mountain Village?"
                lede="The Long Range Plan sets one dwelling unit per acre for The Valley. Willow Springs built under it, and every major development here has been held to the same line."
            >
                <DensityChart />

                <p className="mt-10 text-base leading-relaxed text-muted-foreground">
                    At the plan&rsquo;s density, {SITE_ACRES} acres supports about{" "}
                    <strong className="font-medium text-foreground">
                        {CONFORMING_UNITS} homes
                    </strong>
                    . The proposal asks for{" "}
                    <strong className="font-medium text-foreground">{PROPOSED_UNITS}</strong>.
                    Nothing in the record explains why this parcel should be measured
                    differently from the rest of the valley.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    We all live in homes that were once newly built, and thoughtful growth
                    is part of this valley. Mountain Village should be held to the same standard.
                </p>
            </Question>

            {/* ---------- Question two: accountability ---------- */}
            <Question
                n="two"
                title="Who holds them to the fire promises?"
                lede="The developer said this would be the most fire-resistant community around. That commitment exists nowhere in the record."
                tinted
            >
                <p className="text-base leading-relaxed text-muted-foreground">
                    There is no standard defining what fire resistant means here, no
                    inspection or verification, and no consequence for falling short.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    It matters more than it might sound, because{" "}
                    <strong className="font-medium text-foreground">
                        development approval runs with the land, not the developer
                    </strong>
                    . Whoever owns this ground next inherits the entitlement and none of the
                    assurances. If the commitments are not written into the conditions, they
                    disappear the day the property changes hands.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    This one is straightforward to fix, and the Board can fix it: put the fire
                    commitments in writing, with criteria and verification, binding on any
                    future owner.
                </p>
            </Question>

            {/* ---------- The ask ---------- */}
            <section className="border-t border-border px-6 py-20">
                <div className="mx-auto w-full max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                        What we are asking for
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        On <strong className="font-medium text-foreground">August 12</strong>{" "}
                        the Planning Commission recommended approval by a 5&ndash;1 vote. The
                        final decision rests with the elected{" "}
                        <strong className="font-medium text-foreground">
                            Board of County Commissioners
                        </strong>
                        , who can approve the plan, send it back, or scale it down.
                    </p>

                    <figure className="mt-8 border-l-2 border-primary pl-6">
                        <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-foreground">
                            Bring the
                            density into conformance with the Long Range Plan, and write the
                            fire-resistance commitments into the conditions of approval so they
                            bind whoever builds here.
                        </p>
                    </figure>
                </div>
            </section>

            {/* ---------- What to do ---------- */}
            <section
                id="act"
                className="scroll-mt-4 border-y border-border bg-secondary/50 px-6 py-20"
            >
                <div className="mx-auto w-full max-w-3xl">
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                        Two things you can do
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                        Officials answer to voters, and a real groundswell on density gives a
                        right-sized plan its best chance.
                    </p>

                    <div className="mt-10 grid gap-5">
                        {/* Email */}
                        <div className="rounded-xl border border-border bg-card p-8">
                            <div className="flex items-center gap-3">
                                <Mail className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                                    Email the three commissioners
                                </h3>
                            </div>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                All three are elected{" "}
                                <strong className="font-medium text-foreground">countywide</strong>,
                                so they all represent you. The draft below makes both points and
                                asks for the remand. Add a line in your own words about why you
                                live here: identical form letters get counted, personal ones get
                                read.
                            </p>

                            <a
                                href={MAILTO_ALL}
                                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                            >
                                <Mail className="size-4" strokeWidth={2} />
                                Open a ready-to-send draft
                            </a>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {COMMISSIONERS.map((c) => (
                                    <a
                                        key={c.email}
                                        href={`mailto:${c.email}?subject=${encodeURIComponent(
                                            EMAIL_SUBJECT,
                                        )}&body=${EMAIL_BODY_ENCODED}`}
                                        className="flex flex-col rounded-lg border border-border bg-secondary/50 px-4 py-3 transition-colors hover:bg-accent"
                                    >
                                        <span className="text-sm font-semibold text-foreground">
                                            {c.name}
                                        </span>
                                        <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                                            {c.district}
                                        </span>
                                        <span className="mt-1 break-all font-mono text-xs text-primary">
                                            {c.email}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
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

                        {/* Meeting */}
                        <div
                            id="meeting"
                            className="scroll-mt-4 rounded-xl border border-border bg-card p-8"
                        >
                            <div className="flex items-center gap-3">
                                <Users className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                                    Speak at the Board meeting
                                </h3>
                            </div>

                            <dl className="mt-5 space-y-2.5">
                                <MeetingRow
                                    icon={
                                        <CalendarDays
                                            className="size-4 shrink-0 text-muted-foreground"
                                            strokeWidth={1.5}
                                        />
                                    }
                                >
                                    Tuesday, September 1 &middot; 9:00 AM
                                </MeetingRow>
                                <MeetingRow
                                    icon={
                                        <MapPin
                                            className="size-4 shrink-0 text-muted-foreground"
                                            strokeWidth={1.5}
                                        />
                                    }
                                >
                                    Jefferson County Government Center, Golden
                                </MeetingRow>
                            </dl>

                            <p className="mt-5 border-t border-border pt-5 text-base leading-relaxed text-muted-foreground">
                                <strong className="font-medium text-foreground">
                                    Public comment is open to anyone, and there is no sign-up in
                                    advance.
                                </strong>{" "}
                                Show up, fill a seat, and speak if you want to. The commissioners
                                hear the community, then take the final vote, so being in the room
                                makes the strongest impression.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                We will post a Zoom link here when it is available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="px-6 py-10">
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
                    <p>
                        Lawn signs are all claimed and we have no more to give out. Thank you to
                        everyone who put one up.
                    </p>
                    <p className="shrink-0 font-mono text-xs uppercase tracking-wider">
                        Updated Aug. 24
                    </p>
                </div>
                <p className="mx-auto mt-6 w-full max-w-3xl border-t border-border pt-6 text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Willow Springs HOA &middot; Questions?{" "}
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

function Figure({
    eyebrow,
    value,
    unit,
    note,
    over = false,
}: {
    eyebrow: string;
    value: number;
    unit: string;
    note: string;
    over?: boolean;
}) {
    return (
        <div className="bg-card px-7 py-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {eyebrow}
            </p>
            <p className="mt-4 flex items-baseline gap-2">
                <span
                    className={`font-mono text-6xl font-semibold leading-none tabular-nums ${over ? "text-ember" : "text-foreground"
                        }`}
                >
                    {value}
                </span>
                <span className="text-sm font-medium text-muted-foreground">{unit}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{note}</p>
        </div>
    );
}

function DensityChart() {
    const standardLeft = `${(1 / AXIS_MAX) * 100}%`;

    return (
        <figure>
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Homes per acre
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Dashed line = the standard
                </span>
            </figcaption>

            <div className="relative mt-5">
                {/* The standard, drawn once across all three bars so the overshoot
                    is visible rather than inferred. */}
                <div
                    aria-hidden
                    className="absolute inset-y-0 border-l border-dashed border-muted-foreground/50"
                    style={{ left: standardLeft }}
                />

                <div className="flex flex-col gap-6">
                    {DENSITIES.map((d) => (
                        <div key={d.label}>
                            <div className="flex items-baseline justify-between gap-4">
                                <span className="text-sm font-medium text-foreground">
                                    {d.label}
                                </span>
                                <span className="font-mono text-sm tabular-nums text-foreground">
                                    {d.value.toFixed(2)}
                                </span>
                            </div>
                            <div className="mt-2.5 h-2.5 w-full rounded-[2px] bg-secondary">
                                <div
                                    className={`h-full rounded-r-[4px] ${d.over ? "bg-ember" : "bg-primary"}`}
                                    style={{ width: `${(d.value / AXIS_MAX) * 100}%` }}
                                />
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                                {d.note}
                                {d.over && (
                                    <span className="font-medium text-ember-ink">
                                        {" "}
                                        &middot; 69% over the standard
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </figure>
    );
}

function Question({
    n,
    title,
    lede,
    tinted = false,
    children,
}: {
    n: string;
    title: string;
    lede: string;
    tinted?: boolean;
    children: React.ReactNode;
}) {
    return (
        <section
            className={`border-t border-border px-6 py-20 ${tinted ? "bg-secondary/50" : ""}`}
        >
            <div className="mx-auto w-full max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    Question {n}
                </p>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {lede}
                </p>
                <div className="mt-10">{children}</div>
            </div>
        </section>
    );
}

function MeetingRow({
    icon,
    children,
}: {
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-2.5">
            {icon}
            <dd className="font-mono text-sm text-foreground">{children}</dd>
        </div>
    );
}
