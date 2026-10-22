export default function Cart({ cart, onChangeQuantity, onShop, onCheckout }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const delivery = cart.length > 0 ? 60 : 0
  const total = subtotal + delivery

  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <p className="font-bold uppercase tracking-widest text-violet-600">Your selection</p>
      <h1 className="mt-2 text-4xl font-black">Shopping bag</h1>
      {cart.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-white p-12 text-center">
          <h2 className="text-2xl font-black">Your bag is empty</h2>
          <button onClick={onShop} className="mt-6 rounded-full bg-slate-900 px-6 py-3 font-bold text-white">Start shopping</button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_18rem]">
          <div className="space-y-4">
            {cart.map((item) => <div key={item.id} className="flex gap-4 rounded-3xl bg-white p-4"><img src={item.image} alt={item.title} className="h-24 w-20 rounded-2xl object-contain" /><div className="flex flex-1 justify-between"><div><h3 className="font-bold">{item.title}</h3><p className="mt-2">${item.price}</p><div className="mt-3 flex items-center gap-3"><button onClick={() => onChangeQuantity(item.id, -1)} className="h-7 w-7 rounded-full bg-slate-100">−</button><span>{item.quantity}</span><button onClick={() => onChangeQuantity(item.id, 1)} className="h-7 w-7 rounded-full bg-slate-100">+</button></div></div><strong>${(item.price * item.quantity).toFixed(2)}</strong></div></div>)}
          </div>
          <div className="h-fit rounded-3xl bg-slate-900 p-6 text-white"><h2 className="text-xl font-black">Order summary</h2><div className="mt-6 flex justify-between text-slate-300"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div><div className="mt-3 flex justify-between text-slate-300"><span>Delivery</span><span>${delivery}</span></div><div className="my-5 border-t border-white/20" /><div className="flex justify-between text-lg font-black"><span>Total</span><span>${total.toFixed(2)}</span></div><button onClick={onCheckout} className="mt-6 w-full rounded-full bg-violet-500 py-3 font-bold">Checkout</button></div>
        </div>
      )}
    </section>
  )
}
