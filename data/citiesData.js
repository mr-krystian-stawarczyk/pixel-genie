const citiesData = [
	{
		city: "nettetal",
		postalCode: "41334",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 41700,
		geo: { latitude: 51.3167, longitude: 6.2833 },
		historySnippet:
			"Nettetal entstand 1970 durch den Zusammenschluss mehrerer Gemeinden im Kreis Viersen.",
		elevation: 40,
		areaKm2: 84.3,
		boroughs: ["Lobberich", "Breyell", "Kaldenkirchen", "Leuth", "Schaag"],
		economicHighlights: {
			Industriestandort:
				"Vor allem mittelständische Unternehmen im Maschinenbau und Logistik",
			Tourismus:
				"Naturpark Maas-Schwalm-Nette zieht jährlich viele Besucher an",
		},
	},
	{
		city: "viersen",
		postalCode: "41747",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 76700,
		geo: { latitude: 51.2569, longitude: 6.3956 }, // pozostawiono oryginał — *ale warto zweryfikować*
		historySnippet:
			"Viersen blickt auf eine lange Geschichte zurück und war im 19. Jahrhundert ein bedeutender Standort der Textilindustrie.",
		elevation: 45,
		areaKm2: 91.1,
		boroughs: ["Dülken", "Süchteln", "Boisheim", "Viersen"],
		economicHighlights: {
			Infrastruktur: "Zentrale Lage im Rheinland, gute Autobahnanbindung",
			Arbeitsmarkt: "Starker Mittelstand, hohe Beschäftigungsquote",
		},
	},
	{
		city: "venlo",
		postalCode: "5911",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 103000,
		geo: { latitude: 51.3704, longitude: 6.1723 }, // pozostawiono
		historySnippet:
			"Venlo ist eine niederländische Stadt am Fluss Maas, bekannt für ihre historische Altstadt und Handelsgeschichte.",
		elevation: 21,
		areaKm2: 101.5,
		boroughs: ["Blerick", "Tegelen", "Arcen", "Lomm", "Velden"],
		economicHighlights: {
			Handel: "Zentraler Einzelhandelsstandort in der Region",
			Logistik: "Großer Logistikstandort aufgrund Nähe zu Deutschland",
		},
	},
	{
		city: "moenchengladbach",
		postalCode: "41061",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 261000,
		geo: { latitude: 51.1803, longitude: 6.4426 }, // pozostawiono — sugeruję sprawdzić
		historySnippet:
			"Mönchengladbach entwickelte sich im 19. Jahrhundert zu einem Zentrum der Textilindustrie.",
		elevation: 70,
		areaKm2: 170.5,
		boroughs: ["Rheydt", "Gladbach", "Odenkirchen", "Eicken", "Giesenkirchen"],
		economicHighlights: {
			Industrie: "Textil, Maschinenbau und Chemie",
			Bildung: "Viele Bildungseinrichtungen, Hochschule Niederrhein",
		},
	},
	{
		city: "krefeld",
		postalCode: "47798",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 226000,
		geo: { latitude: 51.3388, longitude: 6.5853 }, // pozostawiono
		historySnippet:
			"Krefeld ist historisch für seine Seiden- und Textilindustrie bekannt, daher auch der Spitzname ‚Samt- und Seidenstadt‘.",
		elevation: 39,
		areaKm2: 137.7,
		boroughs: ["Bockum", "Uerdingen", "Fischeln", "Cracau", "Kempener Feld"],
		economicHighlights: {
			Industrie: "Textil, Chemie, Maschinenbau",
			Verkehr: "Gute Anbindung an Autobahnen und Rhein-Hafen",
		},
	},
	{
		city: "kempen",
		postalCode: "47906",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 36500,
		geo: { latitude: 51.3658, longitude: 6.4194 },
		historySnippet:
			"Kempen ist eine historische Stadt mit gut erhaltener Altstadt und mittelalterlicher Stadtmauer.",
		elevation: 46,
		areaKm2: 68.5,
		boroughs: ["St. Hubert", "Kempen", "Kempenbruch"],
		economicHighlights: {
			Mittelstand: "Handwerk, Einzelhandel und kleinere Industrie",
			Tourismus: "Historische Altstadt zieht Besucher an",
		},
	},
	{
		city: "duesseldorf",
		postalCode: "40210",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 644000,
		geo: { latitude: 51.2277, longitude: 6.7735 }, // pozostawiono
		historySnippet:
			"Düsseldorf ist die Landeshauptstadt von Nordrhein-Westfalen und bekannt für Mode, Kunst und Wirtschaft.",
		elevation: 38,
		areaKm2: 217.4,
		boroughs: ["Altstadt", "Carlstadt", "Oberkassel", "Flingern", "Hafen"],
		economicHighlights: {
			Finanzen: "Viele Banken und Versicherungen",
			Messe: "International bekannte Messe- und Kongressstadt",
		},
	},
	{
		city: "duisburg",
		postalCode: "47051",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 495000,
		geo: { latitude: 51.4344, longitude: 6.7623 }, // pozostawiono
		historySnippet:
			"Duisburg ist eine wichtige Hafenstadt am Rhein mit starkem industriellen Hintergrund.",
		elevation: 31,
		areaKm2: 232.8,
		boroughs: ["Neudorf", "Homberg", "Rheinhausen", "Walsum", "Wanheimerort"],
		economicHighlights: {
			Industrie: "Stahl- und Chemieindustrie",
			Hafen: "Einer der größten Binnenhäfen Europas",
		},
	},
	{
		city: "oberhausen",
		postalCode: "46045",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 210000,
		geo: { latitude: 51.4963, longitude: 6.8516 }, // pozostawiono
		historySnippet:
			"Oberhausen wuchs im 19. Jahrhundert stark durch die Industrialisierung und den Kohlebergbau.",
		elevation: 40,
		areaKm2: 77.0,
		boroughs: ["Sterkrade", "Alt-Oberhausen", "Lirich", "Bottrop-Oberhausen"],
		economicHighlights: {
			Industrie: "Kohle, Stahl, Energie",
			Freizeit: "CentrO Shopping Mall als touristischer Magnet",
		},
	},
	{
		city: "essen",
		postalCode: "45127",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 582000,
		geo: { latitude: 51.4556, longitude: 7.0116 }, // pozostawiono
		historySnippet:
			"Essen war historisch ein Zentrum der Kohle- und Stahlindustrie im Ruhrgebiet.",
		elevation: 50,
		areaKm2: 210.3,
		boroughs: [
			"Rüttenscheid",
			"Kettwig",
			"Borbeck",
			"Heisingen",
			"Frohnhausen",
		],
		economicHighlights: {
			Industrie: "Stahl, Energie, Dienstleistungen",
			Kultur: "Zollverein, UNESCO-Weltkulturerbe, Museen",
		},
	},

	{
		city: "bocholt",
		postalCode: "46395",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 71500,
		geo: { latitude: 51.8387, longitude: 6.6149 }, // pozostawiono
		historySnippet:
			"Bocholt ist eine historische Stadt im Münsterland, bekannt für seine Textilindustrie im 19. Jahrhundert.",
		elevation: 22,
		areaKm2: 119.3,
		boroughs: ["Stadtmitte", "Hohenhorst", "Spork", "Suderwick", "Rhede"],
		economicHighlights: {
			Industrie: "Textil- und Maschinenbau",
			Logistik: "Günstige Lage nahe niederländischer Grenze",
		},
	},
	{
		city: "moers",
		postalCode: "47441",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 104000,
		geo: { latitude: 51.4545, longitude: 6.6353 }, // pozostawiono
		historySnippet:
			"Moers ist bekannt für seine historische Altstadt und das Moerser Schloss.",
		elevation: 35,
		areaKm2: 64.6,
		boroughs: ["Moers", "Schwafheim", "Rheinkamp", "Asberg", "Meerbeck"],
		economicHighlights: {
			Industrie: "Maschinenbau, Metallverarbeitung",
			Kultur: "Schloss Moers, zahlreiche kulturelle Veranstaltungen",
		},
	},
	{
		city: "geldern",
		postalCode: "47608",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 33700,
		geo: { latitude: 51.5251, longitude: 6.3007 }, // pozostawiono
		historySnippet:
			"Geldern jest mittelalterliche Stadt mit einer langen Geschichte als regionales Verwaltungszentrum.",
		elevation: 25,
		areaKm2: 96.0,
		boroughs: ["Geldern", "Vernum", "Kapellen", "Walbeck", "Lüllingen"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Viehzucht",
			Mittelstand: "Handwerk, kleine und mittlere Unternehmen",
		},
	},
	{
		city: "hamminkeln",
		postalCode: "46499",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 27700,
		geo: { latitude: 51.7907, longitude: 6.6002 }, // pozostawiono
		historySnippet:
			"Hamminkeln liegt am Niederrhein und ist historisch landwirtschaftlich geprägt.",
		elevation: 18,
		areaKm2: 164.4,
		boroughs: ["Ringenberg", "Dingden", "Loikum", "Mehrhoog", "Hamminkeln"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Pferdezucht",
			Industrie: "Kleine Industrie- und Gewerbegebiete",
		},
	},
	{
		city: "kempenbruch",
		postalCode: "47906",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 1200,
		geo: { latitude: 51.345, longitude: 6.38 }, // pozostawiono
		historySnippet:
			"Kempenbruch ist ein ländlicher Ortsteil von Kempen mit historischen Bauernhöfen.",
		elevation: 45,
		areaKm2: 12.5,
		boroughs: ["Kempenbruch"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau, Pferdezucht",
			Naherholung: "Wanderrouten und ländliche Freizeitangebote",
		},
	},
	{
		city: "viersen-dülken",
		postalCode: "41751",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 20000,
		geo: { latitude: 51.2419, longitude: 6.3984 }, // pozostawiono
		historySnippet:
			"Dülken ist ein Stadtteil von Viersen mit mittelalterlicher Stadtgeschichte und historischen Gebäuden.",
		elevation: 42,
		areaKm2: 34.0,
		boroughs: ["Dülken"],
		economicHighlights: {
			Mittelstand: "Handwerk, kleine Industrie",
			Kultur: "Historische Altstadt mit Festen und Museen",
		},
	},
	{
		city: "grefrath",
		postalCode: "47929",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 15000,
		geo: { latitude: 51.3233, longitude: 6.3366 }, // pozostawiono
		historySnippet:
			"Grefrath ist eine ländliche Gemeinde im Kreis Viersen mit historischen Kirchen und Fachwerkhäusern.",
		elevation: 35,
		areaKm2: 30.0,
		boroughs: ["Grefrath", "Oedt", "Vinkrath"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Obstgärten",
			Tourismus: "Fahrrad- und Wanderwege im Niederrhein",
		},
	},
	{
		city: "kempen-st-hubert",
		postalCode: "47906",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 8000,
		geo: { latitude: 51.3843, longitude: 6.4505 },
		historySnippet:
			"St. Hubert ist ein Ortsteil von Kempen, bekannt durch die Hubertuskapelle und ländliche Umgebung.",
		elevation: 46,
		areaKm2: 14.0,
		boroughs: ["St. Hubert"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Reitställe",
			Naherholung: "Wander- und Radwege",
		},
	},
	{
		city: "wachtendonk",
		postalCode: "47669",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 8400,
		geo: { latitude: 51.3919, longitude: 6.3244 }, // pozostawiono
		historySnippet:
			"Wachtendonk ist eine historische Stadt z mit mittelalterlichem Stadtkern und Wasserschlössern.",
		elevation: 25,
		areaKm2: 54.5,
		boroughs: ["Wachtendonk", "Kleve", "Nierswald"],
		economicHighlights: {
			Tourismus: "Historische Gebäude und Naturgebiete",
			Landwirtschaft: "Ackerbau, Obstbau",
		},
	},
	{
		city: "brüggen",
		postalCode: "41379",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 15600,
		geo: { latitude: 51.3, longitude: 6.346 }, // pozostawiono
		historySnippet:
			"Brüggen ist bekannt für Burg Brüggen und die gut erhaltene Altstadt.",
		elevation: 35,
		areaKm2: 78.1,
		boroughs: ["Brüggen", "Bracht", "Born", "Lüllingen"],
		economicHighlights: {
			Tourismus: "Burg und Wanderwege",
			Landwirtschaft: "Ackerbau, Viehzucht",
		},
	},
	{
		city: "schwalmtal",
		postalCode: "47929",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 18800,
		geo: { latitude: 51.322, longitude: 6.342 }, // pozostawiono
		historySnippet:
			"Schwalmtal ist eine ländliche Gemeinde mit mehreren Ortsteilen und historischer Kirche St. Mariä Himmelfahrt.",
		elevation: 33,
		areaKm2: 60.0,
		boroughs: ["Odenkirchen", "Waldniel", "Schwalm"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Pferdezucht",
			Mittelstand: "Handwerk und kleine Betriebe",
		},
	},
	{
		city: "tönisvorst",
		postalCode: "47918",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 30000,
		geo: { latitude: 51.34, longitude: 6.4333 }, // pozostawiono
		historySnippet:
			"Tönisvorst ist bekannt für seine Textilgeschichte und die historische Altstadt.",
		elevation: 35,
		areaKm2: 44.7,
		boroughs: ["St. Tönis", "Vorst"],
		economicHighlights: {
			Mittelstand: "Textilindustrie und Handwerk",
			Kultur: "Museen und historische Gebäude",
		},
	},
	{
		city: "neuss",
		postalCode: "41460",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 159000,
		geo: { latitude: 51.198, longitude: 6.6858 }, // pozostawiono
		historySnippet:
			"Neuss ist eine der ältesten Städte Deutschlands mit römischen Wurzeln.",
		elevation: 45,
		areaKm2: 99.5,
		boroughs: ["Innenstadt", "Norf", "Uedesheim", "Gnadental"],
		economicHighlights: {
			Handel: "Einzelhandel und Messen",
			Industrie: "Chemie- und Metallindustrie",
		},
	},
	{
		city: "meerbusch",
		postalCode: "40667",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 58000,
		geo: { latitude: 51.2612, longitude: 6.6702 }, // pozostawiono
		historySnippet:
			"Meerbusch ist eine wohlhabende Stadt westlich von Düsseldorf mit vielen Villenvierteln.",
		elevation: 35,
		areaKm2: 64.0,
		boroughs: ["Büderich", "Lank", "Osterath", "Nierst"],
		economicHighlights: {
			Mittelstand: "Dienstleistungen, Handel und kleine Industrie",
			Wohnqualität: "Beliebtes Wohngebiet mit hoher Lebensqualität",
		},
	},
	{
		city: "willich",
		postalCode: "47877",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 53000,
		geo: { latitude: 51.2631, longitude: 6.5414 }, // pozostawiono
		historySnippet:
			"Willich ist bekannt für seine historische Kirche und die ländliche Umgebung.",
		elevation: 41,
		areaKm2: 57.0,
		boroughs: ["Anrath", "Neersen", "Schiefbahn", "Willich"],
		economicHighlights: {
			Mittelstand: "Handwerk, kleine und mittlere Unternehmen",
			Landwirtschaft: "Ackerbau in den Außenbereichen",
		},
	},
	{
		city: "erkelenz",
		postalCode: "41812",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 45000,
		geo: { latitude: 51.0797, longitude: 6.3167 }, // pozostawiono
		historySnippet:
			"Erkelenz ist eine historische Stadt im Kreis Heinsberg mit mittelalterlichem Stadtkern.",
		elevation: 65,
		areaKm2: 90.0,
		boroughs: ["Erkelenz", "Kückhoven", "Borschemich", "Holzweiler"],
		economicHighlights: {
			Industrie: "Braunkohle, Handwerk, Mittelstand",
			Kultur: "Historische Kirchen und Museen",
		},
	},
	{
		city: "heinsberg",
		postalCode: "52525",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 41000,
		geo: { latitude: 51.0633, longitude: 6.0983 }, // pozostawiono
		historySnippet:
			"Heinsberg liegt nahe der niederländischen Grenze und war historisch ein Zentrum der Textil- und Lederindustrie.",
		elevation: 44,
		areaKm2: 92.0,
		boroughs: ["Heinsberg", "Randerath", "Karken", "Hückelhoven"],
		economicHighlights: {
			Mittelstand: "Handwerk und regionale Industrie",
			Landwirtschaft: "Ackerbau und Viehzucht",
		},
	},
	{
		city: "wegberg",
		postalCode: "41844",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 28000,
		geo: { latitude: 51.1408, longitude: 6.2789 }, // pozostawiono
		historySnippet:
			"Wegberg ist bekannt für seine ländliche Umgebung iund historische Kirchen.",
		elevation: 50,
		areaKm2: 84.0,
		boroughs: ["Wegberg", "Beeck", "Rothenbach"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Viehzucht",
			Mittelstand: "Handwerk und kleine Betriebe",
		},
	},
	{
		city: "jüchen",
		postalCode: "41363",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 23000,
		geo: { latitude: 51.1, longitude: 6.5 }, // pozostawiono
		historySnippet:
			"Jüchen liegt im Rhein-Kreis Neuss und war historisch landwirtschaftlich geprägt.",
		elevation: 45,
		areaKm2: 72.0,
		boroughs: ["Jüchen", "Blaustein", "Gierath"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Obstbau",
			Mittelstand: "Handwerk und kleine Betriebe",
		},
	},
	{
		city: "reken",
		postalCode: "48734",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 15000,
		geo: { latitude: 51.8292, longitude: 7.0056 }, // pozostawiono
		historySnippet:
			"Reken ist eine ländliche Gemeinde im Münsterland mit historischen Dorfzentren.",
		elevation: 60,
		areaKm2: 77.0,
		boroughs: ["Reken", "Hülsten", "Erle", "Bahnhof Reken"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Viehzucht",
			Mittelstand: "Handwerk und kleine Betriebe",
		},
	},
	{
		city: "xanten",
		postalCode: "46509",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 22000,
		geo: { latitude: 51.6583, longitude: 6.4572 }, // pozostawiono
		historySnippet:
			"Xanten ist berühmt für seine römische Vergangenheit und den Archäologischen Park.",
		elevation: 25,
		areaKm2: 72.0,
		boroughs: ["Xanten", "Wardt", "Lüttingen", "Obermörmter"],
		economicHighlights: {
			Tourismus: "Archäologischer Park, Altstadt",
			Mittelstand: "Einzelhandel, Gastronomie",
		},
	},
	{
		city: "kevelaer",
		postalCode: "47623",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 28000,
		geo: { latitude: 51.5833, longitude: 6.25 }, // pozostawiono
		historySnippet:
			"Kevelaer ist ein bedeutender Wallfahrtsort am Niederrhein.",
		elevation: 25,
		areaKm2: 100.0,
		boroughs: ["Kevelaer", "Winnekendonk", "Kervenheim", "Twisteden"],
		economicHighlights: {
			Pilgertourismus: "Religiöser Tourismus zieht jährlich viele Besucher an",
			Mittelstand: "Handwerk, Gastronomie",
		},
	},
	{
		city: "emmerich",
		postalCode: "46446",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 31000,
		geo: { latitude: 51.8333, longitude: 6.25 }, // pozostawiono
		historySnippet:
			"Emmerich am Rhein ist bekannt für seine Lage am Rhein und den großen Hafen.",
		elevation: 18,
		areaKm2: 80.0,
		boroughs: ["Emmerich", "Elten", "Vrasselt", "Bienen"],
		economicHighlights: {
			Hafen: "Binnenhafen mit Logistik und Industrie",
			Tourismus: "Rheinufer und Altstadt",
		},
	},
	{
		city: "roermond",
		postalCode: "6041",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 60000,
		geo: { latitude: 51.1942, longitude: 5.9872 }, // pozostawiono
		historySnippet:
			"Roermond ist eine historische Stadt in den Niederlanden, bekannt für den gotischen Dom St. Christophorus und das Designer Outlet.",
		elevation: 22,
		areaKm2: 77.0,
		boroughs: ["Roermond", "Asperden", "Roggel", "Herten"],
		economicHighlights: {
			Tourismus: "Designer Outlet und historische Altstadt ziehen Besucher an",
			Handel: "Einzelhandel und Gastronomie",
		},
	},
	{
		city: "reuver",
		postalCode: "5953",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 8000,
		geo: { latitude: 51.2833, longitude: 6.0833 }, // pozostawiono
		historySnippet:
			"Reuver ist ein kleiner Ort in Limburg, Niederlande, bekannt für seine ruhige ländliche Umgebung.",
		elevation: 24,
		areaKm2: 12.5,
		boroughs: ["Reuver", "Oud-Reuver"],
		economicHighlights: {
			Landwirtschaft: "Ackerbau und Viehzucht",
			Pendler: "Viele Einwohner arbeiten in Roermond und Venlo",
		},
	},
	{
		city: "straelen",
		postalCode: "47638",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 15400,
		geo: { latitude: 51.4411, longitude: 6.2681 }, // pozostawiono
		historySnippet:
			"Straelen ist bekannt für seine Blumenzucht und historischen Bauwerke am Niederrhein.",
		elevation: 28,
		areaKm2: 75.0,
		boroughs: ["Straelen", "Birten", "Wachtendonk", "Tolkamer"],
		economicHighlights: {
			Landwirtschaft: "Flora- und Gemüseanbau",
			Tourismus: "Fahrrad- und Wanderwege entlang des Niederrheins",
		},
	},
	{
		city: "weezel",
		postalCode: "46483",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 10500,
		geo: { latitude: 51.6667, longitude: 6.6167 }, // pozostawiono
		historySnippet:
			"Weeze ist eine kleine Stadt am Niederrhein, bekannt für den Flughafen Weeze und historische Kirche St. Cyriacus.",
		elevation: 20,
		areaKm2: 80.0,
		boroughs: ["Weeze", "Winterswijk", "Laar"],
		economicHighlights: {
			Flughafen: "Regionaler Flughafen als Wirtschaftsmotor",
			Landwirtschaft: "Ackerbau und Pferdezucht",
		},
	},
	{
		city: "hilden",
		postalCode: "40721",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 58000,
		geo: { latitude: 51.1704, longitude: 6.9308 }, // pozostawiono
		historySnippet:
			"Hilden ist eine Stadt in Nordrhein-Westfalen mit einer gut erhaltenen Altstadt und starker Textiltradition.",
		elevation: 60,
		areaKm2: 25.0,
		boroughs: ["Hilden", "Mittelstadt", "Hahnenfurth"],
		economicHighlights: {
			Mittelstand: "Textilindustrie, Maschinenbau, Handwerk",
			Einzelhandel: "Lebendige Innenstadt mit Geschäften und Gastronomie",
		},
	},
	{
		city: "monheim-am-rhein",
		postalCode: "40789",
		address: "Fasanenstr. 10",
		phone: "+48 726 897 493",
		email: "mr.krystian.stawarczyk@gmail.com",
		population: 45000,
		geo: { latitude: 51.0912, longitude: 6.8936 }, // pozostawiono
		historySnippet:
			"Monheim am Rhein liegt zwischen Düsseldorf und Köln und ist bekannt für innovative Stadtentwicklung und Unternehmensansiedlungen.",
		elevation: 35,
		areaKm2: 42.0,
		boroughs: ["Monheim", "Baumberg", "Bergen"],
		economicHighlights: {
			Wirtschaft: "Dienstleistungs- und Industrieunternehmen",
			Innovation: "Digitale Infrastruktur und moderne Stadtplanung",
		},
	},
];

export default citiesData;
