// import { Route, Routes, Link } from "react-router";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// }
import Sidebar from "./components/Sidebar/index.tsx";
function App() {
  return (
    <Sidebar />
    // <>
    //   <Navbar/>
    //    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
    //     <h1 className="text-4xl font-bold text-green-500">
    //       Welcome to Tailwind CSS + Vite + React!
    //     </h1>
    //     </div>

    //   <Routes>
    //     {/* Define your routes here */}
    //     <Route path="/" element={<div>Home Page</div>} />
    //     <Route path="/about" element={<div>About Page</div>} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </>
  );
}

export default App;
