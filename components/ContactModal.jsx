"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { useTheme } from "next-themes";
import MotionFadeIn from "@/components/MotionFadeIn";
import Image from "next/image";

function Toast({ type, message, onClose }) {
	useEffect(() => {
		if (!message) return;
		const t = setTimeout(onClose, 3500);
		return () => clearTimeout(t);
	}, [message]);

	if (!message) return null;
	const bg =
		type === "error"
			? "rgba(220,53,69,0.95)"
			: "linear-gradient(135deg,#16a34a,#15803d)";
	return (
		<div
			style={{
				position: "fixed",
				top: 20,
				right: 20,
				padding: "12px 18px",
				color: "white",
				fontSize: 14,
				borderRadius: 10,
				boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
				background: bg,
				zIndex: 99999,
				maxWidth: 400,
			}}
		>
			<strong style={{ display: "block", marginBottom: 4 }}>
				{type === "error" ? "Fehler" : "Erfolg"}
			</strong>
			<span>{message}</span>
		</div>
	);
}

export default function ContactModal({ show, onHide, topic }) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [form, setForm] = useState({
		topic: topic || "",
		name: "",
		email: "",
		phone: "",
		message: "",
		budget: "",
		accepted: false,
	});
	const [status, setStatus] = useState("idle");
	const [toast, setToast] = useState({ type: "", message: "" });

	useEffect(() => setMounted(true), []);

	// Blokada scrolla w tle
	useEffect(() => {
		if (show) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => (document.body.style.overflow = "");
	}, [show]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (status === "loading") return;
		setStatus("loading");

		try {
			const res = await fetch("/.netlify/functions/sendMail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (res.status === 429) {
				setToast({
					type: "error",
					message: "Zu viele Anfragen. Bitte warte eine Minute.",
				});
				setStatus("idle");
				return;
			}
			if (!res.ok) throw new Error("Send failed");

			setToast({
				type: "success",
				message: "Vielen Dank! Ihre Anfrage wurde gesendet.",
			});
			setStatus("success");
			setTimeout(() => {
				onHide?.();
				setStatus("idle");
				setForm({
					topic: topic || "",
					name: "",
					email: "",
					phone: "",
					message: "",
					budget: "",
					accepted: false,
				});
			}, 2000);
		} catch (err) {
			setToast({
				type: "error",
				message: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
			});
			setStatus("error");
		}
	};

	if (!show || !mounted) return null;

	const isDark = theme === "dark";
	const modalBg = isDark
		? "linear-gradient(180deg,#0f172a 0%,#1e293b 100%)"
		: "linear-gradient(180deg,#ffffff,#f8fafc)";
	const textColor = isDark ? "#e2e8f0" : "#111827";
	const subText = isDark ? "#94a3b8" : "#6b7280";

	// 🔥 RENDERUJEMY MODAL POZA LAYOUTEM (PORTAL)
	return createPortal(
		<>
			<Toast
				type={toast.type}
				message={toast.message}
				onClose={() => setToast({ type: "", message: "" })}
			/>

			<div
				className="contact-modal-overlay"
				onClick={onHide}
				style={{
					position: "fixed",
					inset: 0,
					zIndex: 99998,
					background: isDark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.4)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflowY: "auto",
					padding: "2rem 1rem",
				}}
			>
				<MotionFadeIn>
					<div
						className="rounded-4 shadow-lg"
						onClick={(e) => e.stopPropagation()}
						style={{
							position: "relative",
							width: "min(92%, 620px)",
							background: modalBg,
							color: textColor,
							padding: "22px 20px",
							maxHeight: "90vh",
							overflowY: "auto",
							backdropFilter: "blur(8px)",
							WebkitBackdropFilter: "blur(8px)",
							boxShadow: isDark
								? "0 10px 40px rgba(15,23,42,0.8)"
								: "0 10px 36px rgba(0,0,0,0.25)",
							border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
							borderRadius: "1rem",
							animation: "fadeInCenter 0.35s ease",
						}}
					>
						{/* HEADER */}
						<div className="d-flex justify-content-between align-items-center mb-3">
							<div className="d-flex align-items-center gap-2">
								<Image
									src="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
									alt="Pixel Genie Logo"
									style={{
										width: 48,
										height: "auto",
										objectFit: "contain",
									}}
								/>
								<h5 className="fw-bold mb-0">Anfrage senden 🚀</h5>
							</div>
							<button
								onClick={onHide}
								className="btn btn-sm btn-outline-secondary"
								aria-label="Schließen"
							>
								✕
							</button>
						</div>
						<small style={{ color: subText }}>
							Wir melden uns innerhalb von 24–48 h.
						</small>

						{/* FORMULARZ */}
						<Form onSubmit={handleSubmit} className="mt-3">
							<Form.Group className="mb-3">
								<Form.Label>Thema der Anfrage</Form.Label>
								<Form.Select
									name="topic"
									value={form.topic}
									onChange={handleChange}
									required
									style={{
										background: isDark ? "#1e293b" : undefined,
										color: textColor,
										border: isDark ? "1px solid #334155" : undefined,
									}}
								>
									<option value="">Bitte wählen</option>
									<option>Webdesign</option>
									<option>Branding</option>
									<option>Social Media</option>
									<option>SEO</option>
									<option>Kostenlose Hilfe</option>
									<option>Sonstiges</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Ihre Nachricht</Form.Label>
								<Form.Control
									as="textarea"
									rows={4}
									name="message"
									value={form.message}
									onChange={handleChange}
									placeholder="Beschreiben Sie Ihr Anliegen..."
									required
									style={{
										background: isDark ? "#1e293b" : undefined,
										color: textColor,
										border: isDark ? "1px solid #334155" : undefined,
									}}
								/>
							</Form.Group>

							<div className="row">
								<div className="col-md-6 mb-3">
									<Form.Label>Name</Form.Label>
									<Form.Control
										name="name"
										value={form.name}
										onChange={handleChange}
										required
										style={{
											background: isDark ? "#1e293b" : undefined,
											color: textColor,
											border: isDark ? "1px solid #334155" : undefined,
										}}
									/>
								</div>
								<div className="col-md-6 mb-3">
									<Form.Label>E-Mail</Form.Label>
									<Form.Control
										type="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										required
										style={{
											background: isDark ? "#1e293b" : undefined,
											color: textColor,
											border: isDark ? "1px solid #334155" : undefined,
										}}
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 mb-3">
									<Form.Label>Telefon (optional)</Form.Label>
									<Form.Control
										name="phone"
										value={form.phone}
										onChange={handleChange}
										placeholder="+49 ..."
										style={{
											background: isDark ? "#1e293b" : undefined,
											color: textColor,
											border: isDark ? "1px solid #334155" : undefined,
										}}
									/>
								</div>
								<div className="col-md-6 mb-3">
									<Form.Label>Budget (optional)</Form.Label>
									<Form.Select
										name="budget"
										value={form.budget}
										onChange={handleChange}
										style={{
											background: isDark ? "#1e293b" : undefined,
											color: textColor,
											border: isDark ? "1px solid #334155" : undefined,
										}}
									>
										<option value="">Keine Angabe</option>
										<option value="<1000">Unter €1.000</option>
										<option value="1000-1500">€1.000–€1.500</option>
										<option value="2000+">Über €2.000</option>
									</Form.Select>
								</div>
							</div>

							<Form.Check
								className="mb-3"
								type="checkbox"
								name="accepted"
								checked={form.accepted}
								onChange={handleChange}
								label={
									<span style={{ color: subText }}>
										Ich stimme der{" "}
										<a
											href="/impressum"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												color: isDark ? "#38bdf8" : "#0ea5e9",
												textDecoration: "none",
											}}
										>
											Datenschutzerklärung
										</a>{" "}
										zu
									</span>
								}
								required
							/>

							<div className="text-end">
								<Button
									type="submit"
									className="btn px-4 fw-semibold"
									disabled={status === "loading"}
									style={{
										background: isDark
											? "linear-gradient(135deg,#2563eb,#1d4ed8)"
											: "linear-gradient(135deg,#111827,#1f2937)",
										color: "#fff",
										border: "none",
									}}
								>
									{status === "loading" ? (
										<>
											<Spinner size="sm" animation="border" className="me-2" />
											Senden...
										</>
									) : (
										"Senden"
									)}
								</Button>
							</div>
						</Form>
					</div>
				</MotionFadeIn>
				<style jsx>{`
					@keyframes fadeInCenter {
						from {
							opacity: 0;
							transform: scale(0.94) translateY(12px);
						}
						to {
							opacity: 1;
							transform: scale(1) translateY(0);
						}
					}
				`}</style>
			</div>
		</>,
		document.body
	);
}
