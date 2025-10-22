// /components/BlogIndexList.js
// ✅ Dodatkowa crawlable lista (obok slidera) – pomaga SEO i UX.
import Link from "next/link";
import Image from "next/image";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function BlogIndexList({ posts = [] }) {
	if (!Array.isArray(posts) || posts.length === 0) return null;
	return (
		<Container>
			<Row className="my-5">
				<Col>
					<h1 className="text-center text-bold">Entdecke unsere Tipps</h1>
				</Col>
			</Row>
			<Row className="justify-content-center mt-4">
				{posts.slice(0, 9).map((p) => (
					<Col md={6} lg={4} key={p.slug} className="mb-3">
						<Card className="h-100 bg-transparent border-1 hover">
							<Link href={`/tips/${p.slug}`} className="text-decoration-none">
								<Image
									src={p.imgSrc}
									alt={p.title}
									width={600}
									height={315}
									style={{ borderRadius: "12px", objectFit: "cover" }}
								/>
								<Card.Body>
									<h3 className="h6 fw-semibold">{p.title}</h3>
									<p className=" mb-0">
										{new Date(p.date).toLocaleDateString("de-DE")}
									</p>
								</Card.Body>
							</Link>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}
