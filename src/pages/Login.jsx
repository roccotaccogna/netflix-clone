import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {user, logIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            
            navigate('/');
        } catch(error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <>
            <div className="w-full h-screen">
            <img 
                className="hidden sm:block absolute w-full h-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/46a51291-77f4-4941-ba0d-d93912a9d6fd/IT-it-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                alt="/" 
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
            </div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                  <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold">Sign In</h1>
                    {error ? <p className="p-3 bg-red-400 my-3">{error}</p> : null}
                    <form className="w-full flex flex-col py-4"
                          onSubmit={handleSubmit}
                    >
                        <input type="email" 
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="Email" 
                               autoComplete="email"
                               className="p-3 my-2 bg-gray-700 rounded"
                        />
                        <input type="password" 
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="Password" 
                               autoComplete="current-password" 
                               className="p-3 my-2 bg-gray-700 rounded"
                        />
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">
                            Sign In
                        </button>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <p><input className="mr-2" type="checkbox"/>Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className="py-8">
                            <span className="text-gray-600">
                                New to Netflix?
                            </span>{' '}
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;