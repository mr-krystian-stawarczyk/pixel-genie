import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import ReactGA from "react-ga";
import i18n from "../i18n.js";

const NavbarComp = ({ toggleTheme }) => {
	const { t, i18n } = useTranslation();
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");
	const [currentTheme, setCurrentTheme] = useState("");
	const [selectedFlag, setSelectedFlag] = useState(
		"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
	);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleDropdownSelect = (eventKey, event) => {
		setDropdownOpen(false);
		switch (eventKey) {
			case "flag1":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
				);
				break;
			case "flag2":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flageng.png"
				);
				break;
			case "flag3":
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagpl.png"
				);
				break;
			default:
				setSelectedFlag(
					"/assets/webagentur-webentwicklung-nettetal-seo-flagde.png"
				);
		}
	};

	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme]);

	useEffect(() => {
		ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

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

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const bgColor = currentTheme === "light" ? "#fff" : "#111";
		document.body.style.backgroundColor = bgColor;
	}, [currentTheme]);

	// Dodajemy obsługę zmiany motywu przy pierwszym renderowaniu
	useEffect(() => {
		// Sprawdź, czy preferowany motyw przeglądarki jest ciemny
		const prefersDarkTheme =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (prefersDarkTheme) {
			setTheme("dark"); // Ustawienie ciemnego motywu jako domyślnego, jeśli preferowany motyw przeglądarki jest ciemny
		}
	}, []);

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
			<Container>
				<Navbar.Brand as={Link} href="/" className=" rounded  py-0 ">
					<Image
						src="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
						alt="pixel-genie-nettetal-webentwicklung-logo"
						width={50}
						height={50}
						className="pb-2 mb-1"
					/>
					<span
						style={{ fontSize: "2rem" }}
						className={scrolled ? "logo" : "logo1"}
					>
						<span className="mx-2">Pixel Genie</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
				/>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center  m-1  navbar-toggler border-0"
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded ">
						<Nav.Link as={Link} href="about" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{t("nav5")}
							</Button>
						</Nav.Link>
						<NavDropdown
							title={t("nav1")}
							id="basic-nav-dropdown"
							className="btn-md shadow-md btn-nav-drop rounded  m-1 p-1 "
							menuVariant="dark"
							style={{
								fontSize: "1rem",
							}}
							show={dropdownOpen}
							onToggle={setDropdownOpen}
						>
							<NavDropdown.Item as={Link} href="web">
								<Button className="w-100 border-0 btn-nav shadow-sm ">
									{t("nav8")}
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="seo">
								<Button className=" border-0 btn-nav shadow-sm w-100">
									SEO
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="branding">
								<Button className="w-100 border-0 btn-nav ">Branding</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="media">
								<Button className="w-100 border-0 btn-nav ">Design</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="socialmedia">
								<Button className="w-100 border-0 btn-nav ">
									Social Media
								</Button>
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} href="blog">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{t("nav3")}
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="contact" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{t("nav6")}
							</Button>
						</Nav.Link>
						<Button
							onClick={toggleTheme}
							className="btn-nav border-0  btn-md py-2 mx-1"
						>
							{currentTheme === "light" ? (
								<BsFillMoonFill style={{ color: "grey" }} />
							) : (
								<BsFillSunFill style={{ color: "yellow" }} />
							)}
						</Button>
						<Dropdown
							onSelect={handleDropdownSelect}
							className="m-1 border-0 mx-2"
						>
							<Dropdown.Toggle className="btn-nav border-0 py-2">
								<Image
									src={selectedFlag}
									alt="Selected Flag"
									width="25"
									height="25"
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
									/>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
