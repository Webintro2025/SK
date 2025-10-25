"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

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
					<div >
						<Link href="/" className="inline-flex items-center gap-3">
							{/* Responsive logo: smaller on mobile, larger on desktop */}
							{/* Mobile: narrower but taller; sm/md keep larger sizes */}
							<div className="relative w-24 h-16 sm:w-44 sm:h-16 md:w-52 md:h-20">
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
							{/* Products with hover dropdown (desktop) - JS controlled open/close with delay */}
							<li className="relative" onMouseEnter={() => {}}>
								<ProductsDropdown />
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
							href="https://wa.me/919911639864"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-[#D2AD65] hover:bg-[#D2AD65] text-white font-medium text-sm px-4 py-2 rounded-full"
							aria-label="Contact us on WhatsApp: +91 9911639864"
						>
							{/* WhatsApp-like phone bubble icon (white) */}
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-12.3 8.38 8.38 0 013.8.9L21 3v8.5z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12.25c-.2-.1-1.1-.55-1.3-.6-.2-.05-.35-.1-.5.1s-.6.6-.75.75c-.15.15-.3.2-.5.05-.2-.15-.8-.3-1.5-.95-.55-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.25-.3.35-.45.1-.15.15-.25.25-.4.1-.15.05-.3 0-.4-.05-.1-.5-1.2-.7-1.7-.2-.45-.4-.4-.55-.4-.15 0-.35 0-.55 0s-.4.05-.6.3c-.2.25-.8.8-.8 1.9s.85 2.2.95 2.35c.1.15 1.6 2.45 3.9 3.35 2.3.9 2.3.6 2.7.55.4-.05 1.1-.45 1.25-.9.15-.45.15-.85.1-.95-.05-.1-.2-.15-.4-.25z" />
							</svg>
							<span>WhatsApp</span>
						</a>

						{/* Mobile menu button (kept for small-screen nav) */}
						{/* Mobile menu button */}
						<button
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							onClick={() => setMobileOpen(!mobileOpen)}
							className="md:hidden p-2 rounded hover:bg-gray-100"
						>
							{mobileOpen ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
				</header>
			</div>

			{/* Mobile menu panel (only on small screens). Desktop remains unchanged */}
			<div className={`md:hidden fixed inset-x-0 top-28 z-40 transform transition-transform duration-200 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2/4 opacity-0 pointer-events-none'}`}>
				<div className="bg-white shadow-lg mx-4 rounded-lg ring-1 ring-black/5 overflow-hidden">
					<div className="px-4 py-4">
						<nav>
							<ul className="flex flex-col gap-2 text-gray-800">
								<li>
									<Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Home</Link>
								</li>
								<li>
									{/* Mobile Products collapsible */}
									<button
										onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
										className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50"
										aria-expanded={mobileProductsOpen}
									>
										<span>Products</span>
										<svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</button>

									<div className={`${mobileProductsOpen ? 'block' : 'hidden'} mt-2 pl-3 border-l border-gray-100`}> 
										<ul className="flex flex-col gap-1">
											<li><Link href="/product/interior-designing-service" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Interior Designing Service</Link></li>
											<li><Link href="/product/modular-kitchen" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Modular Kitchen</Link></li>
											<li><Link href="/product/window-installation-service" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Window Installation Service</Link></li>
											<li><Link href="/product/upvc-windows-door-systems" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">UPVC Windows &amp; Door Systems</Link></li>
											<li><Link href="/product/l-shape-modular-kitchen" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">L-Shape Modular Kitchen</Link></li>
											<li><Link href="/product/aluminium-products-sliding-windows" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Aluminium Products (Featuring Sliding Windows)</Link></li>
											<li><Link href="/product/false-ceiling-services" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">False Ceiling Services</Link></li>
											<li><Link href="/product/renovation-services" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Renovation Services</Link></li>
											<li><Link href="/product/wooden-almirah-storage" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Wooden Almirah &amp; Storage</Link></li>
											<li><Link href="/product/construction-services" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Construction Services</Link></li>
											<li><Link href="/product/fabrication-work-industrial" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Fabrication Work (Industrial)</Link></li>
											<li><Link href="/product/sliding-almirah-specialized-storage" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Sliding Almirah (Specialized Storage)</Link></li>
											<li><Link href="/product/aluminium-windows-specific" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Aluminium Windows (Specific Product Focus)</Link></li>
											<li><Link href="/product/new-arrivals-specialty-items" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">New Arrivals &amp; Specialty Items</Link></li>
										</ul>
									</div>
								</li>
								<li>
									<Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">About us</Link>
								</li>
								<li>
									<Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Contact us</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			{/* spacer to offset fixed header height (top bar h-8 + header h-20 = 28) */}
			<div className="h-28" aria-hidden="true" />
		</>
	)
}


function ProductsDropdown(){
	const [open, setOpen] = useState(false)
	const timeoutRef = useRef(null)

	useEffect(()=>{
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [])

	function handleEnter(){
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}
		setOpen(true)
	}

	function handleLeave(){
		// hide after 2 seconds
		if (timeoutRef.current) clearTimeout(timeoutRef.current)
		timeoutRef.current = setTimeout(()=> setOpen(false), 300)
	}

	return (
		<div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
			<span className="inline-flex items-center cursor-pointer">Products</span>
			<div className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-[720px] lg:w-[820px] bg-white text-gray-800 rounded-xl shadow-lg ring-1 ring-black/5 transition-all duration-200 ${open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'}`}>
						<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
							  <Link href="/product/interior-designing-service" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Interior Designing Service</Link>
							  <Link href="/product/modular-kitchen" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Modular Kitchen</Link>
							  <Link href="/product/window-installation-service" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Window Installation Service</Link>
							  <Link href="/product/upvc-windows-door-systems" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">UPVC Windows &amp; Door Systems</Link>
							  <Link href="/product/l-shape-modular-kitchen" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">L-Shape Modular Kitchen</Link>
							  <Link href="/product/aluminium-products-sliding-windows" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Aluminium Products (Featuring Sliding Windows)</Link>
							  <Link href="/product/false-ceiling-services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">False Ceiling Services</Link>
							  <Link href="/product/renovation-services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Renovation Services</Link>
							  <Link href="/product/wooden-almirah-storage" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Wooden Almirah &amp; Storage</Link>
							  <Link href="/product/construction-services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Construction Services</Link>
							  <Link href="/product/fabrication-work-industrial" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Fabrication Work (Industrial)</Link>
							  <Link href="/product/sliding-almirah-specialized-storage" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Sliding Almirah (Specialized Storage)</Link>
							  <Link href="/product/aluminium-windows-specific" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Aluminium Windows (Specific Product Focus)</Link>
							  <Link href="/product/new-arrivals-specialty-items" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">New Arrivals &amp; Specialty Items</Link>
						</div>
			</div>
		</div>
	)
}

