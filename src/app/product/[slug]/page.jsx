import React from 'react'
import Link from 'next/link'
import ServicesDetails from '../../../ServicesDeatils'

function slugify(text = ''){
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function ProductPage({ params }){
  const slug = params.slug

  // Flatten all service arrays into one list
  let allItems = []
  let categoryMatch = null

  // ServicesDetails may be an array of category objects (current file) or an object of arrays.
  if (Array.isArray(ServicesDetails)){
    ServicesDetails.forEach(obj => {
      if (obj && typeof obj === 'object'){
        Object.keys(obj).forEach(key => {
          const value = obj[key]
          if (key === slug && Array.isArray(value)){
            categoryMatch = { key, items: value }
          }
          if (Array.isArray(value)){
            allItems = allItems.concat(value.map(item => ({ ...item, category: key })))
          }
        })
      }
    })
  } else if (ServicesDetails && typeof ServicesDetails === 'object'){
    // older object-of-arrays format
    Object.keys(ServicesDetails).forEach(key => {
      const value = ServicesDetails[key]
      if (key === slug && Array.isArray(value)) categoryMatch = { key, items: value }
      if (Array.isArray(value)) allItems = allItems.concat(value.map(item => ({ ...item, category: key })))
    })
  }

  // Build a slug -> item map for individual item lookup
  const slugMap = {}
  allItems.forEach(item => {
    const nameSlug = slugify(item.name || '')
    if (nameSlug) slugMap[nameSlug] = item
    if (item.imageUrl) {
      try{
        const parts = item.imageUrl.split('/').filter(Boolean)
        const filename = parts[parts.length - 1] || ''
        const base = filename.replace(/\.[^.]+$/, '')
        const fileSlug = slugify(base)
        if (fileSlug) slugMap[fileSlug] = item
      }catch(e){/* ignore */}
    }
  })

  // If the route matches a category key, render the category list
  if (categoryMatch){
    const items = categoryMatch.items || []
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold">{categoryMatch.key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h1>
       

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((productItem, idx) => {
            const itemSlug = slugify(productItem.name || '')
            return (
              <article key={idx} className="bg-white shadow rounded overflow-hidden transform transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                {productItem.imageUrl ? (
                  <img src={productItem.imageUrl} alt={productItem.name} className="w-full h-44 object-cover transition-transform duration-200 hover:scale-105" />
                ) : (
                  <div className="w-full h-44 bg-gray-100 flex items-center justify-center">No image</div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{productItem.name}</h3>
                  <p className="text-amber-600 font-medium mt-1">{productItem.price}</p>
                  <p className="mt-2 text-gray-700 text-sm line-clamp-3">{productItem.description}</p>
                  <div className="mt-3">
                    <Link href={`/product/${itemSlug}`} className="text-amber-600 hover:underline">Read details</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    )
  }

  // direct lookup for individual items
  let product = slugMap[slug]

  // fallback: loose match
  if(!product){
    product = allItems.find(item => {
      const s = slugify(item.name || '')
      return s.includes(slug) || slug.includes(s)
    })
  }

  if(!product){
    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="mt-4 text-gray-600">The product "{slug}" was not found.</p>
        <Link href="/" className="inline-block mt-6 px-4 py-2 bg-slate-800 text-white rounded">Back to home</Link>
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <p className="mt-3 text-lg text-amber-600 font-semibold">{product.price}</p>
          <p className="mt-6 text-gray-700 whitespace-pre-line">{product.description}</p>

          {/* future: gallery / specs / CTA */}
          <div className="mt-8">
            <Link href="/contact" className="inline-block px-5 py-3 bg-amber-500 text-white rounded hover:opacity-95">Enquire Now</Link>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="w-full bg-gray-100 rounded shadow-sm overflow-hidden">
            {product.imageUrl ? (
              // use regular img so public/ paths work without explicit sizing
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">No image</div>
            )}
          </div>
        </aside>
      </div>
    </main>
  )
}
