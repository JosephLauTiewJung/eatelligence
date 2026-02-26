import Tag from "../../../components/Tag.jsx";
import Button from "./Button.jsx";
import {useState} from "react";
import toast from "react-hot-toast";

const SurpriseCard = ({data}) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [mockData, setMockData] = useState(data[0]);
    const onSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            console.log(data)
            setMockData(data[Math.floor(Math.random() * data.length)]);
            setIsSpinning(false);
        }, 2000) // Simulate a 2-second spin duration, needs to be replaced with actual logic

    }
    return (
        <div className={`w-full max-w-md bg-[#111111] rounded-[40px] p-6 border border-zinc-800 transition-all duration-500 ${isSpinning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Image Container */}
            <div className="relative aspect-square w-full rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-900 mb-8">
                <img
                    src={mockData.imageUrl}
                    alt={mockData.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    {mockData.name}
                </h2>
                <div className='text-white'>Price: ${mockData.price}</div>
                {/* Tags Row */}
                <div className="flex flex-wrap gap-2">
                    {Array.isArray(mockData.tags) && mockData.tags.map((tag, idx) => (
                        <Tag key={idx} tag={tag} />
                    ))}
                </div>

                 Action Buttons
                <div className="space-y-3 pt-4">
                    <Button
                        label="Place Order"
                        variant="primary"
                        onClick={() => toast("Order placed!", { duration: 2000 })}
                    />
                    <Button
                        label="Spin Again"
                        variant="secondary"
                        onClick={onSpin}
                        disabled={isSpinning}
                    />
                </div>
            </div>
        </div>
    );
};

export default SurpriseCard;
