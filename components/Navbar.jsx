"use client";
import React, { useState, useEffect } from "react";
import {
	Navbar,
	Nav,
	Container,
	Button,
	Dropdown,
	NavDropdown,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillSunFill, BsFillMoonFill, BsX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { loadLanguage } from "../i18n.js";

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
				await loadLanguage("eng");
				break;
			case "flag3":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png"
				);
				await loadLanguage("pl");
				break;
			default:
				break;
		}
	};

	const toggleThemeMode = () => {
		const next = currentTheme === "light" ? "dark" : "light";
		setTheme(next);
		setCurrentTheme(next);
		setIsLight(next === "light");
		toggleTheme();
	};

	const toggleMobileMenu = () => {
		setMenuOpen(!menuOpen);
		document.body.style.overflow = !menuOpen ? "hidden" : "auto";
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
					backgroundColor: scrolled ? navbarColor : "transparent",
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
								color: textColor,
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
							<Nav.Link as={Link} href="#kontakt" className="d-none d-lg-block">
								<button className="btn-premium-footer px-4 py-1">
									🚀 Kostenlose Analyse
								</button>
							</Nav.Link>

							<Nav.Link as={Link} href="/" className="m-1">
								<Button className="btn-nav border-0">
									<IoHomeOutline size={20} />
								</Button>
							</Nav.Link>

							<NavDropdown
								title={
									<span style={{ color: "#fff", fontWeight: "bold" }}>
										Dienste
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
										["/branding", "Branding"],
										["/webdesign", "Webdesign"],
										["/socialmediamarketing", "Social Media Marketing"],
									].map(([href, label]) => (
										<NavDropdown.Item
											as={Link}
											href={href}
											key={label}
											className="p-0 my-1"
											onClick={() => setDropdownOpen(false)}
										>
											<Button className="btn-nav w-100">{label}</Button>
										</NavDropdown.Item>
									))}
								</div>
							</NavDropdown>

							<Nav.Link as={Link} href="/webdesignblog" className="m-1">
								<Button className="btn-nav border-0">Blog</Button>
							</Nav.Link>

							<Nav.Link as={Link} href="/pixelgeniehistory" className="m-1">
								<Button className="btn-nav border-0">Geschichte</Button>
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
										className={`theme-icon-wrapper animated-theme ${isLight ? "sunrise" : "moonrise"}`}
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
				<Nav className="d-flex flex-column align-items-center gap-3 mt-5">
					{[
						["/", "Startseite"],
						["/webseitenerstellen", "Webseiten"],
						["/suchmaschinenoptimierung", "SEO"],
						["/branding", "Branding"],
						["/webdesign", "Webdesign"],
					].map(([href, label]) => (
						<Button
							key={href}
							as={Link}
							href={href}
							className="btn-nav w-75"
							onClick={closeMobileMenu} // ✅ zamyka po kliknięciu
						>
							{label}
						</Button>
					))}
					<Button
						as={Link}
						href="#kontakt"
						className="btn-premium-footer w-75"
						onClick={closeMobileMenu} // ✅ zamyka po kliknięciu
					>
						🚀 Kostenlose Analyse
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
