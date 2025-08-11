
import React from 'react';
import type { Service } from '../types';

const FeatureCard: React.FC<Service> = ({ icon, title, description }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
            {icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

export default FeatureCard;
