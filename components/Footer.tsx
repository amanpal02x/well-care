import React from 'react';
import Link from 'next/link';
import { Globe, Share2, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="mb-8">
            <img 
              src="/logo.jpg" 
              alt="Wellness Corporate Healthcare" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Premier provider of certified medical and laboratory solutions across India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#002147] transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#002147] transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="/about" className="hover:text-[#002147] transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#002147] transition-colors">Products Catalog</Link></li>
            <li><Link href="/government" className="hover:text-[#002147] transition-colors">GeM Marketplace</Link></li>
            <li><Link href="/government" className="hover:text-[#002147] transition-colors">Government Tenders</Link></li>
            <li><Link href="/industries" className="hover:text-[#002147] transition-colors">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-[#002147] transition-colors">Order Tracking</a></li>
            <li><a href="#" className="hover:text-[#002147] transition-colors">Technical Support</a></li>
            <li><a href="#" className="hover:text-[#002147] transition-colors">MSDS Documents</a></li>
            <li><a href="#" className="hover:text-[#002147] transition-colors">Calibration Services</a></li>
            <li><Link href="/contact" className="hover:text-[#002147] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Headquarters</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Shivpuri, Boring Road,<br />
            Patna, Bihar, India - 800023
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-900 font-bold mb-2">
            <Phone className="text-[#002147] w-4 h-4" />
            +91 (11) 4567-8900
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
            <Mail className="text-[#002147] w-4 h-4" />
            support@wellnesshealthcare.in
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">© 2024 Wellness Corporate Healthcare. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-slate-400 hover:text-[#002147]">Privacy Policy</a>
          <a href="#" className="text-xs text-slate-400 hover:text-[#002147]">Terms of Service</a>
          <a href="#" className="text-xs text-slate-400 hover:text-[#002147]">Compliance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
