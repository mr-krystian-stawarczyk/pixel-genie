import Contact1 from "@/components/Contact1";
import Contact2 from "@/components/Contact2";
import ContactForm from "@/components/ContactForm";
import React from "react";

function contact() {
	return (
		<div className="mt-5 pt-5">
			<Contact1 />
			<ContactForm />
			<Contact2 />
		</div>
	);
}

export default contact;
