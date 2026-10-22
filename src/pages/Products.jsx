import ProductCard from '../components/ProductCard'

const categories = ['All', "men's clothing", "women's clothing", 'jewelery', 'electronics']

export default function Products({ products, loading, error, category, search, onCategory, onProduct, onAdd }) {
  const visibleProducts = products.filter((product) => {
    const categoryMatches = category === 'All' || product.category === category
    const searchMatches = `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())
    return categoryMatches && searchMatches
  })

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="font-bold uppercase tracking-widest text-violet-600">The collection</p>
      <h1 className="mt-2 text-4xl font-black">All products</h1>
      <div className="mt-7 flex flex-wrap gap-2">
        {categories.map((item) => <button key={item} onClick={() => onCategory(item)} className={`rounded-full px-4 py-2 text-sm font-bold ${category === item ? 'bg-violet-600 text-white' : 'bg-white text-slate-600'}`}>{item === 'All' ? 'All Products' : item}</button>)}
      </div>
      {loading && <p className="mt-10 rounded-3xl bg-white p-12 text-center text-slate-500">Loading products...</p>}
      {error && <p className="mt-10 rounded-3xl bg-red-50 p-6 text-center text-red-700">{error}</p>}
      {!loading && !error && visibleProducts.length === 0 && <p className="mt-10 rounded-3xl bg-white p-12 text-center text-slate-500">No products found.</p>}
      {!loading && !error && visibleProducts.length > 0 && <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onView={onProduct} onAdd={onAdd} />)}</div>}
    </section>
  )
}
