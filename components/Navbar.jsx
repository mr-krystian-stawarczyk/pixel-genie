import React from "react";
import { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import ReactGA from "react-ga";
import { IoHomeOutline } from "react-icons/io5";

import i18n from "../i18n.js";
import { useRouter } from "next/router";

const NavbarComp = ({ toggleTheme }) => {
	const router = useRouter();
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
	const handleLinkClick = (url) => {
		ReactGA.pageview(url);
	};

	useEffect(() => {
		ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme]);

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
			<Container className="justify-content-space-between">
				<Navbar.Brand as={Link} href="/" className=" rounded  py-0 mx-0">
					<Image
						src="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
						alt="pixel-genie-nettetal-webentwicklung-logo"
						width={50}
						height={50}
						style={{ width: "auto", height: "auto" }}
						priority
						className="mb-1"
					/>
					<span className={scrolled ? "logo" : "logo1"}>
						<span className="mx-1 text-bold ">Pixel Genie</span>
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
						<Nav.Link as={Link} href="/" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								<IoHomeOutline />
							</Button>
						</Nav.Link>{" "}
						<NavDropdown
							title={t("nav1")}
							id="basic-nav-dropdown"
							className="btn-md shadow-md btn-nav-drop rounded  m-1 p-1 "
							menuVariant="dark"
							style={{
								fontSize: "1rem",
							}}
							show={dropdownOpen} // Close dropdown when mobile menu is open
							onToggle={setDropdownOpen}
						>
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
								setIsLightIcon((prevIsLightIcon) => !prevIsLightIcon);
								// Close the dropdown
							}}
							className="btn-nav border-0 btn-md py-2 mx-1"
						>
							{isLightIcon ? (
								<BsFillMoonFill style={{ color: "grey" }} />
							) : (
								<BsFillSunFill style={{ color: "yellow" }} />
							)}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
