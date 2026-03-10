"use client";
import { Products } from "../lib/interfaces/products.interface";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  cursor: string;
  product: Products
   cardHeight?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cardHeight = "h-[60vh]" }) => {
  const { id, title, media, totalInventory, handle } = product.node;

  const mainImage = media.edges[0]?.node?.image?.url ?? "";
  const hoverImage = media.edges[2]?.node?.image?.url;

  if (!mainImage) return null;

  return (
    <div key={id}>
      <div className="w-full h-fit">
               <div className={`relative group overflow-hidden ${cardHeight}`}>
          <Link href={`/product/${handle}`}>

            {/* Main Image */}
            <Image
              src={mainImage}
              alt={title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                hoverImage ? "group-hover:opacity-0" : ""
              }`}
              sizes="(max-width:768px) 100vw, 33vw"
            />

            {/* Hover Image */}
            {hoverImage && totalInventory !== 0 && (
              <Image
                src={hoverImage}
                alt={`${title} hover`}
                fill
                className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            )}

            {/* Sold Out Overlay */}
            {totalInventory === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                <span className="bg-red-500 text-black font-primary font-black text-xs px-3 py-1">
                  SOLD OUT
                </span>
              </div>
            )}

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
              <h2 className="font-primary text-[12px] md:text-[14px] font-bold text-black truncate max-w-[60%]">
                {title}
              </h2>

              {totalInventory === 0 ? (
                <div className="bg-red-500 font-primary font-black text-black text-[9px] md:text-xs px-1 md:px-2 py-1">
                  OUT OF STOCK
                </div>
              ) : null 
              }
            </div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;