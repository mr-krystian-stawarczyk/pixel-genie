"use client";
import { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function ContactModal({ show, onHide, topic }) {
	const [form, setForm] = useState({
		topic: topic || "",
		name: "",
		email: "",
		phone: "",
		message: "",
		accepted: false,
	});
	const [status, setStatus] = useState("idle");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch("/.netlify/functions/sendMail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (res.ok) {
				setStatus("success");
				setTimeout(() => onHide(), 2500);
			} else throw new Error("Send failed");
		} catch {
			setStatus("error");
		}
	};

	if (!show) return null;

	return (
		<div
			className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
			style={{ zIndex: 2000 }}
		>
			<MotionFadeIn>
				<div
					className="bg-white rounded-4 shadow-lg p-4"
					style={{ width: "90%", maxWidth: "500px" }}
				>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h5 className="fw-bold m-0">Anfrage senden 🚀</h5>
						<button onClick={onHide} className="btn btn-sm btn-outline-dark">
							✕
						</button>
					</div>

					{status === "success" ? (
						<div className="text-center py-4">
							<h5>Vielen Dank!</h5>
							<p>Ihre Anfrage wurde gesendet.</p>
						</div>
					) : (
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Thema der Anfrage</Form.Label>
								<Form.Select
									name="topic"
									value={form.topic}
									onChange={handleChange}
									required
								>
									<option value="">Bitte wählen</option>
									<option>Branding</option>
									<option>Webdesign</option>
									<option>Social Media</option>
									<option>Sonstiges</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Ihre Nachricht</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									name="message"
									value={form.message}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Name</Form.Label>
								<Form.Control
									name="name"
									value={form.name}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>E-Mail</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Telefon (optional)</Form.Label>
								<Form.Control
									name="phone"
									value={form.phone}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Check
									type="checkbox"
									name="accepted"
									checked={form.accepted}
									onChange={handleChange}
									label="Ich stimme der Datenschutzerklärung zu"
									required
								/>
							</Form.Group>

							<div className="text-end">
								<Button
									type="submit"
									className="btn btn-dark px-4"
									disabled={status === "loading"}
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

							{status === "error" && (
								<p className="text-danger mt-2">
									Fehler beim Senden. Bitte versuchen Sie es erneut.
								</p>
							)}
						</Form>
					)}
				</div>
			</MotionFadeIn>
		</div>
	);
}
