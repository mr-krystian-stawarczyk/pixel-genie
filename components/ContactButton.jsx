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
				className={className || "btn btn-dark px-4 py-2"}
			>
				{children || "Kontakt"}
			</button>

			<ContactModal show={show} onHide={() => setShow(false)} topic={topic} />
		</>
	);
}
