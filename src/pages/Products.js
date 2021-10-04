import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1> The Products Page </h1>
      <ul>
        <li>
          <Link to="/products/p1">Some book</Link>
        </li>
        <li>
          <Link to="/products/p2">Some online course</Link>
        </li>
        <li>
          <Link to="/products/p3">Some pair of shoes</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
