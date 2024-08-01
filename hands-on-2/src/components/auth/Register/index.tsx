'use client'

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const RegisterView = () => {
    const {push} = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = {
            username: form.username.value, 
            email: form.email.value, 
            password: form.password.value, 
        };

        if (!data.email || !data.password || !data.username) {
            console.log('All fields are required');
            return;
        }

        try {
            const result = await fetch('/auth/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (result.status === 200) {
                form.reset();
                push('/auth/login');
            } else {
                console.log('Error'); 
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-blue p-8 rounded-lg shadow-md w-full max-w-md text-light">
                
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                <p className="text-center text-gray-600 text-sm mt-4">
                    Sudah punya akun? <a href="/auth/login" className="text-blue-500 hover:text-blue-700">Login</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterView;