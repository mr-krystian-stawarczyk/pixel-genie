"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const ContactModal = dynamic(() => import("./ContactModal"), { ssr: false });

export default function ContactButton({ topic, children, className }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<button
				onClick={() => setShow(true)}
				className={className || "btn  px-4 py-2 fw-semibold"}
			>
				{children || "Kontakt aufnehmen"}
			</button>
			<ContactModal show={show} onHide={() => setShow(false)} topic={topic} />
		</>
	);
}
