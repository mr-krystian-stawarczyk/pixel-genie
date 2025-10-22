// /components/ShareBar.js
import { FaFacebook, FaLinkedin, FaLink } from "react-icons/fa";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
import { gaEvent } from "@/lib/analytics";

const withUtm = (url, source) =>
	`${url}${url.includes("?") ? "&" : "?"}utm_source=${source}&utm_medium=social&utm_campaign=blog_share`;

export default function ShareBar({ pageUrl, title, description }) {
	const [msg, setMsg] = useState("");
	const base = pageUrl || "";

	const share = (platform) => {
		const urlForPlatform = withUtm(base, platform);
		const desc = description || "";
		gaEvent("share_click", { platform, page: base });

		if (
			platform === "native" &&
			typeof navigator !== "undefined" &&
			navigator.share
		) {
			navigator.share({ title, text: desc, url: urlForPlatform }).then(() => {
				setMsg("✅ Geteilt");
				setTimeout(() => setMsg(""), 3000);
			});
			return;
		}

		let shareUrl = "";
		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlForPlatform)}&quote=${encodeURIComponent(title)}%0A${encodeURIComponent(desc)}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlForPlatform)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(desc)}&source=pixel-genie.de`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n${desc}`)}&url=${encodeURIComponent(urlForPlatform)}`;
				break;
			case "email":
				shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${desc}\n\n👉 ${urlForPlatform}`)}`;
				break;
			case "copy":
				if (navigator.clipboard) {
					navigator.clipboard.writeText(urlForPlatform);
					setMsg("🔗 Link kopiert!");
					setTimeout(() => setMsg(""), 3000);
				}
				return;
			default:
				return;
		}
		window.open(
			shareUrl,
			"_blank",
			"noopener,noreferrer,width=750,height=600,left=200,top=100"
		);
	};

	return (
		<div className="my-4">
			<div className="d-flex flex-wrap gap-2">
				<button
					className="btn btn-outline-primary btn-sm"
					onClick={() => share("linkedin")}
					aria-label="Auf LinkedIn teilen"
				>
					<FaLinkedin /> LinkedIn
				</button>
				<button
					className="btn btn-outline-primary btn-sm"
					onClick={() => share("facebook")}
					aria-label="Auf Facebook teilen"
				>
					<FaFacebook /> Facebook
				</button>
				<button
					className="btn btn-outline-primary btn-sm"
					onClick={() => share("twitter")}
					aria-label="Auf X/Twitter teilen"
				>
					<FaXTwitter /> 𝕏 / Twitter
				</button>
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={() => share("email")}
					aria-label="Per E-Mail teilen"
				>
					<FaEnvelope /> E-Mail
				</button>
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={() => share("copy")}
					aria-label="Link kopieren"
				>
					<FaLink /> Link kopieren
				</button>
			</div>
			{msg && <div className="mt-2 small text-success fw-semibold">{msg}</div>}
		</div>
	);
}
