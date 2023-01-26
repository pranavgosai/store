import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Product from "../Products/Products";

const Home = () => {
    return <div className="home">
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category/>
            <Product headingText="popular products"/>
            </div>
        </div>
        
    </div>;
};

export default Home;
