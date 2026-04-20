'use client';

import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      icon: ''
    },
    {
      title: 'Cardio',
      description: 'Improve cardiovascular health and endurance with our variety of cardio equipment.',
      icon: ''
    },
    {
      title: 'Yoga',
      description: 'Find balance and flexibility through our yoga classes and meditation sessions.',
      icon: ''
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our range of fitness services designed to help you reach your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;