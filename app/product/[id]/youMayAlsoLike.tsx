import ProductCard from "@/app/components/product-card";
import { Product } from "@/app/lib/interfaces/products.interface";

interface Props {
  products: Product
}

const YouMayAlsoLike = ({ products }: Props) => {
  return (
    <div className="max-w-md max-md:px-6">
        <div className="md:py-4 py-2 px-3 md:text-base text-sm border bg-secondary text-white w-fit font-primary">
            YOU MAY ALSO LIKE
            </div>
      <ProductCard product={products} cursor={products.node.id}/>
    </div>
  );
};

export default YouMayAlsoLike;