'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { industriesData } from '@/lib/industry-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const data = industriesData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <p className="text-slate-600 mb-8">The industry solution you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-[#002147] text-white rounded-lg font-bold">Return Home</Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src={data.heroImg} 
            alt={data.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 mx-auto">
                <Icon className="w-6 h-6 text-white" />
                <span className="text-sm font-bold uppercase tracking-widest">{data.title}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                {data.title} Solutions
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
                {data.longDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-12 -mt-16 relative z-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="text-4xl font-black text-[#002147] mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- STEP BY STEP GUIDE --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Implementation Journey</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Our proven process for delivering scientific excellence at scale.</p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10" />
              
              {data.steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  <div className="size-24 rounded-3xl bg-white shadow-lg border-2 border-slate-100 flex items-center justify-center text-[#002147] relative">
                    <step.icon className="w-10 h-10" />
                    <div className="absolute -top-3 -right-3 size-10 rounded-full bg-[#002147] text-white flex items-center justify-center font-black border-4 border-slate-50">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- KEY FEATURES --- */}
        <section className="py-24 bg-[#002147] text-white px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-12">Core Capabilities</h2>
              <div className="grid gap-6">
                {data.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="size-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{feature}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10"
            >
              <Image 
                src={data.heroImg} 
                alt="Feature visual" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#002147]/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 text-center group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-8">Ready to Transform Your {data.title} Facility?</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Connect with our specialized team to discuss your specific requirements and learn how Wellness Corporate Healthcare can streamline your diagnostic infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/#contact" className="h-16 px-10 bg-[#002147] text-white rounded-xl font-bold flex items-center gap-3 hover:shadow-2xl transition-all hover:scale-105">
                Request a Proposal <ArrowRight className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => router.back()} 
                className="h-16 px-10 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Industries
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
