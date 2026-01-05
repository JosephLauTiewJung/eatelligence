
import React from 'react';

const InputField = ({
                                                   label,
                                                   icon,
                                                   type,
                                                   placeholder,
                                                   value,
                                                   onChange,
                                               }) => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3 text-gray-800 font-medium">
                <div className="text-gray-900">
                    {icon}
                </div>
                <span className="text-sm font-semibold tracking-wide">{label}</span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#e2e8f0] text-gray-800 placeholder-gray-500 py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all font-medium"
            />
        </div>
    );
};

export default InputField;
