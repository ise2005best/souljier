"use client";
import { useCartStore } from "../store/cart.store";
import { X, Plus, Minus } from "lucide-react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useCartUIStore } from "../store/cart-ui.store";
import { useState } from "react";

interface Item {
  VariantId: string;
  quantity: number;
}

const CartModal = () => {
  const [agreed, setAgreed] = useState(false);
  const cart = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const { updateItemQuantity } = useCartStore();
  const { isCartOpen, closeCart } = useCartUIStore();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const fetchCeckoutUrl = async (items: Item[]) => {
    const response = await fetch("/api/shopify/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: items }),
    });
    if (!response.ok) {
      throw new Error("Failed to create checkout");
    }
    const data = await response.json();
    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl;
      // clear cart after rerouting
      clearCart();
    } else {
      console.error("No checkout URL found in response");
    }
  };
  const deleteOneProduct = (id: string) => {
    const cartItems = useCartStore.getState().cartItems;
    const updatedCart = cartItems.filter((item) => item.variantId !== id);
    useCartStore.setState({ cartItems: updatedCart });
  };

  const checkout = () => {
    const items: Item[] = cart.map((item) => ({
      VariantId: item.variantId,
      quantity: item.quantity || 1,
    }));
    fetchCeckoutUrl(items);
  };
  return (
    <div>
      <div
        className={`fixed top-0 right-0 z-50 h-full transition-all duration-300 ${
          isCartOpen ? "w-full md:w-[35%]" : "w-0"
        }`}
      >
        <div
          className={`h-full bg-white shadow-lg p-4 overflow-hidden transition-all duration-300 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <X
            onClick={closeCart}
            className="w-5 h-5 absolute top-2 right-2 text-[#292D32] cursor-pointer"
          />

          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center  h-1/2">
              <p className="text-primary font-primary">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex flex-row items-center space-x-3 mt-10 mb-10">
                <h2 className="font-primary text-black md:text-base text-sm ">
                  YOUR SELECTION: ({cart.length})
                </h2>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="flex-1 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={`${item.variantId}-${item.id}`}
                      className="flex items-center justify-between py-4 gap-4"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.productName}
                        className="object-cover"
                        width={140}
                        height={172}
                      />
                      <div className="flex flex-col space-y-4 w-[60%] font-primary">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-[10px] md:text-sm text-black">
                            {item.productName}
                          </span>

                          <div className="flex items-center space-x-2 mr-2">
                            <button
                              className="cursor-pointer"
                              onClick={() => deleteOneProduct(item.variantId)}
                            >
                              <Trash className="w-4 h-4 text-secondary" />
                            </button>
                          </div>
                        </div>

                        <span className="text-black font-black md:text-base text-sm font-primary">
                          {item.currencyCode} {item.price}
                        </span>
                        <div className="flex items-center justify-between w-full md:w-[65%]">
                          <span className="font-primary text-[11px] md:text-xs text-black">
                            {item.variant}
                          </span>
                          <div className="inline-flex items-center space-x-0.5">
                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  item.productId,
                                  (item.quantity || 1) - 1,
                                )
                              }
                              className="hover:bg-black/10 rounded"
                              disabled={(item.quantity || 1) <= 1}
                            >
                              <Minus className="w-3 h-3 text-black/60" />
                            </button>

                            <span className="font-primary text-[11px] md:text-xs text-black px-1">
                              {item.quantity || 1}X
                            </span>

                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  item.productId,
                                  (item.quantity || 1) + 1,
                                )
                              }
                              className="hover:bg-black/10 rounded"
                            >
                              <Plus className="w-3 h-3 text-black/60" />
                            </button>
                          </div>
                          <span className="font-primary text-[11px] md:text-xs text-black">
                            {item.currencyCode}
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 pb-4 mb-24 border-t">
                  <div className="flex flex-col items-center w-full">
                    <div className="w-[90%] flex justify-between items-center ">
                      <div className="flex flex-row items-center space-x-2">
                        <span className="font-primary font-bold text-black text-[12px] md:text-[19px] ">
                          TOTAL
                        </span>
                      </div>

                      <span className="font-primary font-semibold text-[12px] md:text-[19px] text-black">
                        £{totalPrice}
                      </span>
                    </div>

                    <div className="flex items-start mt-4 gap-2 w-[90%]">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 accent-black cursor-pointer"
                      />
                      <label
                        htmlFor="terms"
                        className="font-primary text-[11px] md:text-xs text-black cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/terms-of-sale"
                          target="_blank"
                          className="underline hover:text-secondary transition-colors"
                        >
                          Terms of Sale
                        </a>{" "}
                      </label>
                    </div>

                    <div className="flex items-center justify-center w-full">
                      <button
                        className={`font-bold text-[15px] mt-4 mb-4 w-3/4 font-primary bg-black text-white rounded-lg px-4 py-2 hover:border-black hover:bg-white hover:text-black transition-all duration-200 disabled:bg-black/40 disabled:hover:text-white`}
                        onClick={checkout}
                        disabled={!agreed}
                      >
                        CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
