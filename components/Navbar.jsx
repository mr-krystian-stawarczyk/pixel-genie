import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const NavbarComp = () => {
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");
	const [currentTheme, setCurrentTheme] = useState("");

	const { theme, setTheme } = useTheme();
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
				<Navbar.Brand as={Link} href="/" className=" rounded ">
					<Image
						alt=""
						src="/assets/logo.png"
						width="50"
						height="50"
						className="d-inline-block align-top "
					/>
					<span style={{ fontSize: "2rem" }}> Pixel Genie</span>
				</Navbar.Brand>{" "}
				<Navbar.Toggle aria-controls="responsive-navbar-nav " />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center "
					style={{}}
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded">
						{" "}
						<Button onClick={toggleTheme}>Dark Mode</Button>
						<NavDropdown
							title="Services"
							id="basic-nav-dropdown"
							className="btn-md shadow-md m-1 btn-nav-drop rounded "
							style={{
								color: "#000000",

								border: "0",
							}}
						>
							<NavDropdown.Item as={Link} href="web" className="">
								<Button className="w-100 border-0 btn-nav shadow-sm ">
									{" "}
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
