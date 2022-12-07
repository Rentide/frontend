import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './components/navbar'
import Home from './components/home'
import Business from './components/business'
import Features from './components/features'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

function App() {

  return(
    <div class="container">
        <div class="wrapper">
          <Navbar />
          <Home />
          <Business />
          <Features />
          <Newsletter />
          <Footer />
        </div>
    </div>
  )
}

export default App
