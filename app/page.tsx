import { notFound } from "next/navigation";
import ProductComponent from "./components/product-component";
import { ProductNode } from "./lib/interfaces/products.interface";
import shopifyClient from "./lib/shopify-queries/shopify";
import { GET_PRODUCTS_QUERY } from "./graphql/getAllProducts";

export default async function AllProductsPage() {
 const {data, errors } = await shopifyClient.request(GET_PRODUCTS_QUERY)
  const product:ProductNode = data.products

  if (errors) {
    notFound();
  }

  return <ProductComponent products={product} />;
}