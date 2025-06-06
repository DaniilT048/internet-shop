import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import type {ReactElement} from "react";

const About = ():ReactElement => {
    document.title = "About";
    return(
        <Container>
            <h1>
                About Page
            </h1>
            <p>
                Whether you're building a home gym, training for a competition, or just starting your fitness journey — we've got you covered.
                From dumbbells and resistance bands to professional gym machines, our wide range of products meets the needs of athletes, beginners, and fitness enthusiasts alike.
            </p>
            <ul>
                <li>We are have <Link to="/products?category=Balls" className="link-primary">Balls</Link></li>
                <li>We are have <Link to="/products?category=Dumbbells" className="link-primary">Dumbbells</Link></li>
                <li>We are have <Link to="/products?category=Mats" className="link-primary">Mats</Link></li>
                <li>We are have <Link to="/products?category=Accessories" className="link-primary">Accessories</Link></li>
            </ul>
        </Container>
    )

}

export default About