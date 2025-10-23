import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50">
				{/* Top slim contact bar */}
				<div className="bg-black border-b">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center justify-between text-xs text-white h-8">
						<div className="flex items-center gap-6">
							<span>📞 9911639864</span>
							<span>✉️ skinterior02021986@gmail.com</span>
						</div>
						<div className="hidden sm:flex items-center text-xs text-white">
							<span>GST : 07CAHPK5281L1ZA</span>
						</div>
					</div>
				</div>
			</div>
				<header className="border-b bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					{/* Left: Logo */}
					<div className="flex items-center flex-1">
						<Link href="/" className="inline-flex items-center gap-3">
							{/* If you have a logo file put it in /public and update src accordingly */}
											<div className="relative w-52 h-20">
								<Image
									src="/loogo.png"
									alt="Kitchor"
									fill
											
									className="object-contain"
								/>
							</div>
						</Link>
					</div>


					<nav className="hidden md:flex md:flex-1 md:justify-center">
						<ul className="flex gap-8 text-sm font-medium text-gray-700 items-center">
							<li>
								<Link href="/" className="inline-flex items-center gap-2 text-[#D2AD65] border-b-2 border-[#D2AD65] pb-2">Home</Link>
							</li>
							{/* Products with hover dropdown (desktop) */}
							<li className="relative group">
								<span className="inline-flex items-center cursor-pointer">Products</span>
								<div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[720px] lg:w-[820px] bg-white text-gray-800 rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
									<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
										<Link href="/product/interior-designing-service" className="block px-3 py-2 rounded hover:bg-gray-50">Interior Designing Service</Link>
										<Link href="/product/modular-kitchen" className="block px-3 py-2 rounded hover:bg-gray-50">Modular Kitchen</Link>
										<Link href="/product/window-installation-service" className="block px-3 py-2 rounded hover:bg-gray-50">Window Installation Service</Link>
										<Link href="/product/upvc-windows-door-systems" className="block px-3 py-2 rounded hover:bg-gray-50">UPVC Windows &amp; Door Systems</Link>
										<Link href="/product/l-shape-modular-kitchen" className="block px-3 py-2 rounded hover:bg-gray-50">L-Shape Modular Kitchen</Link>
										<Link href="/product/aluminium-products-sliding-windows" className="block px-3 py-2 rounded hover:bg-gray-50">Aluminium Products (Featuring Sliding Windows)</Link>
										<Link href="/product/false-ceiling-services" className="block px-3 py-2 rounded hover:bg-gray-50">False Ceiling Services</Link>
										<Link href="/product/renovation-services" className="block px-3 py-2 rounded hover:bg-gray-50">Renovation Services</Link>
										<Link href="/product/wooden-almirah-storage" className="block px-3 py-2 rounded hover:bg-gray-50">Wooden Almirah &amp; Storage</Link>
										<Link href="/product/construction-services" className="block px-3 py-2 rounded hover:bg-gray-50">Construction Services</Link>
										<Link href="/product/fabrication-work-industrial" className="block px-3 py-2 rounded hover:bg-gray-50">Fabrication Work (Industrial)</Link>
										<Link href="/product/sliding-almirah-specialized-storage" className="block px-3 py-2 rounded hover:bg-gray-50">Sliding Almirah (Specialized Storage)</Link>
										<Link href="/product/aluminium-windows-specific" className="block px-3 py-2 rounded hover:bg-gray-50">Aluminium Windows (Specific Product Focus)</Link>
										<Link href="/product/new-arrivals-specialty-items" className="block px-3 py-2 rounded hover:bg-gray-50">New Arrivals &amp; Specialty Items</Link>
									</div>
								</div>
							</li>
							<li>
								<Link href="/about" className="hover:text-gray-900">About us</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:text-gray-900">Contact us</Link>
							</li>
						</ul>
					</nav>


					<div className="flex items-center gap-4 flex-1 justify-end">
						<a
							href="https://wa.me/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-[#D2AD65] hover:bg-[#D2AD65] text-white font-medium text-sm px-4 py-2 rounded-full"
							aria-label="Contact us on WhatsApp"
						>
							{/* WhatsApp-like phone bubble icon (white) */}
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-12.3 8.38 8.38 0 013.8.9L21 3v8.5z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12.25c-.2-.1-1.1-.55-1.3-.6-.2-.05-.35-.1-.5.1s-.6.6-.75.75c-.15.15-.3.2-.5.05-.2-.15-.8-.3-1.5-.95-.55-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.25-.3.35-.45.1-.15.15-.25.25-.4.1-.15.05-.3 0-.4-.05-.1-.5-1.2-.7-1.7-.2-.45-.4-.4-.55-.4-.15 0-.35 0-.55 0s-.4.05-.6.3c-.2.25-.8.8-.8 1.9s.85 2.2.95 2.35c.1.15 1.6 2.45 3.9 3.35 2.3.9 2.3.6 2.7.55.4-.05 1.1-.45 1.25-.9.15-.45.15-.85.1-.95-.05-.1-.2-.15-.4-.25z" />
							</svg>
							<span>WhatsApp</span>
						</a>

						{/* Mobile menu button (kept for small-screen nav) */}
						<button aria-label="Open menu" className="md:hidden p-2 rounded hover:bg-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
				</header>
			</div>

			{/* spacer to offset fixed header height (top bar h-8 + header h-20 = 28) */}
			<div className="h-28" aria-hidden="true" />
		</>
	)
}

