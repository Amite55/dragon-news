import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav.jsx/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav.jsx/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    // console.log(news)
    return (
        <div className="font-pop">
            <Header/>
            <BreakingNews></BreakingNews>
            <Navbar/>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div>
                    <LeftSideNav/>
                </div>
                <div className="md:col-span-2">
                    
                    {
                        news.map(aNews => <NewsCard 
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }

                </div>
                <div>
                    <RightSideNav/>
                </div>

            </div>
        </div>
    );
};

export default Home;