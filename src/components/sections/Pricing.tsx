import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    icon: Zap,
    price: 49,
    period: '/ mo',
    desc: 'Simple, transparent pricing for AI automation.',
    color: '#3b82f6', // blue-500
    buttonColor: '#14b8a6', // teal-500
    popular: false,
    features: [
      '1 AI Assistant',
      'Basic WhatsApp Integration',
      'Email Support',
      'Limited API Access',
      '1,000 Monthly Interactions',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    icon: Shield,
    price: 99,
    period: '/ mo',
    desc: 'Advanced features for growing businesses.',
    color: '#14b8a6', // teal-500 (card header)
    accentColor: '#2563eb', // blue-600 (button)
    popular: true,
    features: [
      '3 AI Assistants',
      'Advanced WhatsApp Integration',
      '24/7 Priority Support',
      'Full API Access',
      'Advanced AI Training',
      '10,000 Monthly Interactions',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for large scale.',
    color: '#1e293b', // slate-800
    popular: false,
    features: [
      'Unlimited AI Assistants',
      'Custom Integration Solutions',
      'Dedicated Account Manager',
      'SLA & Security Compliance',
      'Custom AI Models',
      'Unlimited Interactions',
    ],
    cta: 'Contact Sales',
  },
];

const faqs = [
  { question: 'What payment methods do you accept?' },
  { question: 'Is there a free trial available?' },
  { question: 'Can I upgrade or downgrade my plan?' },
  { question: 'How secure is my data?' },
];

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="bg-[#F8FAFC] text-slate-800 flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section id="pricing" className="bg-[#0B1B3D] bg-gradient-to-b from-[#0B1B3D] to-[#1E3A8A] pt-24 pb-48 text-center px-4 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Simple, transparent pricing <br className="hidden md:block" /> for AI automation.
            </h1>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-slate-300 font-medium text-sm">Monthly Billing</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`${annual ? 'bg-blue-500' : 'bg-slate-600'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1B3D]`}
                role="switch"
                aria-checked={annual}
              >
                <span className="sr-only">Toggle billing</span>
                <span className={`${annual ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium text-sm">Annual Billing</span>
                <span className="inline-flex items-center rounded-full bg-blue-100/10 px-2 py-0.5 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-500/20">Save 20%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const price = typeof plan.price === 'number' && annual ? Math.floor(plan.price * 0.8) : plan.price;
              
              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular 
                      ? 'shadow-2xl ring-2 ring-blue-500 md:-translate-y-4 z-20' 
                      : 'shadow-xl ring-1 ring-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                      <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                    </div>
                  )}
                  
                  <div 
                    className="rounded-lg py-3 text-center mb-6"
                    style={{ backgroundColor: plan.color }}
                  >
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  </div>

                  <div className="text-center mb-8 flex flex-col items-center justify-center min-h-[52px]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900">
                        {typeof price === 'number' ? `$${price}` : price}
                      </span>
                      {typeof price === 'number' && (
                        <span className="text-slate-500 font-medium">{plan.period}</span>
                      )}
                    </div>
                    {annual && typeof plan.price === 'number' && (
                      <p className="text-xs text-emerald-500 mt-1 font-bold">Billed annually</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                      plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-teal-500 hover:bg-teal-600 text-white'
                    }`}
                    style={plan.name === 'Enterprise' ? { backgroundColor: plan.color } : {}}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow group">
                <span className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#0B1B3D] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <h3 className="text-2xl font-bold">Need a custom enterprise solution? Let's talk.</h3>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-xl">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
