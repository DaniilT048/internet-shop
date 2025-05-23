import type {ReactElement} from "react";

const Home = ():ReactElement => {
    document.title = "Home";
    return(
        <div>
            <h1>
                Home Page
            </h1>
        </div>
    )

}

export default Home;