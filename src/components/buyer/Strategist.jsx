import { MapPin, DollarSign, Car } from "lucide-react";

export function Strategist({ preferences, setPreferences, onNext }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    The Strategist
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Tell us about your work and lifestyle. We'll calculate the perfect commute zones for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Work Location
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                required
                                value={preferences.location}
                                onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
                                placeholder="123 Office Plaza, Tech District"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Monthly Budget: <span className="text-brand-600 dark:text-brand-400 font-bold">${preferences.budget}</span>
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="number"
                                value={preferences.budget}
                                onChange={(e) => setPreferences({ ...preferences, budget: Number(e.target.value) })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                            />
                        </div>
                        <input
                            type="range"
                            min="500"
                            max="5000"
                            step="100"
                            value={preferences.budget}
                            onChange={(e) => setPreferences({ ...preferences, budget: Number(e.target.value) })}
                            className="w-full accent-brand-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Commute Mode
                        </label>
                        <div className="relative">
                            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <select
                                value={preferences.transport}
                                onChange={(e) => setPreferences({ ...preferences, transport: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white appearance-none"
                            >
                                <option value="car">Car</option>
                                <option value="transit">Public Transit</option>
                                <option value="bike">Bike</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold shadow-lg shadow-brand-500/20 transition-all active:scale-95"
                    >
                        Calculate Commute Zones
                    </button>
                </form>
            </div>

            {/* Map Placeholder */}
            <div className="h-[400px] md:h-full min-h-[400px] bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://api.placeholder.com/map')] bg-cover opacity-20" />
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interactive Map</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Enter your details to see <br /> commute zones here.
                    </p>
                </div>
            </div>
        </div>
    );
}
