declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type LpTrackEvent = 'cta_click' | 'phone_click' | 'form_submit';

type AdsConversion = {
  send_to: string;
  value: number;
  currency: string;
};

/**
 * Google Ads conversion mapping. Events listed here also fire a
 * `gtag('event', 'conversion', ...)` call alongside the dataLayer push.
 * Conversion IDs/labels come from Google Ads → Tools → Goals → Conversions.
 */
const ADS_CONVERSIONS: Partial<Record<LpTrackEvent, AdsConversion>> = {
  form_submit: {
    send_to: 'AW-18178025584/AQV2CKmkqbMcEPDQ-ttD',
    value: 50,
    currency: 'NZD',
  },
  phone_click: {
    send_to: 'AW-18178025584/pW4GCNOw27McEPDQ-ttD',
    value: 30,
    currency: 'NZD',
  },
};

/**
 * Push an event into the GTM dataLayer (GTM-KMQRPMK2 is loaded in the root
 * layout) and, when applicable, fire the matching Google Ads conversion.
 * Safe to call on the client only; no-ops during SSR/static export.
 */
export function pushDataLayer(
  event: LpTrackEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  const conversion = ADS_CONVERSIONS[event];
  if (conversion) {
    window.gtag?.('event', 'conversion', conversion);
  }
}
