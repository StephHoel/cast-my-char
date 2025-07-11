import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col max-w-full min-h-screen bg-gray-950 text-white">
      <Header />
      
      <main className="flex-grow sm:mx-auto px-4 py-6">{children}</main>
      
      <Footer />
    </div>
    
  )
};
