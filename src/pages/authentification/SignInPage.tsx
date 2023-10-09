import React from 'react';

const SignInPage: React.FC = () => {
    return (
        <div className="bg-sign-in">
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8">
                    <form className="space-y-6" action="#">
                        <div className="flex justify-center">
                            <div className="w-80 flex justify-center absolute -top-9 bg-blue-700 max-w-sm rounded overflow-hidden shadow-lg p-5 rounded-xl">
                                <h5 className="text-xl font-medium text-white">Welcome to MisterVoiture!</h5>
                            </div>
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                        required
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm font-medium text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="ml-auto text-sm text-blue-700 hover:underline"
                            >
                                Lost Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sign In
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Not registered?{" "}
                            <a href="#" className="text-blue-700 hover:underline">
                                Create account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;