import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Clock, ExternalLink, Phone, Star, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import BottomNavigationBar from '../../components/BottomNavigationBar';

const NavigationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const spot = location.state?.spot;
    const [arrived, setArrived] = useState(false);

    const openGoogleMaps = () => {
        // Open Google Maps with the location name
        const query = encodeURIComponent(`${spot?.stall || spot?.name}, ${spot?.location}, University of Malaya`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
        toast.success('Opening Google Maps...', { icon: '🗺️' });
    };

    const handleArrived = () => {
        setArrived(true);
        const history = JSON.parse(sessionStorage.getItem('spendingLog') || '[]');
        history.push({
            id: Date.now(),
            date: new Date().toISOString(),
            spotName: spot?.name || 'Unknown',
            price: spot?.price || 0,
            location: spot?.location || ''
        });
        sessionStorage.setItem('spendingLog', JSON.stringify(history));
        toast.success('Meal logged!', { icon: '🍽️' });
        setTimeout(() => navigate('/home'), 1500);
    };

    if (!spot) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>No destination. <span className="text-orange-500 cursor-pointer" onClick={() => navigate('/food-list')}>Go back</span></p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-black text-white pb-28">

            {/* Header */}
            <div className="p-4 pt-8 flex items-center gap-4">
                <button onClick={() => navigate(-1)} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Navigate to</p>
                    <h1 className="text-xl font-bold">{spot.location || spot.address || spot.name}</h1>
                </div>
            </div>

            {/* Destination Card */}
            <div className="mx-4 mt-4">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <img src={spot.imageUrl} alt={spot.name} className="w-full h-40 object-cover" />
                    <div className="p-5">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold">{spot.name}</h2>
                                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {spot.stall || spot.location || spot.address || 'Nearby'}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-orange-500">RM {(spot.price || 0).toFixed(2)}</p>
                                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                                    <Star className="w-3 h-3 fill-yellow-400" /> {spot.rating || 4.5}
                                </div>
                            </div>
                        </div>

                        {/* Tags - handle both string[] and object[] formats */}
                        {spot.tags && spot.tags.length > 0 && (
                            <div className="flex gap-2 mt-4">
                                {spot.tags.slice(0, 3).map((tag, idx) => (
                                    <span key={idx} className={`px-3 py-1 rounded-full text-xs ${typeof tag === 'object' ? tag.color : 'bg-white/5 text-gray-400'
                                        }`}>
                                        {typeof tag === 'object' ? tag.label : tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Info */}
            <div className="mx-4 mt-4 grid grid-cols-3 gap-3">
                <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/5">
                    <Clock className="w-5 h-5 mx-auto text-blue-400 mb-1" />
                    <p className="text-white font-bold">5 min</p>
                    <p className="text-gray-500 text-xs">Walking</p>
                </div>
                <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/5">
                    <Navigation className="w-5 h-5 mx-auto text-green-400 mb-1" />
                    <p className="text-white font-bold">400m</p>
                    <p className="text-gray-500 text-xs">Distance</p>
                </div>
                <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/5">
                    <Phone className="w-5 h-5 mx-auto text-purple-400 mb-1" />
                    <p className="text-white font-bold">Open</p>
                    <p className="text-gray-500 text-xs">Now</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mx-4 mt-6 space-y-3">
                {/* Google Maps Button */}
                <button onClick={openGoogleMaps}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:opacity-90">
                    <ExternalLink className="w-5 h-5" /> Open in Google Maps
                </button>

                {/* Arrived Button */}
                <button onClick={handleArrived} disabled={arrived}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${arrived
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                        }`}>
                    {arrived ? <><CheckCircle2 className="w-5 h-5" /> Logged!</> : '✓ I\'ve Arrived - Log Meal'}
                </button>
            </div>

            <BottomNavigationBar />
        </div>
    );
};

export default NavigationPage;
