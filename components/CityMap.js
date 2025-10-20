// /components/CityMap.js
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CityMap = ({ cityData, height = 320 }) => {
	const containerRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => setIsClient(true), []);

	useEffect(() => {
		if (!isClient || !cityData?.geo || !containerRef.current) return;

		(async () => {
			const L = (await import("leaflet")).default;

			// ✅ Używamy oficjalnych ikon Leaflet z CDN (bez Base64 i bez public/)
			delete L.Icon.Default.prototype._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl:
					"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
				iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
				shadowUrl:
					"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
			});

			const { latitude, longitude } = cityData.geo;
			const cityName = cityData.city
				? cityData.city.charAt(0).toUpperCase() + cityData.city.slice(1)
				: "";

			// 🔁 Usuń poprzednią mapę jeśli istnieje (fix przy hot reload)
			if (containerRef.current._leaflet_id) {
				containerRef.current._leaflet_id = null;
			}

			const map = L.map(containerRef.current, {
				center: [latitude, longitude],
				zoom: 13,
				scrollWheelZoom: false,
			});

			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				maxZoom: 19,
			}).addTo(map);

			L.marker([latitude, longitude])
				.addTo(map)
				.bindPopup(`<b>${cityName}</b><br/>Pixel-Genie SEO Agentur`);

			map.whenReady(() => map.invalidateSize());
		})();
	}, [isClient, cityData]);

	return (
		<div
			ref={containerRef}
			style={{
				width: "100%",
				height,
				borderRadius: "12px",
				background: "rgba(0,0,0,0.15)",
			}}
		>
			{!isClient && (
				<div
					className="d-flex align-items-center justify-content-center h-100"
					style={{ opacity: 0.7 }}
				>
					Karte wird geladen…
				</div>
			)}
		</div>
	);
};

// ✅ SSR wyłączony – działa w Next.js bez błędów "window is not defined"
export default dynamic(() => Promise.resolve(CityMap), { ssr: false });
