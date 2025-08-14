// import React, { useState } from "react";
// import IconButton from "../elements/IconButton";
// import DropdownMenu, { menuItemClass } from "../elements/DropdownMenu";

// function Header() {
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700">
//       <div className="px-3 py-3 lg:px-5 lg:pl-3">
//         <div className="flex items-center justify-between">
//           {/* Left Section */}
//           <div className="flex items-center">
//             <a href="/my-profile" className="flex ms-2 md:me-24">
//               <img
//                 src="https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg"
//                 className="h-8 me-3"
//                 alt="Navadhiti Logo"
//               />
//               <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
//                 Dashboard
//               </span>
//             </a>
//           </div>

//           {/* Right Section */}
//           <div className="flex ms-3 space-x-4 items-center">
//             {/* Notifications */}
//             <a href="/notification">
//               <IconButton
//                 ariaLabel="Notifications"
//                 className="bg-white-200 focus:ring-lime-600"
//               >
//                 <BellIcon className="w-8 h-8 p-1 text-shadow-gray-700 text-gray-700" />
//               </IconButton>
//             </a>

//             {/* User Menu */}
//             <div className="relative">
//               <IconButton
//                 ariaLabel="User menu"
//                 className="bg-white-200"
//                 onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//               >
//                 <UserCircleIcon className="w-8 h-8 text-shadow-gray-700 text-gray-700" />
//               </IconButton>

//               <DropdownMenu isOpen={isUserMenuOpen}>
//                 <a href="/my-profile" className={menuItemClass}>
//                   My Profile
//                 </a>
//                 <a href="/my-answers" className={menuItemClass}>
//                   My Answers
//                 </a>
//                 <a href="/login" className={menuItemClass}>
//                   Login
//                 </a>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
