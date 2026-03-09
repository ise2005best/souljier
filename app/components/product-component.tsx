"use client";
import { ProductNode } from "../lib/interfaces/products.interface";
import ProductCard from "./product-card";
import Carousel from "./carousel-component";
import CartModal from "./cart-modal";

const ProductComponent = ({ products }: { products: ProductNode }) => {
  return (
    <div>
      <div className="w-full">
        <Carousel/>
      </div>
      <div className="grid grid-cols-2 w-full">
        {products.edges.map((product) => (
          <div key={product.node.id}>
          <div className="md:hidden w-full" >
            <ProductCard product={product} cursor={product.cursor} cardHeight="h-[35vh]" />
          </div>
          <div className="max-md:hidden w-full" >
            <ProductCard product={product} cursor={product.cursor} cardHeight="h-[60vh]" />
          </div>
          </div>
        ))}
      </div>
      <CartModal/>
    </div>
  );
};

export default ProductComponent;