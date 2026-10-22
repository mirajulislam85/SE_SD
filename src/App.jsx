import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState('home')
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw new Error('Products could not be loaded')
        return response.json()
      })
      .then((data) => setProducts(data))
      .catch(() => setError('Products could not be loaded. Please check your internet connection.'))
      .finally(() => setLoading(false))
  }, [])

  const navigate = (nextPage) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showMessage = (text) => {
    setMessage(text)
    setTimeout(() => setMessage(''), 2200)
  }

  const addToCart = (product) => {
    const item = cart.find((cartItem) => cartItem.id === product.id)
    if (item) {
      setCart(cart.map((cartItem) => cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    showMessage(`${product.title} added to cart`)
  }

  const changeQuantity = (id, amount) => {
    setCart(cart
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0))
  }

  const openProduct = (product) => {
    setSelectedProduct(product)
    navigate('product')
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#faf9ff] text-slate-900">
      {message && <div className="fixed right-5 top-5 z-30 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl">{message}</div>}
      <Navbar
        onNavigate={navigate}
        search={search}
        onSearch={(value) => { setSearch(value); navigate('products') }}
        cartCount={cartCount}
      />
      <main>
        {page === 'home' && <Home products={products} onNavigate={navigate} onCategory={(value) => { setCategory(value); navigate('products') }} onProduct={openProduct} onAdd={addToCart} />}
        {page === 'products' && <Products products={products} loading={loading} error={error} category={category} search={search} onCategory={setCategory} onProduct={openProduct} onAdd={addToCart} />}
        {page === 'product' && <ProductDetails product={selectedProduct} onBack={() => navigate('products')} onAdd={addToCart} />}
        {page === 'cart' && <Cart cart={cart} onChangeQuantity={changeQuantity} onShop={() => navigate('products')} onCheckout={() => showMessage('Checkout will be connected in the backend phase')} />}
        {page === 'reviews' && <Reviews />}
        {page === 'contact' && <Contact onMessage={showMessage} />}
        {page === 'about' && <About onShop={() => navigate('products')} />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
