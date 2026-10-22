export default function ProductCard({ product, onView, onAdd }) {
  return (
    <article className="group">
      <button onClick={() => onView(product)} className="relative block h-72 w-full overflow-hidden rounded-3xl bg-slate-100 text-left">
        <img src={product.image} alt={product.title} className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-600">{product.category}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-lg text-slate-700">♡</span>
      </button>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="font-bold">{product.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <span className="font-bold">${product.price}</span>
          </div>
          <p className="mt-1 text-xs text-emerald-600">★★★★★ <span className="text-slate-400">({product.rating?.rate})</span></p>
        </div>
        <button onClick={() => onAdd(product)} aria-label={`Add ${product.title} to cart`} className="rounded-full bg-slate-900 px-3 py-2 text-lg leading-none text-white transition hover:bg-violet-600">+</button>
      </div>
    </article>
  )
}
