import Container from "react-bootstrap/Container";
import type {ReactElement} from "react";

const About = ():ReactElement => {
    document.title = "About";
    return(
        <Container>
            <h1>
                About Page
            </h1>
            <p>
                Whether you're building a home gym, training for a competition, or just starting your fitness journey —
                we've got you covered.
                From dumbbells and resistance bands to professional gym machines, our wide range of products meets the
                needs of athletes, beginners, and fitness enthusiasts alike.
            </p>
            <div className="list-group">
                <a href="/products?category=Balls" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Balls</h5>
                    </div>
                    <p className="mb-1">We have a lot of balls</p>
                </a>
                <a href="/products?category=Dumbbells" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Dumbbells</h5>
                    </div>
                    <p className="mb-1">We have a lot of dumbbells</p>
                </a>
                <a href="/products?category=Mats" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Mats</h5>
                    </div>
                    <p className="mb-1">We have a lot of mats</p>
                </a>
                <a href="/products?category=Accessories" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Accessories</h5>
                    </div>
                    <p className="mb-1">We have a lot of accessories</p>
                </a>
            </div>
        </Container>
    )

}

export default About