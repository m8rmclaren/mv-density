"use client";

import { useSyncExternalStore } from "react";

const NEVER_CHANGES = () => () => {};

function daysUntil(iso: string) {
    const days = Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000);
    if (days > 1) return `in ${days} days`;
    if (days === 1) return "tomorrow";
    if (days === 0) return "today";
    return null;
}

/**
 * The day count to the vote. Client-only on purpose: the page is statically
 * prerendered, so a build-time count would freeze at deploy and quietly lie.
 * useSyncExternalStore gives us the server/client split without a mount effect.
 */
export function DaysUntil({ iso }: { iso: string }) {
    const label = useSyncExternalStore(
        NEVER_CHANGES,
        () => daysUntil(iso),
        () => null,
    );

    if (!label) return null;
    return (
        <span className="font-mono text-xs uppercase tracking-wider text-ember-ink">
            {label}
        </span>
    );
}
