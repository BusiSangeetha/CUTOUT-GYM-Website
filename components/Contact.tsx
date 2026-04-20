'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-red-500 mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="text-red-500 mr-3 text-lg" />
                Shaikpet Nala, Manikonda, HYD 500049
              </div>
              <div className="flex items-center text-gray-300">
                <FaPhone className="text-red-500 mr-3 text-lg" />
                9652418523
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="text-red-500 mr-3 text-lg" />
                info@Cutoutgym.com
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black/50 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;