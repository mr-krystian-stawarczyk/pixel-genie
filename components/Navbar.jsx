"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill, BsList, BsX } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import ContactButton from "./ContactButton";
import AutoTranslate from "./AutoTranslate";

const languages = [
  { code: "de", name: "Deutsch", flag: "/assets/webagentur-webentwicklung-nettetal-seo-flagde.png" },
  { code: "en", name: "English", flag: "/assets/webagentur-webentwicklung-nettetal-seo-flageng.png" },
  { code: "pl", name: "Polski", flag: "/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png" },
  { code: "nl", name: "Nederlands", flag: "/assets/webagentur-webentwicklung-nettetal-seo-flagnl.png" },
];

const services = [
  ["/webseitenerstellen", "Webseiten erstellen"],
  ["/suchmaschinenoptimierung", "SEO Optimierung"],
  ["/webdesign", "Webdesign"],
  ["/branding", "Branding"],
  ["/socialmediamarketing", "Social Media Marketing"],
];

function LanguageMenu({ compact = false }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  const choose = (code) => {
    i18n.changeLanguage(code);
    try { sessionStorage.setItem("pixel-genie-language", code); } catch {}
    document.documentElement.lang = code;
    setOpen(false);
  };
  return (
    <div ref={ref} className="pg-language">
      <button type="button" className="pg-nav-control" onClick={() => setOpen(!open)}
        aria-expanded={open} aria-haspopup="true" aria-label={"Sprache / Language: " + current.name}>
        <Image src={current.flag} alt="" width={24} height={24} />
        {!compact && <span className="pg-language-code">{current.code.toUpperCase()}</span>}
        <span aria-hidden="true" className="pg-chevron">⌄</span>
      </button>
      {open && (
        <div className="pg-language-options">
          {languages.map((lang) => (
            <button key={lang.code} type="button" className="pg-language-option"
              aria-current={current.code === lang.code ? "true" : undefined}
              onClick={() => choose(lang.code)}>
              <Image src={lang.flag} alt="" width={25} height={25} />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <button type="button" className="pg-nav-control pg-icon-button"
      aria-label={isLight ? "Dunkles Design aktivieren" : "Helles Design aktivieren"}
      onClick={() => setTheme(isLight ? "dark" : "light")}>
      {isLight ? <BsFillMoonFill size={18}/> : <BsFillSunFill size={18}/>}
    </button>
  );
}

export default function NavbarComp() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("pixel-genie-language");
      if (languages.some((x) => x.code === saved)) i18n.changeLanguage(saved);
      document.documentElement.lang = saved || i18n.language || "de";
    } catch {}
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language || "de";
  }, [i18n.language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => { setMenuOpen(false); setServicesOpen(false); };
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeydown = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeydown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (event) => {
      if (!servicesRef.current?.contains(event.target)) setServicesOpen(false);
    };
    const onKey = (event) => { if (event.key === "Escape") setServicesOpen(false); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <div className={"pg-navbar " + (scrolled ? "pg-navbar-scrolled" : "")}>
      <div className="pg-navbar-inner">
        <Link href="/" className="pg-navbar-brand" aria-label="Pixel-Genie – Startseite" onClick={() => setMenuOpen(false)}>
          <Image src="/assets/pixel-genie-nettetal-webentwicklung-logo.png" alt="" width={43} height={43} priority/>
          <span>Pixel-Genie</span>
        </Link>
        <nav className="pg-desktop-nav" aria-label="Hauptnavigation">
          <Link href="/" className="pg-nav-link pg-nav-home" aria-label="Startseite"><IoHomeOutline size={19}/></Link>
          <div ref={servicesRef} className="pg-services">
            <button className="pg-nav-link" type="button"
              aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
              <AutoTranslate>Dienste</AutoTranslate><span aria-hidden="true">⌄</span>
            </button>
            {servicesOpen && (
              <div className="pg-services-menu">
                {services.map(([href,label])=> (
                  <Link href={href} key={href} className="pg-services-item" onClick={()=>setServicesOpen(false)}>
                    <AutoTranslate>{label}</AutoTranslate>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/webdesignblog" className="pg-nav-link"><AutoTranslate>Blog</AutoTranslate></Link>
          <Link href="/pixelgeniehistory" className="pg-nav-link"><AutoTranslate>Über uns</AutoTranslate></Link>
          <LanguageMenu compact/>
          <ThemeSwitch/>
          <ContactButton topic="Navbar Webdesign Anfrage" className="pg-nav-cta">
            <AutoTranslate>Website anfragen</AutoTranslate>
          </ContactButton>
        </nav>
        <button className="pg-mobile-toggle" type="button" aria-controls="pg-mobile-menu"
          aria-expanded={menuOpen} aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <BsX size={30}/> : <BsList size={28}/>}
        </button>
      </div>
      {menuOpen && (
        <nav id="pg-mobile-menu" className="pg-mobile-menu" aria-label="Mobile Navigation">
          <div className="pg-mobile-links">
            <Link href="/" className="pg-mobile-link" onClick={()=>setMenuOpen(false)}><AutoTranslate>Startseite</AutoTranslate></Link>
            {services.map(([href,label])=> (
              <Link key={href} href={href} className="pg-mobile-link" onClick={()=>setMenuOpen(false)}>
                <AutoTranslate>{label}</AutoTranslate>
              </Link>
            ))}
            <Link href="/webdesignblog" className="pg-mobile-link" onClick={()=>setMenuOpen(false)}><AutoTranslate>Blog</AutoTranslate></Link>
            <Link href="/pixelgeniehistory" className="pg-mobile-link" onClick={()=>setMenuOpen(false)}><AutoTranslate>Über uns</AutoTranslate></Link>
            <div className="pg-mobile-tools">
              <LanguageMenu/>
              <ThemeSwitch/>
            </div>
            <ContactButton topic="Mobile Navbar Webdesign Anfrage" className="pg-nav-cta pg-mobile-cta">
              <AutoTranslate>Website anfragen</AutoTranslate>
            </ContactButton>
          </div>
        </nav>
      )}
    </div>
  );
}
