import Packages from "../Packages/Packages";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutUs></AboutUs>
            <Packages></Packages>
            
        </div>
    );
};

export default Home;