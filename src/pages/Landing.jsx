import { ArrowRight, Search, Key, Home, Banknote, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function Landing() {
    return (
        <div className="relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-200/30 dark:bg-brand-900/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">

                {/* Brand Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-white/5 border border-white/20 rounded-full mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">AI-Powered Real Estate</span>
                </motion.div>

                {/* Hero Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                    Stop hunting. <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Start living.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed"
                >
                    Your intelligent concierge that searches, filters, and coordinates—automatically.
                    Choose your journey to begin.
                </motion.p>

                {/* Role Cards */}
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                    {/* Buyer Card */}
                    <RoleCard
                        to="/buyer"
                        title="I'm a Buyer"
                        description="Discover your ideal home with AI-driven commute analysis and smart filtering."
                        icon={Search}
                        features={[
                            { icon: Key, text: "Commute Zones" },
                            { icon: Home, text: "Smart Match" },
                        ]}
                        color="brand"
                        delay={0.3}
                    />

                    {/* Seller Card */}
                    <RoleCard
                        to="/seller"
                        title="I'm a Seller"
                        description="List properties in seconds and let AI handle inquiries and scheduling."
                        icon={Banknote}
                        features={[
                            { icon: Camera, text: "Auto Listing" },
                            { icon: Home, text: "Smart Management" },
                        ]}
                        color="accent"
                        delay={0.4}
                    />
                </div>
            </div>
        </div>
    );
}

function RoleCard({ to, title, description, icon: Icon, features, color, delay }) {
    const isBrand = color === 'brand';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            <Link
                to={to}
                className={cn(
                    "group block relative p-8 h-full rounded-3xl border transition-all duration-300 overflow-hidden text-left",
                    "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1",
                    isBrand
                        ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-accent-500/50 dark:hover:border-accent-500/50"
                )}
            >
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                    isBrand
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white"
                        : "bg-accent-50 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400 group-hover:bg-accent-600 group-hover:text-white"
                )}>
                    <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-500">
                            <f.icon className="w-4 h-4" />
                            <span>{f.text}</span>
                        </div>
                    ))}
                </div>

                <div className={cn(
                    "absolute bottom-8 right-8 p-2 rounded-full opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                    isBrand ? "text-brand-600 bg-brand-50 dark:bg-brand-900/50" : "text-accent-600 bg-accent-50 dark:bg-accent-900/50"
                )}>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </Link>
        </motion.div>
    );
}
