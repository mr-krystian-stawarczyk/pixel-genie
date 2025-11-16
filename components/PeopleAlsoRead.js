// /components/PeopleAlsoRead.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";

export default function PeopleAlsoRead({ currentSlug, tagHint }) {
	const pool = blogPosts.filter(
		(p) => p.slug !== currentSlug && (!tagHint || p.tags?.includes(tagHint))
	);
	const picks = pool.slice(0, 6); // already sorted newest first

	if (!picks.length) return null;

	return (
		<section className="mt-5">
			<Row className="text-center my-5">
				<h3 className="fw-bold mb-3">Leser schauen sich auch an</h3>
			</Row>

			<Row>
				{picks.map((p) => (
					<Col md={4} key={p.slug} className="mb-3">
						<Link href={`/tips/${p.slug}`} className="text-decoration-none">
							<Card className="shadow-sm border-0 h-100 rounded hover-lift  bg-transparent">
								<div
									className="position-relative"
									style={{ aspectRatio: "4/2" }}
								>
									<Image
										src={p.imgSrc}
										alt={p.title}
										fill
										sizes="(max-width:768px) 100vw, 33vw"
										style={{ objectFit: "cover" }}
										className="rounded-top"
									/>
								</div>
								<Card.Body>
									<h6 className="fw-semibold">{p.title}</h6>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</section>
	);
}
