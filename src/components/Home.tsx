import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type {ReactElement} from "react";

const Home = ():ReactElement => {
    document.title = "Home";
    return(
    <Container >
        <Row>
            <Col >
                <h1 className="d-flex justify-content-center">Welcome to SportLine – Your Ultimate Sports Gear Destination</h1>
                <p>Discover high-quality sports equipment, apparel, and accessories designed to support your active lifestyle.
                    Whether you're hitting the gym, training outdoors, or just starting your fitness journey — we’ve got everything you need.
                </p>
                     <h2>Browse our collection of:</h2>
                    <ul>
                        <li>Dumbbells & home gym equipment</li>
                        <li>Running & training shoes</li>
                        <li>Sportswear for men and women</li>
                        <li>Yoga mats, resistance bands, and more</li>
                    </ul>
                    Stay fit. Stay motivated. Stay equipped.
                    Fast shipping, secure checkout, and unbeatable prices — all in one place.

                    Start shopping now and power up your performance!
            </Col>
        </Row>
    </Container>
);
}


export default Home;