import { useRouter } from "next/router";
import { Container, Card, Row, Col } from "react-bootstrap";
import { urlFor } from "../../lib/client";
import { useTranslation } from "react-i18next";
import { client } from "../../lib/client";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Head from "next/head";
function BlogPost({ post }) {
	const { t, i18n } = useTranslation();
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Head>
				<title>{`${post.name[i18n.language]}`}</title>
				<meta name="description" content={post.name[i18n.language]} />
			</Head>
			<Container fluid className="pt-5">
				<Row className="align-items-center justify-content-center">
					<Col lg={10}>
						<Card className="bg-transparent border-0 m-2 p-3 shadow-lg">
							<Card.Img
								src={urlFor(post.image && post.image[0])}
								alt={post.image && post.image[0].alt}
								style={{ height: "200px", width: "200px" }}
								className="mx-auto"
							/>
							<Link href="/blog">
								<BsFillArrowLeftCircleFill className="arrow-nav" />
							</Link>

							<h1 className="py-2">{post.name[i18n.language]}</h1>

							<h3>{post.details?.details1?.[i18n.language]}</h3>
							<h3 className="py-2">
								{post.details?.details2?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details3?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details4?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details5?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details6?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details7?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details8?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details9?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details10?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details11?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details12?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details13?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details14?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details15?.[i18n.language]}
							</Card.Text>
							<h3 className="py-2">
								{post.details?.details16?.[i18n.language]}
							</h3>
							<Card.Text id="p-wrap">
								{post.details?.details17?.[i18n.language]}
							</Card.Text>
							<Card.Text>{post.date}</Card.Text>
							<Link href="/blog">
								<BsFillArrowLeftCircleFill className="arrow-nav" />
							</Link>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default BlogPost;

export async function getStaticPaths() {
	const result = await client.fetch('*[_type == "blog"]');
	const paths = result.map((post) => ({
		params: { slug: post.slug.current }, // Use "slug" as the parameter
	}));

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const post = await client.fetch(
		'*[_type == "blog" && slug.current == $slug][0]',
		{
			slug,
		}
	);

	return {
		props: {
			post,
		},
	};
}
