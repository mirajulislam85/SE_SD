export default function About({ onShop }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">About Meridian</p>
          <h1 className="mt-3 text-5xl font-black leading-tight">Good design for real life.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Meridian is a small, independent store built around useful, beautiful, everyday products.</p>
          <button onClick={onShop} className="mt-8 rounded-full bg-violet-600 px-7 py-3.5 font-bold text-white hover:bg-violet-700">Meet the collection</button>
        </div>
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85" alt="Bright modern store interior" className="h-[30rem] w-full rounded-[2rem] object-cover" />
      </div>
    </section>
  )
}
