export default function Contact({ onMessage }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">Get in touch</p>
          <h1 className="mt-2 text-4xl font-black">We would love to hear from you.</h1>
          <p className="mt-5 leading-7 text-slate-600">Have a question about a product or your order? Send us a message.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p><strong className="text-slate-900">Email:</strong> hello@meridian.shop</p>
            <p><strong className="text-slate-900">Phone:</strong> +880 1700 000 000</p>
            <p><strong className="text-slate-900">Hours:</strong> Saturday – Thursday, 9 AM – 8 PM</p>
          </div>
        </div>
        <form className="rounded-3xl bg-white p-6 shadow-sm" onSubmit={(event) => { event.preventDefault(); onMessage('Thanks! Your message has been received.') }}>
          <label className="block text-sm font-bold">Your name<input required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500" placeholder="Enter your name" /></label>
          <label className="mt-4 block text-sm font-bold">Email address<input required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500" placeholder="you@example.com" /></label>
          <label className="mt-4 block text-sm font-bold">Your message<textarea required rows="5" className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500" placeholder="How can we help?" /></label>
          <button className="mt-5 w-full rounded-full bg-violet-600 py-3.5 font-bold text-white hover:bg-violet-700">Send message</button>
        </form>
      </div>
    </section>
  )
}
