'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At CUTOUT GYM, we're dedicated to helping you achieve your fitness goals through personalized training programs,
            cutting-edge equipment, and a supportive community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Expert Trainers', description: 'Certified professionals with years of experience.' },
            { title: 'Modern Facilities', description: 'State-of-the-art equipment and comfortable environment.' },
            { title: 'Community Support', description: 'Join a motivating community of fitness enthusiasts.' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-red-500 mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;