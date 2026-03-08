import { GET_PRODUCTS_QUERY } from "@/app/graphql/getAllProducts";
import { ProductNode } from "../interfaces/products.interface";

export const getAllShopifyProducts = async () => {
      try {
         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/shopify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: GET_PRODUCTS_QUERY,
          }),
        });
        if (!response.ok) throw new Error("Failed to fetch products");
    
        const data = await response.json();
        const products:ProductNode = data.data.products;
        console.log(products)
        return products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
}