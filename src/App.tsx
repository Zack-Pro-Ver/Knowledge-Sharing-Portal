<<<<<<< HEAD
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
    //   <h1 className="text-4xl font-bold text-green-500">
    //     Welcome to Tailwind CSS + Vite + React!
    //   </h1>
    // </div>
    <Sidebar />
  );
=======
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
>>>>>>> db97362f2bd2bc498cdfa2eae57e3665f6f0d490
}

export default App;
