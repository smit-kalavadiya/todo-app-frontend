import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">

      <body className="flex flex-col h-screen justify-between">
        <header>
          <div className="p-10 bg-indigo-600">
            <div className="flex items-center justify-center text-white text-2xl">THE TODO APP</div>
          </div>
        </header>

        <main>
          {children}
        </main>


        <footer>
           <div className="p-10 bg-indigo-600">

           <div className="flex items-center justify-center text-white text-sm">@ 2024 THE TODO APP, inc. All rights reserved.</div>

           </div>
        </footer>

      </body>

    </html>
  );
}
