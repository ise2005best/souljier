"use client";
import { ProductInfo, Variant } from "@/app/lib/interfaces/product.interface";
import { Minus, Plus } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { cartProps } from "@/app/store/cart.interface";
import { useCartStore } from "@/app/store/cart.store";
import { useCartUIStore } from "@/app/store/cart-ui.store";

export interface InfoPanelProps {
  product: ProductInfo;
  price: string;
  variants: Variant;
  sections: { id: string; label: string; content: string | string[] }[];
  selectedVariantId: string | null;
  openSection: string | null;
  onToggleSection: (id: string) => void;
}

const ProductInformation = ({
  product,
  price,
  variants,
  sections,
  selectedVariantId,
  openSection,
  onToggleSection,
}: InfoPanelProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, updateItemQuantity } = useCartStore();
  const setIsCartOpen = useCartUIStore((state) => state.openCart);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    if (selectedVariantId) {
      updateItemQuantity(selectedVariantId, quantity);
    }
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
    if (selectedVariantId) {
      updateItemQuantity(selectedVariantId, quantity);
    }
  };

  const cartItem: cartProps = {
    id: product?.id || "",
    productName: product?.title || "",
    currencyCode: "£",
    quantity: quantity,
    price: parseInt(price),
    variant: "ONE SIZE",
    variantId: selectedVariantId || "",
    vendor: product?.vendor || "",
    productId: product?.id || "",
    // use the first image as the main image
    imageUrl: product?.media.edges[0]?.node.image.url || "",
  };

  const addItemToCart = () => {
    setIsCartOpen();
    addToCart(cartItem);
  };

  return (
    <div className="w-full font-primary text-center">
      <h1 className="text-lg md:text-2xl font-black text-black tracking-wide leading-snug md:mb-4 mb-2">
        {product?.title}
      </h1>

      <p className="text-base md:text-xl font-black text-black mb-3 tracking-wide">
        £{price}
      </p>

      <p className="text-xs md:text-base font-semibold text-black md:mb-8 mb-3 tracking-wide">
        {product?.description}
      </p>

      <div className="flex flex-col md:mt-8 mt-4 items-center space-y-4">
        <div className="flex  justify-between space-x-4  w-fit">
          <button className="cursor-pointer" onClick={decreaseQuantity}>
            <Minus className="text-black md:w-6 md:h-6 w-4 h-4" />
          </button>
          <span className="font-primary font-extrabold md:text-base text-sm text-black">
            {quantity}
          </span>
          <button className="cursor-pointer" onClick={increaseQuantity}>
            <Plus className="text-black md:w-6 md:h-6 w-4 h-4" />
          </button>
        </div>
      </div>

      {variants.edges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6 mt-3">
          {variants.edges.map(({ node }) => (
            <div key={node.id}>
              <p className="text-red-500 mb-3">
                {node.quantityAvailable < 5 && (
                  <p className="text-sm">
                    LOW STOCK
                    </p>
                )
                } 
              </p>
              <button
                className={[
                  "md:px-10 px-5 py-3 border font-primary text-xs rounded-md uppercase transition-all duration-150",
                  selectedVariantId === node.id
                    ? "bg-[#1a1108] text-white border-[#1a1108]"
                    : "bg-white border-[#1a1108] text-black",
                ].join(" ")}
              >
                {node.title}
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="w-full py-3 bg-black rounded-md text-white md:text-sm text-xs font-primary font-semibold uppercase md:mb-8 mb-4 hover:bg-secondary transition-colors duration-200"
        onClick={addItemToCart}
      >
        ADD TO BAG
      </button>

      <div className="border-t-2 border-secondary">
        {sections.map((section) => (
          <div key={section.id} className="border-b-2 border-secondary">
            <button
              onClick={() => onToggleSection(section.id)}
              className="w-full flex justify-between items-center py-3 text-sm text-[#1a1108] font-medium uppercase"
            >
              <span>{section.label}</span>
              <FaAngleDown
                className={`w-4 h-4 text-secondary transition-transform duration-200 ${
                  openSection === section.id ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === section.id && (
              <div className="pb-5 md:text-[13px] text-[10px] text-gray-500 leading-relaxed tracking-wide text-left">
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {section.content.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInformation;
