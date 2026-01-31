import { CheckCircle, Clock, MessageSquare, Trash2, XCircle } from "lucide-react";
import { useState } from "react";

export function Closer() {
    const [shortlist, setShortlist] = useState([
        { id: 1, address: "123 Skyline Ave, Downtown", price: 2400, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=100&q=80" },
        { id: 2, address: "456 Oak Lane, Riverside", price: 1850, image: "https://images.unsplash.com/photo-1512918760383-eda2723ad6e1?auto=format&fit=crop&w=100&q=80" }
    ]);

    const removeListing = (id) => {
        if (confirm("Are you sure you want to remove this property?")) {
            setShortlist(s => s.filter(item => item.id !== id));
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    The Closer
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Great job! You've shortlisted properties. Our AI is now contacting owners to schedule visits.
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Your Shortlist Status</h3>
                </div>

                {shortlist.length === 0 ? (
                    <div className="p-10 text-center text-slate-500">
                        No properties in your shortlist. Go back to Hunter mode to add more!
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {shortlist.map((item) => (
                            <div key={item.id} className="p-6 flex flex-col md:flex-row items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="w-full md:w-16 h-48 md:h-16 rounded-xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />

                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white">
                                            {item.address}
                                        </h4>
                                        <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                            ${item.price.toLocaleString()}/mo
                                        </span>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500 justify-center md:justify-start">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            Pending Response
                                        </span>
                                        <span className="flex items-center gap-1 text-brand-600 dark:text-brand-400">
                                            <MessageSquare className="w-4 h-4" />
                                            AI Conversing...
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-2 w-full md:w-auto">
                                    <button
                                        onClick={() => removeListing(item.id)}
                                        className="flex-1 md:flex-none px-4 py-2 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-sm font-medium"
                                    >
                                        <XCircle className="w-4 h-4" />
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


