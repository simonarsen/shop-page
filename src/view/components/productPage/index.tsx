import { Modal } from "../modal";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../../getWays/models/api";
import ProductCard from "../productCard";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  return (
    <div>
      <Modal
        onClose={() => {
          navigate(-1);
        }}
      >
        {product && <ProductCard selectedProduct={product} />}
      </Modal>
    </div>
  );
};

export default ProductPage;
