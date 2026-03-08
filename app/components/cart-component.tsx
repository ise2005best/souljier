import { useCartStore } from "../store/cart.store";
import { LiaShoppingBagSolid } from "react-icons/lia";

interface CartProps {
  onclick: () => void;
}

const CartComponent: React.FC<CartProps> = ({ onclick }) => {
  const cart = useCartStore((state) => state.cartItems);

  return (
    <button onClick={onclick} className="relative">
      <LiaShoppingBagSolid className="w-6 h-6 text-secondary" />
      {cart.length > 0 && (
        <span className="absolute bottom-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full" />
      )}
    </button>
  );
};

export default CartComponent;