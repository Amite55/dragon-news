import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav.jsx/RightSideNav";


const NewsPage = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl">the news details</h2>
                        <p>{id}</p>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsPage;