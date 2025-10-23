import React from 'react'
import Image from 'next/image'

const stats = [
  { id: 1, value: '25+', label: 'Interior Design' },
  { id: 2, value: '93+', label: 'Architecture' },
  { id: 3, value: '48+', label: 'Construction' },
  { id: 4, value: '68+', label: 'Projects Done' }
]

export default function Count(){
  return (
    <section className="relative">
      {/* Background image (put your image in public/bg-kitchen.jpg) */}
      <div className="absolute inset-0">
        <Image src="/bg-kitchen.jpg" alt="kitchen" fill className="object-cover grayscale" />
        <div className="absolute inset-0 bg-gray-900/75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left heading */}
          <div>
            <p className="text-amber-500 text-sm font-medium uppercase tracking-wider">Quality of work</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-white max-w-xl">Milestones that we proudly accomplished &amp; lead us forward.</h2>
          </div>

          {/* Right stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-6 text-center max-w-lg ml-auto">
              {stats.map((s)=> (
                <div key={s.id} className="py-6 border border-white/10 rounded-lg">
                  <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">{s.value}</div>
                  <div className="mt-2 text-sm text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
