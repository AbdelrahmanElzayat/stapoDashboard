import PaymentOption from "./PaymentOption";
import OrderAddress from "./OrderAddress";
import OrderPrice from "./OrderPrice";
const ProductInfo = () => {
  return (
    <div className="ProductInfo flex flex-col gap-3 items-start">
      <OrderAddress />
      <OrderPrice />
      <PaymentOption />
    </div>
  );
};

export default ProductInfo;
