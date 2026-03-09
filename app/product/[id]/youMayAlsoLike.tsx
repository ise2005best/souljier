import ProductCard from "@/app/components/product-card";
import { Products } from "@/app/lib/interfaces/products.interface";

interface Props {
  products: Products
}

const YouMayAlsoLike = ({ products }: Props) => {
  return (
    <div className="max-w-md max-md:px-6 ">
        <div className="md:py-4 py-2 px-3 md:text-base text-xs border bg-secondary text-white w-fit font-primary">
            YOU MAY ALSO LIKE
            </div>
   
       
            <div className="w-full"> {/* control card width */}
    <ProductCard product={products} cursor={products.node.id} cardHeight="h-[30vh]" />
  </div>
    </div>
  );
};

export default YouMayAlsoLike;