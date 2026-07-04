"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

if (typeof window !== "undefined" && posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-05-30",
    // Pageviews are captured manually below so client-side route changes count
    capture_pageview: false,
  });
}

function PageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthogKey || !pathname) return;
    const search = searchParams.toString();
    const url = window.origin + pathname + (search ? `?${search}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHog() {
  return (
    <Suspense fallback={null}>
      <PageView />
    </Suspense>
  );
}
