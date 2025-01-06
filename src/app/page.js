// import Dashboard from "./Components/dashboard";
// import RegisterForm from "./register/page";


// export default function Home() {
//   return (
//     <>
//     <Dashboard/>
//       <RegisterForm/>
//     </>
//   );
// }

'use client'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <nav className="py-4">
          <div className="text-2xl font-bold text-[#0052CC]">Trello</div>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-[#0052CC]">Trello</span> brings all your tasks, teammates, and tools together
            </h1>
            <p className="text-xl text-gray-600">
              Keep everything in the same place—even if your team isn't.
            </p>
            <button className="bg-[#0052CC] text-white px-6 py-3 rounded-md hover:bg-[#0043A7] transition-colors">
              Start Demo
            </button>
          </div>

          {/* Right Side Animation - Updated positioning */}
          <div className="relative h-[400px] ml-80 flex items-center justify-center">
            <div className="animate-float absolute">
              <div className="w-64 h-40 bg-[#0052CC] rounded-lg shadow-lg absolute -top-20 right-0" />
              <div className="w-64 h-40 bg-[#00C7E6] rounded-lg shadow-lg absolute top-0 right-20" />
              <div className="w-64 h-40 bg-[#57D9A3] rounded-lg shadow-lg absolute top-20 right-40" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}

export default page


