"use client";
import { ProductNode } from "../lib/interfaces/products.interface";
import Image from "next/image";
import ProductCard from "./product-card";

const ProductComponent = ({ products }: { products: ProductNode }) => {
  console.log(products);
  return (
    <div>
      <div className="w-full h-[65vh]">
        <Image
          src="https://cdn.shopify.com/s/files/1/0700/5074/2539/files/1_4a29d2d4-db79-4a82-a963-6f78c0373ba1.png?v=1772687316"
          alt="hero-image"
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 w-full">
        {products.edges.map((product) => (
          <div key={product.node.id} className="w-full" >
            <ProductCard product={product} cursor={product.cursor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;