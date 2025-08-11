import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ReferencesPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white dark:bg-[#0A0A0A] flex items-center justify-center min-h-[calc(100vh-20rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
            <Briefcase className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Referanslarımız
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Projelerimiz ve müşteri başarı hikayelerimiz yakında burada sergilenecek.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Heyecan verici projelerimizi paylaşmak için sabırsızlanıyoruz!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ReferencesPage;
