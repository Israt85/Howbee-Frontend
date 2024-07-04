import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Signup = () => {
    return (
        <div><div className='min-h-screen bg-gray-100'>
    
        <div className='flex items-center'>
            <div className='w-96 h-auto px-4 rounded-md py-10 bg-white ' >
                
                <form className=" p-6">
                    <div className="flex gap-2 flex-col justify-center items-center h-auto my-2">
                    <div className="h-20 w-20 rounded-full bg-slate-100">

                    </div>
                    <p className="text-xl font-bold">Sign up</p>
                    </div>
                    <div className="flex my-4 gap-2">
                    <button type="submit" className="flex items-center gap-2 w-1/2 bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className="text-xl"> <FcGoogle /></span> <span>Google</span> </button>
                    <button type="submit" className="flex items-center justify-center gap-2 w-1/2 bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className="text-xl text-blue-700"> <FaFacebookF /> </span> <span>facebook</span> </button>
                    </div>
                    <div className="flex items-center my-4">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="mx-4 text-gray-500">or</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>


                    <div className=" mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jiangyu" required />
                    </div>
                    <div className=" mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email address</label>
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                       <div >
                       <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">By creating an account you agree to the <span className="text-[#605BFF] underline">terms of use</span> and our <span className="text-[#605BFF] underline">privacy policy</span>.</label>
                       
                       </div>
                    </div>
                    <div>
                        <button type="submit" className=" w-full bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>
                    </div>
                   {/* <SocialLogin></SocialLogin> */}
                    <h2 className='mt-4 text-center text-sm'>Already have an account? <Link className='text-[#605BFF] hover:underline' to='/login'>Log in</Link> </h2>
                </form>

            </div>
            <div className='w-1/2'>
                {/* <img className='w-96 h-96 ' src={login} alt="" /> */}
            </div>
        </div>
    </div>
        </div>
    );
};

export default Signup;