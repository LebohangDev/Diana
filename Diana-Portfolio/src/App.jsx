
import { useState, useRef, useEffect } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


function App() {

  const [activeNav, setActiveNav] = useState('Home');
  const containerRef = useRef(null);





  return (
    <div className="app" ref={containerRef} >
      <div className={'header'} >
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} containerRef={containerRef} />

      </div>

      <div className="main">

        <div className={activeNav === 'Home' ? 'home active' : 'home'}>
          <Home setActiveNav={setActiveNav} />

        </div>
        <div className={activeNav === 'About' ? 'about active' : 'about'}>
          <About />

        </div>
        <div className={activeNav === 'Product' ? 'product active' : 'product'}>
          <Product />

        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
