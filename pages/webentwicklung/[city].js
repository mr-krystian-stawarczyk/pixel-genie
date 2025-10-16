import HeaderCounted from "@/components/HeaderCounted";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import citiesData from "@/data/citiesData";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

const formatCityName = (city) =>
	city
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");

const generateTitle = (city) =>
	`Pixel Genie - Professionelle Webseiten-Erstellung, Webdesign und SEO in ${city}`;

const generateDescription = (city) =>
	`Pixel Genie in ${city}: Ihr Experte für Webentwicklung, Webdesign und SEO. Maßgeschneiderte Webseiten, Online-Marketing und digitale Lösungen für Ihr Unternehmen.`;

const Webentwicklung = ({ city }) => {
	const formattedCity = formatCityName(city);
	const cityData = citiesData.find((c) => c.city === city);

	return (
		<div className="mt-5 pt-2">
			<HeaderCounted />
			<LocalBusinessJsonLd cityData={cityData} />
			<Container className="mt-5 text-black">
				<title>{generateTitle(formattedCity)}</title>
				<meta name="description" content={generateDescription(formattedCity)} />
				{/* Reszta Twojej strony */}
			</Container>
		</div>
	);
};

export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({ params: { city: c.city } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	return { props: { city: params.city } };
}

export default Webentwicklung;
