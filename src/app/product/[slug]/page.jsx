import React from 'react'

const PRODUCTS = {
  'interior-designing-service': { title: 'Interior Designing Service', desc: 'Tailored interior design for residential, commercial and malls.' },
  'modular-kitchen': { title: 'Modular Kitchen', desc: 'Modular kitchens in various finishes and configurations.' },
  'window-installation-service': { title: 'Window Installation Service', desc: 'Professional window installation for all kinds of windows.' },
  'upvc-windows-door-systems': { title: 'UPVC Windows & Door Systems', desc: 'Durable UPVC windows and door solutions.' },
  'l-shape-modular-kitchen': { title: 'L-Shape Modular Kitchen', desc: 'Space-efficient L-shape modular kitchen designs.' },
  'aluminium-products-sliding-windows': { title: 'Aluminium Products (Sliding)', desc: 'Aluminium sliding windows and related products.' },
  'false-ceiling-services': { title: 'False Ceiling Services', desc: 'PVC false ceilings and custom fabrication work.' },
  'renovation-services': { title: 'Renovation Services', desc: 'Office & commercial interior renovation services.' },
  'wooden-almirah-storage': { title: 'Wooden Almirah & Storage', desc: 'Custom wooden almirahs and storage solutions.' },
  'construction-services': { title: 'Construction Services', desc: 'Commercial building construction services.' },
  'fabrication-work-industrial': { title: 'Fabrication Work (Industrial)', desc: 'Industrial fabrication services and installations.' },
  'sliding-almirah-specialized-storage': { title: 'Sliding Almirah (Specialized)', desc: 'Specialized sliding storage systems.' },
  'aluminium-windows-specific': { title: 'Aluminium Windows (Specific)', desc: 'A selection of aluminium window solutions.' },
  'new-arrivals-specialty-items': { title: 'New Arrivals & Specialty Items', desc: 'Latest and specialty products.' }
}

export default function ProductPage({ params }){
  const slug = params.slug
  const product = PRODUCTS[slug]

  if(!product){
    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="mt-4 text-gray-600">The product "{slug}" was not found.</p>
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-extrabold">{product.title}</h1>
      <p className="mt-4 text-gray-600">{product.desc}</p>

      {/* Placeholder for more product details */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold">Overview</h3>
        <p className="mt-2 text-gray-700">Detailed content for {product.title} will go here. You can add images, specs, or a gallery.</p>
      </section>
    </main>
  )
}
