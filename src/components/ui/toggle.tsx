"use client"
import { useState } from 'react';

export default function Toggle() {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggle = () => {
        setIsEnabled(!isEnabled);
    };

    return (
        <button
            onClick={toggle}
            className={`
                relative inline-flex h-[20px] w-[36px] rounded-full cursor-pointer
                transition-colors duration-200 ease-in-out p-0.5
                ${isEnabled ? 'bg-primary-400' : 'bg-white-neutral-700'}
            `}
        >
            <span
                className={`
                    inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg
                    transition-transform duration-200 ease-in-out
                    ${isEnabled ? 'translate-x-[16px]' : 'translate-x-[0px]'}
                `}
            />
        </button>
    );
}