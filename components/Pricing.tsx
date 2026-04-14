'use client';

import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '28K',
      period: '/month',
      features: ['Access to gym equipment', 'Locker room access', 'Basic fitness assessment', '24/7 access']
    },
    {
      name: 'Pro',
      price: '49K',
      period: '/month',
      features: ['All Basic features', 'Personal trainer sessions', 'Group classes', 'Nutrition consultation', 'Sauna access'],
      popular: true
    },
    {
      name: 'Premium',
      price: '60K',
      period: '/month',
      features: ['All Pro features', 'Unlimited personal training', 'Massage therapy', 'VIP locker', 'Priority booking']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gray-900 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular ? 'border-red-600 ring-2 ring-red-600/50' : 'border-red-600/20 hover:border-red-600/50'
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-red-500 mb-6">
                {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300 flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;