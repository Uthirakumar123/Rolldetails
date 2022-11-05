import { useNavigate } from "react-router-dom";

function Forgot() {

    const navigate = useNavigate()

    return (

        <section class="bg-brown-300 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-96">

                <div class="w-full p-6 bg-brown-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 class="mb-1 text-xl text-center  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Change Password
                    </h2>
                    <form class="mt-4 space-y-4 lg:mt-3 md:space-y-5" action="#">
                        <div>
                           
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                        </div>
                        <div>
                           
                            <input type="password" name="password" id="password" placeholder="new password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                           
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="confirm password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div class="flex justify-center ">
                            <button type="submit" onClick={() => navigate('/login')} class=" item-center w-40 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-600">Reset passwod</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )

}

export default Forgot;