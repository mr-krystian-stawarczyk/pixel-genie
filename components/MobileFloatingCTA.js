"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate";

export default function MobileFloatingCTA() {
  const router = useRouter();
  const [consentReady, setConsentReady] = useState(false);
  const [afterHero, setAfterHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateConsent = () => setConsentReady(Boolean(getCookie("essentialConsent") || getCookie("marketingConsent")));
    updateConsent();
    window.addEventListener("cookieAccepted", updateConsent);
    window.addEventListener("cookieEssential", updateConsent);
    return () => {
      window.removeEventListener("cookieAccepted", updateConsent);
      window.removeEventListener("cookieEssential", updateConsent);
    };
  }, []);

  useEffect(() => {
    const hero = document.getElementById("pg-hero-configurator-cta");
    const footer = document.querySelector("footer");
    const menu = document.getElementById("pg-mobile-menu");
    let frame = null;
    const check = () => {
      frame = null;
      // On pages without the home hero, show only after some scrolling.
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        setAfterHero(bounds.bottom < 68);
      } else {
        setAfterHero(window.scrollY > 280);
      }
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setFooterVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
      setMobileMenuOpen(Boolean(menu));
    };
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const observer = typeof MutationObserver !== "undefined"
      ? new MutationObserver(onScroll) : null;
    if (observer) observer.observe(document.querySelector(".pg-navbar") || document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [router.asPath]);

  if (!consentReady || !afterHero || footerVisible || mobileMenuOpen || router.pathname === "/projekt-starten") return null;

  const handleClick = () => {
    if (getCookie("marketingConsent") === "true") {
      gaEvent("cta_click", { location: "mobile_floating", page: window.location.pathname });
    }
    router.push("/projekt-starten");
  };

  return (
    <div className="mobile-floating-cta visible text-center rounded">
      <button type="button" onClick={handleClick}
        className="btn-premium-footer pg-configurator-cta text-white fw-bold w-100"
        style={{ border: "none" }}>
        🚀 <AutoTranslate>Website in 2 Minuten planen</AutoTranslate>
      </button>
    </div>
  );
}
