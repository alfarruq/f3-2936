
import './App.css'
import logo from './assets/logo.png'

function App() {

  return (
    <>
      <header className='h-20  container flex items-center justify-between' >
        <img src={logo} alt="" />
        <ul className='flex gap-10' >
          <li><a className='font-semibold hover:text-[#39DB4A]' href="">Home</a></li>
          <li><a className='font-semibold hover:text-[#39DB4A]' href="">Menu</a></li>
          <li><a className='font-semibold hover:text-[#39DB4A]' href="">Services</a></li>
          <li><a className='font-semibold hover:text-[#39DB4A]' href="">Offers</a></li>
        </ul>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <button> <i class="fa-solid fa-phone"></i>Contact</button>
        </div>
      </header>
    </>
  )
}

export default App;
