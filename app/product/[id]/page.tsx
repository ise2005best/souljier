"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import ProductDetailPage from "./product-client";
import YouMayAlsoLike from "./youMayAlsoLike";
import { Product } from "@/app/lib/interfaces/product.interface";
import { Products } from "@/app/lib/interfaces/products.interface";
import { GET_ONE_PRODUCT } from "@/app/graphql/getOneProduct";
import { GET_PRODUCTS_QUERY } from "@/app/graphql/getAllProducts";
import ProductSkeleton from "./product-skeleton";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [productRes, allProductsRes] = await Promise.all([
          fetch("/api/shopify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: GET_ONE_PRODUCT,
              variables: { handle: id },
            }),
          }),
          fetch("/api/shopify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_PRODUCTS_QUERY }),
          }),
        ]);

        const productData = await productRes.json();
        const allProductsData = await allProductsRes.json();

        const fetchedProduct = productData?.data?.product;
        const relatedProduct = allProductsData?.data?.products?.edges?.find(
          ({ node }: { node: { handle: string } }) => node.handle !== id
        );

        if (!fetchedProduct) return notFound();
        setProduct({ product: fetchedProduct });
        setRelated(relatedProduct ?? null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <ProductSkeleton/>;

  return (
    <div className="bg-white">
      {product && <ProductDetailPage product={product.product} />}
      {related && <YouMayAlsoLike products={related} />}
    </div>
  );
}