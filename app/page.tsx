'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Gavel,
  Truck,
  FlaskConical,
  Microscope,
  Landmark,
  Globe,
  Target,
  Eye,
  Package,
  BarChart3,
  Download,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  AlertTriangle,
  ClipboardCheck,
  Award,
  HeartPulse,
  Lock,
  Check,
  Sprout,
  Droplets,
  GraduationCap,
  Factory,
  Cog,
  Layers
} from 'lucide-react';
import Link from 'next/link';
import { sendEmail } from '@/app/actions/send-email';

export default function HomePage() {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    requirement: '',
    quantity: '',
    contactDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [activeMouldImage, setActiveMouldImage] = useState<'steel' | 'silicone'>('steel');

  const handleInquirySelect = (requirementName: string) => {
    setFormState((prev) => ({
      ...prev,
      requirement: requirementName,
    }));
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const result = await sendEmail(formState);

    if (result.success) {
      setSubmitMessage({ type: 'success', text: 'Thank you for your inquiry. Our team will contact you shortly.' });
      setFormState({
        name: '',
        organization: '',
        requirement: '',
        quantity: '',
        contactDetails: ''
      });
    } else {
      setSubmitMessage({ type: 'error', text: result.message || 'Something went wrong. Please try again later.' });
    }
    
    setIsSubmitting(false);
  };

  const chemicals = [
    { 
      name: 'Sulfuric Acid 98%', 
      grade: 'AR/GR Grade', 
      desc: 'High purity analytical reagent grade for complex laboratory synthesis, quantitative chemical analysis, and titration.', 
      sku: 'CH-4429', 
      img: '/products/sulfuric-acid.jpg',
      tags: ['AR/GR Grade', 'ISO 9001:2015', '98% Purity'],
      photographer: 'AR Grade Reagent'
    },
    { 
      name: 'Methanol', 
      grade: 'HPLC Grade', 
      desc: 'Specifically purified for high-performance liquid chromatography, spectroscopy, and organic chemistry analysis.', 
      sku: 'SL-8812', 
      img: '/products/methanol.jpg',
      tags: ['HPLC Grade', 'UV Filtered', 'Low Residue'],
      photographer: 'HPLC Grade Solvent'
    },
    { 
      name: 'Acetonitrile', 
      grade: 'Solvents', 
      desc: 'Ultrapure gradient-grade solvent for critical organic synthesis and pharmaceutical laboratory applications.', 
      sku: 'CH-1055', 
      img: '/products/acetonitrile.jpg',
      tags: ['Gradient Grade', 'Pharma QC', 'Ultra-low residue'],
      photographer: 'Gradient Grade HPLC'
    },
  ];

  const glassware = [
    { 
      name: 'Erlenmeyer Flasks', 
      grade: 'Borosilicate 3.3', 
      desc: 'Heat resistant borosilicate glass with heavy-duty rims and uniform thermal shock resistance for safe sample mixing.', 
      sku: 'GW-201', 
      img: '/products/erlenmeyer-flask.jpg',
      tags: ['Borosilicate 3.3', 'Up to 500°C', 'Heavy Rims'],
      photographer: 'Borosilicate 3.3 Conical'
    },
    { 
      name: 'Volumetric Pipettes', 
      grade: 'Calibrated Class A', 
      desc: 'Individually calibrated to deliver precise volumes with certified volumetric accuracy and ISO 648 conformity.', 
      sku: 'GW-505', 
      img: '/products/volumetric-pipette.jpg',
      tags: ['Class A Calibrated', 'Batch Certified', 'DIN EN ISO 648'],
      photographer: 'Class A Calibrated'
    },
    { 
      name: 'Graduated Beakers', 
      grade: 'Borosilicate', 
      desc: 'Low-form beakers with reinforced uniform walls and dual scale graduations for accurate measuring and pouring.', 
      sku: 'GW-112', 
      img: '/products/graduated-beaker.jpg',
      tags: ['Dual Scale', 'Spout Pouring', 'Reinforced Walls'],
      photographer: 'Low-Form Griffin'
    },
  ];

  const industries = [
    { 
      icon: Landmark, 
      title: 'Government Labs', 
      slug: 'government-labs', 
      desc: 'End-to-end solutions for state and central diagnostic facilities.', 
      img: '/solutions/government-labs.jpg'
    },
    { 
      icon: Sprout, 
      title: 'Agriculture & Soil', 
      slug: 'agriculture-soil', 
      desc: 'Specialized equipment for soil nutritional analysis and crop monitoring.', 
      img: '/solutions/agriculture-soil.jpg'
    },
    { 
      icon: Droplets, 
      title: 'Environmental Testing', 
      slug: 'environmental-testing', 
      desc: 'Solutions for water quality and air pollution monitoring.', 
      img: '/solutions/environmental-testing.jpg'
    },
    { 
      icon: FlaskConical, 
      title: 'Pharmaceutical QC', 
      slug: 'pharmaceutical-qc', 
      desc: 'High-purity solvents and glassware meeting USP/BP/IP standards.', 
      img: '/solutions/pharmaceutical-qc.jpg'
    },
    { 
      icon: Microscope, 
      title: 'Research & Biotech', 
      slug: 'research-biotech', 
      desc: 'Supporting advanced research with specialized reagents.', 
      img: '/solutions/research-biotech.jpg'
    },
    { 
      icon: GraduationCap, 
      title: 'Universities', 
      slug: 'universities', 
      desc: 'Equipping academic labs with durable scientific tools.', 
      img: '/solutions/universities.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* --- HOME SECTION --- */}
        <section id="home" className="relative overflow-hidden bg-[#f5f7f8] pt-16 pb-24 px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002147]/10 text-[#002147] text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                GeM Registered Organization
              </div>
              <h1 className="text-slate-900 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Where Scientific Precision Meets <span className="text-[#002147]">Government-Grade</span> Reliability
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
                GeM Registered, Govt Contract Proven, Pan-India Delivery. Empowering Indian healthcare with certified excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="bg-[#002147] text-white h-14 px-8 rounded-lg font-bold text-base hover:shadow-xl transition-all flex items-center gap-2">
                  View Catalog <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="bg-white text-slate-900 border border-slate-200 h-14 px-8 rounded-lg font-bold text-base hover:bg-slate-50 transition-all flex items-center">
                  Partner with Us
                </a>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#002147]/5 rounded-3xl -rotate-2"></div>
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/hero-lab.png" alt="Modern lab" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="px-6 md:px-10 lg:px-20 -mt-12 mb-20 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, label: 'GeM Registered', title: 'Verified Seller', color: 'bg-green-100 text-green-600' },
              { icon: Gavel, label: 'Govt Contracts', title: '150+ Completed', color: 'bg-blue-100 text-blue-600' },
              { icon: Truck, label: 'Delivery Reach', title: 'Pan-India Support', color: 'bg-purple-100 text-purple-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
                <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{stat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-24 bg-white px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <span className="inline-block px-3 py-1 bg-[#002147]/10 text-[#002147] text-xs font-bold uppercase tracking-wider rounded w-fit">Specialized Government Supplier</span>
                <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">Empowering Laboratories with Precision</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Wellness Corporate Healthcare stands as a premier partner in the public sector, bridging the gap between cutting-edge diagnostic technology and essential government healthcare facilities.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div>
                    <h4 className="text-[#002147] text-4xl font-bold mb-1">7+</h4>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-wider">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-[#002147] text-4xl font-bold mb-1">250+</h4>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-wider">Govt Labs Served</p>
                  </div>
                </div>
              </motion.div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/team.png" alt="Technical team" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#002147]/10"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <Target className="w-10 h-10 text-[#002147] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-600">Ensuring highest standards of clinical accuracy are never compromised by supply chain inefficiencies in government labs.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <Eye className="w-10 h-10 text-[#002147] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600">To be the gold standard in specialized healthcare logistics, recognized for absolute integrity and technical expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCTS SECTION --- */}
        <section id="products" className="py-24 bg-[#f5f7f8] px-6 md:px-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Scientific Essentials</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Engineered for precision and reliability in critical research and diagnostic environments.</p>
            </div>

            <div className="mb-20">
              <div className="flex items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <Microscope className="text-[#002147] w-8 h-8" />
                  <h3 className="text-2xl font-bold">Laboratory Chemicals</h3>
                </div>
                <Link href="/products/chemicals" className="text-sm font-bold text-[#002147] hover:underline flex items-center gap-2">
                  View Full Category <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {chemicals.map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all h-full flex flex-col">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5 group/img">
                      <Image src={item.img} alt={item.name} fill className="object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 text-[10px] font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {item.photographer}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-[#002147] bg-[#002147]/10 px-2.5 py-1 rounded mb-2 inline-block w-fit">{item.grade}</span>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{item.name}</h4>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed flex-grow">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-bold text-slate-400">SKU: {item.sku}</span>
                      <button
                        type="button"
                        onClick={() => handleInquirySelect(`${item.name} (${item.grade}) - Laboratory Chemicals`)}
                        className="text-[#002147] font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        Inquiry <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <FlaskConical className="text-[#002147] w-8 h-8" />
                  <h3 className="text-2xl font-bold">Precision Glassware</h3>
                </div>
                <Link href="/products/glassware" className="text-sm font-bold text-[#002147] hover:underline flex items-center gap-2">
                  View Full Category <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {glassware.map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all h-full flex flex-col">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5 group/img">
                      <Image src={item.img} alt={item.name} fill className="object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 text-[10px] font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {item.photographer}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-[#002147] bg-[#002147]/10 px-2.5 py-1 rounded mb-2 inline-block w-fit">{item.grade}</span>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{item.name}</h4>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed flex-grow">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-bold text-slate-400">SKU: {item.sku}</span>
                      <button
                        type="button"
                        onClick={() => handleInquirySelect(`${item.name} (${item.grade}) - Precision Glassware`)}
                        className="text-[#002147] font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        Inquiry <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- MANUFACTURING SECTION --- */}
        <section id="manufacturing" className="py-24 bg-white px-6 md:px-10 lg:px-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002147]/10 text-[#002147] text-xs font-bold tracking-widest uppercase mb-4">
                  <Factory className="w-4 h-4" />
                  Contract & OEM Manufacturing
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                  Manufacturing & Tooling Capabilities
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  High-precision injection moulding, custom tooling fabrication, and confidential end-to-end production engineered for medical consumables and industrial precision.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Injection Moulding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/manufacturing/injection-moulding.png"
                    alt="Injection Moulding - Precision Plastic Components"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#002147] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#002147]" />
                    Injection Moulding
                  </span>
                </div>

                {/* Content Container (down the image) */}
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#002147] bg-[#002147]/10 px-2.5 py-1 rounded inline-block">
                      Injection Moulding
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#002147] transition-colors">
                    Precision Plastic Components
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    High-precision moulding for medical consumables, labware, and device housings. Scalable from pilot trials to high-volume runs with batch-certified consistency.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Medical Consumables</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Lab Ware</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Device Housings</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Batch Inspected</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleInquirySelect('Injection Moulding - Precision Plastic Components')}
                      className="w-full bg-[#002147] hover:bg-[#002147]/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer"
                    >
                      <span>Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Steel Mould and Silicone Manufacturing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Container with Toggle */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={activeMouldImage === 'steel' ? '/manufacturing/steel-mould.png' : '/manufacturing/silicone-manufacturing.png'}
                    alt="Steel Mould and Silicone Manufacturing"
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#002147] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <Cog className="w-3.5 h-3.5 text-[#002147]" />
                    Tooling & Silicone
                  </span>

                  {/* Toggle Pills for user photos */}
                  <div className="absolute top-4 right-4 z-10 flex bg-white/95 backdrop-blur-md p-1 rounded-xl shadow-md border border-slate-100 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveMouldImage('steel')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${activeMouldImage === 'steel' ? 'bg-[#002147] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Steel Mould
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveMouldImage('silicone')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${activeMouldImage === 'silicone' ? 'bg-[#002147] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Silicone
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                    <span className="font-medium bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {activeMouldImage === 'steel' ? 'Durable Steel Mould Tooling' : 'Flexible Liquid Silicone Pouring'}
                    </span>
                  </div>
                </div>

                {/* Content Container (down the image) */}
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#002147] bg-[#002147]/10 px-2.5 py-1 rounded inline-block">
                      Steel Mould and Silicone Manufacturing
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#002147] transition-colors">
                    Tooling and Flexible Components
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Durable steel tooling and flexible silicone moulding fabricated to your exact CAD drawings. Engineered for repeatable accuracy and high-output production cycles.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Durable Steel Moulds</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Silicone Moulds</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Custom Drawings</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Replacement Tooling</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleInquirySelect('Steel Mould and Silicone Manufacturing - Tooling and Flexible Components')}
                      className="w-full bg-[#002147] hover:bg-[#002147]/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer"
                    >
                      <span>Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Third-Party Manufacturing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/manufacturing/third-party-manufacturing.png"
                    alt="Third-Party Manufacturing - End-to-End Production"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#002147] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <Factory className="w-3.5 h-3.5 text-[#002147]" />
                    Third-Party Manufacturing
                  </span>
                </div>

                {/* Content Container (down the image) */}
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#002147] bg-[#002147]/10 px-2.5 py-1 rounded inline-block">
                      Third-Party Manufacturing
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#002147] transition-colors">
                    End-to-End Production
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Turnkey contract manufacturing from raw sourcing to certified QC and final dispatch. 100% confidential and NDA-protected with zero facility overhead.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">End-to-End Sourcing</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Strict Confidentiality</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Quality Control</span>
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Timely Dispatch</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleInquirySelect('Third-Party Manufacturing - End-to-End Production')}
                      className="w-full bg-[#002147] hover:bg-[#002147]/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer"
                    >
                      <span>Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Turnkey Callout Banner */}
            <div className="mt-16 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="size-14 rounded-2xl bg-[#002147] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#002147]/20">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Confidential & Custom Manufacturing Requests</h4>
                  <p className="text-slate-600 text-sm md:text-base">Have technical CAD drawings or need custom tooling quotation? All client designs are protected under strict NDA.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleInquirySelect('Custom Tooling & CAD Specifications')}
                className="whitespace-nowrap px-6 py-3.5 bg-white border border-slate-300 text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                Inquire with CAD Specs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* --- COMPLIANCE SECTION --- */}
        <section id="compliance" className="py-24 bg-white px-6 md:px-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/compliance-hero.png" alt="Compliance" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">Quality & Compliance</h3>
                  <p className="text-slate-200">Excellence through rigorous standards.</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Our Commitment to Safety</h2>
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, title: 'ISO Alignment', desc: 'Strict alignment with ISO 9001:2015 and ISO 45001:2018 standards.' },
                    { icon: ClipboardCheck, title: 'Certification of Analysis', desc: 'Comprehensive COA for every batch of medical supply.' },
                    { icon: AlertTriangle, title: 'MSDS Documentation', desc: 'Detailed safety protocols detailing handling and storage.' },
                    { icon: Award, title: 'Quarterly Audits', desc: '100% compliance with local and international regulations.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="text-[#002147] mt-1"><item.icon className="w-6 h-6" /></div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- GOVERNMENT SECTION --- */}
        <section id="government" className="py-24 bg-[#f5f7f8] px-6 md:px-20 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
              <div className="md:w-1/2">
                <span className="text-[#002147] font-bold text-xs uppercase tracking-widest mb-4 inline-block">National Partner</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Empowering Healthcare in India & Beyond</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  With a proven track record across Pan-India, we partner with major state health corporations (including BMSICL) to deliver critical lab projects. Specialized in large-scale diagnostic infrastructure and GeM-compliant procurement.
                </p>
                <div className="space-y-4">
                  {['National Health Mission Integrated Solutions', 'Multi-State Approved Supplier List', 'GeM Category-1 National Seller'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600"><Check className="w-3 h-3" /></div>
                      <span className="font-semibold text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/india-hero.png" alt="India Healthcare Projects" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES SECTION --- */}
        <section id="industries" className="py-24 bg-white px-6 md:px-10 lg:px-20 font-sans border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Industries We Serve</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Providing the scientific foundation for excellence across diverse sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, i) => (
                <div key={i} className="group flex">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col w-full"
                  >
                    {/* Image Container with Zoom Effect */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={industry.img}
                        alt={industry.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                      {/* Icon Badge */}
                      <div className="absolute top-5 left-5 size-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-md">
                        <industry.icon className="w-6 h-6" />
                      </div>

                      <div className="absolute bottom-5 left-6 right-6">
                        <h4 className="text-2xl font-black text-white leading-tight">{industry.title}</h4>
                      </div>
                    </div>

                    <div className="p-7 flex flex-col flex-grow">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {industry.desc}
                      </p>

                      <div className="mt-auto pt-2">
                        <Link
                          href={`/solutions/${industry.slug}`}
                          className="text-[#002147] font-bold text-sm flex items-center gap-1.5 hover:underline group/link"
                        >
                          Explore Solutions <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-slate-50 px-6 md:px-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Contact Us</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="size-12 rounded-xl bg-[#002147] flex items-center justify-center text-white"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Headquarters</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">Shivpuri, Boring Road, Patna, Bihar, 800023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-12 rounded-xl bg-[#002147] flex items-center justify-center text-white"><Phone className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <p className="text-slate-500 text-sm">+91-9709781104</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-12 rounded-xl bg-[#002147] flex items-center justify-center text-white"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-500 text-sm">support@wellnesscorporatehealthcare.in</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6251238042832!2d85.11291137535014!3d25.617370314554247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5828b506080f%3A0xfc77d50513e2f25c!2sBoring%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1773869620549!5m2!1sen!2sin"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 font-sans">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Quick Inquiry Form</h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Name</label>
                      <input required type="text" className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#002147] outline-none" placeholder="Your Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Organization</label>
                      <input required type="text" className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#002147] outline-none" placeholder="Institution" value={formState.organization} onChange={(e) => setFormState({ ...formState, organization: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Requirement</label>
                      <input required type="text" className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#002147] outline-none" placeholder="What do you need?" value={formState.requirement} onChange={(e) => setFormState({ ...formState, requirement: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Quantity</label>
                      <input required type="number" className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#002147] outline-none" placeholder="Numbers only" value={formState.quantity} onChange={(e) => setFormState({ ...formState, quantity: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700">Contact Details</label>
                      <input required type="text" className="h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#002147] outline-none" placeholder="Email or Phone" value={formState.contactDetails} onChange={(e) => setFormState({ ...formState, contactDetails: e.target.value })} />
                    </div>
                    <div className="md:col-span-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 bg-[#002147] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#002147]/90 transition-all shadow-lg shadow-[#002147]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
                      </button>
                    </div>
                    {submitMessage && (
                      <div className={`md:col-span-2 p-4 rounded-xl text-sm font-medium ${submitMessage.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                        {submitMessage.text}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
