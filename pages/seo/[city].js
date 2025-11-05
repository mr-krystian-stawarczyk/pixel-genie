import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";

// Sekcje (SSR-friendly — bez efektów okienkowych)
const SeoHead = dynamic(() => import("@/components/seo-city/SeoHead"));
const Hero = dynamic(() => import("@/components/seo-city/Hero"));
const CityFacts = dynamic(() => import("@/components/seo-city/CityFacts"));
const Services = dynamic(() => import("@/components/seo-city/Services"));
const Process = dynamic(() => import("@/components/seo-city/Process"));
const Pricing = dynamic(() => import("@/components/seo-city/Pricing"));
const CaseStudies = dynamic(() => import("@/components/seo-city/CaseStudies"));
const FAQ = dynamic(() => import("@/components/seo-city/FAQ"));
const ContactCTA = dynamic(() => import("@/components/seo-city/ContactCTA"));

// Komponenty klienckie / cięższe — bez SSR + skeletony
const ReadingProgressBar = dynamic(
	() => import("@/components/ReadingProgressBar"),
	{
		ssr: false,
		loading: () => (
			<div
				style={{ height: 4, background: "rgba(0,0,0,.08)", borderRadius: 2 }}
			/>
		),
	}
);
const SmartCTA = dynamic(() => import("@/components/SmartCTA"), { ssr: false });
const LocalNRWHook = dynamic(() => import("@/components/LocalNRWHook"), {
	ssr: false,
});
const PeopleAlsoRead = dynamic(() => import("@/components/PeopleAlsoRead"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
	loading: () => <div className="skeleton" style={{ height: 120 }} />,
});
const CityMap = dynamic(() => import("@/components/CityMap"), {
	ssr: false,
	loading: () => <div className="skeleton" style={{ height: 350 }} />,
});
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
const AutoTranslate = dynamic(() => import("@/components/AutoTranslate"));

export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const citySlug = params.city.toLowerCase();
	const cityData =
		citiesData.find(
			(c) => (c.slug ?? slugify(c.city)).toLowerCase() === citySlug
		) ?? null;

	if (!cityData) return { notFound: true };

	const seo = generateSeoData(cityData);
	return { props: { cityData, seo } };
}

export default function SeoCityPage({ cityData, seo }) {
	const { city } = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1);

	return (
		<>
			<SeoHead seo={seo} />

			<style>{`
        @media (max-width: 991px) { .smart-cta { display:none !important; } }
        .skeleton { 
          background: linear-gradient(90deg, rgba(0,0,0,.06), rgba(0,0,0,.12), rgba(0,0,0,.06)); 
          animation: pulse 1.2s infinite; 
          border-radius: 12px; 
          background-size: 200% 100%;
        }
        @keyframes pulse { 0%{background-position:0% 0} 100%{background-position:100% 0} }
      `}</style>

			<ReadingProgressBar />
			<SmartCTA triggerPercent={30} />

			<Hero cityName={cityName} GoogleReviews={GoogleReviews} />

			<CityFacts cityData={cityData} CityMap={CityMap} />

			<Services cityName={cityName} />

			<Process cityName={cityName} />

			<Pricing
				cityName={cityName}
				MotionFadeIn={MotionFadeIn}
				AutoTranslate={AutoTranslate}
			/>

			<CaseStudies />

			<FAQ cityName={cityName} />

			<ContactCTA cityName={cityName} />

			<LocalNRWHook />

			<PeopleAlsoRead tagHint="SEO" />
		</>
	);
}
