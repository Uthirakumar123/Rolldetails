import { useNavigate } from "react-router-dom";


function Formrg() {


    const navigate =  useNavigate() 
    return (

        <div className="flex items-center justify-center min-h-screen bg-zinc-400">
            <div className=" w-80 px-6 py-6 mx-4 mt-4 text-left bg-zinc-200 drop-shadow-sm rounded-2xl border-2 ">
               
                <form action="" className="bg-zinc-200  rounded-2xl">
                    <div className="mt-1 p-1 ">
                        <div>
                           
                            <input type="text" placeholder="Name"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                           
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  />
                                
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                    className="w-4 h-4 bg-gray-50 mt-3 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required />
                            </div>
                            <label for="remember" className="ml-2 text-sm mt-2 font-serif  font-medium text-gray-dark">Agree to terms and conditions</label>
                        </div>
                        <div className="flex  justify-center">
                        <button  onClick={() => navigate('/login') } className="w-40 px-6  py-2 mt-1 text-white bg-blue-500 rounded-lg hover:bg-blue-900 ">Create
                            Account</button>
                         </div>

                        <div className="mt-3 text-center font-serif text-sm text-grey-700 dark:text-gray-300">
                            Already have an account? &nbsp;
                            <a className="text-blue-600 hover:underline"  onClick={() => navigate('/login') } href="#" >
                                Log in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}
export default Formrg;