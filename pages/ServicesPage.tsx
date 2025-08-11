import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../lib/data';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hizmetlerimiz
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            İşletmenizin her dijital ihtiyacına yönelik, kapsamlı ve yenilikçi çözümler sunuyoruz.
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.details}
                </p>
              </div>
              <div className="flex-1 w-full min-h-[256px] bg-gray-100 dark:bg-gray-800/50 rounded-2xl flex items-center justify-center p-8">
                 <div className="transform scale-[2]">
                    {service.icon}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
