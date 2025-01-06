// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";

// const RegisterForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name || !email || !password) {
//             setError("All fields are necessary.");
//             return;
//         }

//         try {
//             const resUserExists = await fetch("api/userExists", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             const { user } = await resUserExists.json();
//             if (user) {
//                 setError("User already exists.");
//                 return;
//             }

//             const res = await fetch("api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password,
//                 }),
//             });

//             if (res.ok) {
//                 const form = e.target;
//                 form.reset();
//                 router.push("/");
//             } else {
//                 console.error("User registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration", error);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <FaUser className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <MdEmail className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     >
//                         Register
//                     </button>
//                 </form>

//                 {error && (
//                     <div className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
//                         {error}
//                     </div>
//                 )}

//                 <p className="text-sm text-gray-600 text-center">
//                     Already have an account?{' '}
//                     <Link href="/" className="font-semibold text-blue-500 hover:underline">
//                         Login
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default RegisterForm;

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaUser, FaCamera } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";


// const RegisterForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setImagePreview(URL.createObjectURL(file));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");

//         if (!name || !email || !password || !confirmPassword || !image) {
//             setError("All fields are necessary.");
//             setLoading(false);
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             setLoading(false);
//             return;
//         }

//         try {
//             const resUserExists = await fetch("api/userExists", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             const { user } = await resUserExists.json();
//             if (user) {
//                 setError("User already exists.");
//                 setLoading(false);
//                 return;
//             }


//             const res = await fetch("api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password,
//                     image: imageUrl,
//                 }),
//             });

//             if (res.ok) {
//                 const form = e.target;
//                 form.reset();
//                 router.push("/");
//             } else {
//                 setError("Registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration", error);
//             setError("Registration failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

//                 <div className="flex justify-center">
//                     <div className="relative">
//                         {imagePreview ? (
//                             <Image
//                                 src={imagePreview}
//                                 alt="Profile preview"
//                                 width={100}
//                                 height={100}
//                                 className="rounded-full object-cover"
//                             />
//                         ) : (
//                             <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
//                                 <FaUser className="w-12 h-12 text-gray-400" />
//                             </div>
//                         )}
//                         <label className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer">
//                             <FaCamera className="text-white" />
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                                 className="hidden"
//                             />
//                         </label>
//                     </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <FaUser className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <MdEmail className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
//                     >
//                         {loading ? "Registering..." : "Register"}
//                     </button>
//                 </form>

//                 {error && (
//                     <div className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
//                         {error}
//                     </div>
//                 )}

//                 <p className="text-sm text-gray-600 text-center">
//                     Already have an account?{' '}
//                     <Link href="/" className="font-semibold text-blue-500 hover:underline">
//                         Login
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default RegisterForm;




// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaUser, FaCamera } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";
// import { CldUploadWidget } from "next-cloudinary";

// const RegisterForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const handleImageUploadSuccess = (results) => {
//         if (results.info?.secure_url && results.event === "success") {
//             setImage(results.info.secure_url);
//             setImagePreview(results.info.secure_url);
//         }
//     };

//     const handleImageUploadError = (error) => {
//         console.error("Cloudinary upload error:", error);
//         setError("Error uploading the image. Please try again.");
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");

//         if (!name || !email || !password || !confirmPassword || !image) {
//             setError("All fields are necessary.");
//             setLoading(false);
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             setLoading(false);
//             return;
//         }

//         try {
//             const resUserExists = await fetch("api/userExists", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             const { user } = await resUserExists.json();
//             if (user) {
//                 setError("User already exists.");
//                 setLoading(false);
//                 return;
//             }

//             const res = await fetch("api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password,
//                     image,
//                 }),
//             });

//             if (res.ok) {
//                 const form = e.target;
//                 form.reset();
//                 router.push("/");
//             } else {
//                 setError("Registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration", error);
//             setError("Registration failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

//                 <div className="flex justify-center">
//                     <div className="relative">
//                         {imagePreview ? (
//                             <img
//                                 src={imagePreview}
//                                 alt="Profile preview"
//                                 className="w-24 h-24 rounded-full object-cover"
//                             />
//                         ) : (
//                             <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
//                                 <FaUser className="w-12 h-12 text-gray-400" />
//                             </div>
//                         )}
//                         <CldUploadWidget
//                             uploadPreset="hwlqikvn"
//                             onSuccess={handleImageUploadSuccess}
//                             onError={handleImageUploadError}
//                             options={{
//                                 cloudName: "dpuw5wqyp",
//                                 multiple: false,
//                             }}
//                         >
//                             {({ open }) => (
//                                 <button
//                                     type="button"
//                                     className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer"
//                                     onClick={open}
//                                 >
//                                     <FaCamera className="text-white" />
//                                 </button>
//                             )}
//                         </CldUploadWidget>
//                     </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <FaUser className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <MdEmail className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                     <div className="relative">
//                         <input
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             required
//                         />
//                         <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
//                     >
//                         {loading ? "Registering..." : "Register"}
//                     </button>
//                 </form>

//                 {error && (
//                     <div className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
//                         {error}
//                     </div>
//                 )}

//                 <p className="text-sm text-gray-600 text-center">
//                     Already have an account?{' '}
//                     <Link href="/login" className="font-semibold text-blue-500 hover:underline">
//                         Login
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default RegisterForm;



"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaCamera } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CldUploadWidget } from "next-cloudinary";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleImageUploadSuccess = (results) => {
        if (results.info?.secure_url && results.event === "success") {
            setImage(results.info.secure_url);
            setImagePreview(results.info.secure_url);
        }
    };

    const handleImageUploadError = (error) => {
        console.error("Cloudinary upload error:", error);
        setError("Error uploading the image. Please try again.");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!name || !email || !password || !confirmPassword || !image) {
            setError("All fields are necessary.");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();
            if (user) {
                setError("User already exists.");
                setLoading(false);
                return;
            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    image,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                    text: "You have been successfully registered!",
                    confirmButtonText: "OK",
                }).then(() => {
                    router.push("/");
                });
            } else {
                setError("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration", error);
            setError("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

                <div className="flex justify-center">
                    <div className="relative">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Profile preview"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <FaUser className="w-12 h-12 text-gray-400" />
                            </div>
                        )}
                        <CldUploadWidget
                            uploadPreset="hwlqikvn"
                            onSuccess={handleImageUploadSuccess}
                            onError={handleImageUploadError}
                            options={{
                                cloudName: "dpuw5wqyp",
                                multiple: false,
                            }}
                        >
                            {({ open }) => (
                                <button
                                    type="button"
                                    className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer"
                                    onClick={open}
                                >
                                    <FaCamera className="text-white" />
                                </button>
                            )}
                        </CldUploadWidget>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <FaUser className="absolute top-3 right-3 text-gray-400" />
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <MdEmail className="absolute top-3 right-3 text-gray-400" />
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <RiLockPasswordFill className="absolute top-3 right-3 text-gray-400" />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {error && (
                    <div className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
                        {error}
                    </div>
                )}

                <p className="text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;

