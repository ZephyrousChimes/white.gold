import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'katex/dist/katex.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strava",
  description: "Deep dives into machine learning, distributed systems, spectral theory, and time series analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-screen`}>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <nav className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/30 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <a href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-cyan-300 transition-all">
                  Strava
                </a>
                <div className="flex gap-6 text-sm">
                  <a href="/streaming-systems" className="text-slate-400 hover:text-slate-100 transition-colors">Topics</a>
                  <a href="/#about" className="text-slate-400 hover:text-slate-100 transition-colors">About</a>
                </div>
              </div>
            </div>
          </nav>
          <main className="relative z-10">
            {children}
          </main>
          <footer className="border-t border-slate-800/50 mt-24">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
              <p>Exploring the mathematical foundations of modern systems</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}