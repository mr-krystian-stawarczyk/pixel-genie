// Minimal, consent-based attribution for lead forms.
// Store only short campaign labels and the referring hostname (never click IDs,
// complete referrer URLs, visitor IPs, email addresses, or phone numbers).
import { getCookie } from "cookies-next";

const STORAGE_KEY = "pixel-genie-traffic-v1";
const knownSearch = /(^|\.)(google\.|bing\.|duckduckgo\.|yahoo\.|ecosia\.)/i;
const knownSocial = /(^|\.)(facebook\.|instagram\.|linkedin\.|tiktok\.|pinterest\.|threads\.)/i;

function cleanLabel(value) {
  if (typeof value !== "string") return "";
  // Reject personal-looking data rather than storing it as campaign metadata.
  if (value.includes("@") || /(?:\+?\d[\d\s().-]{7,}\d)/.test(value)) return "";
  return value.trim().replace(/[^a-zA-Z0-9_\- .]/g, "").slice(0, 70);
}

function safePathname() {
  try { return window.location.pathname.slice(0, 180); }
  catch { return "/"; }
}

function candidateAttribution() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = cleanLabel(params.get("utm_source"));
  const utmMedium = cleanLabel(params.get("utm_medium"));
  const utmCampaign = cleanLabel(params.get("utm_campaign"));
  let referrerHost = "";
  try {
    if (document.referrer) {
      const ref = new URL(document.referrer);
      if (ref.hostname !== window.location.hostname) {
        referrerHost = ref.hostname.toLowerCase().slice(0, 90);
      }
    }
  } catch {}

  let source = utmSource;
  let medium = utmMedium;
  // Only detect paid campaigns; never retain gclid/fbclid values.
  if (!source && params.has("gclid")) { source = "google"; medium = "cpc"; }
  if (!source && params.has("msclkid")) { source = "bing"; medium = "cpc"; }
  if (!source && params.has("fbclid")) { source = "facebook"; medium = "referral"; }
  if (!source && knownSearch.test(referrerHost)) { source = referrerHost; medium = "organic"; }
  if (!source && knownSocial.test(referrerHost)) { source = referrerHost; medium = "referral"; }
  if (!source && referrerHost) { source = referrerHost; medium = "referral"; }
  if (!source) { source = "direct"; medium = medium || "none"; }
  return {
    traffic_source: source,
    traffic_medium: medium || "unknown",
    traffic_campaign: utmCampaign || "",
    referrer_host: referrerHost,
    landing_path: safePathname(),
  };
}

export function captureAttribution() {
  if (typeof window === "undefined" || getCookie("marketingConsent") !== "true") return;
  try {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(candidateAttribution()));
    }
  } catch {}
}

export function getLeadAttribution() {
  const empty = {
    traffic_source: "unattributed",
    traffic_medium: "consent_not_granted",
    traffic_campaign: "",
    referrer_host: "",
    landing_path: "",
  };
  if (typeof window === "undefined" || getCookie("marketingConsent") !== "true") return empty;
  captureAttribution();
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object") return candidateAttribution();
    return Object.fromEntries(Object.entries(empty).map(([key]) => [
      key, typeof stored[key] === "string" ? stored[key].slice(0, 180) : empty[key]
    ]));
  } catch { return candidateAttribution(); }
}
