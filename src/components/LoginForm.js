import { useState } from "react"

const LoginForm = () => {
    const [signedIn, setSgnedIn] = useState(false);
    const handleSignIn = () => {
        setSgnedIn(!signedIn)
    }
    return (
    <div className="">
        <form className='bg-black w-[35%] mx-auto right-0 left-0 text-white px-[100px] py-[60px] rounded-lg bg-opacity-70'>
            <h1 className="text-3xl mb-4 font-bold">
                { signedIn ? "Sign in" : "Sign up" }
            </h1>
            { !signedIn && <input className="w-[100%] p-2 my-4 rounded-md bg-gray-300 text-black" type="text" placeholder=" Name"/>}
            <input className="w-[100%] p-2 my-4 rounded-md bg-gray-300 text-black" type="text" placeholder=" Email"/>
            <input className="w-[100%] p-2 my-4 rounded-md bg-gray-300 text-black" type="password" placeholder=" Password"/>
            <button className="w-[100%] p-2 my-4 mt-7 rounded-md bg-red-800 font-bold">
                { signedIn ? "Sign in" : "Sign up" }
            </button>
            <p className="text-xs my-2 text-gray-400 cursor-pointer" onClick={handleSignIn}>
                { signedIn ? "New to Netflix? Sign up now" : "Already have an account? Sign in" }
            </p>
        </form>
    </div>
    )
}

export default LoginForm