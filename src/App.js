import { Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome --> Welcome.js component
// our-domain.com/products --> Produts.js component
// our-domain.com/products/ ANYTHING  --> dynamic product details
