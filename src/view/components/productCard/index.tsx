import { FC } from "react";
import { Product } from "../../../models";

interface ProductCardProps {
  selectedProduct: Product;
}

const ProductCard: FC<ProductCardProps> = ({ selectedProduct }) => {
  return (
    <div>
      <p>
        <b>{selectedProduct.name}</b>
      </p>
      <span>price: {selectedProduct.price}</span>
    </div>
  );
};

export default ProductCard;
