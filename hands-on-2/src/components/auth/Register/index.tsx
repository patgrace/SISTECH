'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function RegisterForm() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        // jika inputan belum terisi semua, tampilkan error 
        if (!username || !email || !password ){
            setError ("All fields harus terisi y");
            return
        }
        
            try {
                // Check apakah user sudah terdaftar
                const resCheckUser = await fetch ("api/checkUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email })
                })
                // jika sudah terdaftar tampilkan error
                const { user } = await resCheckUser.json();
                if (user) {
                    setError("user already exist")
                    return
                }

                const res = await fetch ("api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }, 
                    body: JSON.stringify({
                        username, 
                        email, 
                        password
                    })
                });
                if (res.ok){
                    const form = e.target as HTMLFormElement;
                    form.reset();
                    router.push("/login")
                } else {
                    console.log("error regist")
                }
            } catch (error){
                console.log("error", error)
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
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
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
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue  leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="************"
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="bg-light hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <Link className="flex justify-center text-gray-600 text-sm mt-4" href={'/login'}>
                    Sudah punya akun? <span  className="text-blue-500 hover:text-dark-secondary px-2 ">  Login</span>
                </Link>
            </div>
        </div>
    )
}
