import { useState } from "react";
import {
	Container,
	Card,
	ButtonGroup,
	Button,
	Row,
	Col,
} from "react-bootstrap";

const data = [
	{
		title: "Website 1",
		description: "This is the description for website 1.",
		category: "websites",
	},
	{
		title: "Branding 1",
		description: "This is the description for branding 1.",
		category: "branding",
	},
	{
		title: "Website 2",
		description: "This is the description for website 2.",
		category: "websites",
	},
];

const CardComponent = ({ title, description, category }) => {
	return (
		<Card className="m-4" style={{ width: "18rem" }}>
			<Card.Body className="text-dark">
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>Category: {category}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const Work2 = () => {
	const [selectedFilter, setSelectedFilter] = useState("websites");

	const filteredData = data.filter(
		(item) => item.category.toLowerCase() === selectedFilter.toLowerCase()
	);

	return (
		<Container>
			<Row className="justify-content-center align-items-center text-center">
				<Col>
					<ButtonGroup className="my-5">
						<Button
							variant="primary"
							active={selectedFilter === "websites"}
							onClick={() => setSelectedFilter("websites")}
						>
							Websites
						</Button>
						<Button
							variant="primary"
							active={selectedFilter === "branding"}
							onClick={() => setSelectedFilter("branding")}
						>
							Branding
						</Button>
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				{" "}
				{filteredData.map((item, index) => (
					<CardComponent
						key={index}
						title={item.title}
						description={item.description}
						category={item.category}
					/>
				))}
			</Row>
		</Container>
	);
};

export default Work2;
