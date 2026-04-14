'use client';

import { motion } from 'framer-motion';

const Trainers = () => {
  const trainers = [
    {
      name: 'Arjun',
      specialty: 'Strength Training',
      image: '/trainer1.jpg'
    },
    {
      name: 'Shourya',
      specialty: 'Yoga & Pilates',
      image: '/trainer2.jpg'
    },
    {
      name: 'Sharavan',
      specialty: 'Cardio & HIIT',
      image: '/trainer3.jpg'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Trainers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our certified trainers who are passionate about helping you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-2">{trainer.name}</h3>
              <p className="text-gray-300">{trainer.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;