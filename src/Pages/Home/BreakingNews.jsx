import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking Nesw</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="mr-12 hover:underline" to="/">
               I can be a React component, multiple React components, or just some text.
               </Link>
               <Link className="mr-12 hover:underline" to="/">
               I can be a React component, multiple React components, or just some text.
               </Link>
               <Link className="mr-12 hover:underline" to="/">
               I can be a React component, multiple React components, or just some text.
               </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;