export default function Navbar({ onNavigate, search, onSearch, cartCount }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4">
        <button onClick={() => onNavigate('home')} className="text-left text-2xl font-black tracking-tight text-violet-700">
          Meridian<span className="text-slate-900"></span>
        </button>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <button onClick={() => onNavigate('home')} className="hover:text-violet-700">Home</button>
          <button onClick={() => onNavigate('products')} className="hover:text-violet-700">Products</button>
          <button onClick={() => onNavigate('reviews')} className="hover:text-violet-700">Reviews</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-violet-700">Contact</button>
          <button onClick={() => onNavigate('about')} className="hover:text-violet-700">About</button>
        </nav>
        <div className="flex items-center gap-2">
          <label className="hidden items-center rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-500 lg:flex">
            <span className="mr-2 text-lg">⌕</span>
            <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search" className="w-24 bg-transparent outline-none placeholder:text-slate-400" />
          </label>
          <button onClick={() => onNavigate('cart')} className="relative rounded-full border border-slate-200 px-4 py-2 text-sm font-bold hover:border-violet-500 hover:text-violet-700">
            cart <span className="ml-1 rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
