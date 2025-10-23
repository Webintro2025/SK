import React from 'react'
import Link from 'next/link'

const services = [
	{
		id: 1,
		title: 'Smart care',
		desc: 'Proud of professional Ecommerce services on live chat, dedicate consultation by expertise and professional designers.'
	},
	{
		id: 2,
		title: 'Kitchen Planner',
		desc: 'Enjoy fast delivery with our service. Receive interior/exterior furniture for your house as quickly as you want with the best offer.'
	},
	{
		id: 3,
		title: 'Home check',
		desc: 'Perfect consultation with home check. Check carefully your home before suggesting suitable interior design in your sweet home.'
	},
	{
		id: 4,
		title: 'Kitchen Design',
		desc: 'Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh and design your own style.'
	}
]

export default function Services() {
	return (
		<section className="py-16 bg-gray-100">
			<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
				<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">Our Services</p>
				<h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">We provide more than just quality services</h2>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((s) => (
						<div key={s.id} className="bg-white p-6 rounded shadow-sm text-left">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-amber-100 text-amber-700 rounded flex items-center justify-center shrink-0">
									{/* placeholder icon */}
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-sm font-semibold text-gray-900">{s.title}</h3>
									<p className="mt-3 text-xs text-gray-600">{s.desc}</p>
								</div>
							</div>

							<div className="mt-6">
								<Link href="#" className="text-xs font-semibold text-gray-800 hover:underline">READ MORE →</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

