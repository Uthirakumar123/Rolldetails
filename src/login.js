import { useNavigate } from "react-router-dom";


function Login() {

    const navigate =  useNavigate() 

   
    return (

        <div className="flex items-center justify-center min-h-screen bg-zinc-400">
        <div className=" w-80 px-6 py-6 mx-4 mt-4 text-left bg-zinc-200 drop-shadow-sm rounded-2xl border-2 ">
        <h1 className="text-3xl  text-center text-purple-600  font-serif">
                    Sign in
                </h1>
            <form action="" className="bg-zinc-200  rounded-2xl">
                <div className="mt-1 p-1 ">
                    
                    <div className="mt-4">
                        
                        <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                       
                        <input type="password" placeholder="Password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  />
                            
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline font-serif"  onClick={() => navigate('/forgot') }
                    >
                        Forget Password?
                        </a>
                    <div className="flex  justify-center">
                    <button  onClick={() => navigate('/fincals') } className="w-40 px-6  py-2 mt-1 text-white bg-blue-500 rounded-lg hover:bg-blue-900 "> Login</button>
                     </div>

                    <div className="mt-3 text-center font-serif text-sm text-grey-700 dark:text-gray-300">
                    Don't have an account? &nbsp;
                        <a className="text-blue-600 hover:underline"  onClick={() => navigate('/formrg') } href="#" >
                        Sign up
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Login;