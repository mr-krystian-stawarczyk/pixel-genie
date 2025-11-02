"use client";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillSunFill, BsFillMoonFill, BsX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import AutoTranslate from "@/components/AutoTranslate"; // dopasuj ścieżkę
import ContactButton from "@/components/ContactButton";

const NavbarComp = ({ toggleTheme }) => {
	const { t, i18n } = useTranslation();
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [selectedFlag, setSelectedFlag] = useState(
		"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
	);
	const { theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState("dark");
	const [isLight, setIsLight] = useState(theme === "light");
	const closeMobileMenu = () => {
		setMenuOpen(false);
		document.body.style.overflow = "auto";
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
			setNavbarColor(window.scrollY > 0 ? "#ffffff" : "transparent");
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setTheme(prefersDark ? "dark" : "light");
		setCurrentTheme(prefersDark ? "dark" : "light");
		setIsLight(!prefersDark);
	}, []);
	const handleDropdownSelect = async (eventKey) => {
		setDropdownOpen(false);
		switch (eventKey) {
			case "flag1":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
				);
				i18n.changeLanguage("de");
				break;
			case "flag2":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flageng.png"
				);
				i18n.changeLanguage("en");
				break;
			case "flag3":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png"
				);
				i18n.changeLanguage("pl");
				break;
			case "flag4": // 🇳🇱
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagnl.png"
				);
				i18n.changeLanguage("nl");
				break;
			default:
				break;
		}
	};
	const toggleThemeMode = () => {
		const next = currentTheme === "light" ? "dark" : "light";

		// 🚀 dodaj klasy fade
		document.documentElement.classList.add("theme-fade", "theme-fade-changing");

		// Zmień motyw
		setTheme(next);
		setCurrentTheme(next);
		setIsLight(next === "light");
		toggleTheme();

		// 🔚 usuń po zakończeniu animacji
		setTimeout(() => {
			document.documentElement.classList.remove("theme-fade-changing");
			setTimeout(() => {
				document.documentElement.classList.remove("theme-fade");
			}, 300);
		}, 300);
	};

	const toggleMobileMenu = () => {
		setMenuOpen(!menuOpen);
		document.body.style.overflow = !menuOpen ? "hidden" : "auto";
	};

	// ✉️ Mail – Kostenloses Audit
	const handleAuditMail = () => {
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Kostenloses%20Website%20Audit%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20möchte%20ein%20kostenloses%20Website-Audit%20anfordern.%0A%0ABitte%20überprüfen%20Sie%20meine%20Website%20und%20geben%20Sie%20mir%20ein%20Feedback%20zu%20Design%2C%20SEO%20und%20Performance.%0A%0AHier%20sind%20meine%20Details%3A%0A%0AName%3A%0AFirma%3A%0AWebsite%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
			"_blank"
		);
	};

	const textColor =
		scrolled || currentTheme === "light" ? "#000" : "var(--text-color)";

	return (
		<>
			<Navbar
				expand="lg"
				fixed="top"
				style={{
					height: "70px",
					backgroundColor: scrolled
						? navbarColor // po scrollu — biały z lekkim cieniem
						: currentTheme === "light"
						? "#ffffff"
						: "rgba(0, 0, 0, 0.85)", // ciemne przezroczyste tło w dark mode
					backdropFilter: scrolled ? "blur(12px)" : "none",
					transition: "background-color 0.4s ease, box-shadow 0.3s ease",
					boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
				}}
				className="nav-transition rounded-bottom"
			>
				<Container className="justify-content-between align-items-center">
					<Navbar.Brand
						as={Link}
						href="/"
						className="d-flex align-items-center gap-2"
					>
						<Image
							src="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
							alt="Pixel Genie Logo"
							width={46}
							height={46}
							priority
						/>
						<span
							className="fw-bold"
							style={{
								color: scrolled
									? "#000" // po scrollu – zawsze czarny tekst
									: currentTheme === "light"
									? "#000" // w light theme – czarny
									: "#fff", // w dark theme – biały
								fontSize: "1.2rem",
								transition: "color 0.3s ease",
							}}
						>
							Pixel&nbsp;Genie
						</span>
					</Navbar.Brand>

					<Button
						className="border-0 bg-transparent d-lg-none"
						onClick={toggleMobileMenu}
					>
						{menuOpen ? (
							<BsX
								size={34}
								color={scrolled || currentTheme === "light" ? "#000" : "#fff"}
							/>
						) : (
							<div
								className="navbar-toggler-icon-custom"
								style={{
									backgroundColor:
										scrolled || currentTheme === "light" ? "#000" : "#fff",
								}}
							></div>
						)}
					</Button>

					<Navbar.Collapse id="nav" className="mt-3 mt-lg-0 text-center">
						<Nav className="ms-auto align-items-center gap-2">
							<Nav.Link
								as="button"
								onClick={handleAuditMail}
								className="d-none d-lg-block btn-premium-footer bg-black text-white px-4 py-1"
							>
								🚀 <AutoTranslate>{"Kostenlose Analyse"}</AutoTranslate>
							</Nav.Link>

							<Nav.Link as={Link} href="/" className="m-1">
								<Button className="btn-nav border-0">
									<IoHomeOutline size={20} />
								</Button>
							</Nav.Link>

							<NavDropdown
								title={
									<span style={{ color: "#fff", fontWeight: "bold" }}>
										<AutoTranslate>Dienste</AutoTranslate>
									</span>
								}
								id="dienste-dropdown"
								className="btn-nav-drop border-0 p-0 m-0"
								onMouseEnter={() => setDropdownOpen(true)}
								onMouseLeave={() => setDropdownOpen(false)}
								onClick={() => setDropdownOpen((prev) => !prev)} // ✅ dodane
								show={dropdownOpen}
								menuVariant={currentTheme === "dark" ? "dark" : "light"}
							>
								<div
									style={{
										background:
											currentTheme === "dark"
												? "rgba(15,15,25,0.97)"
												: "rgba(0,55,130,0.95)",
										backdropFilter: "blur(12px)",
										padding: "0.5rem",
										borderRadius: "16px",
										width: "240px",
									}}
								>
									{[
										["/webseitenerstellen", "Webseiten erstellen"],
										["/suchmaschinenoptimierung", "SEO Optimierung"],
										["/webdesign", "Webdesign"],
										["/branding", "Branding"],
										["/socialmediamarketing", "Social Media Marketing"],
									].map(([href, label]) => (
										<NavDropdown.Item
											as={Link}
											href={href}
											key={label}
											className="p-0 my-1"
											onClick={() => setDropdownOpen(false)}
										>
											<Button className="btn-nav w-100">
												<AutoTranslate>{label}</AutoTranslate>
											</Button>
										</NavDropdown.Item>
									))}
								</div>
							</NavDropdown>

							<Nav.Link as={Link} href="/webdesignblog" className="m-1">
								<Button className="btn-nav border-0">Blog</Button>
							</Nav.Link>

							<Nav.Link as={Link} href="/pixelgeniehistory" className="m-1">
								<Button className="btn-nav border-0">
									<AutoTranslate>Pixel</AutoTranslate>
								</Button>
							</Nav.Link>

							<div className="d-flex align-items-center gap-2 mx-1">
								<Dropdown onSelect={handleDropdownSelect}>
									<Dropdown.Toggle
										className="btn-nav border-0 p-2"
										style={{
											background: "transparent",
											color:
												scrolled || currentTheme === "light" ? "#000" : "#fff",
										}}
									>
										<Image
											src={selectedFlag}
											alt="Lang"
											width={24}
											height={24}
											className="mx-1"
											priority
										/>
									</Dropdown.Toggle>
									<Dropdown.Menu
										className="text-center"
										style={{
											background:
												currentTheme === "dark"
													? "rgba(20,20,30,0.95)"
													: "rgba(0,55,130,0.9)",
											backdropFilter: "blur(10px)",
											borderRadius: "14px",
										}}
									>
										{[
											[
												"flag1",
												"DE",
												"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png",
											],
											[
												"flag2",
												"EN",
												"/assets/webagentur-webentwicklung-nettetal-seo-flageng.png",
											],
											[
												"flag3",
												"PL",
												"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png",
											],
											[
												"flag4",
												"NL",
												"/assets/webagentur-webentwicklung-nettetal-seo-flagnl.png",
											], // <—
										].map(([key, alt, src]) => (
											<Dropdown.Item key={key} eventKey={key}>
												<Image src={src} alt={alt} width={36} height={36} />
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>

								<Button
									onClick={toggleThemeMode}
									className="btn-nav border-0 p-2 d-flex align-items-center justify-content-center theme-toggle"
									style={{
										width: "48px",
										height: "48px",
										position: "relative",
									}}
								>
									<div
										className={`theme-icon-wrapper animated-theme ${
											isLight ? "sunrise" : "moonrise"
										}`}
									>
										<BsFillSunFill className="theme-sun" />
										<BsFillMoonFill className="theme-moon" />
									</div>
								</Button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div className={`mobile-overlay ${menuOpen ? "show" : ""}`}>
				<Nav className="d-flex flex-column align-items-center gap-3">
					{[
						["/", "Startseite"],
						["/webseitenerstellen", "Webseiten"],
						["/suchmaschinenoptimierung", "SEO"],
						["/webdesignblog", "Webdesign Blog"],
						["/webdesign", "Webdesign"],
						["/branding", "Branding"],
					].map(([href, label]) => (
						<Button
							key={href}
							as={Link}
							href={href}
							className="btn-nav w-75"
							onClick={closeMobileMenu} // ✅ zamyka po kliknięciu
						>
							<AutoTranslate>{label}</AutoTranslate>
						</Button>
					))}
					<Button
						as={Link}
						href="#kontakt"
						className="btn-premium-footer w-75"
						onClick={closeMobileMenu} // ✅ zamyka po kliknięciu
					>
						🚀 <AutoTranslate>Kostenlose Analyse</AutoTranslate>
					</Button>
				</Nav>
				<div className="d-flex align-items-center justify-content-center gap-3 mt-4">
					{/* 🌐 język */}
					<Dropdown onSelect={handleDropdownSelect}>
						<Dropdown.Toggle
							className="btn-nav border-0 p-2"
							style={{
								background: "transparent",
								color: currentTheme === "light" ? "#000" : "#fff",
							}}
						>
							<Image
								src={selectedFlag}
								alt="Lang"
								width={24}
								height={24}
								className="mx-1"
								priority
							/>
						</Dropdown.Toggle>
						<Dropdown.Menu
							className="text-center"
							style={{
								background:
									currentTheme === "dark"
										? "rgba(20,20,30,0.95)"
										: "rgba(0,55,130,0.9)",
								backdropFilter: "blur(10px)",
								borderRadius: "14px",
							}}
						>
							{[
								[
									"flag1",
									"DE",
									"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png",
								],
								[
									"flag2",
									"EN",
									"/assets/webagentur-webentwicklung-nettetal-seo-flageng.png",
								],
								[
									"flag3",
									"PL",
									"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png",
								],
								[
									"flag4",
									"NL",
									"/assets/webagentur-webentwicklung-nettetal-seo-flagnl.png",
								],
							].map(([key, alt, src]) => (
								<Dropdown.Item key={key} eventKey={key}>
									<Image src={src} alt={alt} width={36} height={36} />
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>

					{/* 🌗 motyw */}
					<Button
						onClick={toggleThemeMode}
						className="btn-nav border-0 p-2 d-flex align-items-center justify-content-center theme-toggle"
						style={{
							width: "48px",
							height: "48px",
							position: "relative",
						}}
					>
						<div
							className={`theme-icon-wrapper animated-theme ${
								isLight ? "sunrise" : "moonrise"
							}`}
						>
							<BsFillSunFill className="theme-sun" />
							<BsFillMoonFill className="theme-moon" />
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};

export default NavbarComp;
