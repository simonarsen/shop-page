import { Link } from "react-router-dom";

import styles from "./root.module.css";
import { useState } from "react";
import { Product } from "../../../models";
import ProductCard from "../productCard";
import Comparisons from "../comparisons";
import { products } from "../../../getWays/models/api";

const Root = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [productForCompare, setProductForCompare] = useState<Product | null>(
    null
  );

  return (
    <div className={styles.root}>
      <div className={styles.productsWrapper}>
        <div className={styles.selectedProduct}>
          <ProductCard selectedProduct={selectedProduct} />
        </div>
        <Comparisons productForCompare={productForCompare} />
      </div>
      <ul>
        {products.map(
          (product) =>
            product.id !== selectedProduct.id && (
              <li key={product.id}>
                {product.categoryId === selectedProduct.categoryId ? (
                  <div>
                    <span className={styles.title}>Аналог:</span>
                    <button
                      className={styles.analogBtn}
                      onClick={() => setProductForCompare(product)}
                    >
                      {product.name}
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className={styles.title}>Сопутствующий товар:</span>
                    <button className={styles.btn}>
                      <Link to={`products/${product.id}`}>{product.name}</Link>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setProductForCompare(null);
                      }}
                    >
                      Менять товар на {product.name}
                    </button>
                  </div>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Root;
