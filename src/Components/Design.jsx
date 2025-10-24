import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Design() {
	return (
		<div className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

				{/* Top: Designed by desires */}
				<div className="grid lg:grid-cols-2 gap-10 items-center">
					<div className="relative">
						<div className="w-full rounded-lg overflow-hidden shadow-lg">
							<Image src="/Malls Interior Design Service.png" alt="kitchen" width={900} height={600} className="w-full h-auto object-cover" />
						</div>

						{/* Circular badge */}
						<div className="absolute left-12 top-1/2 transform -translate-y-1/2">
							<div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-amber-500 text-white shadow-2xl">
								<div className="text-4xl font-extrabold">25</div>
								<div className="absolute bottom-4 text-xs text-white/90 text-center w-full">Years<br/>Guarantee</div>
								{/* dashed white ring */}
								<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeDasharray="3 3" />
								</svg>
							</div>
						</div>
					</div>

								<div>
									<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">Core Offerings</p>
									<h3 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">Bespoke Interior Solutions</h3>
									<div className="mt-6 text-gray-700 space-y-6 max-w-xl">
										<div>
											<h4 className="font-semibold">Interior Designing</h4>
											<p className="text-sm text-gray-600">Providing tailored designs for Residential, Commercial, and Mall interiors.</p>
										</div>

										<div>
											<h4 className="font-semibold">Modular Furnishings</h4>
											<p className="text-sm text-gray-600">Supplying and installing various Modular Kitchens (including L-Shape models) using Aluminium, PVC, Acrylic, Stainless Steel (SS), and custom Wooden Almirahs.</p>
										</div>

										<div>
											<h4 className="font-semibold">Finishing Services</h4>
											<p className="text-sm text-gray-600">Expert installation of PVC False Ceilings and advanced Fabrication Work to complete your interiors with precision.</p>
										</div>
									</div>
									<div className="mt-8">
										<Link href="#contact" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full shadow hover:bg-amber-700">
											Contact Us
										</Link>
									</div>
								</div>
				</div>

				{/* Testimonials block */}
				<div className="grid lg:grid-cols-2 gap-10 items-center">
								<div>
									<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">Core Offerings</p>
									<h3 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">Building &amp; Structural Services</h3>
									<div className="mt-6 text-gray-700 space-y-6 max-w-xl">
										<div>
											<h4 className="font-semibold">Window Systems</h4>
											<p className="text-sm text-gray-600">Supply and professional installation of durable UPVC Windows and Aluminium Windows.</p>
										</div>

										<div>
											<h4 className="font-semibold">Renovation &amp; Construction</h4>
											<p className="text-sm text-gray-600">Specialized Office Interior Renovation Services and Commercial Building Construction Services handled end-to-end.</p>
										</div>
									</div>
									<div className="mt-8">
										<Link href="#contact" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full shadow hover:bg-amber-700">
											Request a Quote
										</Link>
									</div>
								</div>

					<div>
						<div className="w-full rounded-lg overflow-hidden shadow-lg">
							<Image src="/Home Interior Designing Services.png" alt="kitchen interior" width={900} height={600} className="w-full h-auto object-cover" />
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

