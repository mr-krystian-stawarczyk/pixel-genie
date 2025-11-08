import Head from "next/head";

export default function TipsIndex() {
	return (
		<>
			<Head>
				<title>Tipps – interne Blognavigation</title>
				<meta name="robots" content="noindex, follow" />
			</Head>
			<main className="container mx-auto py-12">
				<h1 className="text-2xl font-bold mb-4">
					Diese Seite ist nicht für die Indexierung vorgesehen.
				</h1>
				<p>
					Bitte besuchen Sie unseren{" "}
					<a href="/webdesignblog" className="text-blue-500 underline">
						Webdesign Blog
					</a>
					.
				</p>
			</main>
		</>
	);
}
