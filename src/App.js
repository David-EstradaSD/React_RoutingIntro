import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome --> Welcome.js component
// our-domain.com/products --> Produts.js component
// our-domain.com/product-details/ < ANYTHING > --> Dynamic Product Details 
