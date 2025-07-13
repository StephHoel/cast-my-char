import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex flex-col max-w-full min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="flex-grow sm:mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
};
