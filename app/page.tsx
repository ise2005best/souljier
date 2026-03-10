"use client";
import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-03-09T18:00:00Z");

const calcTimeLeft = (target: Date) => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const useCountdown = (target: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
};
const pad = (n: number) => String(n).padStart(2, "0");

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
