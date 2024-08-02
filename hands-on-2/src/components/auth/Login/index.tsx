"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")

    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        
        try {
            const res = await signIn("credentials",{
                email, 
                password,
                redirect: false,
            }) as { error?: string };
            if (res.error){
                setError("invalid credentials");
                return;
            }
            router.replace("dashboard")
        } catch (error){
            console.log(error)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-blue p-8 rounded-lg shadow-md w-full max-w-md text-light">
            { error && (
                <div className="bg-red text-light py-1 px-2 text-sm rounded-md w-fit">
                    {error}
                </div>
                )
                }
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={ (e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="************"
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="bg-light hover:bg-blue-700 text-blue font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
                <Link className="flex justify-center  text-sm" href={"/register"}>
                    Belum punya akun? 
                    <span className="text-blue-500 px-2 hover:text-dark-secondary"> 
                        Register</span>
                </Link>
            </div>
        </div>
    )
}