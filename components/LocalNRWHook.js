// /components/LocalNRWHook.js
import Link from "next/link";
import { Row } from "react-bootstrap";

export default function LocalNRWHook() {
	return (
		<Row className="align-tems-center justify-content-center text-center">
			<section className="p-4 rounded bg-transparent shadow-sm mt-4 align-tems-center justify-content-center">
				<h4 className="fw-bold mb-2">Webdesign für Unternehmen rund um Nettetal</h4>
				<p className="mb-2">Websites für Selbstständige und kleine Unternehmen in:</p>
				<div className="d-flex flex-wrap gap-3 align-tems-center justify-content-center text-center">
					{[
						["Nettetal", "/webdesign-agentur/nettetal/"],
						["Viersen", "/webdesign-agentur/viersen/"],
						["Krefeld", "/webdesign-agentur/krefeld/"],
						["Mönchengladbach", "/webdesign-agentur/moenchengladbach/"],
						
					].map(([name, href]) => (
						<Link
							key={href}
							href={href}
							className="btn btn-sm btn-outline-primary rounded-pill"
						>
							{name}
						</Link>
					))}
				</div>
			</section>{" "}
		</Row>
	);
}
