// 'use client'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// export default function Dashboard() {
//     // Sample data for the line chart
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 }
//     ]

//     // Calendar data
//     const currentDate = new Date()
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
//     const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
//     const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())

//     const calendarDays = []
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>)
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         calendarDays.push(
//             <div key={i} className={`h-8 flex items-center justify-center rounded-full ${i === currentDate.getDate() ? 'bg-blue-600 text-white' : ''}`}>
//                 {i}
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">Good Morning, Sharmin 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2023</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px]">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <LineChart data={data}>
//                                 <CartesianGrid strokeDasharray="3 3" />
//                                 <XAxis dataKey="name" />
//                                 <YAxis />
//                                 <Tooltip />
//                                 <Line
//                                     type="monotone"
//                                     dataKey="value"
//                                     stroke="#2563eb"
//                                     strokeWidth={2}
//                                     dot={false}
//                                     activeDot={{ r: 8 }}
//                                 />
//                             </LineChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date & time</h2>
//                         <div className="flex items-center gap-2">
//                             <button className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
//                             <button className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[
//                             { name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
//                             { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
//                             { name: 'Web UI', progress: 80, color: 'bg-purple-600' },
//                             { name: 'NFT App', progress: 50, color: 'bg-yellow-500' },
//                             { name: 'Mobile UI', progress: 80, color: 'bg-orange-500' },
//                         ].map((project) => (
//                             <div key={project.name}>
//                                 <div className="flex justify-between mb-2">
//                                     <span>{project.name}</span>
//                                     <span>{project.progress}%</span>
//                                 </div>
//                                 <div className="h-2 bg-gray-100 rounded-full">
//                                     <div
//                                         className={`h-full rounded-full ${project.color}`}
//                                         style={{ width: `${project.progress}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }






// 'use client'

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// export default function Dashboard() {
//     // Sample data for the line chart
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 },
//     ];

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//     const [selectedDate, setSelectedDate] = useState(currentDate);
//     const [greeting, setGreeting] = useState('');

//     // Update greeting based on the time of day
//     useEffect(() => {
//         const hours = currentDate.getHours();
//         if (hours < 12) {
//             setGreeting('Good Morning');
//         } else if (hours < 18) {
//             setGreeting('Good Evening');
//         } else {
//             setGreeting('Good Night');
//         }
//     }, [currentDate]);

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//     const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

//     const calendarDays = [];
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         calendarDays.push(
//             <div
//                 key={i}
//                 className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear() ? 'bg-blue-600 text-white' : ''}`}
//                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
//             >
//                 {i}
//             </div>
//         );
//     }

//     const handleMonthChange = (direction) => {
//         const newMonth = selectedDate.getMonth() + direction;
//         const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
//         setSelectedDate(newDate);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">{greeting}, Sharmin 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2023</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px] w-full">
//                         <LineChart width={500} height={300} data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#2563eb"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 8 }}
//                             />
//                         </LineChart>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date & time</h2>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
//                             <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                     <div className="mt-4 text-center">
//                         You selected the date: <strong>{selectedDate.toDateString()}</strong>
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[
//                             { name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
//                             { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
//                             { name: 'Web UI', progress: 80, color: 'bg-purple-600' },
//                             { name: 'NFT App', progress: 50, color: 'bg-yellow-500' },
//                             { name: 'Mobile UI', progress: 80, color: 'bg-orange-500' },
//                         ].map((project) => (
//                             <div key={project.name}>
//                                 <div className="flex justify-between mb-2">
//                                     <span>{project.name}</span>
//                                     <span>{project.progress}%</span>
//                                 </div>
//                                 <div className="h-2 bg-gray-100 rounded-full">
//                                     <div
//                                         className={`h-full rounded-full ${project.color}`}
//                                         style={{ width: `${project.progress}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// 'use client'

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// export default function Dashboard() {
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 },
//     ];

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//     const [selectedDate, setSelectedDate] = useState(currentDate);
//     const [greeting, setGreeting] = useState('');

//     // Update greeting based on the time of day
//     useEffect(() => {
//         const hours = currentDate.getHours();
//         if (hours < 12) {
//             setGreeting('Good Morning');
//         } else if (hours < 18) {
//             setGreeting('Good Evening');
//         } else {
//             setGreeting('Good Night');
//         }
//     }, [currentDate]);

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//     const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

//     const calendarDays = [];
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         const isSelected = i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         calendarDays.push(
//             <div
//                 key={i}
//                 className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${isSelected ? 'bg-blue-600 text-white' : ''}`}
//                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
//             >
//                 {i}
//             </div>
//         );
//     }

//     const handleMonthChange = (direction) => {
//         const newMonth = selectedDate.getMonth() + direction;
//         const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
//         setSelectedDate(newDate);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">{greeting}, Trello <span className=' text-blue-500'>User</span> 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2024</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px] w-full">
//                         <LineChart width={500} height={300} data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#2563eb"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 8 }}
//                             />
//                         </LineChart>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date & time</h2>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
//                             <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                     <div className="mt-4 text-center">
//                         You selected the date: <strong>{selectedDate.toDateString()}</strong>
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[
//                             { name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
//                             { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
//                             { name: 'Web UI', progress: 80, color: 'bg-purple-600' },
//                             { name: 'NFT App', progress: 50, color: 'bg-yellow-500' },
//                             { name: 'Mobile UI', progress: 80, color: 'bg-orange-500' },
//                         ].map((project) => (
//                             <div key={project.name}>
//                                 <div className="flex justify-between mb-2">
//                                     <span>{project.name}</span>
//                                     <span>{project.progress}%</span>
//                                 </div>
//                                 <div className="h-2 bg-gray-100 rounded-full">
//                                     <div
//                                         className={`h-full rounded-full ${project.color}`}
//                                         style={{ width: `${project.progress}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }






// 'use client'

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// export default function Dashboard() {
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 },
//     ];

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//     const [selectedDate, setSelectedDate] = useState(currentDate);
//     const [greeting, setGreeting] = useState('');

//     // Update greeting based on the time of day
//     useEffect(() => {
//         const hours = currentDate.getHours();
//         if (hours < 12) {
//             setGreeting('Good Morning');
//         } else if (hours < 18) {
//             setGreeting('Good Evening');
//         } else {
//             setGreeting('Good Night');
//         }
//     }, [currentDate]);

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//     const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

//     const calendarDays = [];
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         const isSelected = i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         const isCurrentDay = i === currentDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         calendarDays.push(
//             <div
//                 key={i}
//                 className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${isSelected ? 'bg-blue-600 text-white' : ''} ${isCurrentDay ? 'bg-green-500 text-white' : ''}`}
//                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
//             >
//                 {i}
//             </div>
//         );
//     }

//     const handleMonthChange = (direction) => {
//         const newMonth = selectedDate.getMonth() + direction;
//         const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
//         setSelectedDate(newDate);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">{greeting}, Trello <span className=' text-blue-500'>User</span> 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2024</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px] w-full">
//                         <LineChart width={500} height={300} data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#2563eb"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 8 }}
//                             />
//                         </LineChart>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date & time</h2>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
//                             <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                     <div className="mt-4 text-center">
//                         You selected the date: <strong>{selectedDate.toDateString()}</strong>
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[
//                             { name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
//                             { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
//                             { name: 'Web UI', progress: 80, color: 'bg-purple-600' },
//                             { name: 'NFT App', progress: 50, color: 'bg-yellow-500' },
//                             { name: 'Mobile UI', progress: 80, color: 'bg-orange-500' },
//                         ].map((project) => (
//                             <div key={project.name}>
//                                 <div className="flex justify-between mb-2">
//                                     <span>{project.name}</span>
//                                     <span>{project.progress}%</span>
//                                 </div>
//                                 <div className="h-2 bg-gray-100 rounded-full">
//                                     <div
//                                         className={`h-full rounded-full ${project.color}`}
//                                         style={{ width: `${project.progress}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





// 'use client'

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// export default function Dashboard() {
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 },
//     ];

//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [greeting, setGreeting] = useState('');

//     // Update greeting based on the time of day
//     useEffect(() => {
//         const hours = currentDate.getHours();
//         if (hours < 12) {
//             setGreeting('Good Morning');
//         } else if (hours < 18) {
//             setGreeting('Good Evening');
//         } else {
//             setGreeting('Good Night');
//         }

//         // Update the current date every minute
//         const interval = setInterval(() => {
//             setCurrentDate(new Date());
//         }, 60000); // 60000ms = 1 minute

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, [currentDate]);

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//     const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

//     const calendarDays = [];
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         const isSelected = i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         const isCurrentDay = i === currentDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         calendarDays.push(
//             <div
//                 key={i}
//                 className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${isSelected ? 'bg-blue-600 text-white' : ''} ${isCurrentDay ? 'bg-green-500 text-white' : ''}`}
//                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
//             >
//                 {i}
//             </div>
//         );
//     }

//     const handleMonthChange = (direction) => {
//         const newMonth = selectedDate.getMonth() + direction;
//         const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
//         setSelectedDate(newDate);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">{greeting}, Trello <span className=' text-blue-500'>User</span> 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2024</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px] w-full">
//                         <LineChart width={500} height={300} data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#2563eb"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 8 }}
//                             />
//                         </LineChart>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date & time</h2>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
//                             <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                     <div className="mt-4 text-center">
//                         You selected the date: <strong>{selectedDate.toDateString()}</strong>
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[...]}  {/* Projects data and rendering code goes here */}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// 'use client'

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// export default function Dashboard() {
//     const data = [
//         { name: 'Jan', value: 30 },
//         { name: 'Feb', value: 40 },
//         { name: 'Mar', value: 45 },
//         { name: 'Apr', value: 35 },
//         { name: 'May', value: 50 },
//         { name: 'Jun', value: 45 },
//         { name: 'Jul', value: 60 },
//         { name: 'Aug', value: 55 },
//         { name: 'Sep', value: 48 },
//         { name: 'Oct', value: 52 },
//         { name: 'Nov', value: 45 },
//         { name: 'Dec', value: 40 },
//     ];

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//     const [selectedDate, setSelectedDate] = useState(currentDate);
//     const [greeting, setGreeting] = useState('');

//     useEffect(() => {
//         const hours = currentDate.getHours();
//         if (hours < 12) {
//             setGreeting('Good Morning');
//         } else if (hours < 18) {
//             setGreeting('Good Evening');
//         } else {
//             setGreeting('Good Night');
//         }
//     }, [currentDate]);

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

//     const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//     const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());


//     const calendarDays = [];
//     for (let i = 0; i < firstDay; i++) {
//         calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         const isSelected = i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         const isCurrentDay = i === currentDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
//         calendarDays.push(
//             <div
//                 key={i}
//                 className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${isSelected ? 'bg-blue-600 text-white' : ''} ${isCurrentDay ? 'bg-green-500 text-white' : ''}`}
//                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
//             >
//                 {i}
//             </div>
//         );
//     }

//     const handleMonthChange = (direction) => {
//         const newMonth = selectedDate.getMonth() + direction;
//         const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
//         setSelectedDate(newDate);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-semibold">{greeting}, Trello <span className=' text-blue-500'>User</span> 😊</h1>
//                 <div className="flex items-center gap-4">
//                     <select className="bg-white px-4 py-2 rounded-lg border">
//                         <option>Popular</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Graph */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <div className="font-semibold">Report</div>
//                         <div className="flex items-center gap-4">
//                             <span className="text-blue-600">Income +10.2%</span>
//                             <select className="bg-white px-3 py-1 rounded-lg border text-sm">
//                                 <option>Jan - Dec 2024</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="h-[300px] w-full">
//                         <LineChart width={500} height={300} data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#2563eb"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 8 }}
//                             />
//                         </LineChart>
//                     </div>
//                 </div>

//                 {/* Right Column - Calendar */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="font-semibold">Select date</h2>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
//                             <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
//                             <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                         {days.map(day => (
//                             <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
//                                 {day}
//                             </div>
//                         ))}
//                         {calendarDays}
//                     </div>
//                     <div className="mt-4 text-center">
//                         You selected the date: <strong>{selectedDate.toDateString()}</strong>
//                     </div>
//                 </div>
//             </div>

//             {/* Projects Section */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Projects</h2>
//                     <div className="space-y-4">
//                         {[{ name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
//                         { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
//                         { name: 'Web UI', progress: 80, color: 'bg-purple-600' },
//                         { name: 'NFT App', progress: 50, color: 'bg-yellow-500' },
//                         { name: 'Mobile UI', progress: 80, color: 'bg-orange-500' }]
//                             .map((project) => (
//                                 <div key={project.name}>
//                                     <div className="flex justify-between mb-2">
//                                         <span>{project.name}</span>
//                                         <span>{project.progress}%</span>
//                                     </div>
//                                     <div className="h-2 bg-gray-100 rounded-full">
//                                         <div
//                                             className={`h-full rounded-full ${project.color}`}
//                                             style={{ width: `${project.progress}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>

//                 {/* Tasks Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <h2 className="font-semibold mb-6">Tasks</h2>
//                     <div className="relative w-48 h-48 mx-auto">
//                         <div className="w-full h-full rounded-full" style={{
//                             background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
//                         }}>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-2xl font-bold">192</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-6 space-y-2 text-center">
//                         <div className="text-sm">Hope Project 15%</div>
//                         <div className="text-sm">Dream Project 60%</div>
//                         <div className="text-sm">Care Project 25%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }










'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Dashboard() {
    const data = [
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 40 },
        { name: 'Mar', value: 45 },
        { name: 'Apr', value: 35 },
        { name: 'May', value: 50 },
        { name: 'Jun', value: 45 },
        { name: 'Jul', value: 60 },
        { name: 'Aug', value: 55 },
        { name: 'Sep', value: 48 },
        { name: 'Oct', value: 52 },
        { name: 'Nov', value: 45 },
        { name: 'Dec', value: 40 },
    ];

    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hours = currentDate.getHours();
        if (hours < 12) {
            setGreeting('Good Morning');
        } else if (hours < 18) {
            setGreeting('Good Evening');
        } else {
            setGreeting('Good Night');
        }
    }, [currentDate]);

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const isSelected = i === selectedDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
        const isCurrentDay = i === currentDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
        calendarDays.push(
            <div
                key={i}
                className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${isSelected ? 'bg-blue-600 text-white' : ''} ${isCurrentDay ? 'bg-green-500 text-white' : ''}`}
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
            >
                {i}
            </div>
        );
    }

    const handleMonthChange = (direction) => {
        const newMonth = selectedDate.getMonth() + direction;
        const newDate = new Date(selectedDate.getFullYear(), newMonth, 1);
        setSelectedDate(newDate);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{greeting}, Trello <span className="text-blue-500">User</span> 😊</h1>
                <select className="bg-white px-4 py-2 rounded-lg border mt-4 sm:mt-0">
                    <option>Popular</option>
                </select>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Graph Section */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-semibold">Report</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">Income +10.2%</span>
                            <select className="bg-white px-3 py-1 rounded-lg border text-sm">
                                <option>Jan - Dec 2024</option>
                            </select>
                        </div>
                    </div>
                    <LineChart width={300} height={200} data={data} className="mx-auto sm:mx-0">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#2563eb"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </div>

                {/* Calendar Section */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-semibold">Select date</h2>
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleMonthChange(-1)} className="p-1 hover:bg-gray-100 rounded-full">&larr;</button>
                            <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
                            <button onClick={() => handleMonthChange(1)} className="p-1 hover:bg-gray-100 rounded-full">&rarr;</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {days.map(day => (
                            <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
                                {day}
                            </div>
                        ))}
                        {calendarDays}
                    </div>
                    <div className="mt-4 text-center">
                        You selected: <strong>{selectedDate.toDateString()}</strong>
                    </div>
                </div>
            </div>

            {/* Projects and Tasks */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Projects */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold mb-4">Projects</h2>
                    {[{ name: 'UI/UX', progress: 70, color: 'bg-blue-600' },
                    { name: 'Front-End', progress: 40, color: 'bg-orange-500' },
                    { name: 'Web UI', progress: 80, color: 'bg-purple-600' }]
                        .map(project => (
                            <div key={project.name} className="mb-4">
                                <div className="flex justify-between">
                                    <span>{project.name}</span>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div className={`${project.color} h-full rounded-full`} style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                </div>

        

                {/* Tasks Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold mb-6">Tasks</h2>
                    <div className="relative w-48 h-48 mx-auto">
                        <div className="w-full h-full rounded-full" style={{
                            background: 'conic-gradient(#2563eb 0% 60%, #ef4444 60% 75%, #eab308 75% 100%)'
                        }}>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold">192</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2 text-center">
                        <div className="text-sm">Hope Project 15%</div>
                        <div className="text-sm">Dream Project 60%</div>
                        <div className="text-sm">Care Project 25%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}





