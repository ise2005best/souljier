"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import ProductComponent from "./components/product-component";
import { ProductNode } from "./lib/interfaces/products.interface";
import { GET_PRODUCTS_QUERY } from "./graphql/getAllProducts";

export default function AllProductsPage() {
  const [products, setProducts] = useState<ProductNode | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/shopify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GET_PRODUCTS_QUERY }),
      });

      if (!response.ok) return notFound();

      const data = await response.json();
      setProducts(data.data.products);
    };

    fetchProducts();
  }, []);

  if (!products) return null; // or a loading skeleton

  return <ProductComponent products={products} />;
}