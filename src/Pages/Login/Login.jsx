import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("this login location",location)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user)

            // navigate after login 
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar />

            <div>
                <h1 className="text-2xl py-6 text-center">Please Login!</h1>

                <form onClick={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email Address</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center mt-4">Don,t have an account? <Link className="text-primary font-bold" to="/register">Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;