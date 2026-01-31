import { Home, User, House } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";
import { FloatingBackground } from "./FloatingBackground";

export function Layout({ children }) {
    const location = useLocation();

    const NavLink = ({ to, icon: Icon, children }) => {
        const isActive = location.pathname === to;
        return (
            <Link
                to={to}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
                    isActive
                        ? "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
            >
                <Icon className="w-4 h-4" />
                <span>{children}</span>
            </Link>
        );
    };

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300 relative">
            <FloatingBackground />
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-brand-500 to-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-500/50 transition-all">
                            <House className="w-5 h-5" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                            NestFinder
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-2">
                        <NavLink to="/buyer" icon={Home}>Buyer</NavLink>
                        <NavLink to="/seller" icon={User}>Seller</NavLink>
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
                            <span className="sr-only">Menu</span>
                            {/* Add Hamburger Icon if needed */}
                            Menu
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-slate-500 dark:text-slate-400">
                        © 2026 NestFinder. AI-Powered Real Estate.
                    </p>
                </div>
            </footer>
        </div>
    );
}
