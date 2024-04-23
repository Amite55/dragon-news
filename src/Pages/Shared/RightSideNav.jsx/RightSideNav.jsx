import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
    return (
        <div>
            <div className="px-4 space-y-3 mb-7">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                   Login with google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                   Login with github
                </button>
            </div>
            <div className="px-4 mb-7">
                <h2 className="text-3xl mb-3">Find Us On</h2>
                <a className="flex p-4 text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3" />
                    Facebook
                </a>
                <a className="flex p-4 text-lg items-center border-r border-l" href="">
                    <FaInstagram className="mr-3" />
                    Instagram
                </a>
                <a className="flex p-4 text-lg items-center border rounded-b-lg" href="">
                    <FaTwitter className="mr-3" />
                        Twitter
                </a>
            </div>

        
            {/* ----------- Q zone part ------------ */}

            <div className="p-4 space-y-3 mb-7 bg-slate-900  rounded-lg">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;