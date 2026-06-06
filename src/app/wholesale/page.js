"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";
import { BarChart3, Package, TrendingUp, History, Download, Globe } from "@/components/Icons";

export default function WholesaleDashboard() {
    const stats = [
        { label: "Active Inventory", value: "1,240kg", icon: Package },
        { label: "Market Trend", value: "+2.4%", icon: TrendingUp },
        { label: "Global Orders", value: "84", icon: Globe },
        { label: "Total Value", value: "$4.2M", icon: BarChart3 },
    ];

    return (
        <main className="bg-matte-black min-h-screen">
            <Navbar />

            <div className="pt-48 pb-20 container mx-auto px-6">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <h1 className="text-gold-500 font-serif text-4xl md:text-6xl mb-4">Wholesale Portal</h1>
                        <p className="text-gold-100/40 font-sans uppercase tracking-[0.3em] text-xs underline underline-offset-8">Authorized Dealer / Lyon Atelier</p>
                    </div>
                    <button className="mt-8 md:mt-0 flex items-center space-x-3 border border-gold-500/30 px-6 py-3 text-gold-500 text-[10px] uppercase tracking-widest hover:bg-gold-500/10 transition-colors">
                        <Download size={14} />
                        <span>Export Inventory Report</span>
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 border border-gold-500/10"
                        >
                            <stat.icon size={24} className="text-gold-500 mb-6" />
                            <p className="text-gold-100/40 text-[10px] uppercase tracking-widest mb-2 font-sans">{stat.label}</p>
                            <p className="text-3xl font-serif text-white">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Inventory List */}
                <div className="glass border border-gold-500/10 overflow-hidden">
                    <div className="p-8 border-b border-gold-500/10 flex justify-between items-center bg-white/5">
                        <h3 className="text-xl font-serif text-white">Consolidated Raw Material Depot</h3>
                        <div className="flex space-x-4">
                            <button className="text-[10px] uppercase tracking-widest bg-gold-600 text-black px-4 py-2 font-bold font-sans">Request Batch</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-xs uppercase tracking-[0.1em]">
                            <thead>
                                <tr className="border-b border-gold-500/10 text-gold-500/60 font-bold">
                                    <th className="p-8">Material ID</th>
                                    <th className="p-8">Type</th>
                                    <th className="p-8">Origin</th>
                                    <th className="p-8">Weight/Carat</th>
                                    <th className="p-8">Purity</th>
                                    <th className="p-8">Status</th>
                                    <th className="p-8">Market Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gold-100/70">
                                {[
                                    { id: "AU-24K-882", type: "Gold Bullion", origin: "Switzerland", weight: "12kg", purity: "99.9%", status: "Available", price: "$68,420/kg" },
                                    { id: "DM-RD-441", type: "Raw Diamonds", origin: "Botswana", weight: "45ct", purity: "VS-1 (AVG)", status: "Reserved", price: "$124,000" },
                                    { id: "EM-ZM-102", type: "Emerald Lot", origin: "Zambia", weight: "120ct", purity: "Vivid Green", status: "Available", price: "$420,000" },
                                    { id: "PT-950-33", type: "Platinum Grain", origin: "South Africa", weight: "5kg", purity: "95.0%", status: "In Transit", price: "$32,100/kg" },
                                ].map((row, i) => (
                                    <tr key={row.id} className="border-b border-gold-500/5 hover:bg-white/5 transition-colors">
                                        <td className="p-8">{row.id}</td>
                                        <td className="p-8 text-white">{row.type}</td>
                                        <td className="p-8">{row.origin}</td>
                                        <td className="p-8">{row.weight}</td>
                                        <td className="p-8">{row.purity}</td>
                                        <td className="p-8">
                                            <span className={`px-3 py-1 rounded-full text-[9px] ${row.status === 'Available' ? 'bg-green-900/40 text-green-400' : row.status === 'Reserved' ? 'bg-gold-900/40 text-gold-400' : 'bg-blue-900/40 text-blue-400'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="p-8 text-white font-bold">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity Segment */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="md:col-span-2 glass border border-gold-500/10 p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-xl font-serif text-white flex items-center">
                                <History size={18} className="text-gold-500 mr-3" />
                                Procurement History
                            </h4>
                        </div>
                        <div className="space-y-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-gold-500/5 last:border-0">
                                    <div>
                                        <p className="text-sm text-gold-100/80">Batch #902 - Platinum 950 Grain</p>
                                        <p className="text-[10px] text-gold-900/60 uppercase tracking-widest mt-1">Confirmed Oct 24, 2025</p>
                                    </div>
                                    <p className="text-white font-bold">$160,500</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass border border-gold-500/10 p-8 flex flex-col justify-center items-center text-center">
                        <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                            <TrendingUp size={32} className="text-gold-500" />
                        </div>
                        <h4 className="text-serif text-2xl text-white mb-2">Market Insights</h4>
                        <p className="text-gold-100/50 font-cormorant text-sm leading-relaxed mb-6">Gold prices are expected to rise by 4.2% next quarter. Hedging options available.</p>
                        <button className="text-[10px] uppercase tracking-[0.2em] text-gold-500 border-b border-gold-500/30 hover:border-gold-500 transition-all pb-1">View Full Analysis</button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
