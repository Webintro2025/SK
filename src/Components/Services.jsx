import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
	{
		id: 1,
		title: 'Smart care',
		desc: 'Proud of professional Ecommerce services on live chat, dedicate consultation by expertise and professional designers.',
		image: '/Flat Interior Designing Service.png'
	},
	{
		id: 2,
		title: 'Kitchen Planner',
		desc: 'Enjoy fast delivery with our service. Receive interior/exterior furniture for your house as quickly as you want with the best offer.',
		image: '/Kitchen Interior Designing Service.png'
	},
	{
		id: 3,
		title: 'Home check',
		desc: 'Perfect consultation with home check. Check carefully your home before suggesting suitable interior design in your sweet home.',
		image: '/Home Interior Designing Services.png'
	},
	{
		id: 4,
		title: 'Kitchen Design',
		desc: 'Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh and design your own style.',
		image: '/Wooden Modular Kitchen.png'
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
						<div key={s.id} className="bg-white rounded shadow-sm overflow-hidden">
							{/* Image on top */}
							<div className="relative w-full aspect-4/3">
								{ s.image ? (
									<Image src={s.image} alt={s.title} fill className="object-cover" />
								) : null }
							</div>

							{/* Content below image */}
							<div className="p-6 text-left">
								<h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
								<p className="mt-3 text-sm text-gray-600">{s.desc}</p>
								<div className="mt-4">
									<Link href="#" className="text-sm font-semibold text-amber-600 hover:underline">READ MORE →</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

