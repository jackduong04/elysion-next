declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type LpTrackEvent = 'cta_click' | 'phone_click' | 'form_submit';

/**
 * Push an event into the GTM dataLayer (GTM-KMQRPMK2 is loaded in the root
 * layout). GTM handles downstream tags (GA4, Google Ads conversions) based on
 * Custom Event triggers — see the GTM workspace for tag configuration.
 * Safe to call on the client only; no-ops during SSR/static export.
 */
export function pushDataLayer(
  event: LpTrackEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
