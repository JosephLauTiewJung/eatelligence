
import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';
import InputField from './InputField';
import toast from "react-hot-toast";
import { useNavigate} from "react-router-dom";

const RegistrationCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: ''
    });

    const naviagte = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Account creation triggered with:', formData);
        toast("account created!")
        sessionStorage.setItem("email", formData.email);
        sessionStorage.setItem("password", formData.password);
        sessionStorage.setItem("username", formData.name)
        naviagte("/")
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
                <InputField
                    label="Username"
                    icon={<User className="w-6 h-6" />}
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(val) => setFormData(prev => ({ ...prev, name: val }))}
                />

                <InputField
                    label="Password"
                    icon={<Lock className="w-6 h-6" />}
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(val) => setFormData(prev => ({ ...prev, password: val }))}
                />

                <InputField
                    label="Email"
                    icon={<Mail className="w-6 h-6" />}
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(val) => setFormData(prev => ({ ...prev, email: val }))}
                />

                <button
                    type="submit"
                    className="w-full bg-[#0f172a] hover:bg-black text-white font-bold py-4 px-6 rounded-full transition-all duration-200 mt-4 active:scale-95 shadow-lg"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default RegistrationCard;
