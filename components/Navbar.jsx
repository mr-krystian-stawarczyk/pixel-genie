import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Row, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import flag1 from "../public/assets/de-flag.png";
import flag2 from "../public/assets/eng-flag.png";
import flag3 from "../public/assets/pl-flag.png";
const NavbarComp = () => {
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");
	const [currentTheme, setCurrentTheme] = useState("");
	const [selectedFlag, setSelectedFlag] = useState(flag1);
	const { theme, setTheme } = useTheme();
	const handleDropdownSelect = (eventKey, event) => {
		switch (eventKey) {
			case "flag1":
				setSelectedFlag(flag1);
				break;
			case "flag2":
				setSelectedFlag(flag2);
				break;
			case "flag3":
				setSelectedFlag(flag3);
				break;
			default:
				setSelectedFlag(flag1);
		}
	};
	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme]);

	const toggleTheme = () => {
		if (currentTheme === "light") {
			setTheme("dark");
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		} else {
			setTheme("light");
			document.body.classList.add("light");
			document.body.classList.remove("dark");
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
		const bgColor = currentTheme === "dark" ? "#111" : "#fff";
		document.body.style.backgroundColor = bgColor;
	}, [currentTheme]);

	const { t } = useTranslation();

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
						alt=""
						src="/assets/logo3.png"
						width="50"
						height="50"
						className="d-inline-block align-top "
					/>
					<span style={{ fontSize: "2rem" }} className="">
						{" "}
						Pixel Genie
					</span>
				</Navbar.Brand>{" "}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center  m-1 navbar-toggler border-0"
				>
					<Button
						onClick={toggleTheme}
						className="btn-nav border-0  btn-md py-2 m-1"
					>
						{currentTheme === "light" ? (
							<BsFillMoonFill style={{ color: "grey" }} />
						) : (
							<BsFillSunFill style={{ color: "yellow" }} />
						)}
					</Button>
					<Dropdown onSelect={handleDropdownSelect} className="m-1 border-0">
						<Dropdown.Toggle className="btn-nav border-0 py-2">
							<Image
								src={selectedFlag}
								alt="Selected Flag"
								width="25"
								height="25"
							/>
						</Dropdown.Toggle>
						<Dropdown.Menu className="text-center jusitfy-content-center">
							<Dropdown.Item eventKey="flag1">
								<Image src={flag1} alt="Flag 1" width="40" height="40" />
							</Dropdown.Item>
							<NavDropdown.Divider />
							<Dropdown.Item eventKey="flag2 w-100">
								<Image src={flag2} alt="Flag 2" width="40" height="40" />
							</Dropdown.Item>{" "}
							<NavDropdown.Divider />
							<Dropdown.Item eventKey="flag3">
								<Image src={flag3} alt="Flag 3" width="40" height="40" />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Nav className="navbar-collapse justify-content-end text-center rounded">
						<NavDropdown
							title="Services"
							id="basic-nav-dropdown"
							className="btn-md shadow-md btn-nav-drop rounded  m-1"
							style={{
								color: "#000000",
								fontSize: "1.3rem",
								border: "0",
							}}
						>
							<NavDropdown.Item as={Link} href="web" className="">
								<Button className="w-100 border-0 btn-nav shadow-sm ">
									Websites
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="seo" className="">
								<Button className="w-100 border-0 btn-nav shadow-sm ">
									SEO
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="branding">
								<Button className="w-100 border-0 btn-nav ">Branding</Button>{" "}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="media">
								<Button className="w-100 border-0 btn-nav ">Media</Button>{" "}
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} href="socialmedia">
								<Button className="w-100 border-0 btn-nav ">
									Social Media
								</Button>{" "}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} href="work" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								Work
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="blog">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								Blog
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="prices" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								Prices
							</Button>
						</Nav.Link>{" "}
						<Nav.Link as={Link} href="about" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								About
							</Button>
						</Nav.Link>{" "}
						<Nav.Link as={Link} href="contact" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								{" "}
								Contact
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="faq" className="m-1">
							<Button className="btn-md py-2 btn-nav border-0 shadow-md">
								FAQ
							</Button>
						</Nav.Link>{" "}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
