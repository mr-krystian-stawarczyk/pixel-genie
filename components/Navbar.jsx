import React, { useState, useEffect, useRef } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import dynamic from "next/dynamic";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import ReactGA from "react-ga";
import { IoHomeOutline } from "react-icons/io5";

import i18n from "../i18n.js";
import { useRouter } from "next/router";

const NavbarComp = ({ toggleTheme }) => {
	const CountUp = dynamic(() => import("react-countup"), { ssr: false });
	const { t, i18n } = useTranslation();
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");
	const [currentTheme, setCurrentTheme] = useState("dark");
	const [isLightIcon, setIsLightIcon] = useState(false);
	const [selectedFlag, setSelectedFlag] = useState(
		"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
	);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const counterRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	// Google Analytics
	useEffect(() => {
		ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	// Scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
				setNavbarColor("#ffffff");
			} else {
				setScrolled(false);
				setNavbarColor("transparent");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Initial theme setup
	useEffect(() => {
		if (!theme || theme === "system") {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			const initialTheme = prefersDark ? "dark" : "light";
			setTheme(initialTheme);
			setCurrentTheme(initialTheme);
		} else {
			setCurrentTheme(theme);
		}
	}, []);

	// Update body background color on theme change
	useEffect(() => {
		if (currentTheme) {
			const bgColor = currentTheme === "light" ? "#fff" : "#111";
			document.body.style.backgroundColor = bgColor;
		}
	}, [currentTheme]);

	// Counter observer
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.3 }
		);
		if (counterRef.current) observer.observe(counterRef.current);
		return () => observer.disconnect();
	}, []);

	const handleDropdownSelect = (eventKey) => {
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
				i18n.changeLanguage("eng");
				break;
			case "flag3":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png"
				);
				i18n.changeLanguage("pl");
				break;
			default:
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
				);
		}
	};

	useEffect(() => {
		if (theme) {
			setCurrentTheme(theme);
		}
	}, [theme]);

	const getTextColor = () => {
		if (scrolled) return "#000"; // scroll → navbar biały → liczby czarne
		if (currentTheme === "light") return "#000"; // light theme → liczby czarne
		return "#fff"; // dark theme bez scrolla → białe
	};

	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
				backgroundColor: navbarColor,
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom"
			collapseOnSelect
		>
			<Container className="justify-content-space-between">
				<Navbar.Brand as={Link} href="/" className="rounded py-0 mx-0">
					<Image
						src="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
						alt="pixel-genie-nettetal-webentwicklung-logo"
						width={50}
						height={50}
						style={{ width: "auto", height: "auto" }}
						priority
						className="mb-1"
					/>
					<span
						className="mx-1 text-bold"
						style={{
							color: scrolled
								? "#000000" // zawsze czarny, jeśli scrollujesz w dół
								: currentTheme === "light"
									? "#000000" // jasny motyw → czarny
									: "#ffffff", // ciemny motyw → biały
							transition: "color 0.5s ease",
						}}
					>
						Pixel Genie
					</span>
				</Navbar.Brand>
				<Dropdown onSelect={handleDropdownSelect} className=" border-0 ">
					<Dropdown.Toggle className="btn-nav border-0 ">
						<Image
							src={selectedFlag}
							alt="Selected Flag"
							width="25"
							height="25"
							priority
						/>
					</Dropdown.Toggle>
					<Dropdown.Menu className="text-center jusitfy-content-center  my-dropdown">
						<Dropdown.Item eventKey="flag1">
							<Image
								src="/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
								alt="webagentur-webentwicklung-nettetal-seo-flagde"
								width="40"
								height="40"
								onClick={() => i18n.changeLanguage("de")}
								priority
							/>
						</Dropdown.Item>
						<NavDropdown.Divider />
						<Dropdown.Item eventKey="flag2">
							<Image
								src="/assets/webagentur-webentwicklung-nettetal-seo-flageng.png"
								alt="webagentur-webentwicklung-nettetal-seo-flageng"
								width="40"
								height="40"
								onClick={() => i18n.changeLanguage("eng")}
								priority
							/>
						</Dropdown.Item>
						<NavDropdown.Divider />
						<Dropdown.Item eventKey="flag3">
							<Image
								src="/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png"
								alt="webagentur-webentwicklung-nettetal-seo-flagpl"
								width="40"
								height="40"
								onClick={() => i18n.changeLanguage("pl")}
								priority
							/>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
					className="btn-sm"
				/>

				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center  p-3  navbar-toggler border-0"
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded ">
						<div
							ref={counterRef}
							className="d-none d-lg-flex flex-column align-items-center justify-content-center mx-auto"
							style={{
								minWidth: "260px",
								textAlign: "center",
								transform: "translateY(2px)",
							}}
						>
							<div className="d-flex justify-content-center gap-5">
								{[
									{ end: 31, label: "Kunden", suffix: "+" },
									{ end: 72, label: "Projekte", suffix: "+" },
									{ end: 87, label: "Reichweite", suffix: "K+" },
								].map((item, idx) => (
									<div className="text-center" key={idx}>
										<h6
											className="fw-bold mb-0"
											style={{
												color: getTextColor(),
												transition: "color 0.5s ease",
											}}
										>
											{isVisible && (
												<CountUp
													start={0}
													end={item.end}
													duration={3}
													style={{ color: getTextColor() }}
												/>
											)}
											{item.suffix}
										</h6>
										<p
											className="mb-0 small"
											style={{
												color: getTextColor(),
												transition: "color 0.5s ease",
											}}
										>
											{item.label}
										</p>
									</div>
								))}
							</div>
						</div>
						<Nav.Link as={Link} href="/" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								<IoHomeOutline />
							</Button>
						</Nav.Link>{" "}
						<NavDropdown
							title={t("nav1")}
							id="basic-nav-dropdown"
							className="btn-md shadow-md btn-nav-drop rounded  my-2 p-1 "
							menuVariant="dark"
							style={{
								fontSize: "1rem",
							}}
							show={dropdownOpen} // Close dropdown when mobile menu is open
							onToggle={setDropdownOpen}
						>
							{" "}
							<NavDropdown.Item as={Link} href="/webseitenerstellen">
								<Button className="w-100 border-0 btn-nav shadow-sm ">
									{t("nav8")}
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/suchmaschinenoptimierung">
								<Button className=" border-0 btn-nav shadow-sm w-100">
									SEO
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/branding">
								<Button className="w-100 border-0 btn-nav ">Branding</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/webdesign">
								<Button className="w-100 border-0 btn-nav ">Webdesign</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/socialmediamarketing">
								<Button className="w-100 border-0 btn-nav ">
									Social Media
								</Button>
							</NavDropdown.Item>
						</NavDropdown>{" "}
						<Nav.Link as={Link} href="/webdesignblog">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{t("nav3")}
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/pixelgeniehistory" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{t("nav5")}
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="#kontakt" className="m-1">
							<Button className="btn-md py-2 btn-success border-0 shadow-md">
								Kontakt
							</Button>
						</Nav.Link>
						<Button
							onClick={() => {
								toggleTheme();
								setIsLightIcon((prev) => !prev);
							}}
							className="btn-nav border-0 btn-md py-2 mx-1"
						>
							{isLightIcon ? (
								<BsFillMoonFill style={{ color: "grey" }} />
							) : (
								<BsFillSunFill style={{ color: "yellow" }} />
							)}
						</Button>
						<div className="d-lg-none text-center my-2">
							<div className="d-flex justify-content-center gap-3">
								{[
									{ end: 31, label: "Kunden", suffix: "+" },
									{ end: 72, label: "Projekte", suffix: "+" },
									{ end: 87, label: "Reichweite", suffix: "K+" },
								].map((item, idx) => (
									<div key={idx}>
										<h6 className="fw-bold mb-0">
											{isVisible && (
												<CountUp start={0} end={item.end} duration={3} />
											)}
											{item.suffix}
										</h6>
										<p className="mb-0 small">{item.label}</p>
									</div>
								))}
							</div>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
