import ProductCard from '../components/ProductCard'

const categories = [
  { name: "men's clothing", label: 'Men Clothing', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85' },
  { name: "women's clothing", label: 'Women Clothing', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=85' },
  { name: 'electronics', label: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85' },
]

export default function Home({ products, onNavigate, onCategory, onProduct, onAdd }) {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-violet-600">Welcome to Meridian</p>
          <h1 className="mt-4 text-5xl font-black leading-tight">Good products for everyday life.</h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">Find clothing, electronics, jewellery, and more in one simple online shop.</p>
          <button onClick={() => onNavigate('products')} className="mt-8 rounded-full bg-violet-600 px-7 py-3.5 font-bold text-white hover:bg-violet-700">Shop now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85" alt="Modern shop interior" className="h-96 w-full rounded-[2rem] object-cover" />
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-black">Shop by category</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {categories.map((item) => (
              <button key={item.name} onClick={() => onCategory(item.name)} className="relative h-48 overflow-hidden rounded-3xl text-left">
                <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <strong className="absolute bottom-5 left-5 text-xl text-white">{item.label}</strong>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black">Popular products</h2>
          <button onClick={() => onNavigate('products')} className="font-bold text-violet-600">View all →</button>
        </div>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} onView={onProduct} onAdd={onAdd} />)}
        </div>
      </section>
    </>
  )
}
