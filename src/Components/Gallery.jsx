import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery(){
	return (
		<section className="relative bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
				<div className="grid lg:grid-cols-2 gap-8 items-center">
					{/* Left promo text */}
					<div className="pr-8">
						<p className="text-amber-500 text-sm font-medium uppercase tracking-wide">Promo Video</p>
						<h2 className="mt-4 text-3xl lg:text-4xl font-extrabold">Ensuring a safe experience from design to installation</h2>
						<p className="mt-4 text-gray-300 max-w-lg">We're following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.</p>

						<div className="mt-8">
							<Link href="#" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full shadow hover:opacity-95">
								More Videos
								<svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Right video card */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="w-full lg:w-[560px] rounded shadow-lg overflow-hidden bg-gray-800">
							<div className="relative">
								<Image src="/kitchen-video-thumb.jpg" alt="video" width={960} height={540} className="w-full h-auto object-cover" />
								<button aria-label="Play video" className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-white/90 flex items-center justify-center transform translate-y-0 shadow-2xl">
									<svg className="w-10 h-10 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9-15-9z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

