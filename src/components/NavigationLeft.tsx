import React from 'react';

interface NavigationLeftProps {
    children?: React.ReactNode;
}

const NavigationLeft: React.FC<NavigationLeftProps> = ({ children }) => {
    return (
        <div className="w-64 h-screen relative py-4 bg-gray-0 border-r border-gray-300 z-1000">
            {children}
        </div>
    );
};

export default NavigationLeft;