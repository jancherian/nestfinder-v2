import { Plus, LayoutDashboard, Settings, Trash2, X } from "lucide-react";
import { useState } from "react";

export function Seller() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [listings, setListings] = useState([
        { id: 1, address: "123 Skyline Ave", price: 2400, views: 124, inquiries: 8, status: "Active" },
        { id: 2, address: "789 Pine Heights", price: 3200, views: 45, inquiries: 2, status: "Active" },
    ]);
    const [newListing, setNewListing] = useState({ address: "", price: "" });

    const startAddListing = () => setShowAddForm(true);

    const handleAddListing = (e) => {
        e.preventDefault();
        const listing = {
            id: Date.now(),
            address: newListing.address,
            price: Number(newListing.price),
            views: 0,
            inquiries: 0,
            status: "Active"
        };
        setListings([...listings, listing]);
        setNewListing({ address: "", price: "" });
        setShowAddForm(false);
    };

    const deleteListing = (id) => {
        if (confirm('Are you sure you want to delete this listing?')) {
            setListings(l => l.filter(item => item.id !== id));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
                        Seller Dashboard
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Manage your properties and track performance.
                    </p>
                </div>
                <button
                    onClick={startAddListing}
                    className="flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold shadow-lg shadow-accent-500/20 transition-all active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Listing</span>
                </button>
            </div>

            {showAddForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 w-full max-w-md shadow-2xl relative">
                        <button
                            onClick={() => setShowAddForm(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Add New Property</h2>

                        <form onSubmit={handleAddListing} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Property Address
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={newListing.address}
                                    onChange={e => setNewListing({ ...newListing, address: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-500 outline-none"
                                    placeholder="e.g. 123 Maple Street"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Monthly Price ($)
                                </label>
                                <input
                                    type="number"
                                    required
                                    value={newListing.price}
                                    onChange={e => setNewListing({ ...newListing, price: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-500 outline-none"
                                    placeholder="e.g. 2500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-all"
                            >
                                Create Listing
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {showSettings && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 w-full max-w-md shadow-2xl relative">
                        <button
                            onClick={() => setShowSettings(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Settings</h2>
                        <div className="space-y-6">
                            {/* Profile Settings */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Profile Settings</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Display Name</label>
                                        <input
                                            type="text"
                                            defaultValue="John Doe"
                                            className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="john@example.com"
                                            className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-500 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Notifications */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Notifications</h3>
                                <div className="space-y-3">
                                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                                        <span className="text-slate-700 dark:text-slate-300">New Inquiry Alerts</span>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 text-accent-600 rounded focus:ring-accent-500" />
                                    </label>
                                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                                        <span className="text-slate-700 dark:text-slate-300">Weekly Performance Report</span>
                                        <input type="checkbox" className="w-5 h-5 text-accent-600 rounded focus:ring-accent-500" />
                                    </label>
                                </div>
                            </div>

                            {/* Save Button */}
                            <button
                                onClick={() => {
                                    alert("Settings saved!");
                                    setShowSettings(false);
                                }}
                                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h2 className="font-bold text-lg text-slate-900 dark:text-white">Your Listings</h2>
                    <button
                        onClick={() => setShowSettings(true)}
                        className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                    >
                        <Settings className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium text-sm">
                                <th className="p-6">Property</th>
                                <th className="p-6">Price</th>
                                <th className="p-6">Status</th>
                                <th className="p-6">Performance</th>
                                <th className="p-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {listings.map((l) => (
                                <tr key={l.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="p-6">
                                        <div className="font-bold text-slate-900 dark:text-white">{l.address}</div>
                                        <div className="text-sm text-slate-500">ID: #{l.id}</div>
                                    </td>
                                    <td className="p-6 text-slate-700 dark:text-slate-300">
                                        ${l.price.toLocaleString()}/mo
                                    </td>
                                    <td className="p-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                            {l.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span>{l.views} views</span>
                                            <span>{l.inquiries} inquiries</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <button
                                            onClick={() => deleteListing(l.id)}
                                            className="text-red-600 dark:text-red-400 font-medium text-sm hover:underline flex items-center gap-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
