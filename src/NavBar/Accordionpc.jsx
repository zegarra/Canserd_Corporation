import React, { useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export function Accordionpc({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    return (
        <div className="relative">
            <button
                className={`${isOpen?"text-white":"text-gray-400"}text-base gap-2 w-full flex justify-between items-center uppercase hover:text-[#2AA769] transition-all duration-200`}
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
            >
                <span>{title}</span>
                <FiChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `200px` : '0px',
                }}
                className="transition-max-heigh rounded-lg bg-zinc-50 drop-shadow-lg top-0 translate-y-10 translate-x-[-150px] absolute duration-200 ease-in-out overflow-hidden pl-4 pr-4"
            >
                <div
                    className="normal-case py-3 px-10 rounded-md "
                    style={{
                       
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
