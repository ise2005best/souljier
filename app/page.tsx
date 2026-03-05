import { getAllShopifyProducts } from "./lib/shopify-queries/getAllProducts";
import { notFound } from "next/navigation";
import ProductComponent from "./components/product-component";

export default async function AllProductsPage() {

  const allProductsData = await getAllShopifyProducts();

  if (!allProductsData) {
    notFound();
  }

  return <ProductComponent products={allProductsData} />;
}
