import { FC } from "react";
import { Product } from "../../../models";
import styles from "./comparisons.module.css";
import ProductCard from "../productCard";

interface ComparisonsProps {
  productForCompare: Product | null;
}

const Comparisons: FC<ComparisonsProps> = ({ productForCompare }) => {
  return (
    <div className={styles.comparisons}>
      <span className={styles.text}>сравнение</span>
      {[1, 2, 3].map((item) => (
        <div key={item} className={styles.comparison}>
          {productForCompare && (
            <ProductCard selectedProduct={productForCompare} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Comparisons;
