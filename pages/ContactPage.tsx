import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    alert('Mesajınız gönderildi! (Bu bir simülasyondur)');
  };

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
            Bize Ulaşın
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Bir fikriniz mi var? Projenizi birlikte hayata geçirelim.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="space-y-8"
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">Proje ve işbirlikleri için bize yazın.</p>
                        <a href="mailto:info@techandlab.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">info@techandlab.com</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Telefon</h3>
                        <p className="text-gray-600 dark:text-gray-400">Acil durumlar için bize ulaşabilirsiniz.</p>
                        <a href="tel:+905555555555" className="text-indigo-600 dark:text-indigo-400 hover:underline">+90 555 555 55 55</a>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 dark:bg-black/10 p-8 rounded-2xl border border-white/10">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Adınız Soyadınız</label>
                        <input type="text" id="name" required className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Adresiniz</label>
                        <input type="email" id="email" required className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mesajınız</label>
                        <textarea id="message" rows={4} required className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"></textarea>
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
                        Gönder
                        <Send size={18} />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
