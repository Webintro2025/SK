import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b1115] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Logo + address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
               <img src="/loogo.png" alt="" />
              </div>
              <div>
                <div className="text-white font-semibold">S.K. Interiors</div>
                <div className="text-sm text-gray-400">Design · Build · Deliver</div>
              </div>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <div>📍 I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039</div>
              <div>📞 9911639864</div>
              <div>✉️ skinterior02021986@gmail.com</div>
              <div>GST: 07CAHPK5281L1ZA</div>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-col">
            <h5 className="text-white font-semibold mb-3">Quick Links</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Right: Products / Services list */}
          <div >
            <h5 className="text-white font-semibold pl-26 mb-3">Products & Services</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="space-y-1">
                <a href="/product/interior-designing-service" className="block hover:text-white">Interior Designing Service</a>
                <a href="/product/modular-kitchen" className="block hover:text-white">Modular Kitchen</a>
                <a href="/product/window-installation-service" className="block hover:text-white">Window Installation Service</a>
                <a href="/product/upvc-windows-door-systems" className="block hover:text-white">UPVC Windows &amp; Door Systems</a>
                <a href="/product/l-shape-modular-kitchen" className="block hover:text-white">L-Shape Modular Kitchen</a>
                <a href="/product/aluminium-products-sliding-windows" className="block hover:text-white">Aluminium Products (Sliding Windows)</a>
                <a href="/product/false-ceiling-services" className="block hover:text-white">False Ceiling Services</a>
              </div>

              <div className="space-y-1">
                <a href="/product/renovation-services" className="block hover:text-white">Renovation Services</a>
                <a href="/product/wooden-almirah-storage" className="block hover:text-white">Wooden Almirah &amp; Storage</a>
                <a href="/product/construction-services" className="block hover:text-white">Construction Services</a>
                <a href="/product/fabrication-work-industrial" className="block hover:text-white">Fabrication Work (Industrial)</a>
                <a href="/product/sliding-almirah-specialized-storage" className="block hover:text-white">Sliding Almirah (Specialized Storage)</a>
                <a href="/product/aluminium-windows-specific" className="block hover:text-white">Aluminium Windows (Specific Product Focus)</a>
                <a href="/product/new-arrivals-specialty-items" className="block hover:text-white">New Arrivals &amp; Specialty Items</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} S.K. Interiors. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
