import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { services } from '../lib/data';

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-8 rounded-2xl bg-white/5 dark:bg-black/10 border border-white/10 dark:border-white/10 backdrop-blur-sm shadow-xl h-full"
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-start gap-4">
        {service.icon}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-24 sm:py-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sunduğumuz Hizmetler
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            İşletmenizin her dijital ihtiyacına yönelik, kapsamlı ve yenilikçi çözümler sunuyoruz.
          </p>
        </div>
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
