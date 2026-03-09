
import { getAllShopifyProducts } from "./lib/shopify-queries/getAllProducts";
import { notFound } from "next/navigation";
import ProductComponent from "./components/product-component";
import { ProductNode } from "./lib/interfaces/products.interface";
export const dynamic = "force-dynamic";
export default async function AllProductsPage() {
  const allProductsData: ProductNode | undefined =
    await getAllShopifyProducts();

  if (!allProductsData) {
    notFound();
  }

  return <ProductComponent products={allProductsData} />;
}
