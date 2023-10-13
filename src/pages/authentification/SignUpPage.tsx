import React from 'react';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
    return (
        <div className="bg-sign-up">
            <div className="absolute left-16 top-16">
                <img className="mx-auto" width={85} src={Logo} />
                <span className="text-xl font-medium text-white">
                    MisterVoiture
                </span>
            </div>
            <div className="flex justify-center items-center pt-32">
                <div className="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8">
                    <form className="space-y-6" action="#">
                        <div className="flex justify-center">
                            <div className="w-80 flex justify-center absolute -top-9 bg-blue-700 max-w-sm rounded overflow-hidden shadow-lg p-5 rounded-xl">
                                <h5 className="text-xl font-medium text-white">Create your account!</h5>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone-number"
                                id="phone-number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="age"
                                id="age"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Age"
                                required
                            />
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
                                    I agree to the Terms and Conditions
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sign Up
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Already have an account?{" "}
                            <Link to="/authentication/signIn" className="text-blue-700 hover:underline">Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;