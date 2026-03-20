'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { productsData } from '@/lib/product-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle2, ShieldCheck, ClipboardCheck, Info, Package, Send, Search } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const data = productsData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Category Not Found</h1>
        <p className="text-slate-600 mb-8">The category you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-[#002147] text-white rounded-lg font-bold">Return Home</Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 bg-slate-50 min-h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#002147]/10 text-[#002147] text-xs font-bold uppercase tracking-widest mb-6">
                <Icon className="w-4 h-4" />
                Scientific Essentials
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                {data.longDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#catalog" className="h-14 px-8 bg-[#002147] text-white rounded-xl font-bold flex items-center gap-2 hover:shadow-xl transition-all">
                  View Catalog <ArrowLeft className="rotate-[-90deg] w-5 h-5" />
                </a>
                <Link href="/#contact" className="h-14 px-8 border border-slate-200 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                  Bulk Inquiry
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-[40px] overflow-hidden shadow-[-40px_40px_80px_rgba(0,0,0,0.1)] border-[16px] border-white"
            >
              <Image
                src={data.heroImg}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-10 right-10 p-6 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl max-w-xs transition-transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-[#002147] w-6 h-6" />
                  <span className="font-bold text-slate-900">Certified Quality</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">Verified across 200+ diagnostic parameters for consistent performance.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TECHNICAL SPECS BLOCK --- */}
        <section className="py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Technical Overview</h2>
                <p className="text-slate-500 leading-relaxed mb-8">Detailed specifications and compliance metrics for our {data.title.toLowerCase()} range.</p>
                <div className="space-y-4">
                  {data.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-4 border-b border-slate-100 last:border-0">
                      <span className="text-slate-400 font-medium">{spec.label}</span>
                      <span className="text-slate-900 font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {data.grades.map((grade, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-4"
                  >
                    <div className="h-10 px-4 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#002147] font-black italic text-sm w-fit">
                      {grade.name}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{grade.full}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{grade.desc}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="p-8 rounded-3xl bg-[#002147] text-white flex flex-col justify-center items-center text-center gap-4">
                  <ClipboardCheck className="w-10 h-10" />
                  <h4 className="text-xl font-bold">Custom Formulations</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Need a specific grade or custom packaging? Contact our technical team.</p>
                  <Link href="/#contact" className="text-emerald-400 text-xs font-bold uppercase tracking-widest hover:underline">Get a Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CATALOG GRID --- */}
        <section id="catalog" className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Core Inventory</h2>
                <p className="text-slate-500 max-w-xl">A selection of our most requested high-performance products and reagents.</p>
              </div>
              <div className="relative">
                <input type="text" placeholder="Search product name..." className="h-14 pl-12 pr-6 rounded-2xl bg-white border border-slate-200 w-80 shadow-sm focus:ring-2 focus:ring-[#002147] outline-none" />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.catalog.map((item, i) => (
                <motion.div
                  key={i}
                  id={item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest">{item.grade}</span>
                    <span className="text-[10px] font-bold text-slate-300">SKU: {item.sku}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#002147] transition-colors">{item.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  {item.cas && (
                    <div className="mb-8 p-3 rounded-xl bg-slate-50 border border-slate-100 inline-flex items-center gap-2">
                      <Info className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-bold text-slate-500">CAS No: {item.cas}</span>
                    </div>
                  )}
                  <Link href="/#contact" className="w-full h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center gap-2 font-bold text-slate-900 group-hover:bg-[#002147] group-hover:text-white group-hover:border-[#002147] transition-all">
                    Order Inquiry <Send className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 bg-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Streamline Your Scientific Supply Chain</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Connect with our product specialists for bulk pricing, customized reagents, or recurring supply contracts tailored to your lab's scale.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/#contact" className="h-16 px-12 bg-[#002147] text-white rounded-2xl font-bold flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(0,33,71,0.3)] transition-all">
                  Get Wholesale Quote <Send className="w-5 h-5" />
                </Link>
                <button onClick={() => router.back()} className="h-16 px-12 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all">
                  <ArrowLeft className="w-5 h-5" /> Back to Home
                </button>
              </div>
            </motion.div>
          </div>

          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[40vw] h-full bg-slate-50 -z-0 rounded-l-[100px] hidden lg:block" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
