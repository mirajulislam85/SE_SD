const reviews = [
  ['Md Mirajul Islam', 'The product pages are clear and shopping feels very easy.'],
  ['Maya Karim', 'I found a lovely gift and the whole experience was smooth.'],
  ['Sadia Noor', 'The products are beautiful and delivery was very helpful.'],
  ['Rafi Ahmed', 'Clean design, good products, and simple checkout.'],
  ['Tania Islam', 'I will definitely shop here again.'],
]

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm font-bold uppercase tracking-widest text-violet-600">Customer reviews</p>
      <h1 className="mt-2 text-4xl font-black">What shoppers say</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map(([name, review]) => (
          <article className="rounded-3xl bg-white p-6 shadow-sm" key={name}>
            <p className="text-amber-500">★★★★★</p>
            <p className="mt-4 leading-7 text-slate-600">“{review}”</p>
            <p className="mt-5 font-bold">{name}</p>
            <p className="mt-1 text-xs text-slate-400">Verified customer</p>
          </article>
        ))}
      </div>
    </section>
  )
}
