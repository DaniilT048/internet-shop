import type {ReactElement} from "react";

const About = ():ReactElement => {
    document.title = "About";
    return(
        <div>
            <h1>
                About Page
            </h1>
        </div>
    )

}

export default About