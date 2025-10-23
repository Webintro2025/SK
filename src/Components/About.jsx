import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Tall image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-[360px] lg:w-[520px] xl:w-[620px]">
              <div className="relative aspect-3/5 w-full overflow-hidden">
                <Image src="/about-img.jpg" alt="kitchen" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 relative">
            <div className="max-w-3xl">
              <p className="text-amber-500 uppercase tracking-wider text-xs mb-3">About S.K. Interiors</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">Established Excellence in Space Transformation</h2>
              <p className="text-gray-700 mb-4">S.K. Interiors, founded in 2012, stands as a premier Service Provider based in New Delhi, recognized for delivering comprehensive, high-quality solutions across Interior Designing and Construction Services.</p>
              <p className="text-gray-700 mb-4">Under the leadership of CEO Waseem Khan, our Proprietorship Firm has steadily grown its capacity, now employing 26 to 50 people. Since our GST registration in July 2017, we have built a strong local and regional reputation for reliability and professional execution.</p>
              <p className="text-gray-700 mb-4">Our services include turnkey interior solutions, bespoke furniture manufacturing, project management, and on-site construction coordination. We combine aesthetics with functionality to deliver spaces that reflect each client's personality and needs.</p>
              <p className="text-gray-700 mb-6">With a dedicated team of designers, engineers, and craftsmen, S.K. Interiors emphasizes timely delivery, transparent processes, and strict quality control. Our portfolio spans residential, commercial, and retail projects across the region.</p>

              <div className="mt-6">
                <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-md">Get a Quote</a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
