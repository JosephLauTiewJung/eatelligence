
import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';
import InputField from './InputField';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEmail = sessionStorage.getItem('email');
        const userPassword = sessionStorage.getItem('password');

        if (!formData.email || !formData.password) {
            toast.error('Please enter a valid email');
            return
        }
        else if (formData.email !== userEmail && formData.password !== userPassword) {
            toast.error('Please enter a valid password');
            return
        }
        
        toast.success('Login successful!');
        sessionStorage.setItem('email', formData.email);
        navigate('/home')
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 w-full">
            <form onSubmit={handleSubmit} className="space-y-8">

                <InputField
                    label="Email"
                    icon={<Mail className="w-6 h-6" />}
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(val) => setFormData(prev => ({ ...prev, email: val }))}
                />

                <InputField
                    label="Password"
                    icon={<Lock className="w-6 h-6" />}
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(val) => setFormData(prev => ({ ...prev, password: val }))}
                />

                <button
                    type="submit"
                    className="w-full bg-[#0f172a] hover:bg-black text-white font-bold py-4 px-6 rounded-full transition-all duration-200 mt-4 active:scale-95 shadow-lg"
                >
                    Login!
                </button>
            </form>
            <div className='text-grey mt-4 hover:text-blue-600' onClick={() => navigate('/registration')}>Don't have an account yet?</div>
        </div>
    );
};

export default LoginCard;
