import Banner from "./Components/Banner";
import Contents from "./Components/Contents";
import Nav from "./Components/Nav";

const Home = () => {

    return (
        <div className="relative">
            <Nav />
            <Banner />
            <Contents />
        </div>
    );
};

export default Home;