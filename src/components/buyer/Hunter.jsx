import { ArrowRight, Bed, Bath, Frame, MapPin } from "lucide-react";

const MOCK_LISTINGS = [
    {
        id: 1,
        price: 2400,
        address: "123 Skyline Ave, Downtown",
        beds: 2,
        baths: 2,
        sqft: 1100,
        commute: 12,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        price: 1850,
        address: "456 Oak Lane, Riverside",
        beds: 1,
        baths: 1,
        sqft: 850,
        commute: 15,
        image: "https://images.unsplash.com/photo-1512918760383-eda2723ad6e1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        price: 3200,
        address: "789 Pine Heights, Hilltop",
        beds: 3,
        baths: 2.5,
        sqft: 1600,
        commute: 25,
        image: "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        price: 2100,
        address: "321 Cedar Blvd, Westside",
        beds: 2,
        baths: 1,
        sqft: 950,
        commute: 18,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80"
    }
];

export function Hunter({ preferences, onNext }) {
    return (
        <div>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        The Hunter
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Based on your budget of <strong className="text-brand-600 dark:text-brand-400">${preferences.budget}</strong> in {preferences.location || "your area"}.
                    </p>
                </div>

                <div className="flex gap-2">
                    <select className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm outline-none focus:ring-2 focus:ring-brand-500">
                        <option>Sort by Match</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {MOCK_LISTINGS.map((listing) => (
                    <div
                        key={listing.id}
                        className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={listing.image}
                                alt={listing.address}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs font-bold">
                                {listing.commute} min commute
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                    ${listing.price.toLocaleString()}
                                </h3>
                                <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                    /mo
                                </span>
                            </div>

                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 truncate">
                                {listing.address}
                            </p>

                            <div className="flex justify-between text-slate-500 dark:text-slate-500 text-sm mb-4">
                                <div className="flex items-center gap-1">
                                    <Bed className="w-4 h-4" />
                                    <span>{listing.beds}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Bath className="w-4 h-4" />
                                    <span>{listing.baths}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Frame className="w-4 h-4" />
                                    <span>{listing.sqft}</span>
                                </div>
                            </div>

                            <button
                                onClick={onNext}
                                className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                            >
                                Add to Shortlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
