// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { signIn } from "next-auth/react";
// // import { useRouter } from "next/navigation";
// // import { RiLockPasswordFill } from "react-icons/ri";
// // import { MdEmail } from "react-icons/md";

// // export default function LoginForm() {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [error, setError] = useState("");

// //     const router = useRouter();

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const res = await signIn("credentials", {
// //                 email,
// //                 password,
// //                 redirect: false,
// //             });

// //             if (res.error) {
// //                 setError("Email or password not match");
// //                 setLoading(false);
// //                 return;
// //             }

// //             router.replace("/Dashboard"); // Redirect on successful login
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-12">
// //             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                     <h1 className="text-2xl font-bold text-gray-800 text-center">LOGIN</h1>
// //                     <div className="relative">
// //                         <input
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             type="email"
// //                             name="email"
// //                             placeholder="Email id"
// //                             required
// //                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
// //                         />
// //                         <MdEmail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                     </div>
// //                     <div className="relative">
// //                         <input
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             type="password"
// //                             name="password"
// //                             placeholder="Password"
// //                             required
// //                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
// //                         />
// //                         <RiLockPasswordFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                     </div>
// //                     <div>
// //                         <button
// //                             type="submit"
// //                             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
// //                         >
// //                             Login
// //                         </button>
// //                     </div>
// //                     <div className="text-center">
// //                         <p className="text-gray-600">
// //                             Don't have an account?{' '}
// //                             <Link href="/register" className="font-bold text-blue-500 hover:underline">
// //                                 Register
// //                             </Link>
// //                         </p>
// //                     </div>
// //                 </form>
// //             </div>
// //             {error && (
// //                 <div className="absolute top-5 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
// //                     <h2 className="font-semibold text-sm italic">{error}</h2>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }








// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";
// import { FaGithub, FaGoogle } from "react-icons/fa";

// export default function LoginForm() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const res = await signIn("credentials", {
//                 email,
//                 password,
//                 redirect: false,
//             });

//             if (res.error) {
//                 setError("Invalid credentials");
//                 return;
//             }

//             router.replace("/Dashboard");
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSocialLogin = (provider) => {
//         signIn(provider, { callbackUrl: "/" });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-12">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <h1 className="text-2xl font-bold text-gray-800 text-center">LOGIN</h1>

//                     <div className="space-y-4">
//                         <button
//                             type="button"
//                             onClick={() => handleSocialLogin("google")}
//                             className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <FaGoogle className="text-red-500" />
//                             Continue with Google
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() => handleSocialLogin("github")}
//                             className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         >
//                             <FaGithub />
//                             Continue with GitHub
//                         </button>

//                         <div className="relative flex items-center">
//                             <div className="flex-grow border-t border-gray-300"></div>
//                             <span className="flex-shrink mx-4 text-gray-400">or</span>
//                             <div className="flex-grow border-t border-gray-300"></div>
//                         </div>
//                     </div>

//                     <div className="relative">
//                         <input
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             name="email"
//                             placeholder="Email id"
//                             required
//                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                         <MdEmail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             required
//                             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                         <RiLockPasswordFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
//                         >
//                             {loading ? "Logging in..." : "Login"}
//                         </button>
//                     </div>
//                     <div className="text-center">
//                         <p className="text-gray-600">
//                             Don't have an account?{' '}
//                             <Link href="/register" className="font-bold text-blue-500 hover:underline">
//                                 Register
//                             </Link>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//             {error && (
//                 <div className="absolute top-5 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
//                     <h2 className="font-semibold text-sm italic">{error}</h2>
//                 </div>
//             )}
//         </div>
//     );
// }




'use client'

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("/dashboard");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-12">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">LOGIN</h1>

                    <div className="space-y-4">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <FaGoogle className="text-red-500" />
                            Continue with Google
                        </button>

                        <div className="relative flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-400">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Email id"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <MdEmail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <RiLockPasswordFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/register" className="font-bold text-blue-500 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
            {error && (
                <div className="absolute top-5 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-sm italic">{error}</h2>
                </div>
            )}
        </div>
    );
}





