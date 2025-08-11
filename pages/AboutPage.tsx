import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Eye } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hakkımızda
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Fikirden gerçeğe, dijitalin ötesine uzanan yolculuğumuz.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
              alt="Tech&Lab Team"
              className="rounded-2xl shadow-xl aspect-[16/9] w-full object-cover"
          />
        </motion.div>

        <div className="mt-20 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6 text-balance leading-relaxed">
            <p>
                Tech&Lab olarak Yazılım ve Dijital Tasarım yetkinliğimizi, Girişimcilik ruhu ve Akademik Araştırma kültürüyle birleştiriyoruz. Bu gücümüzü, önceliğimiz olan Biyomühendislik alanına odaklayarak biyolojik veriyi dijital çözümlere dönüştürüyor ve geleceğin teknolojilerini tasarlıyoruz. Tutkuyla, sıradanlığın ötesine geçen etkili çözümler sunarız.
            </p>
            <p>
                Müşterilerimizin hedeflerini kendi hedeflerimiz olarak benimsiyor, yenilikçi teknolojileri ve yaratıcı yaklaşımları bir araya getirerek onlara özel, sürdürülebilir ve ölçülebilir değerler yaratıyoruz. Her proje, bizim için yeni bir başlangıç ve markanızın dijital dünyadaki imzasını atma fırsatıdır.
            </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <Building className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Kuruluş</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Yenilikçi çözümler üretme tutkusuyla 2023 yılında yola çıktık.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <Target className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Misyonumuz</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Teknoloji ve yaratıcılığı birleştirerek, markaların dijital potansiyelini en üst seviyeye çıkarmak.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <Eye className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vizyonumuz</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Alanında öncü, yenilikçi ve ilham veren bir teknoloji ve tasarım markası olmak.</p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
