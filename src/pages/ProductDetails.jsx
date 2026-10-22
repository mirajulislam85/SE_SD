export default function ProductDetails({ product, onBack, onAdd }) {
  if (!product) return null

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <button onClick={onBack} className="mb-8 font-bold text-violet-600">← Back to products</button>
      <div className="grid gap-10 rounded-[2rem] bg-white p-6 md:grid-cols-2">
        <img src={product.image} alt={product.title} className="h-[28rem] w-full rounded-3xl object-contain" />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase text-violet-600">{product.category}</p>
          <h1 className="mt-3 text-3xl font-black">{product.title}</h1>
          <p className="mt-4 text-2xl font-black">${product.price}</p>
          <p className="mt-6 leading-7 text-slate-600">{product.description}</p>
          <button onClick={() => onAdd(product)} className="mt-8 rounded-full bg-slate-900 px-6 py-3.5 font-bold text-white hover:bg-violet-600">Add to bag</button>
        </div>
      </div>
    </section>
  )
}
