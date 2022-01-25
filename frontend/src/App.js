import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button onClick="openMenu()">
              &#9776;
            </button>
            <a href="index.html">Brandi's Closet</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick="closeMenu()">x</button>
          <ul>
            <li>
              <a href="index.html">Tops</a>
            </li>

            <li>
              <a href="index.html">Bottoms</a>
            </li>
          </ul>

        </aside>

        <main className="main">
          <div className="content">
            <ul className="products">
              <li>
                <div className="product">
                  <img className="product-image" src="/images/booties.webp" alt="product"></img>
                    <div className="product-name">
                      <a href="product.html">Beige Booties</a>
                    </div>
                    <div className="product-brand">DSW</div>
                    <div className="product-price">$80</div>
                    <div className="product-rating">4.5 Stars (2 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/booties.webp" alt="product"></img>
                    <div className="product-name">
                      <a href="product.html">Beige Booties</a>
                    </div>
                    <div className="product-brand">DSW</div>
                    <div className="product-price">$80</div>
                    <div className="product-rating">4.5 Stars (2 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/booties.webp" alt="product"></img>
                    <div className="product-name">
                      <a href="product.html">Beige Booties</a>
                    </div>
                    <div className="product-brand">DSW</div>
                    <div className="product-price">$80</div>
                    <div className="product-rating">4.5 Stars (2 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/booties.webp" alt="product"></img>
                    <div className="product-name">
                      <a href="product.html">Beige Booties</a>
                    </div>
                    <div className="product-brand">DSW</div>
                    <div className="product-price">$80</div>
                    <div className="product-rating">4.5 Stars (2 Reviews)</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <footer className="footer">
          All right reserved. Site created by Brandi Meza
        </footer>
      </div>
  );
}

export default App;
