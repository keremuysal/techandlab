import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "circOut",
            },
        },
    };

    return (
        <motion.section 
            className="py-24 sm:py-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div className="order-2 md:order-1" variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Biz Kimiz?
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8 text-balance">
                            Tech&Lab olarak Yazılım ve Dijital Tasarım yetkinliğimizi, Girişimcilik ruhu ve Akademik Araştırma kültürüyle birleştiriyoruz. Bu gücümüzü, önceliğimiz olan Biyomühendislik alanına odaklayarak biyolojik veriyi dijital çözümlere dönüştürüyor ve geleceğin teknolojilerini tasarlıyoruz. Tutkuyla, sıradanlığın ötesine geçen etkili çözümler sunarız.
                        </p>
                        <div className="mt-8">
                            <Link to="/hakkimizda" className="group inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
                                Hikayemizi Keşfedin
                                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div className="order-1 md:order-2" variants={itemVariants}>
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                            alt="A team collaborating"
                            className="rounded-2xl shadow-xl aspect-[4/3] w-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
