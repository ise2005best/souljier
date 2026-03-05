import { GET_ONE_PRODUCT } from "@/app/graphql/getOneProduct";
import { ProductNode, Product } from "../interfaces/product.interface";

export const getAProduct = async (
  id: string,
  locationId: string,
) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/shopify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: GET_ONE_PRODUCT,
       variables: { handle: id, locationId: locationId } 
      }),
    });

    if (!response.ok) throw new Error("Failed to fetch products");

    const data: ProductNode = await response.json();
    console.log(data)
    const products: Product | null = { product: data.data.product };
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
