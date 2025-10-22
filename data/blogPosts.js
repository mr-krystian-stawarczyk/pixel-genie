// /data/blogPosts.js
// ✅ Stabilne, ręcznie nadane SEO-slugi (nie pochodzą z tytułu) + walidacja.
// ✅ Obrazy 1200x630 pod OG/Twitter.
// ✅ Wszystkie posty rozbudowane: description + Key Takeaways + bogatsze details.
// ✅ Dodatkowe metadane (opcjonalne dla przyszłych funkcji): readingTime, tags.
// ✅ Sort malejący po dacie (najnowszy pierwszy) + „zamrożony” eksport.

const RAW_POSTS = [
	{
		slug: "digital-trust-2025-vertrauen-als-markenwaehrung",
		imgSrc: "/assets/digital-trust.png",
		title:
			"💡 Digital Trust 2025: Warum Vertrauen die neue Währung im Online Marketing ist (und wie Sie es wirklich aufbauen)",
		date: "2025-10-23",
		description:
			"KI, Werbung, Automatisierung – alles wird schneller. Doch eines bleibt selten: Vertrauen. Marken, die ehrlich, sichtbar und menschlich kommunizieren, gewinnen 2025 nicht nur Klicks – sondern echte Kunden. So schaffen Sie Vertrauen, das konvertiert.",
		keypoints: [
			"Vertrauen schlägt Reichweite – immer.",
			"Authentizität & UX-Transparenz sind die neuen Performance-Hebel.",
			"Menschen kaufen keine Marken – sie kaufen das Gefühl von Sicherheit.",
		],
		details: [
			"### 💬 Vertrauen ist das, was bleibt, wenn Werbung vergessen ist",
			"Scroll mal durch LinkedIn oder Google – alles wirkt perfekt. Glänzende Versprechen, KI-generierte Texte, Hochglanzgrafiken. Aber was fehlt? Echtheit. Nutzer spüren sofort, ob hinter einer Marke echte Menschen stehen – oder nur ein automatisierter Funnel.",
			"",
			"Studien zeigen: **81 % der Konsumenten** kaufen nur bei Marken, denen sie vertrauen. Und das ist kein leeres Buzzword. Vertrauen bedeutet: Ich glaube dir, dass du mein Problem wirklich lösen willst – nicht nur verkaufen.",
			"",
			"### 🤖 Warum Vertrauen im Zeitalter der KI der Gamechanger ist",
			"KI macht Content schneller, günstiger, präziser. Aber sie hat einen Haken: Alles klingt gleich. In einer Welt voller generischer Texte gewinnt, wer *menschlich* bleibt. Wer zeigt: Hier arbeiten echte Köpfe mit echten Werten.",
			"",
			"Marken, die transparent mit KI umgehen, werden 2025 besser performen als jene, die sie heimlich einsetzen. Authentizität wird das neue USP.",
			"",
			"### ⚡ Vertrauen = Ranking + Conversion",
			"Google liebt Seiten, die echte Signale senden: klare Autorennamen, Social Proof, Bewertungen, Case Studies. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) ist längst ein Ranking-Faktor. Vertrauen ist SEO.",
			"",
			"Websites, die offen zeigen *wer* dahinter steckt, mit *echten Teamfotos* und *transparenter Sprache*, steigern die Verweildauer im Schnitt um **+38 %**. Das bedeutet: Mehr Sichtbarkeit, bessere Rankings, mehr Leads – und alles organisch.",
			"",
			"### 🧠 Design, das Vertrauen spürbar macht",
			"Vertrauen entsteht im Kopf, bevor jemand überhaupt liest. Dein Design sendet Signale: professionell oder chaotisch, sicher oder riskant. Farben, Weißräume, Schriftgrößen – sie alle sagen etwas über deine Marke aus.",
			"",
			"Eine klare, ruhige UX schafft Orientierung. Wenn Buttons gleich aussehen, wenn Texte konsistent sind, wenn nichts flackert oder stockt – fühlt sich der Nutzer sicher. Das ist kein Zufall. Das ist Psychologie.",
			"",
			"### ❤️ Authentizität verkauft besser als Perfektion",
			"Perfekte Marken wirken heute steril. Was Menschen bewegt, sind Geschichten – echte Gesichter, kleine Fehler, Learnings. Wenn du zeigst, wer du bist, entsteht Sympathie. Und Sympathie verkauft.",
			"",
			"Marken, die ihr Team, ihre Kunden oder sogar ihre Rückschläge zeigen, performen auf Social Media **bis zu 3× besser**. Warum? Weil Vertrauen durch Nähe entsteht, nicht durch Perfektion.",
			"",
			"### 🔍 UX-Signale, die Vertrauen sichtbar machen",
			"- **SSL-Zertifikat**: Ohne Schloss im Browser kein Vertrauen. Punkt.\n- **Klare Navigation**: Wenn man sich verirrt, verliert man Vertrauen.\n- **Transparente Preise & Kontaktinfos**: Kein Impressum = kein Vertrauen.\n- **Ladezeit unter 2,5 s**: Niemand vertraut einer Website, die ruckelt.",
			"",
			"Diese Basics klingen simpel – aber sie entscheiden, ob jemand bleibt oder abspringt.",
			"",
			"### 👥 Social Proof ist kein Nice-to-have – es ist Pflicht",
			"Menschen glauben Menschen, nicht Marken. Zeig echte Kunden. Verwende Video-Testimonials, Screenshots, Rezensionen. Verlinke zu Google Reviews oder ProvenExpert. Und: Lass die Stimmen deiner Kunden sprechen – nicht dein Marketing.",
			"",
			'💡 Pro-Tipp: Verwandle Bewertungen in Mini-Stories auf Social Media. "Ein Kunde war skeptisch – bis er unsere Lösung sah..." Das schafft Resonanz.',
			"",
			"### 🔒 Datenschutz = Vertrauenssignal",
			"Die DSGVO nervt viele. Aber klug genutzt, wird sie zum Wettbewerbsvorteil. Wenn dein Cookie-Banner klar und ehrlich ist (statt manipulierend), wenn du erklärst, wie du Daten schützt – wirkst du sofort glaubwürdiger.",
			"",
			"Ein Satz wie: *„Ihre Daten gehören Ihnen. Wir nutzen sie nur, um Ihnen echten Mehrwert zu bieten.“* – kann Wunder wirken.",
			"",
			"### 📊 Vertrauen kann man messen (und optimieren)",
			"Ja, Vertrauen ist messbar! Schau auf deine Daten:\n- Wie lange bleiben Besucher auf deiner Seite? (Time on Page)\n- Wie tief scrollen sie? (Scroll Depth)\n- Kommen sie wieder? (Return Visitors)\n- Klicken sie aus Social Media freiwillig rein?\nWenn diese Werte steigen, wächst dein Vertrauen. Und damit dein Umsatz.",
			"",
			"### 🧭 Der 5-Schritte-Plan für mehr Digital Trust",
			" **Website-Audit:** Ladezeit, UX, Sicherheit, Bewertungen checken.   **Gesichter zeigen:** Kein Stockfoto ersetzt echte Menschen.  **Social Proof einbinden:** Automatisierte Rezensionen, Fallstudien, Logos.   **Transparente Sprache:** Weniger Marketing-Blabla, mehr Klartext.   **Kontinuität:** Vertrauen wächst wie SEO – mit Geduld und Ehrlichkeit.",
			"",
			"### 💬 Fazit: Vertrauen verkauft besser als jede Anzeige",
			"Digital Trust ist kein Trend – es ist das Fundament moderner Marken. 2025 gewinnt nicht der Lauteste, sondern der Glaubwürdigste. Menschen kaufen kein Produkt. Sie kaufen Sicherheit, Klarheit und das Gefühl, verstanden zu werden.",
			"",
			"👉 **Praxis-Tipp:** Mach einen kleinen Test. Öffne deine Website und frag dich: „Würde ich mir selbst vertrauen?“ Wenn du zögerst – melde dich bei uns. Wir helfen, dein Vertrauen sichtbar zu machen. Mit klarem Design, ehrlicher Kommunikation und smarter Technik.",
		],
		readingTime: "10 min",
		tags: ["Trust", "Marketing", "UX", "Storytelling", "SEO", "Authentizität"],
	},

	{
		slug: "conversion-rate-steigern-3-unsichtbare-website-fehler",
		imgSrc: "/assets/conversion-fehler.jpg",
		title:
			"🚀 3 unsichtbare Website-Fehler, die 80 % der Unternehmen Conversion kosten (und wie Sie sie in 24 Stunden beheben)",
		date: "2025-10-21",
		description:
			"Viele Websites sehen gut aus – funktionieren aber nicht. Studien zeigen, dass 80 % der KMU durch drei häufige UX- und SEO-Fehler bis zu 40 % ihrer Leads verlieren. Hier erfahren Sie, wie Sie diese Fehler in 24 Stunden beheben können.",
		keypoints: [
			"Sichtbare CTAs steigern Conversion-Rates.",
			"PageSpeed unter 2,5s ist entscheidend für SEO.",
			"Vertrauen & Social Proofs erhöhen Leads signifikant.",
		],
		details: [
			"Fehler 1: Kein klarer Call-to-Action – Nutzer wissen nicht, was sie tun sollen. Lösung: Sichtbare Buttons, klare Vorteile.",
			"Fehler 2: Langsame Ladezeit – Google bestraft Seiten mit LCP > 2,5 s. Lösung: Bildkompression, CDN (z. B. Cloudflare), Next.js.",
			"Fehler 3: Fehlendes Vertrauen – keine Social Proofs, keine Bewertungen. Lösung: Rezensionen, Zertifikate, transparenter Kontakt.",
			"✅ Fazit: Kleine Optimierungen bewirken Großes – 3 Sekunden weniger Ladezeit können Conversion-Rates um 20 % steigern.",
		],
		readingTime: "6 min",
		tags: ["Conversion", "SEO", "PageSpeed", "UX"],
	},

	{
		slug: "moderne-webseite-gruende-fuer-unternehmen",
		imgSrc: "/assets/webentwicklung-nettetal-design-seo4.png",
		title: "Warum Ihr Unternehmen eine moderne Webseite braucht",
		date: "2025-08-27",
		description:
			"Ihre Website ist oft der erste Touchpoint. Moderne Technik, schnelles Rendering und überzeugende UX entscheiden in Sekunden über Vertrauen, Sichtbarkeit und Umsatz.",
		keypoints: [
			"Erster Eindruck: 0–5 Sekunden entscheiden über Vertrauen.",
			"Mobile-First: >60 % der Zugriffe erfolgen mobil.",
			"Schnelle Ladezeiten senken Absprungraten deutlich.",
			"SEO-Basis: Saubere Struktur + hochwertiger Content.",
			"Barrierefreiheit = bessere UX und breitere Zielgruppe.",
		],
		details: [
			"Brand-Impact: Design, Typografie und Tonalität prägen die Wahrnehmung – konsistente Gestaltung steigert die Wiedererkennung.",
			"Informationsarchitektur: Klare Navigation und interne Verlinkungen senken die kognitive Last und führen Nutzer zu Conversions.",
			"Performance: Code-Splitting, Bildkompression, preloading der LCP-Assets – das Zusammenspiel wirkt unmittelbar auf Rankings.",
			"Trust-Elemente: Zertifikate, Bewertungen, klare Kontaktoptionen und transparente Preise reduzieren Kaufbarrieren.",
			"Messbarkeit: Ereignis-Tracking (GA4) zeigt, was wirkt – damit optimieren Sie Inhalte datenbasiert statt aus dem Bauchgefühl.",
		],
		readingTime: "7 min",
		tags: ["Webdesign", "UX", "SEO", "Performance"],
	},

	{
		slug: "online-marketing-strategien-mehr-kunden-gewinnen",
		imgSrc: "/assets/webentwicklung-nettetal-design-seo2.png",
		title: "Moderne Online-Marketing-Strategien – So erreichen Sie mehr Kunden",
		date: "2025-02-10",
		description:
			"Vom Search Intent bis Retargeting: So bauen Sie eine Maschine für planbares Wachstum – mit Content, SEO, Social und E-Mail in einem sauberen Funnel.",
		keypoints: [
			"SEO + Content: organisches Fundament für stabilen Traffic.",
			"Social Proof & UGC erhöhen Klick- und Abschlussraten.",
			"E-Mail bleibt der ROI-Treiber – personalisiert & DSGVO-konform.",
			"Retargeting schließt verlorene Sessions effizient ab.",
		],
		details: [
			"SEO Quick Wins: Strukturierte Daten, Snippet-Optimierung, interne Verlinkung und aktualisierte Evergreen-Artikel.",
			"Content-Formate: Vergleichsseiten, How-Tos, Fallstudien und Interaktives (Quiz/Calculator) liefern Mehrwert und Leads.",
			"Paid + Organic: Kampagnen synchron mit Content-Kalender, damit Anzeigen nicht ins Leere führen, sondern Vertrauen hebeln.",
			"Marketing-Automation: Segmentierte E-Mails, Trigger auf Basis von Verhalten und Lead-Scoring für qualitativere Gespräche.",
			"Metriken: CAC, LTV, ROAS und Content-Attribution – nur was gemessen wird, kann skaliert werden.",
		],
		readingTime: "8 min",
		tags: ["Marketing", "SEO", "Content", "E-Mail", "Paid"],
	},

	{
		slug: "internet-praesenz-aufbauen-komplette-online-kampagne",
		imgSrc: "/assets/artic8.png",
		title: "Wie helfen wir, im Internet präsent zu sein?",
		date: "2024-07-20",
		description:
			"Lokale Sichtbarkeit, bezahlter Traffic und nachhaltiger SEO-Zuwachs – so kombinieren wir Google Business, Ads, Social und SEO in einem Budget ≤ 500 €.",
		keypoints: [
			"Google Business: lokaler Hebel für schnelle Sichtbarkeit.",
			"SEA liefert sofortige Tests für Botschaften und Angebote.",
			"Facebook/Instagram Ads bauen Reichweite & Community auf.",
			"SEO sorgt für nachhaltig wachsenden, planbaren Traffic.",
		],
		details: [
			"Google Business-Profil: Regelmäßige Posts, Q&A, Kategorien, Services und lokale Keywords – dazu echte Bewertungen mit Antwortstrategie.",
			"SEA: Kampagnenstruktur nach Intent (Brand/Generic/Competitor) + Landingpages, die genau diese Intents bedienen.",
			"Facebook/Instagram: Kurze Video-Formate + Social Proof; klare Hooks, Vorteile in Bullet-Form und eindeutige CTAs.",
			"SEO: Tech-Audit, Keyword-Mapping, Silos (Themencluster) und Content-Plan, der Suchintentionen präzise abdeckt.",
			"Budgetsteuerung: 70/20/10-Prinzip – 70 % bewährte Kanäle, 20 % Tests, 10 % Innovation; wöchentliche Reportings.",
		],
		readingTime: "6 min",
		tags: ["Local SEO", "SEA", "Social", "Strategie"],
	},

	{
		slug: "wordpress-alternativen-react-nextjs",
		imgSrc: "/assets/artic7.png",
		title:
			"Warum es sich lohnt, Alternativen zu WordPress in Betracht zu ziehen?",
		date: "2024-07-11",
		description:
			"WordPress ist stark – bis Plugins bremsen. Für Performance, Sicherheit und Flexibilität liefert React/Next.js oft das klar bessere Fundament.",
		keypoints: [
			"SSR/SSG → schneller First Paint & bessere CWV.",
			"Ohne Plugin-Ballast: weniger Angriffsfläche, weniger Bugs.",
			"DX: Komponenten, Routing, Datenfetching = klare Architektur.",
			"SEO-Vorteile: serverseitiges Rendering, saubere Markup-Kontrolle.",
		],
		details: [
			"Performance: Bildoptimierung, Route-based Code-Splitting, Edge-Caching und Preloading von LCP-Ressourcen sind nativ lösbar.",
			"Sicherheit: Kein Plugin-Zoo, weniger Supply-Chain-Risiken, einfache Updates und rollbacks.",
			"Skalierung: Design-Systeme und Wiederverwendbarkeit der UI-Bausteine halten große Projekte stabil und konsistent.",
			"SEO: Voller Zugriff auf Head-Tags, strukturierte Daten und Canonicals; präzise Kontrollierbarkeit der Renderpfade.",
			"Wartung: CI/CD, Preview-Deployments und Testen auf PR-Basis beschleunigen Release-Zyklen.",
		],
		readingTime: "7 min",
		tags: ["Next.js", "Performance", "Sicherheit", "SEO"],
	},

	{
		slug: "internetwerbung-strategien-und-statistiken",
		imgSrc: "/assets/artic4.png",
		title:
			"Werbung für Unternehmen im Internet - Effektive Strategien und Statistiken",
		date: "2024-06-18",
		description:
			"SEA, Social, Content und E-Mail im Zusammenspiel: So planen Sie Budgets, testen Botschaften und optimieren Kampagnen auf ROI.",
		keypoints: [
			"SEA trifft Kaufintention – ideal für schnelle Ergebnisse.",
			"Content-Marketing baut Vertrauen und Markenstärke auf.",
			"Social Ads skalieren Reichweite und Interaktion.",
			"E-Mail bleibt unschlagbar für Re-Engagement.",
		],
		details: [
			"SEA: Struktur nach Match Types & Intent; Anzeigentests (3–5 Varianten), Landingpages mit Message-Match und Social Proof.",
			"Attribution: UTM-Konsistenz, GA4-Events, First/Last-Click und Data-Driven Attribution vergleichen.",
			"Content-Flywheel: Pillar-Seiten + Cluster-Artikel + interne Verlinkung sorgen für Themenautorität.",
			"Social Creatives: 1 Hook, 3 Benefits, 1 Proof, 1 CTA – wiederverwenden in Reels/Shorts für Effizienz.",
			"E-Mail: Willkommens- und Nurture-Flows, saisonale Trigger, klare Segmentierung und Sunset-Policy für Hygiene.",
		],
		readingTime: "9 min",
		tags: ["SEA", "Content", "Social", "E-Mail", "Attribution"],
	},

	{
		slug: "online-shop-eroeffnen-diese-gruende-zaehlen",
		imgSrc: "/assets/artic6.png",
		title: "Warum lohnt es sich, einen Online-Shop zu eröffnen?",
		date: "2024-02-20",
		description:
			"E-Commerce wächst weiter. Mit klarer Nische, schneller UX und Vertrauenselementen bauen Sie planbare Umsätze auf – auch mit kleinem Team.",
		keypoints: [
			"24/7 Umsatz + globale Reichweite.",
			"Niedrigere Fixkosten als stationär.",
			"Personalisierung steigert Warenkorb & Retention.",
			"Headless/Composable bietet Skalierbarkeit.",
		],
		details: [
			"Produkt-Market-Fit: Nischenfokus + klare Positionierung; USPs müssen in 5 Sekunden erkennbar sein.",
			"UX: Schneller Checkout, wenige Felder, diverse Bezahlarten, klare Rückgabe-Infos und Versandzeiten.",
			"CRO: A/B-Tests für Hero, Preisanker, Bundles, Lieferhinweise; Trust-Badges und Bewertungen prominent.",
			"Ops: Fulfillment, Bestandsführung und Support-Automatisierung (z. B. Helpdesk + Makros).",
			"Retention: E-Mail-Flows (Post-Purchase, Win-Back), Loyalty-Programme und UGC-Strategie.",
		],
		readingTime: "6 min",
		tags: ["E-Commerce", "CRO", "UX", "Retention"],
	},

	{
		slug: "mobile-website-warum-sie-entscheidend-ist",
		imgSrc: "/assets/artic5.png",
		title: "4 Gründe, warum die mobile Version einer Webseite so wichtig ist",
		date: "2023-12-07",
		description:
			"Mobile-First ist Standard. Responsive Layouts, schnelle Ladezeiten und klare CTAs entscheiden mobil über Ranking und Umsatz.",
		keypoints: [
			"Über 60 % des Traffics ist mobil.",
			"Mobile CWV wirken stark auf SEO.",
			"Finger-friendly UI spart Frust & Abbrüche.",
			"Performance = Conversion auf kleinen Displays.",
		],
		details: [
			"Design: Fluid Typography, ausreichend Abstand, große Touch-Targets, Sticky-CTA und klare Hierarchie.",
			"Media: Responsive Images (sizes/srcset), moderne Formate (WEBP/AVIF) und lazy-loading unterhalb der Falz.",
			"Technik: Preconnect/Preload für kritische Ressourcen, HTTP/2, minimaler JS-Overhead.",
			"SEO: Mobile-First-Indexing → Inhalte und interne Links müssen mobil voll verfügbar sein.",
			"Analytics: Scroll-Tiefe, Rage-Clicks, Exit-Punkte – priorisieren, was wirklich bremst.",
		],
		readingTime: "5 min",
		tags: ["Mobile-First", "CWV", "UX", "SEO"],
	},

	{
		slug: "webseiten-promotion-online-und-offline-strategien",
		imgSrc: "/assets/artic1.png",
		title: "Webseiten-Promotion - Effektive Online- und Offline-Strategien",
		date: "2023-09-21",
		description:
			"Von SEO bis Events: So kombinieren Sie digitale und analoge Taktiken, um Reichweite, Markenstärke und Leads messbar zu steigern.",
		keypoints: [
			"SEO & Content sind das Fundament.",
			"PR/Events erhöhen Trust & Backlinks.",
			"Social & Communities liefern Reichweite.",
			"E-Mail konvertiert Besucher zu Kunden.",
		],
		details: [
			"Owned + Earned + Paid: Das Dreieck, das Ihre Marke robust macht – jede Säule befeuert die anderen.",
			"Offline-Boost: Vorträge, Meetups, lokale Partnerschaften – Content-Recycling auf Blog und Social.",
			"Content-Distribution: Jeder Artikel bekommt 3–5 Snippets (Zitatkarte, Kurzvideo, Teaser-Thread).",
			"Landingpages: Klarer Nutzen, Social Proof, FAQ-Schema, strukturierte Daten für Rich-Results.",
			"Kennzahlen: Impressionen sind nett – wichtiger sind CTR, Leads, Sales und LTV.",
		],
		readingTime: "7 min",
		tags: ["Promotion", "PR", "SEO", "Content"],
	},

	{
		slug: "sichtbarkeit-im-internet-erhoehen-10-tipps",
		imgSrc: "/assets/artic2.png",
		title: "Wie kann man die Sichtbarkeit im Internet erhöhen?",
		date: "2023-07-10",
		description:
			"10 praktische Hebel für mehr Sichtbarkeit: von technischer Basis über Content-Silos bis zu Social-Signalen und Micro-Conversions.",
		keypoints: [
			"Saubere Technik & CWV zuerst.",
			"Keyword-Mapping + Themencluster.",
			"Interne Links lenken Autorität.",
			"Micro-Conversions füttern den Funnel.",
		],
		details: [
			"Technik: Sitemap, Robots, Canonicals, saubere Statuscodes – Crawler-Budget nicht verschwenden.",
			"Content-Silos: Pillar-Seiten + Cluster; eindeutige Suchintention pro URL, kein Kannibalisieren.",
			"Interne Verlinkung: Kontextuelle Links mit sinnvoller Anchor-Varianz; Breadcrums + Related.",
			"Micro-Conversions: Lead Magnets, Checklisten, Demos – Ziel ist die nächste sinnvolle Aktion.",
			"Kontinuität: 1–2 hochwertige Veröffentlichungen pro Woche schlagen 10 dünne Artikel am Stück.",
		],
		readingTime: "6 min",
		tags: ["Sichtbarkeit", "SEO", "Content-Silos", "CRO"],
	},

	{
		slug: "warum-website-wichtig-7-argumente",
		imgSrc: "/assets/artic3.png",
		title: "Warum ist eine Website wichtig?",
		date: "2023-05-05",
		description:
			"Ihre Website ist Ihre stärkste, skalierbarste Vertriebsressource. 7 Gründe, warum sie die Basis jeder digitalen Strategie ist.",
		keypoints: [
			"24/7 präsent – unabhängig von Plattformen.",
			"Eigene Daten & volle Kontrolle.",
			"Vertrauen durch Design, Cases & Proofs.",
			"Messbarkeit ermöglicht echtes Wachstum.",
		],
		details: [
			"Eigentum statt Miete: Social-Reichweite kann verschwinden – Ihre Domain nicht.",
			"Positionierung: Mission, Werte, Team und Referenzen bauen Vertrauen schneller auf als Anzeigen.",
			"Conversion-Engine: Von der Landingpage bis zum Checkout – alles ist optimierbar und testbar.",
			"Skalierung: Mehrsprachigkeit, Hub-Strukturen, Microsites – die Website wächst mit Ihren Zielen.",
			"Ökosystem: API-First, Integrationen (CRM, Newsletter, Payment) – Prozesse werden effizient.",
		],
		readingTime: "5 min",
		tags: ["Strategie", "Brand", "CRO", "Daten"],
	},
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validatePosts(posts) {
	const set = new Set();
	for (const p of posts) {
		if (!p.slug || !SLUG_RE.test(p.slug)) {
			throw new Error(
				`[blogPosts] Nieprawidłowy slug: "${p.slug}". Dozwolone: [a-z0-9-].`
			);
		}
		if (set.has(p.slug)) {
			throw new Error(`[blogPosts] Duplikat slugu: "${p.slug}".`);
		}
		set.add(p.slug);
		if (!p.title || !p.imgSrc || !p.date || !Array.isArray(p.details)) {
			throw new Error(
				`[blogPosts] Brakuje wymaganych pól w wpisie "${p.slug}".`
			);
		}
	}
}

validatePosts(RAW_POSTS);

const blogPosts = Object.freeze(
	[...RAW_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date))
);

export default blogPosts;
