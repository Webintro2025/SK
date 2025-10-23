import React from 'react'

export default function HomeBanner({ videoSrc = '/video.mp4' }) {
  return (
    <section className="bg-white w-full">
      {/* full-bleed banner: container removed so media touches screen edges */}
        <div className="relative">
          {/* Video side */}

          <div className="w-full">
            <div className="w-full h-[660px] md:h-[740px] lg:h-[720px] overflow-hidden relative">
              <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90" />

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 max-w-3xl">
                  <p className="text-amber-400 uppercase tracking-wider text-sm mb-3">You dream it, we design it</p>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">We can build you the kitchen of your dreams</h1>
                  <p className="text-white/90 mb-6">End-to-end interior design and execution — custom kitchens, bespoke furniture, and turnkey installation with unmatched attention to detail.</p>
                  <div>
                    <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded">Schedule a Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}
