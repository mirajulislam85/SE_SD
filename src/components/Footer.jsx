export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <button onClick={() => onNavigate('home')} className="text-left text-lg font-black text-slate-900">Meridian</button>
        <p>© 2026 Meridian. Thoughtful goods for everyday life.</p>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('about')}>Our story</button>
          <button onClick={() => onNavigate('products')}>Shop</button>
        </div>
      </div>
    </footer>
  )
}
