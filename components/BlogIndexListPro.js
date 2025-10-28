// /components/BlogIndexListPro.js
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";

export default function BlogIndexListPro({ posts }) {
	const [activeTag, setActiveTag] = useState("Alle");
	const [visible, setVisible] = useState(6);
	const loaderRef = useRef(null);

	const tags = useMemo(() => {
		const set = new Set();
		posts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
		return ["Alle", ...Array.from(set)];
	}, [posts]);

	const filtered = useMemo(
		() =>
			activeTag === "Alle"
				? posts
				: posts.filter((p) => p.tags?.includes(activeTag)),
		[activeTag, posts]
	);

	const list = filtered.slice(0, visible);

	// Infinite scroll
	useEffect(() => {
		if (!loaderRef.current) return;
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setVisible((v) => Math.min(v + 6, filtered.length || posts.length));
				}
			},
			{ rootMargin: "600px 0px 0px 0px" }
		);
		obs.observe(loaderRef.current);
		return () => obs.disconnect();
	}, [filtered.length, posts.length]);

	// Parallax hover (transform image on mouse move)
	const onMouseMove = (e) => {
		const card = e.currentTarget;
		const img = card.querySelector("img");
		if (!img) return;
		const rect = card.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // tilt
		const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
		card.style.transform = `translateY(-4px) rotateX(${-y}deg) rotateY(${x}deg)`;
		img.style.transform = "scale(1.05)";
	};
	const onMouseLeave = (e) => {
		const card = e.currentTarget;
		const img = card.querySelector("img");
		card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
		if (img) img.style.transform = "scale(1)";
	};

	return (
		<>
			{/* Filters */}
			<div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
				{tags.map((t) => (
					<Button
						key={t}
						size="sm"
						variant={t === activeTag ? "primary" : "outline-primary"}
						onClick={() => {
							setActiveTag(t);
							setVisible(6);
						}}
						className="rounded-pill"
					>
						{t}
					</Button>
				))}
			</div>

			{/* Grid */}
			<Row>
				{list.map((p) => (
					<Col md={6} lg={4} key={p.slug} className="mb-4">
						<Link href={`/tips/${p.slug}`} className="text-decoration-none">
							<Card
								className="h-100 border-0 shadow-sm rounded parallax-card bg-transparent"
								onMouseMove={onMouseMove}
								onMouseLeave={onMouseLeave}
								style={{ transition: "transform .2s ease" }}
							>
								<div
									className="position-relative"
									style={{ aspectRatio: "16/9" }}
								>
									<Image
										src={p.imgSrc}
										alt={p.title}
										fill
										sizes="(max-width:768px) 100vw, 33vw"
										style={{ objectFit: "cover", transition: "transform .25s" }}
										className="rounded-top"
									/>
								</div>
								<Card.Body className="text-start">
									<h5 className="fw-bold">{p.title}</h5>
									<p className="text-muted small mb-2">
										{new Date(p.date).toLocaleDateString("de-DE")} ·{" "}
										{p.readingTime}
									</p>
									<p className="mb-2">
										{p.description.length > 160
											? p.description.slice(0, 160) + "…"
											: p.description}
									</p>
									<div className="d-flex flex-wrap gap-2">
										{(p.tags || []).slice(0, 4).map((t) => (
											<Badge key={t} bg="light" text="dark" className="border">
												{t}
											</Badge>
										))}
									</div>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				))}
			</Row>

			{/* Sentinel for infinite load */}
			<div ref={loaderRef} style={{ height: 1 }} />

			{/* Fallback "Load more" for no-IntersectionObserver envs */}
			{visible < filtered.length && (
				<div className="text-center mt-3">
					<Button onClick={() => setVisible((v) => v + 6)}>Mehr laden</Button>
				</div>
			)}
		</>
	);
}
