import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Strategist } from "../components/buyer/Strategist";
import { Hunter } from "../components/buyer/Hunter";
import { Closer } from "../components/buyer/Closer";

const STEPS = [
    { id: 1, name: "Strategist", icon: MapPin },
    { id: 2, name: "Hunter", icon: Search },
    { id: 3, name: "Closer", icon: CheckCircle },
];

export function Buyer() {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        location: "",
        budget: 2000,
        transport: "car"
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    // const prevStep = () => setStep((s) => Math.max(s - 1, 1)); // Optional if needed

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Wizard Header */}
            <div className="mb-12">
                <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    Your Home Journey
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Step {step} of 3: {STEPS[step - 1].name} Phase
                </p>

                {/* Progress Bar */}
                <div className="mt-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 rounded-full" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-brand-500 -translate-y-1/2 rounded-full transition-all duration-500"
                        style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
                    />

                    <div className="relative flex justify-between">
                        {STEPS.map((s) => {
                            const isActive = s.id === step;
                            const isCompleted = s.id < step;
                            const Icon = s.icon;

                            return (
                                <button
                                    key={s.id}
                                    onClick={() => s.id < step && setStep(s.id)}
                                    disabled={s.id > step}
                                    className={cn(
                                        "relative z-10 flex flex-col items-center gap-2 group disabled:cursor-not-allowed",
                                        isActive ? "text-brand-600 dark:text-brand-400" :
                                            isCompleted ? "text-brand-600 dark:text-brand-400" : "text-slate-400"
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all bg-slate-50 dark:bg-slate-950",
                                        isActive ? "border-brand-500 shadow-lg scale-110" :
                                            isCompleted ? "border-brand-500 bg-brand-500 text-white" : "border-slate-300 dark:border-slate-700"
                                    )}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">{s.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && (
                            <Strategist
                                preferences={preferences}
                                setPreferences={setPreferences}
                                onNext={nextStep}
                            />
                        )}
                        {step === 2 && (
                            <Hunter
                                preferences={preferences}
                                onNext={nextStep}
                            />
                        )}
                        {step === 3 && (
                            <Closer />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
