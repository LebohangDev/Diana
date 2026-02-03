
import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import PaymentSuccess from './paymentPopups/PaymentSuccess';
import PaymentCancel from './paymentPopups/PaymentCancel';

function AppContent() {
  const [activeNav, setActiveNav] = useState('Home');
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [paymentActive, setPaymentActive] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);

  // Scroll to section based on URL path
  useEffect(() => {
    const pathToSection = {
      '/': 'Home',
      '/home': 'Home',
      '/about': 'About',
      '/product': 'Product',
      '/benefits': 'Product',
    };

    const currentPath = location.pathname;
    const sectionId = pathToSection[currentPath];

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          setActiveNav(sectionId);
        }, 100);
      }

      // Update URL to root after scrolling (optional - keeps it clean)
      // Comment this out if you want the URL to stay as /product
      // if (currentPath !== '/') {
      //   navigate('/', { replace: true });
      // }
    }
  }, [location.pathname]);

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

      <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive={setPaymentActive} />
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive={setPaymentActive} />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
